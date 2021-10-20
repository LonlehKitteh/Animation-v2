import { code, defaultDuration, defaultIteration, animations, copy } from "../dataanimation"

export const dataanimationtimingfunction = [
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
        code: code('', 'color2', 'animation-timing-function', animations[18].animationTimingFunction, 'value', true, 'color', true, defaultDuration, true, defaultIteration),
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
    }
]