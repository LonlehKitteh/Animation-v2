const pageVariants = {
    initial: {
        opacity: 0
    },
    in: {
        opacity: 1
    },
    out: {
        opacity: 0
    }
}
const pageTransition = {
    duration: .5,
    type: "spring",
    ease: "easeInOut"
}
const btnAnimation = {
    duration: .4,
    type: "spring",
    ease: "anticipate"
}

export { pageTransition, pageVariants, btnAnimation }