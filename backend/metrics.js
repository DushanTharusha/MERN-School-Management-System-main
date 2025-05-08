const client = require('prom-client');

// Create a Registry to register the metrics
const register = new client.Registry();
client.collectDefaultMetrics({ register });

// Define counters

// Admin
const adminLoginCounter = new client.Counter({
  name: 'admin_logins_total',
  help: 'Total number of admin logins',
});

const adminRegisterCounter = new client.Counter({
  name: 'admin_registrations_total',
  help: 'Total number of admin registrations',
});

// Student
const studentRegisterRequests = new client.Counter({
  name: 'student_register_requests_total',
  help: 'Total number of student registration attempts'
});

const studentRegisterSuccess = new client.Counter({
  name: 'student_register_success_total',
  help: 'Total number of successful student registrations'
});

const studentLoginRequests = new client.Counter({
  name: 'student_login_requests_total',
  help: 'Total number of student login attempts'
});

const studentLoginSuccess = new client.Counter({
  name: 'student_login_success_total',
  help: 'Total number of successful student logins'
});

const getStudentsRequests = new client.Counter({
  name: 'get_students_requests_total',
  help: 'Total number of requests to fetch students list'
});

const deleteStudentRequests = new client.Counter({
  name: 'delete_student_requests_total',
  help: 'Total number of delete student requests'
});

const studentAttendanceRequests = new client.Counter({
  name: 'student_attendance_requests_total',
  help: 'Total number of requests for student attendance'
});

const updateStudentRequests = new client.Counter({
  name: 'update_student_requests_total',
  help: 'Total number of update student requests',
});

const updateStudentSuccess = new client.Counter({
  name: 'update_student_success_total',
  help: 'Total number of successful student updates',
});


// classes
const classCreateRequests = new client.Counter({
  name: 'class_create_requests_total',
  help: 'Total number of class creation attempts',
});

const classCreateSuccess = new client.Counter({
  name: 'class_create_success_total',
  help: 'Total number of successful class creations',
});

const classCreateFailures = new client.Counter({
  name: 'class_create_failures_total',
  help: 'Total number of failed class creation attempts',
});

const classListRequests = new client.Counter({
  name: 'class_list_requests_total',
  help: 'Total number of requests to list classes',
});

const classDetailRequests = new client.Counter({
  name: 'class_detail_requests_total',
  help: 'Total number of requests to retrieve class details',
});

const classStudentsRequests = new client.Counter({
  name: 'class_students_requests_total',
  help: 'Total number of requests to retrieve students of a class',
});

const classDeleteRequests = new client.Counter({
  name: 'class_delete_requests_total',
  help: 'Total number of class deletion attempts',
});

const classDeleteSuccess = new client.Counter({
  name: 'class_delete_success_total',
  help: 'Total number of successful class deletions',
});

const classDeleteFailures = new client.Counter({
  name: 'class_delete_failures_total',
  help: 'Total number of failed class deletion attempts',
});

const classesDeleteRequests = new client.Counter({
  name: 'classes_delete_requests_total',
  help: 'Total number of bulk class deletion attempts',
});

const classesDeleteSuccess = new client.Counter({
  name: 'classes_delete_success_total',
  help: 'Total number of successful bulk class deletions',
});

const classesDeleteFailures = new client.Counter({
  name: 'classes_delete_failures_total',
  help: 'Total number of failed bulk class deletion attempts',
});
// Teacher
const teacherRegisterRequests = new client.Counter({
  name: 'teacher_register_requests_total',
  help: 'Total number of teacher registration attempts'
});

const teacherRegisterSuccess = new client.Counter({
  name: 'teacher_register_success_total',
  help: 'Total number of successful teacher registrations'
});

const teacherLoginRequests = new client.Counter({
  name: 'teacher_login_requests_total',
  help: 'Total number of teacher login attempts'
});

const teacherLoginSuccess = new client.Counter({
  name: 'teacher_login_success_total',
  help: 'Total number of successful teacher logins'
});

const getTeachersRequests = new client.Counter({
  name: 'get_teachers_requests_total',
  help: 'Total number of requests to fetch teachers list'
});

const getTeacherDetailRequests = new client.Counter({
  name: 'get_teacher_detail_requests_total',
  help: 'Total number of requests to fetch teacher details'
});

const updateTeacherRequests = new client.Counter({
  name: 'update_teacher_requests_total',
  help: 'Total number of update teacher requests'
});

const deleteTeacherRequests = new client.Counter({
  name: 'delete_teacher_requests_total',
  help: 'Total number of delete teacher requests'
});

const teacherAttendanceRequests = new client.Counter({
  name: 'teacher_attendance_requests_total',
  help: 'Total number of requests for teacher attendance'
});

// Register the metrics
// Admin
register.registerMetric(adminLoginCounter);
register.registerMetric(adminRegisterCounter);

// Students
register.registerMetric(studentRegisterRequests);
register.registerMetric(studentRegisterSuccess);
register.registerMetric(studentLoginRequests);
register.registerMetric(studentLoginSuccess);
register.registerMetric(getStudentsRequests);
register.registerMetric(deleteStudentRequests);
register.registerMetric(studentAttendanceRequests);
register.registerMetric(updateStudentRequests);
register.registerMetric(updateStudentSuccess);

//classes
register.registerMetric(classCreateRequests);
register.registerMetric(classCreateSuccess);
register.registerMetric(classCreateFailures);
register.registerMetric(classListRequests);
register.registerMetric(classDetailRequests);
register.registerMetric(classStudentsRequests);
register.registerMetric(classDeleteRequests);
register.registerMetric(classDeleteSuccess);
register.registerMetric(classDeleteFailures);
register.registerMetric(classesDeleteRequests);
register.registerMetric(classesDeleteSuccess);
register.registerMetric(classesDeleteFailures);

// Teachers
register.registerMetric(teacherRegisterRequests);
register.registerMetric(teacherRegisterSuccess);
register.registerMetric(teacherLoginRequests);
register.registerMetric(teacherLoginSuccess);
register.registerMetric(getTeachersRequests);
register.registerMetric(getTeacherDetailRequests);
register.registerMetric(updateTeacherRequests);
register.registerMetric(deleteTeacherRequests);
register.registerMetric(teacherAttendanceRequests);

module.exports = {
  register,
  adminLoginCounter,
  adminRegisterCounter,
  studentRegisterRequests,
  studentRegisterSuccess,
  studentLoginRequests,
  studentLoginSuccess,
  getStudentsRequests,
  deleteStudentRequests,
  studentAttendanceRequests,
  updateStudentRequests,
  updateStudentSuccess,
  classCreateRequests,
  classCreateSuccess,
  classCreateFailures,
  classListRequests,
  classDetailRequests,
  classStudentsRequests,
  classDeleteRequests,
  classDeleteSuccess,
  classDeleteFailures,
  classesDeleteRequests,
  classesDeleteSuccess,
  classesDeleteFailures
  updateStudentSuccess,
  teacherRegisterRequests,
  teacherRegisterSuccess,
  teacherLoginRequests,
  teacherLoginSuccess,
  getTeachersRequests,
  getTeacherDetailRequests,
  updateTeacherRequests,
  deleteTeacherRequests,
  teacherAttendanceRequests
};
