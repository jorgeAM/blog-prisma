const author = (parent, _, ctx) => ctx.prisma.post({ id: parent.id }).author()

module.exports = {
    author,
}