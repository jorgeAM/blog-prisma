const post = (parent, _, ctx) => ctx.prisma.comment({ id: parent.id }).post()

const writtenBy = async (parent, _, ctx) => await ctx.prisma.comment({ id: parent.id }).writtenBy()

module.exports = {
    post,
    writtenBy
}