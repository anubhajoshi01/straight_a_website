const express = require('express')
const router = express.Router()

const {
    addBlog,
    getBlogs,
    deleteBlog,
    updateBlog
} = require('../controllers/blogController')

const { protect } = require('../middlewares/authMiddleware')

router.get('/', getBlogs)
router.post('/', protect, addBlog)
router.put('/:id', protect, updateBlog)
router.delete('/:id', protect, deleteBlog)


module.exports = router