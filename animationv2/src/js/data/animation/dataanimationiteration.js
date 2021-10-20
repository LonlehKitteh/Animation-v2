import { code, defaultDuration, animations, copy } from "../dataanimation"

export const dataanimationiteration = [
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
    }
]