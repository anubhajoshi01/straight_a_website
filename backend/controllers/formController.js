const Form = require('../models/formModel')

const addForm = async (req, res) => {
    try{
        const form = await Form.create({
            parentName: (req.body.parentName) ? req.body.parentName : "",
            studentName: (req.body.studentName) ? req.body.studentName : "",
            email: (req.body.email) ? req.body.email : "",
            phone: (req.body.phone) ? req.body.phone : "",
            grade: (req.body.grade) ? req.body.grade : "",
            school: (req.body.school) ? req.body.school : "",
            more: (req.body.more) ? req.body.more : "",
            resolved: (false)
        })

        res.status(200).json(form)
    }catch(e){
        console.log(e)
        res.status(400)
        throw new Error('Form could not be created')
    }
}

const getForms = async (req, res) => {
    try{
        const forms = await Form.find()
        res.status(200).json(forms)
    }
    catch(e){
        console.log(e)
        res.status(400)
        throw new Error('Forms could not be fetched')
    }
}

const deleteForm = async (req, res) => {
    
    try{
        const form = await Form.findById(req.params.id)

        
        if(!form){
            res.status(400)
            throw new Error('Form not found')
        }

        await form.remove()

        res.status(200).json({id : req.params.id})
    }catch(e){
        console.log(e)
    }

}

// Resolve form can only change one column, which is the boolean variable "resolved"
const resolveForm = async (req, res) => {
    try {
        const form = Form.findById(req.params.id)
        if(!form){
            res.status(400)
            throw new Error('form not found')
        }
        const resolvedForm = await Form.findByIdAndUpdate(req.params.id, req.body,{
            new: true
        });
        res.json(resolvedForm);
    
    } catch (error) {
        console.log(error)
        res.status(400)
        throw new Error("couldn't resolve form")
    }
}
module.exports = {
    addForm,
    getForms,
    deleteForm,
    resolveForm
}