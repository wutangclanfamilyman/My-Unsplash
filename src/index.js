import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import ImageService from './services'
import App from './components/app'
import './index.scss'
import ImagesServiceContext from './components/imagesServiceContext'

const imageService = new ImageService()

render(
    <Provider store={store}>
        <ImagesServiceContext.Provider value={imageService}>
            <App/>
        </ImagesServiceContext.Provider>
    </Provider>,
    document.getElementById('app')
)