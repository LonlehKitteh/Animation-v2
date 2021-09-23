import Schemat from '../../images/schemat.png'

export const transforms = [
    {
        transform: 'none',
        value: 'transform: none'
    },
    {
        transform: 'perspective(100px) rotateX(125deg)',
        value: 'transform: perspective(100px) rotateX(125deg)'
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
        transform: 'perspective(300px) translate3d(50px, 75px, 40px)',
        value: 'transform: perspective(300px) translate3d(50px, 75px, 40px)'
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
        transform: 'translateX(100px) rotate(30deg)',
        value: 'transform: translateX(100px) rotate(30deg)'
    },
    "", "", "",
    {
        transformOrigin: 'left top',
        animation: 'transformOrigin 4s linear infinite',
        value: 'transform-origin: left top'
    },
    "", "", "", "",
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
    "", "", "", "",
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
    "", "", "", "",
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
    "", "", "", "",
    {
        perspectiveOrigin: '100% 100%',
        perspective: '300px',
        value: 'perspective-origin: 100% 100%',
        child: {
            transform: 'rotateY(-20deg)'
        }
    }

]

function code(cssRole, valueOfClass, valueOfRule) {
    return `<span class="css-selector">div</span>{
        <span class="css-property">width</span>: <span class="css-number">196px</span>;
        <span class="css-property">height</span>: <span class="css-number">96px</span>;
        <span class="css-property">padding</span>: <span class="css-number">16px</span>;
        <span class="css-property">font-size</span>: <span class="css-number">1.2rem</span>;
        <span class="css-property">background-color</span>: <span class="css-value">#009fff</span>;
        <span class="important"><span class="css-property">${cssRole}</span>: <span class="css-${valueOfClass}">${valueOfRule}</span>;</span>
    }`
}
function code2(cssRole, valueOfClass, valueOfRule, perspectiveTransform, perspective, child) {
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

function copyText(cssRole, valueOfRule, addtext, child) {
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

export const datatransform = [

    { mainHeader: "Transform" },
    {
        header: "Opis właściwości transform",
        content: "Transform to bardzo ważna właściwość CSS, która pozwala nam przesuwać obiekty na stronie umieszczać je w dowolnym miejscu (pozycjonować)"
    },
    {
        header: "Wartości właściwości transform",
        content: [
            "none",
            "prespective()",
            "translateX()",
            "translateY()",
            "translate()",
            "translateZ()",
            "translate3d()",
            "scaleX()",
            "scaleY()",
            "scale()",
            "scaleZ()",
            "scale3d()",
            "skewX()",
            "skewY()",
            "skew()",
            "rotate()",
            "rotateX()",
            "rotateY()",
            "rotateZ()",
            "rotate3d()",
            "matrix()",
            "matrix3d()",
            "kombinacja"
        ]
    },
    {
        header: "Informacje znacznika transform",
        content: `
        <div class="technical">
            <div class="box">
                <p>Przeznacznie</p>
                <div>element HTML każdego typu, lecz nie element HTML typu <b>table-column-group, table-column</b></div>
            </div>
            <div class="box">
                <p>Pozycja</p>
                <div class="green">dowolna</div>
            </div>
            <div class="box">    
                <p>Dziedziczenie</p>
                <div class="red">nie</div>
            </div>
            <div class="box">
                <p>Wartość initial</p>
                <div class="link"><a href="#s3">none</a></div>
            </div>
            <div class="box">
                <p>Wyjątki initial</p>
                <div class="green">brak</div>
            </div>
            <div class="box">
                <p>Animowanie</p>
                <div class="green">tak</div>
            </div>
        </div>
        `
    },
    {
        header: "none",
        content: `
        <div class="pictured-section">
        <p>Wartość none jest wartością <b>domyślną</b>, to znaczy, że nie trzeba jej dopisywać aby została ustawiona. Domyślnie element HTML nie posiada żadnego dodatkowego przekształcenia w przestrzeni.</p>

            <div class="alert alert-info" role="alert">
                <i class="fas fa-exclamation"></i>
                <span>Warto wiedzieć, że element posiadający właściwość <b>transform</b> wraz z wartością inną niż <b>none</b>, posiada automatycznie właściwość <b>position</b> wraz z wartością <b>relative</b>. To znaczy, że jeżeli Twój element ma np. <b>transform: translateX(0)</b> i w prawdzie nigdzie się nie przesuwa a Ty chciałbyś mu dać <b>position: fixed</b>, czyli na stale przykleić w jakieś miejsce, to niestety tak nie zadziała, nawet po zastosowaniu <b>!important.</b> 
                Rozwiązaniem tego problemu jest wymuszenie <b>transform: none !important</b> lub usunięcie właściwości <b>transform</b> z interesującego nas elementu.
                </span>
            </div>
        </div>`,
        code: code('transform', 'value', transforms[0].transform),
        copy: copyText('transform', transforms[0].transform)
    },
    {
        header: "perspective",
        content: "perspective",
        code: code('transform', 'value', transforms[1].transform),
        copy: copyText('transform', transforms[1].transform)
    },
    {
        header: "translateX",
        content: `<div>Za pomocą właściwości <b>transform</b> oraz funkcji <b>translateX()</b> możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na przesunięciu elementu HTML <b>względem poziomej osi X</b>.</div>
        <h2>translateX(<span class="parameter">x</span>)</h2>
        <p>Parametr <span class="parameter">x</span> jest <b>wymaganym</b> parametrem funkcji translateX(). Parametr <span class="parameter">x</span> określa wielkość przesunięcia elementu HTML względem poziomej osi X.</p>
        <b>Przykładowe zapisy: </b>
        <ul class="examples">
            <li>translateX(200px)</li>
            <li>translateX(-20em)</li>
            <li>translateX(50%)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[2].transform),
        copy: copyText('transform', transforms[2].transform)
    },
    {
        header: "translateY",
        content: `<div>
        Za pomocą właściwości transform oraz funkcji translateY() możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na przesunięciu elementu HTML względem pionowej osi Y.</div>
        <h2>translateY(<span class="parameter">y</span>)</h2>
        <p>Parametr y jest wymaganym parametrem funkcji translateY(). Parametr y określa wielkość przesunięcia elementu HTML względem pionowej osi Y.</p>
        <b>Przykładowe zapisy: </b>
        <ul class="examples">
            <li>translateY(200q)</li>
            <li>translateY(-5rem)</li>
            <li>translateY(50%)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[3].transform),
        copy: copyText('transform', transforms[3].transform)
    },
    {
        header: "translate",
        content: `<div>Za pomocą właściwości transform oraz funkcji translate() możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na przesunięciu elementu HTML względem poziomej osi X i pionowej osi Y.</div>
        <h2>translate(<span class="parameter">x</span>, y)</h2>
        <p>Parametr x jest wymaganym parametrem funkcji translate(). Parametr x określa wielkość przesunięcia elementu HTML względem poziomej osi X. Parametr y nie jest wymagany. Określa wielkość przesunięcia elementu HTML względem pionowej osi Y.</p>
        <b>Przykładowe zapisy:</b>
        <ul class="examples">
            <li>translateY(200q, 200px)</li>
            <li>translateY(-5rem)</li>
            <li>translateY(50%, -80%)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[4].transform),
        copy: copyText('transform', transforms[4].transform)
    },
    {
        header: "translateZ",
        content: "in progress...",
        code: code('transform', 'value', transforms[5].transform),
        copy: copyText('transform', transforms[5].transform)
    },
    {
        header: "translate3d",
        content: "test test test",
        code: code('transform', 'value', transforms[6].transform),
        copy: copyText('transform', transforms[6].transform)
    },
    {
        header: "scaleX",
        content: `<div>Za pomocą właściwości transform oraz funkcji scaleX() możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na przeskalowaniu elementu HTML względem poziomej osi X.</div>
        <h2>scaleX(<span class="parameter">x</span>)</h2>
        <p>Parametr x jest wymaganym parametrem funkcji scaleX(). Parametr x określa wielkość przeskalowania elementu HTML względem poziomej osi X.</p>
        <b>Przykładowe zapisy:</b>
        <ul class="examples">
            <li>scaleX(2)</li>
            <li>scaleX(0.5)</li>
            <li>scaleX(-1.5)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[7].transform),
        copy: copyText('transform', transforms[7].transform)
    },
    {
        header: "scaleY",
        content: `<div>Za pomocą właściwości transform oraz funkcji scaleY() możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na przeskalowaniu elementu HTML względem pionowej osi Y.</div>
        <h2>scaleY(<span class="parameter">y</span>)</h2>
        <p>Parametr y jest wymaganym parametrem funkcji scaleY(). Parametr y określa wielkość przeskalowania elementu HTML względem poziomej osi Y.</p>
        <b>Przykładowe zapisy:</b>
        <ul class="examples">
            <li>scaleY(0)</li>
            <li>scaleY(-0.75)</li>
            <li>scaleY(1.25)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[8].transform),
        copy: copyText('transform', transforms[8].transform)
    },
    {
        header: "scale",
        content: `<div>Za pomocą właściwości transform oraz funkcji scale() możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na przeskalowaniu elementu HTML względem poziomej osi X i pionowej osi Y.</div>
        <h2>scale(<span class="parameter">x</span>, y)</h2>
        <p>Parametr x jest wymaganym parametrem funkcji scale(). Parametr x określa wielkość przeskalowania elementu HTML względem poziomej osi X. Parametr y nie jest parametrem wymaganym, określa wielkość przeskalowania elementu html względem pionowej osi Y.</p>
        <b>Przykładowe zapisy:</b>
        <ul class="examples">
            <li>scaleY(2)</li>
            <li>scaleY(-0.75, 1.1)</li>
            <li>scaleY(1.25, -2)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[9].transform),
        copy: copyText('transform', transforms[9].transform)
    },
    {
        header: "scaleZ",
        content: "test test test",
        code: code('transform', 'value', transforms[10].transform),
        copy: copyText('transform', transforms[10].transform)
    },
    {
        header: "scale3d",
        content: "test test test",
        code: code('transform', 'value', transforms[11].transform),
        copy: copyText('transform', transforms[11].transform)
    },
    {
        header: "skewX",
        content: `<p>Za pomocą właściwości transform oraz funkcji skewX() możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na pochyleniu elementu HTML względem poziomej osi X.</p>
        <div class="alert alert-info" role="alert">
                <i class="fas fa-exclamation"></i>
                <span>Warto wiedzieć, że CSS oferuje nam rozmaite jednostki kątowe takie jak: ( deg, turn, rad, grad ) 
                <b><ul>
                    <li>360deg to 1turn</li>
                    <li>360deg to 400grad</li>
                    <li>360deg to około 6.28rad</li>
                </ul></b>
                </span>
        </div>
        <h2>skewX(<span class="parameter">x</span>)</h2>
        <p>Parametr x jest wymaganym parametrem funkcji skewX(). Parametr x określa wielkość pochylenia elementu HTML względem poziomej osi X.</p>
        <b>Przykładowe zapisy:</b>
        <ul class="examples">
            <li>skewX(-45deg)</li>
            <li>skewX(0.5turn)</li>
            <li>skewX(60grad)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[12].transform),
        copy: copyText('transform', transforms[12].transform)
    },
    {
        header: "skewY",
        content: `<div>Za pomocą właściwości transform oraz funkcji skewY() możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na pochyleniu elementu HTML względem pionowej osi Y.</div>
        <h2>skewY(<span class="parameter">x</span>)</h2>
        <p>Parametr y jest wymaganym parametrem funkcji skewY(). Parametr y określa wielkość pochylenia elementu HTML względem poziomej osi Y.</p>
        <b>Przykładowe zapisy:</b>
        <ul class="examples">
            <li>skewY(-2.5rad)</li>
            <li>skewY(50deg)</li>
            <li>skewY(-2turn)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[13].transform),
        copy: copyText('transform', transforms[13].transform)
    },
    {
        header: "skew",
        content: `<div>Za pomocą właściwości transform oraz funkcji skew() możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na pochyleniu elementu HTML względem poziomej osi X i pionowej osi Y.</div>
        <h2>skew(<span class="parameter">x</span>, y)</h2>
        <p>Parametr x jest wymaganym parametrem funkcji skew(). Parametr x określa wielkość przeskalowania elementu HTML względem poziomej osi X. Parametr y nie jest wymaganym parametrem, określa wielkość pochylenia względem osi pionowej Y.</p>
        <b>Przykładowe zapisy:</b>
        <ul class="examples">
            <li>skew(30deg, -2.5rad)</li>
            <li>skew(45deg, 1turn)</li>
            <li>skew(1rad, -50grad)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[14].transform),
        copy: copyText('transform', transforms[14].transform)
    },
    {
        header: "rotate",
        content: `<div>Za pomocą właściwości transform oraz funkcji rotate() możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na obróceniu elementu HTML WZGLĘDEM PUNKTU ZERO.</div>
        <h2>rotate(<span class="parameter">angle</span>)</h2>
        <p>Parametr angle jest wymaganym parametrem funkcji rotate(). Parametr angle określa wielkość obrotu elementu HTML względem punktu zero.</p>
        <b>Przykładowe zapisy:</b>
        <ul class="examples">
            <li>rotate(1turn)</li>
            <li>rotate(-45deg)</li>
            <li>rotate(5rad)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[15].transform),
        copy: copyText('transform', transforms[15].transform)
    },
    {
        header: "rotateX",
        content: "test test test",
        code: code('transform', 'value', transforms[16].transform),
        copy: copyText('transform', transforms[16].transform)
    },
    {
        header: "rotateY",
        content: "test test test",
        code: code('transform', 'value', transforms[17].transform),
        copy: copyText('transform', transforms[17].transform)
    },
    {
        header: "rotateZ",
        content: "test test test",
        code: code('transform', 'value', transforms[18].transform),
        copy: copyText('transform', transforms[18].transform)
    },
    {
        header: "rotate3d",
        content: "test test test",
        code: code('transform', 'value', transforms[19].transform),
        copy: copyText('transform', transforms[19].transform)
    },
    {
        header: "matrix",
        content: "test test test",
        code: code('transform', 'value', transforms[20].transform),
        copy: copyText('transform', transforms[20].transform)
    },
    {
        header: "matrix3d",
        content: "test test test",
        code: code('transform', 'value', transforms[21].transform),
        copy: copyText('transform', transforms[21].transform)
    },
    {
        header: "kombinacja",
        content: `<p>Za pomocą właściwości transform oraz sekwencji funkcji możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na wykonaniu jednej funkcji a następnie drugiej.</p>
        <div class="alert alert-info" role="alert">
                <i class="fas fa-exclamation"></i>
                <span>Kolejność transformacji jest bardzo istotna, ponieważ to może prowadzić do złej transformacji.</span>
        </div>
        <b>Przykładowe zapisy:</b>
        <ul class="examples">
            <li>rotate(45deg) scaleY(2)</li>
            <li>translateX(-50%) skew(45deg)</li>
            <li>scaleY(-1.5) translate(150q, 4em)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[22].transform),
        copy: copyText('transform', transforms[22].transform)
    },
    { mainHeader: "Transform-origin" },
    {
        header: "Punkt Zero",
        content: `
            <div class="pictured">
                <h2>transform-origin <span class="parameter">x</span> y z</h2>
                <div class="flex"><img src="${Schemat}" alt="transform-origin-sketch" /></div>
            </div>
            <div class="alert alert-info" role="alert">
                <i class="fas fa-exclamation"></i>
                <span>Za pomocą właściwości transform-origin możemy określić w przestrzeni pozycję początkową punktu zero interesującego nas elementu HTML. 
                Właściwość transform-origin nie jest funkcją, ponieważ nie posiada nawiasów, wszystkie parametry podajemy bez przecinka. Paramert x jest parametrem wymaganym, a parametry y i z nie są parametrami wymaganymi.</span>
            </div>
            <b>Wartościami parametru x mogą być:</b>
            <ul class="examples">
                <li>jednostki absolutne</li>
                <li>jednostki relatywne</li>
                <li>procenty</li>
                <li>wartości pozycjonujące (bez top oraz bottom) np. right, left, center</li>
            </ul>
            <p>W przypadku podania wartości dodatnich punkt zero zostanie przesunięty w prawo względem lewej krawędzi. W przypadku podania wartości ujemnych punkt zero zostanie przesunięty w lewo względem prawej krawędzi. Wartości procentowe liczone są względem aktualnego rozmiaru szerokości elementu html.</p>
        
            <b>Wartościami parametru y mogą być:</b>
            <ul class="examples">
                <li>jednostki absolutne</li>
                <li>jednostki relatywne</li>
                <li>procenty</li>
                <li>wartości pozycjonujące (bez left oraz right) np. top, left, bottom</li>
            </ul>
            <p>W przypadku podania wartości dodatnich punkt zero zostanie przesunięty w dół względem górnej krawędzi. W przypadku podania wartości ujemnych punkt zero zostanie przesunięty w górę względem dolnej krawędzi. Wartości procentowe liczone są względem aktualnego rozmiaru wysokości elementu html.</p>
        
            <b>Wartościami parametru z mogą być:</b>
            <ul class="examples">
                <li>jednostki absolutne</li>
                <li>jednostki relatywne</li>
            </ul>
            <p>W przypadku podania wartości dodatnich punkt zero zostanie przesunięty do tyłu względem osi Z. W przypadku podania wartości ujemnych punkt zero zostanie przesunięty do przodu względem osi Z.</p>
    `
    },
    {
        header: "Informacje znacznika transform-origin",
        content: `<div class="technical">
            <div class="box">
                <p>Przeznacznie</p>
                <div>element HTML każdego typu, lecz nie element HTML typu <b>table-column-group, table-column</b></div>
            </div>
            <div class="box">
                <p>Pozycja</p>
                <div class="green">dowolna</div>
            </div>
            <div class="box">    
                <p>Dziedziczenie</p>
                <div class="red">nie</div>
            </div>
            <div class="box">
                <p>Wartość initial</p>
                <div>50% 50%</div>
            </div>
            <div class="box">
                <p>Wyjątki initial</p>
                <div class="green">brak</div>
            </div>
            <div class="box">
                <p>Animowanie</p>
                <div class="green">tak</div>
            </div>
        </div>`
    },
    {
        header: "Zastosowanie",
        content: "Właściwość CSS transform-origin służy między innymi do stworzenia rotacji względem punktu zero. Ustawiłem punkt zero w lewym górnym rogu więc cały element obraca się względem niego.",
        code: `<span class="css-selector">div</span>{
        <span class="css-property">width</span>: <span class="css-number">196px</span>;
        <span class="css-property">height</span>: <span class="css-number">96px</span>;
        <span class="css-property">padding</span>: <span class="css-number">16px</span>;
        <span class="css-property">font-size</span>: <span class="css-number">1.2rem</span>;
        <span class="css-property">background-color</span>: <span class="css-value">#009fff</span>;
        <span class="css-property">animation</span>: <span class="css-value">rotation 4s linear infinite</span>
        <span class="important"><span class="css-property">transform-origin</span>: <span class="css-value">left top</span>;</span>
    }

    <span class="css-selector">@keyframes</span> rotation {
        <span class="css-selector">from, to</span>{
            <span css-property>transform</span>: <span class="css-value">rotate(<span class="css-number">0</span>)</span>
        } <span class="css-selector">50%</span>{
            <span css-property>transform</span>: <span class="css-value">rotate(<span class="css-number">180deg</span>)</span>
        }
    }`,
    copy: copyText('animation', 'rotation 4s linear infinite', `transform-origin: left top; 
    }
@keyframes rotation{
        from, to{
            transform: rotate(0)
        }
        50%{
            transform: rotate(180deg)
        }`, false)
    },
    { mainHeader: "Transform-style" },
    {
        header: "Opis właściwości transform-style",
        content: "text"
    },
    {
        header: "Wartości właściwości transform-style",
        content: [
            "flat", "preserve-3d"
        ]
    },
    {
        header: "Informacje znacznika transform-style",
        content: `<div class="technical">
        <div class="box">
            <p>Przeznacznie</p>
            <div>element HTML każdego typu, lecz nie element HTML typu <b>table-column-group, table-column</b></div>
        </div>
        <div class="box">
            <p>Pozycja</p>
            <div class="green">dowolna</div>
        </div>
        <div class="box">    
            <p>Dziedziczenie</p>
            <div class="red">nie</div>
        </div>
        <div class="box">
            <p>Wartość initial</p>
            <div class="link"><a href="#s32">flat</a></div>
        </div>
        <div class="box">
            <p>Wyjątki initial</p>
            <div class="green">brak</div>
        </div>
        <div class="box">
            <p>Animowanie</p>
            <div class="green">tak (animacja schodkowa)</div>
        </div>
    </div>`
    },
    {
        header: "flat",
        content: "flat",
        code: code2('transform-style', 'value', transforms[31].transformStyle, true, false, true),
        copy: copyText('transform-style', transforms[31].transformStyle, `transform: perspective(300px) rotateY(10deg);`, true)
    },
    {
        header: "preserve-3d",
        content: "preserve-3d",
        code: code2('transform-style', 'value', transforms[32].transformStyle, true, false, true),
        copy: copyText('transform-style', transforms[32].transformStyle, `transform: perspective(300px) rotateY(10deg);`, true)
    },
    { mainHeader: "Backface-visibility" },
    {
        header: "Opis właściwości backface-visibility",
        content: "text"
    },
    {
        header: "Wartości właściwości backface-visibility",
        content: [
            "visible", "hidden"
        ]
    },
    {
        header: "Informacje znacznika backface-visibility",
        content: `<div class="technical">
        <div class="box">
            <p>Przeznacznie</p>
            <div>element HTML każdego typu, lecz nie element HTML typu <b>table-column-group, table-column</b></div>
        </div>
        <div class="box">
            <p>Pozycja</p>
            <div class="green">dowolna</div>
        </div>
        <div class="box">    
            <p>Dziedziczenie</p>
            <div class="red">nie</div>
        </div>
        <div class="box">
            <p>Wartość initial</p>
            <div class="link"><a href="#s37">visible</a></div>
        </div>
        <div class="box">
            <p>Wyjątki initial</p>
            <div class="green">brak</div>
        </div>
        <div class="box">
            <p>Animowanie</p>
            <div class="green">tak (animacja schodkowa)</div>
        </div>
    </div>`
    },
    {
        header: "visible",
        content: "visible"
    },
    {
        header: "hidden",
        content: "hidden"
    },
    { mainHeader: "Perspective" },
    {
        header: "Opis właściwości perspective",
        content: "text"
    },
    {
        header: "Wartości właściwości perspective",
        content: [
            "none", "rozmiar"
        ]
    },
    {
        header: "Informacje znacznika perspective",
        content: `<div class="technical">
        <div class="box">
            <p>Przeznacznie</p>
            <div>element HTML każdego typu, lecz nie element HTML typu <b>table-column-group, table-column</b></div>
        </div>
        <div class="box">
            <p>Pozycja</p>
            <div class="green">dowolna</div>
        </div>
        <div class="box">    
            <p>Dziedziczenie</p>
            <div class="red">nie</div>
        </div>
        <div class="box">
            <p>Wartość initial</p>
            <div class="link"><a href="#s42">none</a></div>
        </div>
        <div class="box">
            <p>Wyjątki initial</p>
            <div class="green">brak</div>
        </div>
        <div class="box">
            <p>Animowanie</p>
            <div class="green">tak, lecz tylko rozmiar</div>
        </div>
    </div>`
    },
    {
        header: "none",
        content: "none",
        code: code2('perspective', 'value', transforms[43].perspective, false, false, true),
        copy: copyText('perspective', transforms[43].perspective, false, true)
    },
    {
        header: "rozmiar",
        content: "rozmiar",
        code: code2('perspective', 'value', transforms[44].perspective, false, false, true),
        copy: copyText('perspective', transforms[44].perspective, false, true)
    },
    { mainHeader: "Perspective-origin" },
    {
        header: "Opis właściwości perspective-origin",
        content: "text"
    },
    {
        header: "Wartości właściwości perspective-origin",
        content: [
            "wzorzec"
        ]
    },
    {
        header: "Informacje znacznika perspective-origin",
        content: `<div class="technical">
        <div class="box">
            <p>Przeznacznie</p>
            <div>element HTML każdego typu, lecz nie element HTML typu <b>table-column-group, table-column</b></div>
        </div>
        <div class="box">
            <p>Pozycja</p>
            <div class="green">dowolna</div>
        </div>
        <div class="box">    
            <p>Dziedziczenie</p>
            <div class="red">nie</div>
        </div>
        <div class="box">
            <p>Wartość initial</p>
            <div>50% 50%></div>
        </div>
        <div class="box">
            <p>Wyjątki initial</p>
            <div class="green">brak</div>
        </div>
        <div class="box">
            <p>Animowanie</p>
            <div class="green">tak</div>
        </div>
    </div>`
    },
    {
        header: "wzorzec",
        content: "wzorzec",
        code: code2('perspective-origin', 'value', transforms[49].perspectiveOrigin, false, true, true),
        copy: copyText('perspective-origin', transforms[49].perspectiveOrigin, `perspective: 300px;`, true)
    }
]