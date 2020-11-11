const {buildSchema} = require('graphql')

module.exports = buildSchema(`
    type Image {
        id: ID!
        label: String!
        url: String!
        createdAt: String!
        updatedAt: String!
    }

    type Query {
        getImages: [Image!]!
    }

    input ImageInput {
        label: String!
        url: String!
    }

    type Mutation {
        createImage(image: ImageInput!): Image!
        deleteImage(id: ID!): Boolean!
    }
`)