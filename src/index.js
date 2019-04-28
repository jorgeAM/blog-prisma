const { GraphQLServer } = require('graphql-yoga')
const Query = require('./resolvers/query')
const Mutation = require('./resolvers/mutation')
const User = require('./resolvers/user')
const Post = require('./resolvers/post')

const resolvers = {
    Query, 
    Mutation,
    User,
    Post,
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
})

server.start(() => console.log(`server is running on http://localhost:4000 🚀`))