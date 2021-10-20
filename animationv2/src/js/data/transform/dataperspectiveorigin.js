import { code2, transforms, copyText } from "../datatransform"

export const dataperspectiveorigin = [
    {
        header: "Opis właściwości perspective-origin",
        content: "text"
    },
    {
        header: "Wartości właściwości perspective-origin",
        content: [
            "wzorzec"
        ]
    },
    {
        header: "Informacje znacznika perspective-origin",
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
                    <div>50% 50%></div>
                </div>
                <div class="box">
                    <p>Wyjątki initial</p>
                    <div class="green">brak</div>
                </div>
                <div class="box">
                    <p>Animowanie</p>
                    <div class="green">tak</div>
                </div>
            </div>`
    },
    {
        header: "wzorzec",
        content: "wzorzec",
        code: code2('perspective-origin', 'value', transforms[30].perspectiveOrigin, false, true, true),
        copy: copyText('perspective-origin', transforms[30].perspectiveOrigin, `perspective: 300px;`, true)
    }
]