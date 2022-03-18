import { code2, copyText, transforms } from "../datatransform"

export const datatransformstyle = [
    {
        header: "Informacje znacznika transform-style",
        content: `<div class="technical">
                <div class="box">
                    <p>Opis</p>
                    <div class="description">Za pomocą właściwości <span class="css-role">transform-style</span> możemy określić czy elementy dzieci interesującego nas elementu HTML powinny znaleźć się w <b>tej samej perspektywie</b> co ich element rodzic.</div>
                </div>
                <div class="box">
                    <p>Przeznaczenie</p>
                    <div>element HTML każdego typu, lecz nie element HTML typu <b>table-column-group, table-column</b></div>
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
                    <div class="link"><a href="#s1">flat</a></div>
                </div>
                <div class="box">
                    <p>Wyjątki initial</p>
                    <div class="green">brak</div>
                </div>
                <div class="box">
                    <p>Animowanie</p>
                    <div class="green">tak (animacja schodkowa)</div>
                </div>
            </div>`
    },
    {
        header: "flat",
        content: `Wartość <b>flat</b> jest domyślną wartością właściwości transform-style. Domyślnie elementy dzieci elementu HTML <b>nie znajdują</b> się w tej samej perspektywie co ich element rodzic.`,
        code: code2('transform-style', 'value', transforms[24].transformStyle, true, false, true),
        copy: copyText('transform-style', transforms[24].transformStyle, `transform: perspective(300px) rotateY(10deg);`, true)
    },
    {
        header: "preserve-3d",
        content: `Za pomocą wartości <b>preserve-3d</b> właściwości transform-style możemy sprawić, że elementy dzieci interesującego nas elementu HTML <b>znajdą się</b> w tej samej perspektywie co ich element rodzic.`,
        code: code2('transform-style', 'value', transforms[25].transformStyle, true, false, true),
        copy: copyText('transform-style', transforms[25].transformStyle, `transform: perspective(300px) rotateY(10deg);`, true)
    }
]