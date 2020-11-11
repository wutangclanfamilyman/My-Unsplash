const initialState = {
    images: [],
    filter: '',
    showModal: false,
    confirmModal: false,
    password: 'password'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IMAGES_LOADED':
            return {
                ...state,
                images: action.payload
            }
        case 'ADD_IMAGE_TO_STATE':
            const images = [
                ...state.images,
                action.payload
            ]
            console.log(images);
            return {
                ...state,
                images: images
            };
        case 'REMOVE_IMAGE_FROM_STATE':
            const idx = action.payload
            const itemIdx = state.images.findIndex(img => img.id === idx)
            return {
                ...state,
                images: [
                    ...state.images.slice(0, itemIdx),
                    ...state.images.slice(itemIdx + 1)
                ]
            };
        case 'FILTER_IMAGES':
            const char = action.payload
            return {
                ...state,
                filter: char
            };
        case 'OPEN_MODAL':
            return {
                ...state,
                showModal: true
            };
        case 'CLOSE_MODAL': 
            return {
                ...state,
                showModal: false
            };
        case 'OPEN_CONFIRM_MODAL':
            return {
                ...state,
                confirmModal: true
            };
        case 'CLOSE_CONFIRM_MODAL': 
            return {
                ...state,
                confirmModal: false
            };
        default:
            return {
                ...state
            }
    }
}

export default reducer