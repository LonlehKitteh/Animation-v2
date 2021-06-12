const pageVariants = {
    initial: {
        opacity: 0,
        x: "-100vw",
    },
    in: {
        opacity: 1,
        x: 0,
    },
    out: {
        opacity: 0,
        x: "100vw",
    }
}
const pageTransition = {
    duration: 0.5,
    type: "tween",
    ease: "anticipate"
}
export { pageTransition, pageVariants }