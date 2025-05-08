const client = require('prom-client');

// Create a Registry to register the metrics
const register = new client.Registry();
client.collectDefaultMetrics({ register });

// ==============================
// Admin Metrics
// ==============================
const adminLoginCounter = new client.Counter({
  name: 'admin_logins_total',
  help: 'Total number of admin logins',
});

const adminRegisterCounter = new client.Counter({
  name: 'admin_registrations_total',
  help: 'Total number of admin registrations',
});


const adminRegistrationSuccess = new client.Counter({
  name: 'admin_registration_success_total',
  help: 'Total number of successful admin registrations',
});

const adminLoginSuccess = new client.Counter({
  name: 'admin_login_success_total',
  help: 'Total number of successful admin logins',
});

const adminDetailRequests = new client.Counter({
  name: 'admin_detail_requests_total',
  help: 'Total number of admin detail fetch requests',
});

// student
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

  const getStudentRequests = new client.Counter({
    name: 'get_astudent_requests_total',
    help: 'Total number of requests to fetch a student list'
  });
  
  const deleteStudentRequests = new client.Counter({
    name: 'delete_student_requests_total',
    help: 'Total number of delete student requests'
  });
  
  const studentAttendanceRequests = new client.Counter({
    name: 'student_attendance_requests_total',
    help: 'Total number of requests for student attendance'
  });

  const updateexamresultsRequests = new client.Counter({
    name: 'update_student_examresult_requests_total',
    help: 'Total number of update student exam result requests',
  });
  
  const updateStudentSuccess = new client.Counter({
    name: 'update_student_success_total',
    help: 'Total number of successful student updates',
  });


// Register the metrics
//admin
=======
// ==============================
// Student Metrics
// ==============================
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

// ==============================
// Subject Metrics
// ==============================

const subjectCreateRequests = new client.Counter({
  name: 'subject_create_requests_total',
  help: 'Total number of subject create requests',
  labelNames: ['sclassName'] // For creation by class
});

const subjectCreateSuccess = new client.Counter({
  name: 'subject_create_success_total',
  help: 'Number of successful subject creations'
});

const subjectCreatedTotal = new client.Counter({
  name: 'subject_created_total',
  help: 'Total number of individual subjects created'
});

const subjectCreateFailure = new client.Counter({
  name: 'subject_create_failure_total',
  help: 'Number of failed subject creations'
});

const subjectDuplicateSubCode = new client.Counter({
  name: 'subject_duplicate_subcode_total',
  help: 'Number of subject creation failures due to duplicate subCode'
});

const subjectValidationError = new client.Counter({
  name: 'subject_validation_error_total',
  help: 'Number of subject creation failures due to validation errors'
});

// ✅ Deletion Metrics
const subjectDeleteRequests = new client.Counter({
  name: 'subject_delete_requests_total',
  help: 'Total number of subject delete requests'
});

const subjectDeleteSuccess = new client.Counter({
  name: 'subject_delete_success_total',
  help: 'Total number of successful subject deletions'
});

const subjectDeleteFailures = new client.Counter({
  name: 'subject_delete_failures_total',
  help: 'Total number of failed subject deletions'
});

// ✅ Subject list endpoints
const getAllSubjects = new client.Counter({
  name: 'get_all_subjects_requests_total',
  help: 'Total get all subjects requests'
});

const getClassSubjects = new client.Counter({
  name: 'get_class_subjects_requests_total',
  help: 'Total get class subjects requests'
});

const getFreeSubjects = new client.Counter({
  name: 'get_free_subjects_requests_total',
  help: 'Total get free subjects requests'
});

const getSubjectDetail = new client.Counter({
  name: 'get_subject_detail_requests_total',
  help: 'Total get subject detail requests'
});

const subjectOperationErrors = new client.Counter({
  name: 'subject_operation_errors_total',
  help: 'Total number of subject-related operation errors'
});

const subjectRequestDuration = new client.Histogram({
  name: 'subject_request_duration_seconds',
  help: 'Duration of subject-related requests in seconds',
  labelNames: ['operation'],
  buckets: [0.1, 0.5, 1, 2, 5]
});

const subjectTotalActive = new client.Gauge({
  name: 'subject_total_active',
  help: 'Current total number of active subjects'
});

const subjectAssigned = new client.Gauge({
  name: 'subject_assigned_total',
  help: 'Current number of subjects with assigned teachers'
});

const subjectUnassigned = new client.Gauge({
  name: 'subject_unassigned_total',
  help: 'Current number of unassigned subjects'
});

// ==============================
// Register All Metrics
// ==============================

// Admin

register.registerMetric(adminLoginCounter);
register.registerMetric(adminRegisterCounter);
register.registerMetric(adminRegistrationSuccess);
register.registerMetric(adminLoginSuccess);
register.registerMetric(adminDetailRequests);

// Students
register.registerMetric(studentRegisterRequests);
register.registerMetric(studentRegisterSuccess);
register.registerMetric(studentLoginRequests);
register.registerMetric(studentLoginSuccess);
register.registerMetric(getStudentsRequests);
register.registerMetric(getStudentRequests);
register.registerMetric(deleteStudentRequests);
register.registerMetric(studentAttendanceRequests);
register.registerMetric(updateexamresultsRequests);
register.registerMetric(updateStudentSuccess);

// Subjects
register.registerMetric(subjectCreateRequests);
register.registerMetric(subjectCreateSuccess);
register.registerMetric(subjectCreatedTotal); 
register.registerMetric(subjectCreateFailure);
register.registerMetric(subjectDuplicateSubCode);
register.registerMetric(subjectValidationError); 
register.registerMetric(subjectDeleteRequests);
register.registerMetric(subjectDeleteSuccess);
register.registerMetric(subjectDeleteFailures);
register.registerMetric(getAllSubjects);
register.registerMetric(getClassSubjects);
register.registerMetric(getFreeSubjects);
register.registerMetric(getSubjectDetail);
register.registerMetric(subjectOperationErrors);
register.registerMetric(subjectRequestDuration);
register.registerMetric(subjectTotalActive);
register.registerMetric(subjectAssigned);
register.registerMetric(subjectUnassigned);

// ==============================
// Exports
// ==============================
module.exports = {
  register,
  // Admin
  adminLoginCounter,
  adminRegisterCounter,

  adminRegistrationSuccess,
  adminLoginSuccess,
  adminDetailRequests,
=======
  // Student

  studentRegisterRequests,
  studentRegisterSuccess,
  studentLoginRequests,
  studentLoginSuccess,
  getStudentsRequests,
  getStudentRequests,
  deleteStudentRequests,
  studentAttendanceRequests,

  updateexamresultsRequests,
  updateStudentSuccess
=======
  updateStudentRequests,
  updateStudentSuccess,
  // Subject
  subjectCreateRequests,
  subjectCreateSuccess,
  subjectCreatedTotal,
  subjectCreateFailure,
  subjectDuplicateSubCode,
  subjectValidationError,
  subjectDeleteRequests,
  subjectDeleteSuccess,
  subjectDeleteFailures,
  getAllSubjects,
  getClassSubjects,
  getFreeSubjects,
  getSubjectDetail,
  subjectOperationErrors,
  subjectValidationError, 
  subjectRequestDuration,
  subjectTotalActive,
  subjectAssigned,
  subjectUnassigned

};
