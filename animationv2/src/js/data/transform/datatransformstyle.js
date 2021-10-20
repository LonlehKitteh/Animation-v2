import { code2, copyText, transforms } from "../datatransform"

export const datatransformstyle = [
    {
        header: "Opis właściwości transform-style",
        content: "text"
    },
    {
        header: "Wartości właściwości transform-style",
        content: [
            "flat", "preserve-3d"
        ]
    },
    {
        header: "Informacje znacznika transform-style",
        content: `<div class="technical">
                <div class="box">
                    <p>Przeznacznie</p>
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
                    <div class="link"><a href="#s32">flat</a></div>
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
        content: "flat",
        code: code2('transform-style', 'value', transforms[24].transformStyle, true, false, true),
        copy: copyText('transform-style', transforms[24].transformStyle, `transform: perspective(300px) rotateY(10deg);`, true)
    },
    {
        header: "preserve-3d",
        content: "preserve-3d",
        code: code2('transform-style', 'value', transforms[25].transformStyle, true, false, true),
        copy: copyText('transform-style', transforms[25].transformStyle, `transform: perspective(300px) rotateY(10deg);`, true)
    }
]