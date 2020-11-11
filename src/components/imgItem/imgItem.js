import React from 'react'
import { connect } from 'react-redux'
import WithImageService from '../hoc'
import {removeImageFromState} from '../../actions'

const ImgItem = ({id, label, url, removeImageFromState, ImageService}) => {

    return (
        <div className="image-item">
            <img src={url} />
            <div className="item__hover">
                <button className="btn btn-delete" onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) 
                ImageService.deleteItem(id)
                    .then(res => removeImageFromState(id))
                    .catch(err => console.log(err))
            }}>delete</button>
                <div className="item-label">{label}</div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    removeImageFromState
}

export default WithImageService()(connect(null, mapDispatchToProps)(ImgItem))