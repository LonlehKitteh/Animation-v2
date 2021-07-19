export function scrolllingAnchor(offsetArray) {
    function borderColor(element) {
        var randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
        if (element.style.borderLeftColor === '') {
            element.style.borderLeftColor = randomColor
            element.style.color = randomColor
        } else {
            setTimeout(() => {
                element.style.borderLeftColor = ''
                element.style.color = 'black'
            }, 800)
        }
    }

    window.addEventListener("scroll", () => {

        var scrollPosition = document.body.scrollTop || document.documentElement.scrollTop
        offsetArray.current.forEach((element, counter) => {
            if (document.getElementById(`l${counter}`) === null) return
            if (element - 50 <= scrollPosition && offsetArray.current[counter + 1] - 50 >= scrollPosition) {
                document.getElementById(`l${counter}`).classList.add("active")
                borderColor(document.getElementById(`l${counter}`))
            } else if (scrollPosition >= offsetArray.current[offsetArray.current.length - 1] - 50) {
                document.getElementById(`l${offsetArray.current.length - 2}`).classList.remove("active")
                document.getElementById(`l${offsetArray.current.length - 1}`).classList.add("active")
                borderColor(document.getElementById(`l${offsetArray.current.length - 1}`))
            } else {
                document.getElementById(`l${counter}`).classList.remove("active")
            }
        })
    })
}