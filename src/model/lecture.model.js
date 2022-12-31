const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({
    lecture_title: {type: String, required: true},
    lecture_teacher: {type: String, required: true},
    lecture_type: {type: String, required: true},
    video_type: {type: String, required: true},
    lecture_date : {type: String, required: true},
    lecture_time: {type: String, required: true},
}, {
    versionKey:false,
    timestamps: true
})

 
module.exports = mongoose.model("lecture", lectureSchema)  