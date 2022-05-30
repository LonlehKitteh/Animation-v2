export const transforms = [
    {
        transform: 'none',
        value: 'transform: none'
    },
    {
        transform: 'perspective(100px) rotateX(45deg)',
        value: 'transform: perspective(100px) rotateX(45deg)'
    },
    {
        transform: 'translateX(40px)',
        value: 'transform: translateX(40px)'
    },
    {
        transform: 'translateY(-20px)',
        value: 'transform: translateY(-20px)'
    },
    {
        transform: 'translate(40px, -20px)',
        value: 'transform: translate(40px, -20px)'
    },
    {
        transform: 'perspective(100px) translateZ(20px)',
        value: 'transform: perspective(100px) translateZ(20px)'
    },
    {
        transform: 'perspective(300px) translate3d(25px, 75px, 40px)',
        value: 'transform: perspective(300px) translate3d(25px, 75px, 40px)'
    },
    {
        transform: 'scaleX(0.8)',
        value: 'transform: scaleX(0.8)'
    },
    {
        transform: 'scaleY(1.2)',
        value: 'transform: scaleY(1.2)'
    },
    {
        transform: 'scale(1.3, 0.75)',
        value: 'transform: scale(1.3, 0.75)'
    },
    {
        transform: 'perspective(300px) scaleZ(0.5) translateZ(200px)',
        value: 'transform: perspective(300px) scaleZ(0.5) translateZ(200px)'
    },
    {
        transform: 'perspective(300px) scale3d(0.75, 1.25, 0.5) translateZ(200px)',
        value: 'transform: perspective(300px) scale3d(0.75, 1.25, 0.5) translateZ(200px)'
    },
    {
        transform: 'skewX(30deg)',
        value: 'transform: skewX(30deg)'
    },
    {
        transform: 'skewY(-30deg)',
        value: 'transform: skewY(-30deg)'
    },
    {
        transform: 'skew(30deg, 20deg)',
        value: 'transform: skew(30deg, 20deg)'
    },
    {
        transform: 'rotate(60deg)',
        value: 'transform: rotate(60deg)'
    },
    {
        transform: 'perspective(300px) rotateX(45deg)',
        value: 'transform: perspective(300px) rotateX(45deg)'
    },
    {
        transform: 'perspective(300px) rotateY(45deg)',
        value: 'transform: perspective(300px) rotateY(45deg)'
    },
    {
        transform: 'perspective(300px) rotateZ(45deg)',
        value: 'transform: perspective(300px) rotateZ(45deg)'
    },
    {
        transform: 'perspective(300px) rotate3d(1, 1, 1, 45deg)',
        value: 'transform: perspective(300px) rotate3d(1, 1, 1, 45deg)'
    },
    {
        transform: 'matrix(0.8660254, 0.5, -0.5, 0.8660254, 0, 0)',
        value: 'transform: matrix(0.8660254, 0.5, -0.5, 0.8660254, 0, 0)'
    },
    {
        transform: 'perspective(300px) matrix3d(0.7071067, 0, -0.7071067, 0, 0, 1, 0, 0, 0.7071067, 0, 0.7071067, 0, 0, 0, 0, 1)',
        value: 'transform: perspective(300px) matrix3d(0.7071067, 0, -0.7071067, 0, 0, 1, 0, 0, 0.7071067, 0, 0.7071067, 0, 0, 0, 0, 1)'
    },
    {
        transform: 'translateX(-25px) rotate(30deg)',
        value: 'transform: translateX(-25px) rotate(30deg)'
    },
    {
        transformOrigin: 'center bottom',
        animation: 'transformOrigin 4s linear infinite',
        value: 'transform-origin: center bottom'
    },
    {
        transformStyle: 'flat',
        transform: 'perspective(300px) rotateY(10deg)',
        value: 'transform-style: flat',
        child: {
            transform: 'rotateY(-20deg)'
        }
    },
    {
        transformStyle: 'preserve-3d',
        transform: 'perspective(300px) rotateY(10deg)',
        value: 'transform-style: preserve-3d',
        child: {
            transform: 'rotateY(-20deg)'
        }
    },
    {
        backfaceVisibility: 'visible',
        value: 'backface-visibility: visible',
        animation: 'rotation 4s linear infinite',
    },
    {
        backfaceVisibility: 'hidden',
        value: 'backface-visibility: hidden',
        animation: 'rotation 4s linear infinite',
    },
    {
        perspective: 'none',
        value: 'perspective: none',
        child: {
            transform: 'rotateY(-20deg)'
        }
    },
    {
        perspective: '300px',
        value: 'perspective: 300px',
        child: {
            transform: 'rotateY(-20deg)'
        }
    },
    {
        perspectiveOrigin: '100% 100%',
        perspective: '300px',
        value: 'perspective-origin: 100% 100%',
        child: {
            transform: 'rotateY(-20deg)'
        }
    }

]

export function code(cssRole, valueOfClass, valueOfRule) {
    return `<span class="css-selector">div</span>{
        <span class="css-property">width</span>: <span class="css-number">196px</span>;
        <span class="css-property">height</span>: <span class="css-number">96px</span>;
        <span class="css-property">padding</span>: <span class="css-number">16px</span>;
        <span class="css-property">font-size</span>: <span class="css-number">1.2rem</span>;
        <span class="css-property">background-color</span>: <span class="css-value">#009fff</span>;
        <span class="important"><span class="css-property">${cssRole}</span>: <span class="css-${valueOfClass}">${valueOfRule}</span>;</span>
    }`
}
export function code2(cssRole, valueOfClass, valueOfRule, perspectiveTransform, perspective, child) {
    return `<span class="css-selector">div.parent</span>{
        <span class="css-property">width</span>: <span class="css-number">300px</span>;
        <span class="css-property">height</span>: <span class="css-number">300px</span>;
        <span class="css-property">text-align</span>: <span class="css-value">center</span>;
        <span class="css-property">background-color</span>: <span class="css-value">coral</span>;${(perspectiveTransform) ? `<br />        <span class="css-property">transform</span>: <span class="css-value">perspective(300px) rotateY(10deg)</span>;` : ``}${(perspective) ? `<br />        <span class="css-property">perspective</span>: <span class="css-number">300px</span>;` : ``}
        <span class="important"><span class="css-property">${cssRole}</span>: <span class="css-${valueOfClass}">${valueOfRule}</span>;</span>
${(child) ? `}<br /><span class="css-selector">div.child</span>{
    <span class="css-property">background</span>: <span class="css-number">#A6D9A6</span>;
    <span class="css-property">height</span>: <span class="css-number">250px</span>;
    <span class="css-property">transform</span>: <span class="css-value">rotateY(-20deg)</span>;
}` : `}`}
    `
}

export function copyText(cssRole, valueOfRule, addtext, child) {
    return `${child ? `div.parent{
        width: 300px;
        height: 300px` :
        `div{
        width: 196px;
        height: 96px;` }
        text-align: center;
        background-color: coral;
        ${cssRole}: ${valueOfRule};
        ${typeof addtext === 'string' ? `${addtext}
}` : `}`}
${(child) ? `div.child{
    background: #A6D9A6;
    height: 250px;
    transform: rotateY(-20deg);
}` : ``}
    `
}