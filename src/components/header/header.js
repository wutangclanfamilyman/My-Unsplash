import React, { Component } from 'react'
import { connect } from 'react-redux'
import {openModal, filterImages} from '../../actions'
import Logo from '../../images/logo.png'

class Header extends Component {

    onChangeFilter = (e) => {
        const value = e.target.value
        this.props.filterImages(value)
    }

    render() {

        const {openModal} = this.props
        
        return (
            <header className="header">
                <div className="logo"> 
                    <img src={Logo} />
                    My Unsplash
                </div>
                <div className="search-form">
                    <input className="input-field validate" onChange={this.onChangeFilter} type="text" placeholder="Search by label..." />
                </div>
                <div className="add-form">
                    <button onClick={() => {openModal()}} className="btn btn-primary">Add a photo</button>
                </div>
            </header>
        )
    }
}

const mapDispatchToProps = {
    openModal,
    filterImages
}

export default connect(null, mapDispatchToProps)(Header)