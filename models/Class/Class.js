var mongoose = require("mongoose");

var classSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    academicYear: {
        type: String,
        required: true
    },
    nameInWords: {
        type: String,
        required: true
    },
    timeTable: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Time Table"
    },
    teachersTeachingInThisClass: [
        {
            subject: String,
            teacherId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Teacher"
            }
        }
    ],
    totalStudents: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Class", classSchema);
