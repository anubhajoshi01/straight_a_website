const mongoose = require('mongoose')

const formSchema = mongoose.Schema(
    {
        parentName: {
            type: String,
        },
        studentName: {
            type: String,
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
        grade: {
            type: String
        },
        school: {
            type: String
        },
        more: {
            type: String
        },
        resolved: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Form', formSchema)