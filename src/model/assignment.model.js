const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
    assignment_title: {type: String, required: true},
    assignment_teacher: {type: String, required: true},
    assignment_problem: {type: String, required: true},
    assignment_type: {type: String, required: true},
    assignment_date : {type: String, required: true},
    assignment_time: {type: String, required: true},
}, {
    versionKey:false,
    timestamps: true
})

 
module.exports = mongoose.model("assignment", assignmentSchema)  