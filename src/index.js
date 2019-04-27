const { GraphQLServer } = require('graphql-yoga')

const resolvers = {
    Query: {
        info: () => 'hola'
    }
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
})

server.start(() => console.log(`server is running on http://localhost:4000 🚀`))