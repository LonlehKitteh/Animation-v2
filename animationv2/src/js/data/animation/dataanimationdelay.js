import { code, defaultDuration, defaultIteration,  animations, copy} from "../dataanimation"

export const dataanimationdelay = [
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
    }
]