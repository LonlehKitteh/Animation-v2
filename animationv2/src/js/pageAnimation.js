const pageVariants = {
    initial: {
        opacity: 0,
        x: "-100vw"
    },
    in: {
        opacity: 1,
        x: 0
    },
    out: {
        opacity: 0,
        x: "100vw"
    }
}
const pageTransition = {
    duration: .5,
    type: "spring",
    ease: "easeInOut"
}
export { pageTransition, pageVariants }