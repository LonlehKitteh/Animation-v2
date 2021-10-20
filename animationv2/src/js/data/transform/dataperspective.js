import { code2, transforms, copyText } from "../datatransform"

export const dataperspective = [
    {
        header: "Opis właściwości perspective",
        content: "text"
    },
    {
        header: "Wartości właściwości perspective",
        content: [
            "none", "rozmiar"
        ]
    },
    {
        header: "Informacje znacznika perspective",
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
                    <div class="link"><a href="#s42">none</a></div>
                </div>
                <div class="box">
                    <p>Wyjątki initial</p>
                    <div class="green">brak</div>
                </div>
                <div class="box">
                    <p>Animowanie</p>
                    <div class="green">tak, lecz tylko rozmiar</div>
                </div>
            </div>`
    },
    {
        header: "none",
        content: "none",
        code: code2('perspective', 'value', transforms[28].perspective, false, false, true),
        copy: copyText('perspective', transforms[28].perspective, false, true)
    },
    {
        header: "rozmiar",
        content: "rozmiar",
        code: code2('perspective', 'value', transforms[29].perspective, false, false, true),
        copy: copyText('perspective', transforms[29].perspective, false, true)
    }
]