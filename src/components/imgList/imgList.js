import React, {Component} from 'react' 
import { connect } from 'react-redux'
import {imagesLoaded} from '../../actions'
import WithImageService from '../hoc'
import ImgItem from '../imgItem'

class ImgList extends Component {

    componentDidMount() {
        const {ImageService} = this.props
        ImageService.getImages()
            .then(res => res.json())
            .then(response => this.props.imagesLoaded(response.data.getImages))
            .catch(err => console.log(err))
    }

    render() {

        const {images, filterKey} = this.props

        const newImages = images.filter(item => item.label.toLowerCase().indexOf(filterKey.toLowerCase()) > -1 )

        const imagesList = newImages.map(item => {
            return <ImgItem key={item.id} id={item.id} label={item.label} url={item.url} />
        })

        return (
            <div className="images-list">{imagesList}</div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        images: state.images,
        filterKey: state.filter
    }
}

const mapDispatchToProps = {
    imagesLoaded
}

export default WithImageService()(connect(mapStateToProps, mapDispatchToProps)(ImgList))