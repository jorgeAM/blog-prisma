const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserId } = require('../utils/authentication')

const signUp = async (_, args, ctx) => {
    const password = await bcrypt.hash(args.password, 10)
    return ctx.prisma.createUser({ ...args, password })
}

const login = async (_, args, ctx) => {
    const user = await ctx.prisma.user({ email: args.email })
    if (!user)throw new Error('No such user found')
    const ok = await bcrypt.compare(args.password, user.password)
    if (!ok)throw new Error('Wrong password')
    const token = jwt.sign({ userId: user.id }, APP_SECRET)
    return { token, user }
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
    login,
    createDraft,
    publish,
}