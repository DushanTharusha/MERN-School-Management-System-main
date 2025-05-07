const client = require('prom-client');

// Create a Registry to register the metrics
const register = new client.Registry();
client.collectDefaultMetrics({ register });


// Define counters

// admin 
const adminLoginCounter = new client.Counter({
  name: 'admin_logins_total',
  help: 'Total number of admin logins',
});

const adminRegisterCounter = new client.Counter({
  name: 'admin_registrations_total',
  help: 'Total number of admin registrations',
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


// Register the metrics
//admin
register.registerMetric(adminLoginCounter);
register.registerMetric(adminRegisterCounter);

//students
register.registerMetric(studentRegisterRequests);
register.registerMetric(studentRegisterSuccess);
register.registerMetric(studentLoginRequests);
register.registerMetric(studentLoginSuccess);
register.registerMetric(getStudentsRequests);
register.registerMetric(deleteStudentRequests);
register.registerMetric(studentAttendanceRequests);
register.registerMetric(updateStudentRequests);
register.registerMetric(updateStudentSuccess);

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
  updateStudentSuccess
};
