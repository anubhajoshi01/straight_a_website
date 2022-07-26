const express = require('express')
const router = express.Router()
const {auth} = require('../middlewares/authMiddleware');

const {
    addForm,
    getForms,
    deleteForm,
    resolveForm
} = require('../controllers/formController')

router.post('/', addForm)
router.get('/', auth, getForms)
router.delete('/:id', auth, deleteForm)
router.put('/:id', auth, resolveForm)

module.exports = router