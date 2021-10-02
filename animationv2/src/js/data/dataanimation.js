const defaultDuration = '4s'
const defaultIteration = 'infinite'

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

function code(move, color, name, value, type, animationName, animationNameValue, animationDuration, animationDurationValue, animationIterationCount, animationIterationCountValue) {
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
function copy(bonusElement, animationNameValue, animationDurationValue, animationIteration, seqeunce, color = false, custom = false, customValue){
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
        code: code("move", "", 'aniamtion-name', animations[0].animationName, 'value', false, '', true, defaultDuration, true, defaultIteration),
        copy: copy(animations[0].value, false, 'animation-duration: 4s', 'animation-iteration-count: infinite', false)
    },
    {
        header: "nazwa animacji",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-name</span> oraz nazwy istniejącej animacji utworzonej za pomocą reguły <b>@keyframes</b> możemy dodać animację.`,
        code: code("move", "", "animation-name", animations[1].animationName, "value", false, '', true, defaultDuration, true, defaultIteration),
        copy: copy(animations[1].value, false, 'animation-duration: 4s', 'animation-iteration-count: infinite', false)
    },
    {
        header: "sekwencja",
        content: `<div>Za pomocą sekwencji oddzielonych od siebie przecinkiem wartości właściwości <span class="css-role">animation-name</span> możemy dodać kilka animacji jednocześnie.</div>`,
        code: code('move', 'color', 'aniamtion-name', animations[2].animationName, 'value', false, '', true, defaultDuration, true, defaultIteration),
        copy: copy(animations[2].value, false, 'animation-duration: 4s', 'animation-iteration-count: infinite', true)
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
        <div class="alert alert-danger" role="alert">
                <i class="fas fa-exclamation"></i>
                <span>Warto wiedzieć że:
                <ul class="examples">
                    <li style="border:none">1s = 1000ms</li>
                </ul>
                </span>
        </div>
        `,
        code: code('move', '', 'animation-duration', animations[7].animationDuration, 'number', true, 'move', false, '', true, defaultIteration),
        copy: copy(animations[7].value, 'animation-name: move', false, 'animation-iteration-count: infinite', false)
    },
    {
        header: "sekwencja",
        content: `<div>Za pomocą sekwencji oddzielonych od siebie przecinkiem wartości właściwości <span class="css-role">animation-name</span> możemy dodać <b>kilka</b> animacji jednocześnie.</div>`,
        code: code('move', 'color', 'aniamtion-duration', animations[8].animationDuration, 'number', true, 'move, color', false, '', true, defaultIteration),
        copy: copy(animations[8].value, 'animation-name: move, color', false, 'animation-iteration-count: infinite', true)
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
        content: `<div>Domyślnie tempem wykonywania się animacji elementu HTML jest tempo <span class="css-role">ease</span>. Tempo <span class="css-role">ease</span> od momentu startu ciągle przyspiesza, a następnie wyraźnie zwalnia przed momentem zakończenia.</div>`,
        code: code('move', '', 'animation-timing-function', animations[13].animationTimingFunction, 'value', true, 'move', true, defaultDuration, true, defaultIteration),
        copy: copy(animations[13].value, 'animation-name: move', 'animation-duration: 4s', 'animation-iteration-count: infinite', false)
    },
    {
        header: "ease-in",
        content: `<div>Tempo <span class="css-role">ease-in</span> od momentu wolnego startu ciągle przyspiesza.</div>`,
        code: code('move', '', 'animation-timing-function', animations[14].animationTimingFunction, 'value', true, 'move', true, defaultDuration, true, defaultIteration),
        copy: copy(animations[14].value, 'animation-name: move', 'animation-duration: 4s', 'animation-iteration-count: infinite', false)
    },
    {
        header: "ease-out",
        content: `<div>Tempo <span class="css-role">ease-out</span> od momentu szybkiego startu ciągle zwalnia.</div>`,
        code: code('move', '', 'animation-timing-function', animations[15].animationTimingFunction, 'value', true, 'move', true, defaultDuration, true, defaultIteration),
        copy: copy(animations[15].value, 'animation-name: move', 'animation-duration: 4s', 'animation-iteration-count: infinite', false)
    },
    {
        header: "ease-in-out",
        content: `<div>Tempo <span class="css-role">ease-in-out</span> od momentu wolnego startu płynnie przyspiesza do momentu wolnego zakończenia.</div>`,
        code: code('move', '', 'animation-timing-function', animations[16].animationTimingFunction, 'value', true, 'move', true, defaultDuration, true, defaultIteration),
        copy: copy(animations[16].value, 'animation-name: move', 'animation-duration: 4s', 'animation-iteration-count: infinite', false)
    },
    {
        header: "linear",
        content: `<div>Tempo <span class="css-role">linear</span> jest tempem <b>stałym</b>.</div>`,
        code: code('move', '', 'animation-timing-function', animations[17].animationTimingFunction, 'value', true, 'move', true, defaultDuration, true, defaultIteration),
        copy: copy(animations[17].value, 'animation-name: move', 'animation-duration: 4s', 'animation-iteration-count: infinite', false)
    },
    {
        header: "step-start",
        content: `<div>Tempo <span class="css-role">step-start</span> jest tempem składającym się z tylu <b>klatek</b> (<b>z pominięciem pierwszej klatki</b>) z ilu selektorów składa się reguła <span class="css-role">@keyframes</span> tworząca animację interesującego nas elementu HTML.
        Zauważ, że kolor <b>coral</b> się nie pokazuje. Kolor <b>green</b> jest widoczny trochę dłużej, ponieważ następna klatka jest wycięta.</div>`,
        code: code( '', 'color2', 'animation-timing-function', animations[18].animationTimingFunction, 'value', true, 'color', true, defaultDuration, true, defaultIteration),
        copy: copy(animations[18].value, 'animation-name: color', 'animation-duration: 4s', 'animation-iteration-count: infinite', false, true)
    },
    {
        header: "step-end",
        content: `<div>Tempo <span class="css-role">step-end</span> jest tempem składającym się z tylu <b>klatek</b> (<b>z pominięciem ostatniej klatki</b>) z ilu selektorów składa się reguła <span class="css-role">@keyframes</span> tworząca animację interesującego nas elementu HTML.
        Zauważ, że kolor <b>green</b> się nie pokazuje. Kolor <b>pink</b> jest widoczny trochę dłużej, ponieważ następna klatka jest wycięta.</div>`,
        code: code('', 'color2', 'animation-timing-function', animations[19].animationTimingFunction, 'value', true, 'color', true, defaultDuration, true, defaultIteration),
        copy: copy(animations[19].value, 'animation-name: color', 'animation-duration: 4s', 'animation-iteration-count: infinite', false, true)
    },
    {
        header: "steps()",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-timing-function</span> oraz funkcji <b>steps()</b> możemy sprawić, że jest tempem stałym składającym się z <b>konkretnej ilości klatek</b>.</div>`,
        code: code('move', '', 'animation-timing-function', animations[20].animationTimingFunction, 'value', true, 'move', true, defaultDuration, true, defaultIteration),
        copy: copy(animations[20].value, 'animation-name: move', 'animation-duration: 4s', 'animation-iteration-count: infinite', false)
    },
    {
        header: "cubic-bezier()",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-timing-function</span> oraz funkcji <b>cubic-bezier()</b> możemy sprawić, że tempem wykonywania się animacji elementu HTML będzie tempo utworzone na podstawie <b>KRZYWEJ BEZIERA</b>.</div>`,
        code: code('move', '', 'animation-timing-function', animations[21].animationTimingFunction, 'value', true, 'move', true, defaultDuration, true, defaultIteration),
        copy: copy(animations[21].value, 'animation-name: move', 'animation-duration: 4s', 'animation-iteration-count: infinite', false)
    },
    {
        header: "sekwencja",
        content: `<div>Za pomocą sekwencji oddzielonych od siebie <b>przecinkiem</b> wartości właściwości <span class="css-role">animation-timing-function</span> możemy dodać kilka temp animacji jednocześnie.</div>`,
        code: code('move', 'color', 'animation-timing-function', animations[22].animationTimingFunction, 'value', true, 'move, color', true, defaultDuration, true, defaultIteration),
        copy: copy(animations[22].value, 'animation-name: move, color', 'animation-duration: 4s', 'animation-iteration-count: infinite', true)
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
        content: `<div>Za pomocą właściwości <span class="css-role">animation-delay</span> możemy określić <b>czas trwania opónienia</b> animacji elementu HTML.</div>`,
        code: code('move', '', 'animation-delay', animations[28].animationDelay, 'number', true, 'move', true, defaultDuration, true, defaultIteration),
        copy: copy(animations[29].value, 'animation-name: move', 'animation-duration: 4s', 'animation-iteration-count: infinite', false)
    },
    {
        header: "sekwencja",
        content: `<div>Za pomocą sekwencji oddzielonych od siebie <b>przecinkiem</b> wartości właściwości <span class="css-role">animation-duration</span> możemy ustawić <b>czas</b> kilku animacjom jednocześnie.</div>`,
        code: code('move', 'color', 'animation-delay', animations[29].animationDelay, 'number', true, 'move, color', true, defaultDuration, true, defaultIteration),
        copy: copy(animations[29].value, 'animation-name: move, color', 'animation-duration: 4s', 'animation-iteration-count: infinite', true)
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
        content: `<div>Za pomocą właściwości <span class="css-role">animation-iteration-count</span> wraz z dowolną liczbą nieujemną możemy określić <b>ilość powtórzeń</b> wykonania się animacji interesującego nas elementu HTML.</div>`,
        code: code('move', '', 'animation-iteration-count', animations[34].animationIterationCount, 'number', true, 'move', true, defaultDuration, false, ''),
        copy: copy(animations[34].value, 'animation-name: move', 'animation-duration: 4s', false, false)
    },
    {
        header: "infinite",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-iteration-count</span> oraz wartości infinite możemy określić <b>nieskończoną ilość powtórzeń</b> animacji.</div>`,
        code: code('move', '', 'animation-iteration-count', animations[35].animationIterationCount, 'number', true, 'move', true, defaultDuration, false, ''),
        copy: copy(animations[35].value, 'animation-name: move', 'animation-duration: 4s', false, false)
    },
    {
        header: "sekwencja",
        content: `<div>Za pomocą sekwencji oddzielonych od siebie przecinkiem wartości właściwości <span class="css-role">animation-iteration-count</span> możemy dodać <b>kilka różnych powtórzeń animacji</b> jednocześnie</div>`,
        code: code('move', 'color', 'animation-iteration-count', animations[36].animationIterationCount, 'number', true, 'move, color', true, defaultDuration, false, ''),
        copy: copy(animations[36].value, 'animation-name: move, color', 'animation-duration: 4s', false, true)
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
        content: `<div>Wartość <b>normal</b> jest domyślną wartością właściwości <span class="css-role">animation-direction</span>. Domyślnie kierunek animacji następuje <b>od lewej do prawej</b>.</div>`,
        code: code('move2', '', 'animation-direction', animations[41].animationDirection, 'value', true, 'move', true, '2s', true, defaultIteration),
        copy: copy(animations[41].value, 'animation-name: move', 'animation-duration: 4s', 'animation-iteration-count: infinite', false, false, true, `@keyframes move {
    from{
        transform: translateX(0);
    } to{
        transform: translateX(300px);
    }
}`)
    },
    {
        header: "reverse",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-direcetion</span> oraz wartości <b>reverse</b> możemy sprawić, że kierunek animacji będzię następować <b>od prawej do lewej</b>.</div>`,
        code: code('move2', '', 'animation-direction', animations[42].animationDirection, 'value', true, 'move', true, '2s', true, defaultIteration),
        copy: copy(animations[42].value, 'animation-name: move', 'animation-duration: 4s', 'animation-iteration-count: infinite', false, false, true, `@keyframes move {
    from{
        transform: translateX(0);
    } to{
        transform: translateX(300px);
    }
}`)
    },
    {
        header: "alternate",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-direcetion</span> oraz wartości <b>alternate</b> możemy sprawić, że kierunek animacji będzię następować <b>od lewej do prawej i będze zawracać</b>.</div>`,
        code: code('move2', '', 'animation-direction', animations[43].animationDirection, 'value', true, 'move', true, '2s', true, defaultIteration),
        copy: copy(animations[43].value, 'animation-name: move', 'animation-duration: 4s', 'animation-iteration-count: infinite', false, false, true, `@keyframes move {
    from{
        transform: translateX(0);
    } to{
        transform: translateX(300px);
    }
}`)
    },
    {
        header: "alternate-reverse",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-direcetion</span> oraz wartości <b>alternate-reverse</b> możemy sprawić, że kierunek animacji będzie następować <b>od prawej do lewej i będzie zawracać</b>.</div>`,
        code: code('move2', '', 'animation-direction', animations[44].animationDirection, 'value', true, 'move', true, '2s', true, defaultIteration),
        copy: copy(animations[44].value, 'animation-name: move', 'animation-duration: 4s', 'animation-iteration-count: infinite', false, false, true, `@keyframes move {
    from{
        transform: translateX(0);
    } to{
        transform: translateX(300px);
    }
}`)
    },
    {
        header: "sekwencja",
        content: `<div>Za pomocą sekwencji oddzielonych od siebie <b>przecinkiem</b> wartości właściwości <span class="css-role">animation-direction</span> możemy dodać <b>kilka różnych kierunków</b> animacji jednocześnie.</div>`,
        code: code('move2', 'color2', 'animation-direction', animations[45].animationDirection, 'value', true, 'move, color', true, '2s', true, defaultIteration),
        copy: copy(animations[45].value, 'animation-name: move, color', 'animation-duration: 4s', 'animation-iteration-count: infinite', false, false, true, `@keyframes move {
    from{
        transform: translateX(0);
    } to{
        transform: translateX(300px);
    }
}
@keyframes color {
    from{
        background: coral;
    } 25%{
        background: blue;
    } 50%{
        background: pink;
    } to{
        background: green;
    }
}`)
    },
    { mainHeader: "Animation-fill-mode" },
    {
        header: "Opis właściwości animation-fill-mode",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-fill-mode</span> możemy dodać <b>dodatkowe właściwości</b> do elementu HTML.</div>
        <div class="alert alert-info" role="alert">
                <i class="fas fa-exclamation"></i>
                <span>W tej części dodałem przycisk który odpala animację, żebyście mogli lepiej zrozumieć co tutaj się będzie działo</span>
        </div>
        `
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
            <div class="link"><a href="#s47">none</a></div>
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
        content: `<div>Wartość <b>none</b> jest <b>domyślną</b> wartością właściwości <span class="css-role">animation-fill-mode</span>. Domyślnie element html nie posiada dodatkowych właściwości.</div>`,
        code: code('', 'color2', 'animation-fill-mode', animations[50].animationFillMode, 'value', true, 'color', true, defaultDuration, true, '3'),
        copy: copy(animations[50].value, 'animation-name: color', 'animation-duration: 4s', 'animation-iteration-count: 3', false, true)
    },
    {
        header: "backwards",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-fill-mode</span> oraz wartości <b>backwards</b> możemy określić, że <b>przed momentem rozpoczęcia pierwszego kroku</b> animacji, element HTML otrzyma wszystkie właściwości CSS występujące w <b>pierwszym selektorze reguły @keyframes</b> tworzącej animację elementu HTML. Zauważ, że nasz przycisk jest koloru <b>coral</b> a nie <b>blue</b>.</div>`,
        code: code('', 'color2', 'animation-fill-mode', animations[51].animationFillMode, 'value', true, 'color', true, defaultDuration, true, '3'),
        copy: copy(animations[51].value, 'animation-name: color', 'animation-duration: 4s', 'animation-iteration-count: 3', false, true)
    },
    {
        header: "forwards",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-fill-mode</span> oraz wartości <b>forwards</b> możemy określić, że po zakończeniu animacji, element HTML otrzyma wszystkie właściwości CSS występujące <b>w ostatnim selektorze reguły @keyframes</b> tworzącej animację elementu HTML. Zauważ, że kolor diva to <b>blue</b> ale po zakończeniu animacji bedzię miał kolor <b>green</b>.</div>`,
        code: code('', 'color2', 'animation-fill-mode', animations[52].animationFillMode, 'value', true, 'color', true, defaultDuration, true, '3'),
        copy: copy(animations[52].value, 'animation-name: color', 'animation-duration: 4s', 'animation-iteration-count: 3', false, true)
    },
    {
        header: "both",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-fill-mode</span> oraz wartości <b>both</b> możemy określić, że <b>przed rozpoczęciem i po zakończeniu animacji</b>, element HTML otrzyma wszystkie właściwości CSS występujące w <b>pierwszym i ostatnim selektorze reguły @keyframes</b> tworzącej animację elementu HTML. Zauważ, że przed wykonaniem animacji div ma kolor <b>coral</b> a po wykonaniu animacji ma kolor <b>green</b>.</div>`,
        code: code('', 'color2', 'animation-fill-mode', animations[53].animationFillMode, 'value', true, 'color', true, defaultDuration, true, '3'),
        copy: copy(animations[53].value, 'animation-name: color', 'animation-duration: 4s', 'animation-iteration-count: 3', false, true)
    },
    {
        header: "sekwencja",
        content: `<div>Za pomocą sekwencji oddzielonych od siebie <b>przecinkiem</b> wartości właściwości <span class="css-role">animation-fill-mode</span> możemy dodać kilka animacji jednocześnie. Zauważ, że przed wykonaniem animacji div ma kolor <b>coral</b> a po wykonaniu animacji ma kolor <b>green</b>.</div>`,
        code: code('move', 'color2', 'animation-fill-mode', animations[54].animationFillMode, 'value', true, 'move, color', true, defaultDuration, true, '3'),
        copy: copy(animations[54].value, 'animation-name: move, color', 'animation-duration: 4s', 'animation-iteration-count: 3', false, false, true, `@keyframes move {
    from, to{
        transform: translateX(0);
    } 50%{
        transform: translateX(300px);
    }
}
@keyframes color {
    from{
        background: coral;
    } 25%{
        background: blue;
    } 50%{
        background: pink;
    } to{
        background: green;
    }
}`)
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
        content: `<div>Wartość <b>running</b> jest domyślną wartością właściwości <span class="css-role">animation-play-state</span>. Domyślnie po dodaniu pseudoklasy <b>:hover</b> element div <b>nie zatrzymuje się po najechaniu myszką</b> na element div.</div>`,
        code: `<span class="css-selector">div</span>{
    <span class="css-property">width</span>: <span class="css-number">196px</span>;
    <span class="css-property">height</span>: <span class="css-number">96px</span>;
    <span class="css-property">padding</span>: <span class="css-number">16px</span>;
    <span class="css-property">font-size</span>: <span class="css-number">1.2rem</span>;
    <span class="css-property">background-color</span>: <span class="css-value">blue</span>;
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
}`,
        copy: `div{
    width: 196px;
    height: 96px;
    padding: 16px;
    font-size: 1.2rem;
    background-color: blue;
    aniamtion-name: move;
    aniamtion-duration: 4s;
    aniamtion-iteration-count: infinite;
}
div:hover{
    aniamtion-play-state: running;
}
@keyframes move{
    from, to{
        transform: translateX(0);
    } 50%{
        transform: translateY(300px);
    }
}`
    },
    {
        header: "paused",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-play-state</span> oraz wartości <b>paused</b> możemy określić, że po najechaniu myszką na element div <b>animacja się zatrzyma</b>.</div>`,
        code: `<span class="css-selector">div</span>{
    <span class="css-property">width</span>: <span class="css-number">196px</span>;
    <span class="css-property">height</span>: <span class="css-number">96px</span>;
    <span class="css-property">padding</span>: <span class="css-number">16px</span>;
    <span class="css-property">font-size</span>: <span class="css-number">1.2rem</span>;
    <span class="css-property">background-color</span>: <span class="css-value">blue</span>;
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
}`,
        copy:`div{
    width: 196px;
    height: 96px;
    padding: 16px;
    font-size: 1.2rem;
    background-color: blue;
    aniamtion-name: move;
    aniamtion-duration: 4s;
    aniamtion-iteration-count: infinite;
}
div:hover{
    aniamtion-play-state: paused;
}
@keyframes move{
    from, to{
        transform: translateX(0);
    } 50%{
        transform: translateY(300px);
    }
}`
    },
    {
        header: "sekwencja",
        content: `<div>Za pomocą sekwencji oddzielonych od siebie <b>przecinkiem</b> wartości właściwości <span class="css-role">animation-play-state</span> możemy określić zachowanie elementu div z pseudoklasą <b>:hover</b> na kilku animacjach jednocześnie.</div>`,
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
}`,
        copy: `div{
    width: 196px;
    height: 96px;
    padding: 16px;
    font-size: 1.2rem;
    background-color: #009fff;
    aniamtion-name: move, color;
    aniamtion-duration: 4s;
    aniamtion-iteration-count: infinite;
}
div:hover{
    aniamtion-play-state: running, paused;
}
@keyframes move{
    from, to{
        transform: translateX(0);
    } 50%{
        transform: translateY(300px);
    }
}
@keyframes color {
    from, to{
        background: blue;
    } 50%{
        background: orange;
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