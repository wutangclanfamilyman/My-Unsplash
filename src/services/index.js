export default class ImageServices {
    host = 'http://localhost:3001/graphql'

    getImages = async () => {
        const query = `
            query {
                getImages {
                    id, label, url
                }
            }
        `

        const request = await fetch(`${this.host}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({query})
        })
        if(request.status !== 200) {
            throw new Error(`Could not fetch ${url}, received ${request.status}`);
        }
        return await request
    }

    addImage = async ({label, url}) => {
        const query = `
            mutation {
                createImage(image: {label: "${label}", url: "${url}"}) {
                    id label url
                }
            }
        `

        const request = await fetch(`${this.host}`, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({query})
        })
        if(request.status !== 200) {
            throw new Error(`Could not fetch ${url}, received ${request.status}`);
        }
        return await request
    }

    deleteItem = async (id) => {
        const query = `
            mutation {
                deleteImage(id: "${id}")
            }
        `

        const request = await fetch(`${this.host}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({query})
        })
        if(request.status !== 200) {
            throw new Error(`Could not fetch ${url}, received ${request.status}`);
        }
        return await request.data
    }
}
