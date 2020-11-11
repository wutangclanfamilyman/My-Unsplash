const imagesLoaded = (newImages) => {
    return {
        type: 'IMAGES_LOADED',
        payload: newImages
    }
}

const addImageToState = (item) => {
    return {
        type: 'ADD_IMAGE_TO_STATE',
        payload: item   
    }
}

const removeImageFromState = (id) => {
    return {
        type: "REMOVE_IMAGE_FROM_STATE",
        payload: id
    }
}

const filterImages = (char) => {
    return {
        type: "FILTER_IMAGES",
        payload: char
    }
}

const openModal = () => {
    return {
        type: "OPEN_MODAL"
    }
}

const closeModal = () => {
    return {
        type: "CLOSE_MODAL"
    }
}

const openConfirmModal = () => {
    return {
        type: "OPEN_CONFIRM_MODAL"
    }
}

const closeConfirmModal = () => {
    return {
        type: "CLOSE_CONFIRM_MODAL"
    }
}

export {
    addImageToState,
    removeImageFromState,
    openModal, 
    closeModal,
    filterImages,
    openConfirmModal,
    closeConfirmModal,
    imagesLoaded
}