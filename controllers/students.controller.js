import students from '../dummy/students';

exports.listUsers = (req, res) => {
  res.json({
    status: 200,
    message: 'List user route'
  });
}

exports.singleStudent = (req, res) => {
  const student = students.find(student => student.id === parseInt(req.params.id, 10));
  if(student) {
    res.status(200).json({
      status: 200,
      student,
      message: 'Student Found'
    });
  } else {
    res.status(404).json({
      status: 404,
      message: 'Student Not Found'
    });
  }
}