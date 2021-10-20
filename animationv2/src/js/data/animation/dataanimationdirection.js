import { code, defaultIteration, animations, copy } from "../dataanimation"

export const dataanimationdirection = [
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
    }
]