const express = require('express')
const router = express.Router()

const {
    addBlog,
    getBlogById,
    getBlogs,
    deleteBlog,
    updateBlog
} = require('../controllers/blogController')

const { auth } = require('../middlewares/authMiddleware')

router.get('/', getBlogs)
router.get('/:id', getBlogById)
router.post('/', auth, addBlog)
router.put('/:id', auth, updateBlog)
router.delete('/:id', auth, deleteBlog)


module.exports = router