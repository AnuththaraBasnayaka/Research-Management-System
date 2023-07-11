
const Student = require('../models/student.model');

const signUpStudent = (req, res)=> {
    const fullname = req.body.fullname;
    const Email = req.body.Email;
    const password = req.body.password;
    const pnum = req.body.pnum;

    const newStudent = new Student({
        fullname,
        pnum,
        Email,
        password
    });

    newStudent.save().then((Student) => {
        res.json(Student);
    }).catch((err) => {
        res.json(err);
    })

}

const getAllStudents = (req, res) => {
    Student.find().then((Student) => {
        res.json(Student);
    }).catch((err) => {
        res.json(err);
    })
}

const deleteStudent = (req, res) => {
    Student.findByIdAndDelete(req.params.id)
        .then(() => res.json('Request Deleted.'))
        .catch(err => res.status(400).json('Error : ' + err));
}

const getStudentById = (req, res) => {
    Student.findById(req.params.id)
        .then((Student) => res.json(Student))
        .catch(err => res.json(err))
}

const updateStudent = (req, res) => {

    Student.findByIdAndUpdate(req.params.id, {$set:{password:req.body.password, pnum:req.body.pnum, Email:req.body.Email}})
        .then(() => res.json('Good'))
        .catch(err => res.status(400).json('Error : ' +err));
}

const checkLoginStudent = (req, res) => {
    const logemail = req.body.logemail;
    const logpwd = req.body.logpwd;

    Student.find({Email:logemail}).then((Student) => {
        if((!Student[0]) || (Student[0].password != logpwd)) {
            res.json('Invalid Username or Password');
        }
        else {
            res.json('Login Successfull');
        }
    }).catch((err) => {
        res.json(err);
    })

}

module.exports ={
    signUpStudent,
    getAllStudents,
    deleteStudent,
    getStudentById,
    updateStudent,
    checkLoginStudent
}