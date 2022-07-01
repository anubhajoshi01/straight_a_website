const express = require('express')
const router = express.Router()

const {
    addForm,
    getForms,
    deleteForm
} = require('../controllers/formController')

router.post('/', addForm)
router.get('/', getForms)
router.delete('/:id', deleteForm)

module.exports = router