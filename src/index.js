const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/query')
const Mutation = require('./resolvers/mutation')
const User = require('./resolvers/user')
const Post = require('./resolvers/post')
const Comment = require('./resolvers/comment')

const resolvers = {
    Query, 
    Mutation,
    User,
    Post,
    Comment
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: req => {
        return {
            ...req,
            prisma,
        }
    }
})

server.start(() => console.log(`server is running on http://localhost:4000 🚀`))