const svg = document.getElementById('svg')
const circleHTML = document.getElementById("html")
const circleCSS = document.getElementById("css")

class Circle{
    constructor(element){
        this.obj = document.querySelectorAll(element)
    }
    setSize(size){

        svg.style.width = size + "px"
        svg.style.height = size + "px"
        svg.style.strokeWidth = 10
    
        this.obj.forEach(element => {
            element.style.strokeDasharray = size * 3
            element.style.setProperty("--offset",size * 3)
            setTimeout(() => {
                element.style.transition = "stroke-dashoffset 2s ease-in-out"
                element.style.setProperty("--offset",0)
            }, 100);
        })
    }
    drawCircle(size,name){
        name.setAttribute("cx",size / 2)
        name.setAttribute("cy",size / 2)
        name.setAttribute("r",size / 2 - size / 20)
    }
}
const pieces = new Circle("circle")

pieces.setSize(300)
pieces.drawCircle(200, circleHTML)
pieces.drawCircle(300, circleCSS)