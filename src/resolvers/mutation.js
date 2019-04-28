const bcrypt = require('bcrypt');

const signUp = async (_, args, ctx) => {
    const password = await bcrypt.hash(args.password, 10)
    return ctx.prisma.createUser({ ...args, password })
}

const createDraft = (_, args, ctx) => {
    return ctx.prisma.createPost({
        title: args.title,
        author: {
            connect: {
                id: args.userId
            }
        },
    })
}

const publish = (_, args, ctx) => {
    return ctx.prisma.updatePost({
        where: { id: args.postId },
        data: { published: true },        
    })
}

module.exports = {
    signUp,
    createDraft,
    publish,
}