const {Router} = require('express')
const Image = require('../models/image')
const router = Router()

router.get('/', async (req, res) => {
    try {
        res.header('Access-Control-Allow-Origin', "*")
        res.header('Access-Control-Allow-Headers', "*")
        const images = await Image.findAll()
        res.status(200).json(images)
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error'
        })
    }
 })

 router.post('/', async (req, res) => {
    try {
        const image = await Image.create({
            label: req.body.label,
            url: req.body.url
        })
        res.status(201).json({image})
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error'
        })
    }
 })

 router.delete('/:id', async (req, res) => {
    try {
        const image = await Image.findByPk(+req.params.id)
        await image.destroy()
        res.status(200).json({image})
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Server error'
        })
    }
 })

module.exports = router