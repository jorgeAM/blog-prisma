const { rule, shield, and, or, not } = require('graphql-shield')
const { getUserId } = require('../utils/authentication')

// Rules
const isOwner = rule()(async (_, args, ctx) => {
    const userId = getUserId(ctx)
    const author = await ctx.prisma.post({ id: args.postId }).author()
    return author.id === userId
})

const permissions = shield({
    Mutation: {
        deletePost: isOwner
    }
})

module.exports = {
    permissions
}