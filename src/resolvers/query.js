const publishedPost = (_, args, ctx) => ctx.prisma.posts({ where: { published: true } })

const post = (_, args, ctx) => ctx.prisma.post({ id: args.id })

const postsByUser = (_, args, ctx) => {
    return ctx.prisma.posts({ where: { author: { id: args.userId } }})
}

module.exports = {
    publishedPost,
    post,
    postsByUser,
}