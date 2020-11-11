import React from 'react'
import Header from '../header'
import Grid from '../grid'
import AddImage from '../addImage'
import {Container} from '@material-ui/core'

const App = () => {
    return (
        <Container>
            <Header />
            <Grid />
            <AddImage />
        </Container>
    )
}

export default App