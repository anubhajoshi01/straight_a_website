const mongoose = require('mongoose')

const blogSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'please add a title'],
            unique: true
        },
        content: {
            type: String,
            required: [true, 'please add content']
        },
        chineseTitle: {
            type: String,
        },
        chineseContent: {
            type:String,
        },
        imageUrls: {
            type: String,
        },
        dateCreated: {
            type: String,
            required: true
        },
        dateModified: {
            type:String,
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Blog', blogSchema)