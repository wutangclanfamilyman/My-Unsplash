import React, { Component } from 'react'
import {addImageToState, closeModal} from '../../actions'
import WithImageService from '../hoc'
import {connect} from 'react-redux'

class AddImage extends Component {
    state = {
        label: '',
        url: ''
    }

    onAddItem = async () => {
        const image = {
            label: this.state.label,
            url: this.state.url
        }
        //await this.props.addImageToState(image)
        const {ImageService} = this.props

        ImageService.addImage(image)
            .then(res => res.json())
            .then(response => this.props.addImageToState(response.data.createImage))
            .catch(err => console.log(err))

        this.setState({
            label: '',
            url: ''
        })

        this.onCloseModal()
    }

    onChangeLabel = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onChangeUrl = (e) => {
        this.setState({
            url: e.target.value
        })
    }

    onCloseModal = () => {
        this.props.closeModal()
    }

    render() {

        const {label, url} = this.state

        const {showModal} = this.props

        if(!showModal) {
            return ''
        }

        return (
            <div className="overlay">
                <div className="modal-popup">
                    <div className="modal-header">
                        Add new photo
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="label" type="text" placeholder="Label" onChange={this.onChangeLabel} value={label} className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                            <input id="url" type="text" placeholder="URL" value={url} onChange={this.onChangeUrl} className="validate" />
                            </div>
                        </div>
                        <div className="row modal-buttons">
                            <button onClick={this.onCloseModal} className="btn grey">Cancel</button>
                            <button onClick={this.onAddItem} className="btn btn-primary">Add Image</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showModal: state.showModal
    }
}

const mapDispatchToProps = {
    addImageToState,
    closeModal
}

export default WithImageService()(connect(mapStateToProps, mapDispatchToProps)(AddImage))