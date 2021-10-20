import { code, defaultDuration, animations, copy } from "../dataanimation"

export const dataanimationfillmode = [
    {
        header: "Opis właściwości animation-fill-mode",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-fill-mode</span> możemy dodać <b>dodatkowe właściwości</b> do elementu HTML.</div>
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
    }
]