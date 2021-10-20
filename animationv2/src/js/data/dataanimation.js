export const defaultDuration = '4s'
export const defaultIteration = 'infinite'

export var animations = [
    {
        animationName: 'none',
        value: 'animation-name: none'
    },
    {
        animationName: 'move',
        animationPlayState: 'paused',
        value: 'animation-name: move'
    },
    {
        animationName: 'move, color',
        animationPlayState: 'paused',
        value: 'animation-name: move, color'
    },
    "", "", "", "",
    {
        animationDuration: '2s',
        animationPlayState: 'paused',
        value: 'animation-duration: 2s'
    },
    {
        animationDuration: '2s, 4s',
        animationName: 'move, color',
        animationPlayState: 'paused',
        value: 'animation-duration: 2s, 4s'
    },
    "", "", "", "",
    {
        animationTimingFunction: 'ease',
        animationPlayState: 'paused',
        value: 'animation-timing-function: ease'
    },
    {
        animationTimingFunction: 'ease-in',
        animationPlayState: 'paused',
        value: 'animation-timing-function: ease-in'
    },
    {
        animationTimingFunction: 'ease-out',
        animationPlayState: 'paused',
        value: 'animation-timing-function: ease-out'
    },
    {
        animationTimingFunction: 'ease-in-out',
        animationPlayState: 'paused',
        value: 'animation-timing-function: ease-in-out'
    },
    {
        animationTimingFunction: 'linear',
        animationPlayState: 'paused',
        value: 'animation-timing-function: linear'
    },
    {
        animationTimingFunction: 'step-start',
        animationPlayState: 'paused',
        value: 'animation-timing-function: step-start'
    },
    {
        animationTimingFunction: 'step-end',
        animationPlayState: 'paused',
        value: 'animation-timing-function: step-end'
    },
    {
        animationTimingFunction: 'steps(10)',
        animationPlayState: 'paused',
        value: 'animation-timing-function: steps(10)'
    },
    {
        animationTimingFunction: 'cubic-bezier(.1,.75,.51,-0.01)',
        animationPlayState: 'paused',
        value: 'animation-timing-function: cubic-bezier(.1,.75,.51,-0.01)'
    },
    {
        animationName: 'move, color',
        animationPlayState: 'paused',
        animationTimingFunction: 'steps(5), ease-in-out',
        value: 'animation-timing-function: steps(5), ease-in-out'
    },
    "", "", "", "", "",
    {
        animationDelay: '2s',
        animationPlayState: 'paused',
        value: 'animation-delay: 2s'
    },
    {
        animationDelay: '5s, 1s',
        animationPlayState: 'paused',
        animationName: 'move, color',
        value: 'animation-delay: 5s, 1s'
    },
    "", "", "", "",
    {
        animationIterationCount: '3',
        animationPlayState: 'paused',
        value: 'animation-iteration-count: 3'
    },
    {
        animationIterationCount: 'infinite',
        animationPlayState: 'paused',
        value: 'animation-iteration-count: infinite'
    },
    {
        animationIterationCount: '5, infinite',
        animationPlayState: 'paused',
        animationName: 'move, color',
        value: 'animation-iteration-count: 5, infinite'
    },
    "", "", "", "",
    {
        animationDirection: 'normal',
        animationPlayState: 'paused',
        animationName: 'move2',
        animationDuration: '2s',
        value: 'animation-direction: normal'
    },
    {
        animationDirection: 'reverse',
        animationPlayState: 'paused',
        animationName: 'move2',
        animationDuration: '2s',
        value: 'animation-direction: reverse'
    },
    {
        animationDirection: 'alternate',
        animationPlayState: 'paused',
        animationName: 'move2',
        animationDuration: '2s',
        value: 'animation-direction: alternate'
    },
    {
        animationDirection: 'alternate-reverse',
        animationPlayState: 'paused',
        animationName: 'move2',
        animationDuration: '2s',
        value: 'animation-direction: alternate-reverse'
    },
    {
        animationDirection: 'alternate, reverse',
        animationPlayState: 'paused',
        animationName: 'move2, color2',
        animationDuration: '2s',
        value: 'animation-direction: alternate, reverse'
    },
    "", "", "", "",
    {
        animationFillMode: 'none',
        animationName: "color2",
        animationIterationCount: '3',
        animationDelay: '1s',
        animationPlayState: 'paused',
        value: 'animation-fill-mode: none'
    },
    {
        animationFillMode: 'backwards',
        animationName: "color2",
        animationIterationCount: '3',
        animationDelay: '1s',
        animationPlayState: 'paused',
        value: 'animation-fill-mode: backwards'
    },
    {
        animationFillMode: 'forwards',
        animationName: "color2",
        animationIterationCount: '3',
        animationDelay: '1s',
        animationPlayState: 'paused',
        value: 'animation-fill-mode: forwards'
    },
    {
        animationFillMode: 'both',
        animationName: "color2",
        animationDelay: '1s',
        animationIterationCount: '3',
        animationPlayState: 'paused',
        value: 'animation-fill-mode: both'
    },
    {
        animationFillMode: 'none, both',
        animationName: "move, color2",
        animationIterationCount: '3',
        animationDelay: '1s',
        animationPlayState: 'paused',
        value: 'animation-fill-mode: none, both'
    },
    "", "", "", "",
    {
        value: 'animation-play-state: running'
    },
    {
        value: 'animation-play-state: paused'
    },
    {
        animationName: 'move, color',
        value: 'animation-play-state: running, paused'
    },
    "", "", "", "",
    {
        animation: "move 8s ease-in 3s infinite alternate none running",
        value: 'animation: move 8s ease-in 3s infinite alternate none running'
    },
    {
        animation: 'move2 3s linear infinite reverse, color2 2s ease-in 4s 5 both',
        value: 'animation: move 3s linear infinite reverse, color 2s ease-in 4s 5 both',
    }
]

export function code(move, color, name, value, type, animationName, animationNameValue, animationDuration, animationDurationValue, animationIterationCount, animationIterationCountValue) {
    return `<span class="css-selector">div</span>{
        <span class="css-property">width</span>: <span class="css-number">196px</span>;
        <span class="css-property">height</span>: <span class="css-number">96px</span>;
        <span class="css-property">padding</span>: <span class="css-number">16px</span>;
        <span class="css-property">font-size</span>: <span class="css-number">1.2rem</span>;
        <span class="css-property">background-color</span>: <span class="css-value">blue</span>;
        <span class="important"><span class="css-property">${name}</span>: <span class="css-${type}">${value}</span>;</span>${(animationIterationCount) ? `<br />        <span class="css-property">animation-iteration-count</span>: <span class="css-number">${animationIterationCountValue}</span>;` : ``}${(animationDuration) ? `<br />        <span class="css-property">animation-duration</span>: <span class="css-number">${animationDurationValue}</span>;` : ``}${(animationName) ? `<br />        <span class="css-property">animation-name</span>: <span class="css-value">${animationNameValue}</span>;<br />    }` : `<br />    }`}     

    ${(move === 'move') ? `<span class="css-selector">@keyframes</span> move {
        <span class="css-selector">from, to</span>{
            <span class="css-property">transform</span>: <span class="css-value">translateX(<span class="css-number">0</span>)</span>;
        } <span class="css-selector">50%</span>{
            <span class="css-property">transform</span>: <span class="css-value">translateX(<span class="css-number">300px</span>)</span>;
        }<br />    }` : (move === 'move2') ? `<span class="css-selector">@keyframes</span> move {
        <span class="css-selector">from</span>{
            <span class="css-property">transform</span>: <span class="css-value">translateX(<span class="css-number">0</span>)</span>;
        } <span class="css-selector">to</span>{
            <span class="css-property">transform</span>: <span class="css-value">translateX(<span class="css-number">300px</span>)</span>;
        }<br />    }` : ``}${(color === 'color') ? `
    <span class="css-selector">@keyframes</span> color {
        <span class="css-selector">from, to</span>{
            <span class="css-property">background</span>: <span class="css-value">blue</span>;
        } <span class="css-selector">50%</span>{
            <span class="css-property">background</span>: <span class="css-value">orange</span>;
        }
    }` : (color === 'color2') ? `
    <span class="css-selector">@keyframes</span> color {
        <span class="css-selector">from</span>{
            <span class="css-property">background</span>: <span class="css-value">coral</span>;
        } <span class="css-selector">25%</span>{
            <span class="css-property">background</span>: <span class="css-value">blue</span>;
        } <span class="css-selector">50%</span>{
            <span class="css-property">background</span>: <span class="css-value">pink</span>;
        } <span class="css-selector">to</span>{
            <span class="css-property">background</span>: <span class="css-value">green</span>;
        }
    }
        ` : ``
        }`
}
export function copy(bonusElement, animationNameValue, animationDurationValue, animationIteration, seqeunce, color = false, custom = false, customValue){
    return `div{
    width: 196px;
    height: 96px;
    padding: 16px;
    font-size: 1.2rem;
    background-color: blue;
    ${bonusElement};${animationNameValue ? `\n    ${animationNameValue};` : ``}${animationDurationValue ? `\n    ${animationDurationValue};` : ``}${animationIteration ? `\n    ${animationIteration};` : ``}
}${custom ? `\n${customValue}` : 
`${color ? `\n@keyframes color {
    from{
        background: coral;
    } 25%{
        background: blue;
    } 50%{
        background: pink;
    } to{
        background: green;
    }\n}` : `\n@keyframes move {
    from, to{
        transform: translateX(0);
    } 50%{
        transform: translateX(300px);
    }\n}`}
${seqeunce ? `@keyframes color {
    from, to{
        background: blue;
    } 50%{
        background: orange;
    }\n}` : ``}`}`
}