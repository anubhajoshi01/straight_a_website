
const Blog = require('../models/blogModel')

//GET request
const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find()
       // console.log(blogs)
        res.status(200).json(blogs);
    } catch (error) {
        console.log(error)
        res.status(400)
        throw new Error("couldn't find blogs")
    }

}

const getBlogById = async (req, res) => {
    try{
        const blog = await Blog.findById(req.params.id)
        res.status(200).json(blog);
    }catch(error){
        console.log(error)
        res.status(200)
        throw new Error(`could not find blog with id ${req.params.id}`)
    }
}

//POST request
const addBlog = async (req, res) => {
    try {
        const d = new Date();
        const { title, content, imageUrls, chineseTitle, chineseContent } = req.body
        if (!title || !content) {
            res.status(400);
            throw new Error('please add all required fields');
        }


        const blog = await Blog.create({
            title,
            content,
            chineseTitle,
            chineseContent,
            imageUrls,
            dateCreated: d.toLocaleString(),
            dateModified: d.toLocaleString()
        })

        if (blog) {
            res.status(201).json({
                id: blog.id,
                title: blog.title,
                content: blog.content,
                chineseTitle:blog.chineseTitle,
                chineseContent:blog.chineseContent,
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
        const blog = await Blog.findById(req.params.id)
        console.log(`id is ${req.params.id}`)
        console.log(`found is ${blog}`)
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
    getBlogById,
    addBlog,
    deleteBlog,
    updateBlog
}