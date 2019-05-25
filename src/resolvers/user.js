const posts = (parent, _, ctx) => ctx.prisma.user({ id: parent.id }).posts()

const comments = async (parent, _, ctx) => await ctx.prisma.user({ id: parent.id }).comments()

module.exports = {
    posts,
    comments
}