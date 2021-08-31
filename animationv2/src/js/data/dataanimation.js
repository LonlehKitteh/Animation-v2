const defaultDuration = '4s'
const defaultIteration = 'infinite'

export var animations = [
    {
        animationName: 'none',
        value: 'animation-name: none'
    },
    {
        animationName: 'move',
        value: 'animation-name: move'
    },
    {
        animationName: 'move, color',
        value: 'animation-name: move, color'
    },
    "", "", "", "",
    {
        animationDuration: '2s',
        value: 'animation-duration: 2s'
    },
    {
        animationDuration: '2s, 4s',
        animationName: 'move, color',
        value: 'animation-duration: 2s, 4s'
    },
    "", "", "", "",
    {
        animationTimingFunction: 'ease',
        value: 'animation-timing-function: ease'
    },
    {
        animationTimingFunction: 'ease-in',
        value: 'animation-timing-function: ease-in'
    },
    {
        animationTimingFunction: 'ease-out',
        value: 'animation-timing-function: ease-out'
    },
    {
        animationTimingFunction: 'ease-in-out',
        value: 'animation-timing-function: ease-in-out'
    },
    {
        animationTimingFunction: 'linear',
        value: 'animation-timing-function: linear'
    },
    {
        animationTimingFunction: 'step-start',
        value: 'animation-timing-function: step-start'
    },
    {
        animationTimingFunction: 'step-end',
        value: 'animation-timing-function: step-end'
    },
    {
        animationTimingFunction: 'steps(10)',
        value: 'animation-timing-function: steps(10)'
    },
    {
        animationTimingFunction: 'cubic-bezier(.1,.75,.51,-0.01)',
        value: 'animation-timing-function: cubic-bezier(.1,.75,.51,-0.01)'
    },
    {
        animationName: 'move, color',
        animationTimingFunction: 'steps(5), ease-in-out',
        value: 'animation-timing-function: steps(5), ease-in-out'
    },
    "", "", "", "", "",
    {
        animationDelay: '2s',
        value: 'animation-delay: 2s'
    },
    {
        animationDelay: '5s, 1s',
        animationName: 'move, color',
        value: 'animation-delay: 5s, 1s'
    },
    "", "", "", "",
    {
        animationIterationCount: '3',
        value: 'animation-iteration-count: 3'
    },
    {
        animationIterationCount: 'infinite',
        value: 'animation-iteration-count: infinite'
    },
    {
        animationIterationCount: '5, infinite',
        animationName: 'move, color',
        value: 'animation-iteration-count: 5, infinite'
    },
    "", "", "", "",
    {
        animationDirection: 'normal',
        animationName: 'move2',
        animationDuration: '2s',
        value: 'animation-direction: normal'
    },
    {
        animationDirection: 'reverse',
        animationName: 'move2',
        animationDuration: '2s',
        value: 'animation-direction: reverse'
    },
    {
        animationDirection: 'alternate',
        animationName: 'move2',
        animationDuration: '2s',
        value: 'animation-direction: alternate'
    },
    {
        animationDirection: 'alternate-reverse',
        animationName: 'move2',
        animationDuration: '2s',
        value: 'animation-direction: alternate-reverse'
    },
    {
        animationDirection: 'alternate, reverse',
        animationName: 'move2, color2',
        animationDuration: '2s',
        value: 'animation-direction: alternate, reverse'
    },
    "", "", "", "",
    {
        animationFillMode: 'none',
        animationName: "color2",
        value: 'animation-fill-mode: none'
    },
    {
        animationFillMode: 'backwards',
        animationName: "color2",
        animationDelay: '4s',
        animationIterationCount: '3',
        value: 'animation-fill-mode: backwards'
    },
    {
        animationFillMode: 'forwards',
        animationName: "color2",
        animationDelay: '4s',
        animationIterationCount: '3',
        value: 'animation-fill-mode: forwards'
    },
    {
        animationFillMode: 'both',
        animationName: "color2",
        animationDelay: '4s',
        animationIterationCount: '3',
        value: 'animation-fill-mode: both'
    },
    {
        animationFillMode: 'none, both',
        animationName: "move, color2",
        animationIterationCount: '3',
        value: 'animation-fill-mode: none, both'
    },
    "", "", "", "",
    {
        animationPlayState: 'running',
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

function code(move, color, name, value, type, animationName, animationNameValue, animationDuration, animationDurationValue, animationIterationCount, animationIterationCountValue) {
    return `<span class="css-selector">div</span>{
        <span class="css-property">width</span>: <span class="css-number">196px</span>;
        <span class="css-property">height</span>: <span class="css-number">96px</span>;
        <span class="css-property">padding</span>: <span class="css-number">16px</span>;
        <span class="css-property">font-size</span>: <span class="css-number">1.2rem</span>;
        <span class="css-property">background-color</span>: <span class="css-value">#009fff</span>;
        <span class="important"><span class="css-property">${name}</span>: <span class="css-${type}">${value}</span>;</span>${(animationIterationCount) ? `<br />        <span class="css-property">animation-iteration-count</span>: <span class="css-number">${animationIterationCountValue}</span>;` : ``}${(animationDuration) ? `<br />        <span class="css-property">animation-duration</span>: <span class="css-number">${animationDurationValue}</span>;` : ``}${(animationName) ? `<br />        <span class="css-property">animation-name</span>: <span class="css-value">${animationNameValue}</span>;<br />    }` : `<br />    }`}     

    ${(move === 'move') ? `<span class="css-selector">@keyframes</span> move {
        <span class="css-selector">from, to</span>{
            <span class="css-property">transform</span>: <span class="css-value">translateX(<span class="css-number">0</span>)</span>;
        } <span class="css-selector">50%</span>{
            <span class="css-property">transform</span>: <span class="css-value">translateY(<span class="css-number">300px</span>)</span>;
        }<br />    }` : (move === 'move2') ? `<span class="css-selector">@keyframes</span> move {
        <span class="css-selector">from</span>{
            <span class="css-property">transform</span>: <span class="css-value">translateX(<span class="css-number">0</span>)</span>;
        } <span class="css-selector">to</span>{
            <span class="css-property">transform</span>: <span class="css-value">translateY(<span class="css-number">300px</span>)</span>;
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

export const dataanimation = [
    { mainHeader: "Animation-name" },
    {
        header: "Opis właściwości animation-name",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-name</span> możemy <b>nazwać</b>, która animacja powinna zostać dodana do elementu HTML.</div>`
    },
    {
        header: "Wartości właściwości animation-name",
        content: [
            "none", "nazwa animacji", "sekwencja"
        ]
    },
    {
        header: "Informacje znacznika animation-name",
        content: `
        <div class="technical">
        <div class="box">
            <p>Przeznacznie</p>
            <div>element HTML każdego typu</div>
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
            <div class="red">nie</div>
        </div>
    </div>
        `
    },
    {
        header: "none",
        content: `<div>Wartość none jest <b>domyślną</b> wartością właściwości <span class="css-role">animation-name</span>. Domyślnie na elemencie HTML nie jest wykonywana <b>żadna</b> animacja.</div>`,
        code: code("move", "", 'aniamtion-name', animations[0].animationName, 'value', false, '', true, defaultDuration, true, defaultIteration)
    },
    {
        header: "nazwa animacji",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-name</span> oraz nazwy istniejącej animacji utworzonej za pomocą reguły <b>@keyframes</b> możemy dodać animację.`,
        code: code("move", "", "animation-name", animations[1].animationName, "value", false, '', true, defaultDuration, true, defaultIteration)
    },
    {
        header: "sekwencja",
        content: `<div>Za pomocą sekwencji oddzielonych od siebie przecinkiem wartości właściwości <span class="css-role">animation-name</span> możemy dodać kilka animacji jednocześnie.</div>`,
        code: code('move', 'color', 'aniamtion-name', animations[2].animationName, 'value', false, '', true, defaultDuration, true, defaultIteration)
    },
    { mainHeader: "Animation-duration" },
    {
        header: "Opis właściwości animation-duration",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-duration</span> możemy określić <b>czas trwania</b> animacji.</div>`
    },
    {
        header: "Wartości właściwości animation-duration",
        content: [
            "czas", "sekwencja"
        ]
    },
    {
        header: "Informacje znacznika animation-duration",
        content: `
        <div class="technical">
        <div class="box">
            <p>Przeznacznie</p>
            <div>element HTML każdego typu</div>
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
            <div>0s</div>
        </div>
        <div class="box">
            <p>Wyjątki initial</p>
            <div class="green">brak</div>
        </div>
        <div class="box">
            <p>Animowanie</p>
            <div class="red">nie</div>
        </div>
    </div>
        `
    },
    {
        header: "czas",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-duration</span> oraz dowolnej nieujemnej liczby wraz z wybraną <b>jednostką czasu</b> możemy określić czas trwania wykonywania się animacji interesującego nas elementu HTML.</div>
        <div class="alert alert-info" role="alert">
                <i class="fas fa-exclamation"></i>
                <span>Warto wiedzieć że:
                <ul class="examples">
                    <li style="border:none">1s = 1000ms</li>
                </ul>
                </span>
        </div>
        `,
        code: code('move', '', 'animation-duration', animations[7].animationDuration, 'number', true, 'move', false, '', true, defaultIteration)
    },
    {
        header: "sekwencja",
        content: "sekwencja",
        code: code('move', 'color', 'aniamtion-duration', animations[8].animationDuration, 'number', true, 'move, color', false, '', true, defaultIteration)
    },
    { mainHeader: "Animation-timing-function" },
    {
        header: "Opis właściwości animation-timing-function",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-timing-function</span> możemy dodać <b>tempo</b> do animacji.</div>`
    },
    {
        header: "Wartości właściwości animation-timing-function",
        content: [
            "ease", "ease-in", "ease-out", "ease-in-out", "linear", "step-start", "step-end", "steps()", "cubic-bezier()", "sekwencja", "zestawienie"
        ]
    },
    {
        header: "Informacje znacznika animation-timing-function",
        content: `
        <div class="technical">
        <div class="box">
            <p>Przeznacznie</p>
            <div>element HTML każdego typu</div>
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
            <div class="link"><a href="#s14">ease</a></div>
        </div>
        <div class="box">
            <p>Wyjątki initial</p>
            <div class="green">brak</div>
        </div>
        <div class="box">
            <p>Animowanie</p>
            <div class="red">nie</div>
        </div>
    </div>
        `
    },
    {
        header: "ease",
        content: "ease",
        code: code('move', '', 'animation-timing-function', animations[13].animationTimingFunction, 'value', true, 'move', true, defaultDuration, true, defaultIteration)
    },
    {
        header: "ease-in",
        content: "ease-in",
        code: code('move', '', 'animation-timing-function', animations[14].animationTimingFunction, 'value', true, 'move', true, defaultDuration, true, defaultIteration)
    },
    {
        header: "ease-out",
        content: "ease-out",
        code: code('move', '', 'animation-timing-function', animations[15].animationTimingFunction, 'value', true, 'move', true, defaultDuration, true, defaultIteration)
    },
    {
        header: "ease-in-out",
        content: "ease-in-out",
        code: code('move', '', 'animation-timing-function', animations[16].animationTimingFunction, 'value', true, 'move', true, defaultDuration, true, defaultIteration)
    },
    {
        header: "linear",
        content: "linear",
        code: code('move', '', 'animation-timing-function', animations[17].animationTimingFunction, 'value', true, 'move', true, defaultDuration, true, defaultIteration)
    },
    {
        header: "step-start",
        content: "steap-start",
        code: code('move', '', 'animation-timing-function', animations[18].animationTimingFunction, 'value', true, 'move', true, defaultDuration, true, defaultIteration)
    },
    {
        header: "step-end",
        content: "step-end",
        code: code('move', '', 'animation-timing-function', animations[19].animationTimingFunction, 'value', true, 'move', true, defaultDuration, true, defaultIteration)
    },
    {
        header: "steps()",
        content: "steps()",
        code: code('move', '', 'animation-timing-function', animations[20].animationTimingFunction, 'value', true, 'move', true, defaultDuration, true, defaultIteration)
    },
    {
        header: "cubic-bezier()",
        content: "cubic-bezier()",
        code: code('move', '', 'animation-timing-function', animations[21].animationTimingFunction, 'value', true, 'move', true, defaultDuration, true, defaultIteration)
    },
    {
        header: "sekwencja",
        content: "sekwencja",
        code: code('move', 'color', 'animation-timing-function', animations[22].animationTimingFunction, 'value', true, 'move, color', true, defaultDuration, true, defaultIteration)
    },
    {
        header: "zestawienie",
        content: "zestawienie"
    },
    { mainHeader: "Animation-delay" },
    {
        header: "Opis właściwości animation-delay",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-delay</span> możemy dodać <b>opuźnienie</b> animacji.</div>`
    },
    {
        header: "Wartości właściwości animation-delay",
        content: [
            "czas", "sekwencja"
        ]
    },
    {
        header: "Informacje znacznika animation-delay",
        content: `
        <div class="technical">
        <div class="box">
            <p>Przeznacznie</p>
            <div>element HTML każdego typu</div>
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
            <div>0s</div>
        </div>
        <div class="box">
            <p>Wyjątki initial</p>
            <div class="green">brak</div>
        </div>
        <div class="box">
            <p>Animowanie</p>
            <div class="red">nie</div>
        </div>
    </div>
        `
    },
    {
        header: "czas",
        content: "czas",
        code: code('move', '', 'animation-delay', animations[28].animationDelay, 'number', true, 'move', true, defaultDuration, true, defaultIteration)
    },
    {
        header: "sekwencja",
        content: "sekwencja",
        code: code('move', 'color', 'animation-delay', animations[29].animationDelay, 'number', true, 'move, color', true, defaultDuration, true, defaultIteration)
    },
    { mainHeader: "Animation-iteration-count" },
    {
        header: "Opis właściwości animation-iteration-count",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-iteration-count</span> możemy dodać <b>ilość powtórzeń</b> animacji.</div>`
    },
    {
        header: "Wartości właściwości animation-iteration-count",
        content: [
            "liczba całkowita", "infinite", "sekwencja"
        ]
    },
    {
        header: "Informacje znacznika animation-iteration-count",
        content: `
        <div class="technical">
        <div class="box">
            <p>Przeznacznie</p>
            <div>element HTML każdego typu</div>
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
            <div>1</div>
        </div>
        <div class="box">
            <p>Wyjątki initial</p>
            <div class="green">brak</div>
        </div>
        <div class="box">
            <p>Animowanie</p>
            <div class="red">nie</div>
        </div>
    </div>
        `
    },
    {
        header: "liczba całkowita",
        content: "liczba całkowita",
        code: code('move', '', 'animation-iteration-count', animations[34].animationIterationCount, 'number', true, 'move', true, defaultDuration, false, '')
    },
    {
        header: "infinite",
        content: "infinite",
        code: code('move', '', 'animation-iteration-count', animations[35].animationIterationCount, 'number', true, 'move', true, defaultDuration, false, '')
    },
    {
        header: "sekwencja",
        content: "sekwencja",
        code: code('move', '', 'animation-iteration-count', animations[36].animationIterationCount, 'number', true, 'move, color', true, defaultDuration, false, '')
    },
    { mainHeader: "Animation-direction" },
    {
        header: "Opis właściwości animation-direction",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-direction</span> możemy określić <b>kierunek rozpoczęcia</b> wykonywania się oraz kierunek co drugiego powtarzania wykonywania się animacji interesującego nas elementu HTML.</div>`
    },
    {
        header: "Wartości właściwości animation-direction",
        content: [
            "normal", "reverse", "alternate", "alternate-reverse", "sekwencja"
        ]
    },
    {
        header: "Informacje znacznika animation-direction",
        content: `
        <div class="technical">
        <div class="box">
            <p>Przeznacznie</p>
            <div>element HTML każdego typu</div>
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
            <div class="link"><a href="#39">normal</a></div>
        </div>
        <div class="box">
            <p>Wyjątki initial</p>
            <div class="green">brak</div>
        </div>
        <div class="box">
            <p>Animowanie</p>
            <div class="red">nie</div>
        </div>
    </div>
        `
    },
    {
        header: "normal",
        content: "normal",
        code: code('move2', '', 'animation-direction', animations[41].animationDirection, 'value', true, 'move', true, '2s', true, defaultIteration)
    },
    {
        header: "reverse",
        content: "reverse",
        code: code('move2', '', 'animation-direction', animations[42].animationDirection, 'value', true, 'move', true, '2s', true, defaultIteration)
    },
    {
        header: "alternate",
        content: "alternate",
        code: code('move2', '', 'animation-direction', animations[43].animationDirection, 'value', true, 'move', true, '2s', true, defaultIteration)
    },
    {
        header: "alternate-reverse",
        content: "alternate-reverse",
        code: code('move2', '', 'animation-direction', animations[44].animationDirection, 'value', true, 'move', true, '2s', true, defaultIteration)
    },
    {
        header: "sekwencja",
        content: "sekwencja",
        code: code('move2', 'color2', 'animation-direction', animations[45].animationDirection, 'value', true, 'move, color', true, '2s', true, defaultIteration)
    },
    { mainHeader: "Animation-fill-mode" },
    {
        header: "Opis właściwości animation-fill-mode",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-fill-mode</span> możemy dodać <b>dodatkowe właściwości</b> do elementu HTML.</div>`
    },
    {
        header: "Wartości właściwości animation-fill-mode",
        content: [
            "none", "backwards", "forwards", "both", "sekwencja"
        ]
    },
    {
        header: "Informacje znacznika animation-fill-mode",
        content: `
        <div class="technical">
        <div class="box">
            <p>Przeznacznie</p>
            <div>element HTML każdego typu</div>
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
            <div class="link"><a href="#47">none</a></div>
        </div>
        <div class="box">
            <p>Wyjątki initial</p>
            <div class="green">brak</div>
        </div>
        <div class="box">
            <p>Animowanie</p>
            <div class="red">nie</div>
        </div>
    </div>
        `
    },
    {
        header: "none",
        content: "none",
        code: code('', 'color2', 'animation-fill-mode', animations[50].animationFillMode, 'value', true, 'color', true, defaultDuration, true, '3')
    },
    {
        header: "backwards",
        content: "backwards",
        code: code('', 'color2', 'animation-fill-mode', animations[51].animationFillMode, 'value', true, 'color', true, defaultDuration, true, '3')
    },
    {
        header: "forwards",
        content: "forwards",
        code: code('', 'color2', 'animation-fill-mode', animations[52].animationFillMode, 'value', true, 'color', true, defaultDuration, true, '3')
    },
    {
        header: "both",
        content: "both",
        code: code('', 'color2', 'animation-fill-mode', animations[53].animationFillMode, 'value', true, 'color', true, defaultDuration, true, '3')
    },
    {
        header: "sekwencja",
        content: "sekwencja",
        code: code('', 'color2', 'animation-fill-mode', animations[54].animationFillMode, 'value', true, 'move, color', true, defaultDuration, true, '3')
    },
    { mainHeader: "Animation-play-state" },
    {
        header: "Opis właściwości animation-play-state",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-play-state</span> możemy określić <b>stan animacji</b>.</div>`
    },
    {
        header: "Wartości właściwości animation-play-state",
        content: [
            "running", "paused", "sekwencja"
        ]
    },
    {
        header: "Informacje znacznika animation-play-state",
        content: `
        <div class="technical">
        <div class="box">
            <p>Przeznacznie</p>
            <div>element HTML każdego typu</div>
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
            <div class="link"><a href="#55">running</a></div>
        </div>
        <div class="box">
            <p>Wyjątki initial</p>
            <div class="green">brak</div>
        </div>
        <div class="box">
            <p>Animowanie</p>
            <div class="red">nie</div>
        </div>
    </div>
        `
    },
    {
        header: "running",
        content: "running",
        code: `<span class="css-selector">div</span>{
            <span class="css-property">width</span>: <span class="css-number">196px</span>;
            <span class="css-property">height</span>: <span class="css-number">96px</span>;
            <span class="css-property">padding</span>: <span class="css-number">16px</span>;
            <span class="css-property">font-size</span>: <span class="css-number">1.2rem</span>;
            <span class="css-property">background-color</span>: <span class="css-value">#009fff</span>;
            <span class="css-property">aniamtion-name</span>: <span class="css-value">move</span>;
            <span class="css-property">aniamtion-duration</span>: <span class="css-number">4s</span>;
            <span class="css-property">aniamtion-iteration-count</span>: <span class="css-number">infinite</span>;
        }
        <span class="css-selector">div:hover</span>{
            <span class="important"><span class="css-property">aniamtion-play-state</span>: <span class="css-value">running</span>;</span>
        }
        <span class="css-selector">@keyframes</span> move{
            <span class="css-selector">from, to</span>{
                <span class="css-property">transform</span>: <span class="css-value">translateX(<span class="css-number">0</span>)</span>;
            } <span class="css-selector">50%</span>{
                <span class="css-property">transform</span>: <span class="css-value">translateY(<span class="css-number">300px</span>)</span>;
            }
        }`
    },
    {
        header: "paused",
        content: "paused",
        code: `<span class="css-selector">div</span>{
            <span class="css-property">width</span>: <span class="css-number">196px</span>;
            <span class="css-property">height</span>: <span class="css-number">96px</span>;
            <span class="css-property">padding</span>: <span class="css-number">16px</span>;
            <span class="css-property">font-size</span>: <span class="css-number">1.2rem</span>;
            <span class="css-property">background-color</span>: <span class="css-value">#009fff</span>;
            <span class="css-property">aniamtion-name</span>: <span class="css-value">move</span>;
            <span class="css-property">aniamtion-duration</span>: <span class="css-number">4s</span>;
            <span class="css-property">aniamtion-iteration-count</span>: <span class="css-number">infinite</span>;
        }
        <span class="css-selector">div:hover</span>{
            <span class="important"><span class="css-property">aniamtion-play-state</span>: <span class="css-value">paused</span>;</span>
        }
        <span class="css-selector">@keyframes</span> move{
            <span class="css-selector">from, to</span>{
                <span class="css-property">transform</span>: <span class="css-value">translateX(<span class="css-number">0</span>)</span>;
            } <span class="css-selector">50%</span>{
                <span class="css-property">transform</span>: <span class="css-value">translateY(<span class="css-number">300px</span>)</span>;
            }
        }`
    },
    {
        header: "sekwencja",
        content: "sekwencja",
        code: `<span class="css-selector">div</span>{
            <span class="css-property">width</span>: <span class="css-number">196px</span>;
            <span class="css-property">height</span>: <span class="css-number">96px</span>;
            <span class="css-property">padding</span>: <span class="css-number">16px</span>;
            <span class="css-property">font-size</span>: <span class="css-number">1.2rem</span>;
            <span class="css-property">background-color</span>: <span class="css-value">#009fff</span>;
            <span class="css-property">aniamtion-name</span>: <span class="css-value">move, color</span>;
            <span class="css-property">aniamtion-duration</span>: <span class="css-number">4s</span>;
            <span class="css-property">aniamtion-iteration-count</span>: <span class="css-number">infinite</span>;
        }
        <span class="css-selector">div:hover</span>{
            <span class="important"><span class="css-property">aniamtion-play-state</span>: <span class="css-value">running, paused</span>;</span>
        }
        <span class="css-selector">@keyframes</span> move{
            <span class="css-selector">from, to</span>{
                <span class="css-property">transform</span>: <span class="css-value">translateX(<span class="css-number">0</span>)</span>;
            } <span class="css-selector">50%</span>{
                <span class="css-property">transform</span>: <span class="css-value">translateY(<span class="css-number">300px</span>)</span>;
            }
        }
        <span class="css-selector">@keyframes</span> color {
            <span class="css-selector">from, to</span>{
                <span class="css-property">background</span>: <span class="css-value">blue</span>;
            } <span class="css-selector">50%</span>{
                <span class="css-property">background</span>: <span class="css-value">orange</span>;
            }
        }`
    },
    { mainHeader: "Animation" },
    {
        header: "Opis właściwości animation",
        content: `<div>Za pomocą właściwości <span class="css-role">animation</span> możemy określić grupę wartości animacji w jednej komendzie.</div>`
    },
    {
        header: "Wartości właściwości animation",
        content: [
            "grupa", "sekwencja"
        ]
    },
    {
        header: "Informacje znacznika animation",
        content: `
        <div class="technical">
        <div class="box">
            <p>Przeznacznie</p>
            <div>element HTML każdego typu</div>
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
            <div>none 0s ease 0s 1 normal none running</div>
        </div>
        <div class="box">
            <p>Wyjątki initial</p>
            <div class="green">brak</div>
        </div>
        <div class="box">
            <p>Animowanie</p>
            <div class="red">nie</div>
        </div>
    </div>
        `
    },
    {
        header: "grupa",
        content: "grupa",
        code: code('move', '', 'animation', animations[66].animation, 'value', false, '', false, '', false, '')
    },
    {
        header: "sekwencja",
        content: "sekwencja",
        code: code('move2', 'color2', 'animation', animations[67].animation, 'value', false, '', false, '', false, '')
    }
]