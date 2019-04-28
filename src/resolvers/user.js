const posts = (parent, _, ctx) => ctx.prisma.user({ id: parent.id }).posts()

module.exports = {
    posts,
}