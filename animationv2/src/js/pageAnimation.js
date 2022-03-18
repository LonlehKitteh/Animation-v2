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
    duration: 1,
    type: "spring",
    ease: "anticipate"
}
const btnAnimation = {
    duration: .4,
    type: "spring",
    ease: "anticipate"
}

export { pageTransition, pageVariants, btnAnimation }