import React from 'react'
import ImagesServiceContext from '../imagesServiceContext'

const WithImageService = () => (Wrapped) => {
    return (props) => {
        return (
            <ImagesServiceContext.Consumer>
                {
                    (imageService) => {
                        return <Wrapped {...props} ImageService={imageService} />
                    }
                }
            </ImagesServiceContext.Consumer>
        )
    }
}

export default WithImageService