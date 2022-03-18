import { code, defaultDuration, defaultIteration,  animations, copy} from "../dataanimation"

export const dataanimationname = [
    {
        header: "Informacje znacznika animation-name",
        content: `
        <div class="technical">
        <div class="box">
            <p>Opis</p>
            <div class="description">Za pomocą właściwości <span class="css-role">animation-name</span> możemy <b>nazwać</b>, która animacja powinna zostać dodana do elementu HTML</div>
        </div>
        <div class="box">
            <p>Przeznaczenie</p>
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
            <div class="link"><a href="#s1">none</a></div>
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
    }
]