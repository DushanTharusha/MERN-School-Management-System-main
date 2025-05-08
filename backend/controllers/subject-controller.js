const Subject = require('../models/subjectSchema.js');
const Teacher = require('../models/teacherSchema.js');
const Student = require('../models/studentSchema.js');

// import Prometheus metrics
const {
    subjectCreateRequests,
    subjectCreateSuccess,
    subjectCreateFailure,
    subjectDuplicateSubCode,
    subjectRequestDuration,
    subjectTotalActive,
    subjectAssigned,
    subjectUnassigned
  } = require('../metrics/subjectMetrics');
  
const subjectCreate = async (req, res) => {
    subjectCreateRequests.inc(); // metric: count every create request
    const end = subjectRequestDuration.startTimer({ operation: 'create' }); // metric: track duration
  
    try {
      const subjects = req.body.subjects.map((subject) => ({
        subName: subject.subName,
        subCode: subject.subCode,
        sessions: subject.sessions,
      }));
  
      const existingSubjectBySubCode = await Subject.findOne({
        'subjects.subCode': subjects[0].subCode,
        school: req.body.adminID,
      });
  
      if (existingSubjectBySubCode) {
        subjectDuplicateSubCode.inc(); // metric: duplicate detected
        subjectCreateFailure.inc();    // metric: failed create
        end(); // stop timer
        return res.send({ message: 'Sorry this subcode must be unique as it already exists' });
      }
  
      const newSubjects = subjects.map((subject) => ({
        ...subject,
        sclassName: req.body.sclassName,
        school: req.body.adminID,
      }));
  
      const result = await Subject.insertMany(newSubjects);
  
      subjectCreateSuccess.inc();     // metric: successful create
      await updateSubjectGauges();    // metric: update total/assigned/unassigned
      end(); // stop timer
      res.send(result);
    } catch (err) {
      subjectCreateFailure.inc();     // metric: failed due to exception
      end(); // stop timer
      res.status(500).json(err);
    }
  };
  
const allSubjects = async (req, res) => {
    try {
        let subjects = await Subject.find({ school: req.params.id })
            .populate("sclassName", "sclassName")
        if (subjects.length > 0) {
            res.send(subjects)
        } else {
            res.send({ message: "No subjects found" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

const classSubjects = async (req, res) => {
    try {
        let subjects = await Subject.find({ sclassName: req.params.id })
        if (subjects.length > 0) {
            res.send(subjects)
        } else {
            res.send({ message: "No subjects found" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

const freeSubjectList = async (req, res) => {
    try {
        let subjects = await Subject.find({ sclassName: req.params.id, teacher: { $exists: false } });
        if (subjects.length > 0) {
            res.send(subjects);
        } else {
            res.send({ message: "No subjects found" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

const getSubjectDetail = async (req, res) => {
    try {
        let subject = await Subject.findById(req.params.id);
        if (subject) {
            subject = await subject.populate("sclassName", "sclassName")
            subject = await subject.populate("teacher", "name")
            res.send(subject);
        }
        else {
            res.send({ message: "No subject found" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
}

const deleteSubject = async (req, res) => {
    try {
        const deletedSubject = await Subject.findByIdAndDelete(req.params.id);

        // Set the teachSubject field to null in teachers
        await Teacher.updateOne(
            { teachSubject: deletedSubject._id },
            { $unset: { teachSubject: "" }, $unset: { teachSubject: null } }
        );

        // Remove the objects containing the deleted subject from students' examResult array
        await Student.updateMany(
            {},
            { $pull: { examResult: { subName: deletedSubject._id } } }
        );

        // Remove the objects containing the deleted subject from students' attendance array
        await Student.updateMany(
            {},
            { $pull: { attendance: { subName: deletedSubject._id } } }
        );

        res.send(deletedSubject);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteSubjects = async (req, res) => {
    try {
        const deletedSubjects = await Subject.deleteMany({ school: req.params.id });

        // Set the teachSubject field to null in teachers
        await Teacher.updateMany(
            { teachSubject: { $in: deletedSubjects.map(subject => subject._id) } },
            { $unset: { teachSubject: "" }, $unset: { teachSubject: null } }
        );

        // Set examResult and attendance to null in all students
        await Student.updateMany(
            {},
            { $set: { examResult: null, attendance: null } }
        );

        res.send(deletedSubjects);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteSubjectsByClass = async (req, res) => {
    try {
        const deletedSubjects = await Subject.deleteMany({ sclassName: req.params.id });

        // Set the teachSubject field to null in teachers
        await Teacher.updateMany(
            { teachSubject: { $in: deletedSubjects.map(subject => subject._id) } },
            { $unset: { teachSubject: "" }, $unset: { teachSubject: null } }
        );

        // Set examResult and attendance to null in all students
        await Student.updateMany(
            {},
            { $set: { examResult: null, attendance: null } }
        );

        res.send(deletedSubjects);
    } catch (error) {
        res.status(500).json(error);
    }
};

const updateSubjectGauges = async () => {
    const total = await Subject.countDocuments();
    const assigned = await Subject.countDocuments({ teacher: { $exists: true } });
    const unassigned = total - assigned;
  
    subjectTotalActive.set(total);
    subjectAssigned.set(assigned);
    subjectUnassigned.set(unassigned);
  };

module.exports = { subjectCreate, freeSubjectList, classSubjects, getSubjectDetail, deleteSubjectsByClass, deleteSubjects, deleteSubject, allSubjects };