const Image = require('../models/image')

module.exports = {
    async getImages() {
        try {
            return await Image.findAll()
        } catch (e) {
            console.log(e);
        }
    },
    async createImage({image}) {
        try {
            return await Image.create({
                label: image.label,
                url: image.url
            })
        } catch (e) {
            console.log(e)
        }
    },
    async deleteImage({id}) {
        try {
            const images = await Image.findAll({
                where: {id}
            })
            await images[0].destroy()
            return true
        } catch (e) {
            console.log(e);
            return false
        }
    }
}