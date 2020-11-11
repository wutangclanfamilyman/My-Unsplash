const express = require('express')
const app = express()
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const bodyParser = require('body-parser')
const schema = require('./graphql/schema')
const resolver = require('./graphql/resolver')
const sequelize = require('./utils/database')
const imagesRoutes = require('./routes/images')
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/api/images', imagesRoutes)
app.use(graphqlHTTP({
    schema: schema,
    rootValue: resolver
}))

async function start() {
    try {
        await sequelize.sync()
        app.listen(PORT)
    }
    catch (e) {
        console.log(e);
    }
}

start()