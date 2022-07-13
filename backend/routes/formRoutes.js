const express = require('express')
const router = express.Router()

const {
    addForm,
    getForms,
    deleteForm,
    resolveForm
} = require('../controllers/formController')

router.post('/', addForm)
router.get('/', getForms)
router.delete('/:id', deleteForm)
router.put('/:id', resolveForm)

module.exports = router