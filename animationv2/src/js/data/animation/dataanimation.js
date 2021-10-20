import { code, animations, copy } from "../dataanimation"

export const dataanimation = [
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
        content: `<div>Składniki grupy wartości <span class="css-role">animation</span>:</div>
        <ol class="group-elements">
            <li><a href="#s0">name</a></li>
            <li><a href="#s6">duration</a></li>
            <li><a href="#s11">timing-function</a></li>
            <li><a href="#s25">delay</a></li>
            <li><a href="#s30">iteration-count</a></li>
            <li><a href="#s36">direction</a></li>
            <li><a href="#s44">fill-mode</a></li>
            <li><a href="#s52">play-state</a></li>
        </ol>
        <div class="alert alert-info" role="info">
                <i class="fas fa-exclamation"></i>
                <div>Warto wiedzieć, że jeżeli czegoś nie chcemy określać, możemy to pominąć, ponieważ żadna wartość nie jest wymagana.</div>
        </div>
        `,
        code: code('move', '', 'animation', animations[66].animation, 'value', false, '', false, '', false, ''),
        copy: copy(`animation: ${animations[66].animation}`, false, false, false, false)
    },
    {
        header: "sekwencja",
        content: `<div>Za pomocą sekwencji oddzielonych od siebie <b>przecinkiem</b> wartości właściwości <span class="css-role">animation</span> możemy ustalić cechy kilku animacjom jednocześnie.</div>`,
        code: code('move2', 'color2', 'animation', animations[67].animation, 'value', false, '', false, '', false, ''),
        copy: copy(`animation: ${animations[67].animation}`, false, false, false, false, false, true, `@keyframes move {
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