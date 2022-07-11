
const Blog = require('../models/blogModel')

//GET request
const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find()
        res.status(200).json(blogs);
    } catch (error) {
        console.log(error)
        res.status(400)
        throw new Error("couldn't find blogs")
    }

}

//POST request
const addBlog = async (req, res) => {
    try {
        const d = new Date();
        const { title, content, imageUrls, dateCreated } = req.body
        if (!title || !content) {
            res.status(400);
            throw new Error('plz add all required fields');
        }


        const blog = await Blog.create({
            title,
            content,
            imageUrls,
            dateCreated: d.toLocaleString(),
            dateModified: d.toLocaleString()
        })

        if (blog) {
            res.status(201).json({
                id: blog.id,
                title: blog.title,
                content: blog.content,
                dateCreated: blog.dateCreated,
                dateModified: blog.dateModified
            })
        }


    } catch (error) {
        console.log(error)
        res.status(400)
        throw new Error("couldn't add blog")
    }

}

//DELETE request
const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            res.status(400)
            throw new Error('blog not found')
        };

        await blog.remove();
        res.json(req.params.id);
    } catch (error) {
        console.log(error)
        res.status(400)
        throw new Error("couldn't delete blog")
    }

}

const updateBlog =  async (req, res) => {
    try {
        const date = new Date()
        const blog = Blog.findById(req.params.id)
        if(!blog){
            res.status(400)
            throw new Error('Blog not found')
        }
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
            dateCreated: blog.dateCreated,
            dateModified: date.toLocaleString()
        });
        res.json(updatedBlog);
    
    } catch (error) {
        console.log(error)
        res.status(400)
        throw new Error("couldn't update blog")
    }
}

module.exports = {
    getBlogs,
    addBlog,
    deleteBlog,
    updateBlog
}