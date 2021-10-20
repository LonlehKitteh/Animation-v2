import { code, defaultIteration, animations, copy } from "../dataanimation"

export const dataanimationduration = [
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
    }
]