const author = (parent, _, ctx) => ctx.prisma.post({ id: parent.id }).author()

const comments = async (parent, _, ctx) => await ctx.prisma.post({ id: parent.id }).comments()

module.exports = {
    author,
    comments
}