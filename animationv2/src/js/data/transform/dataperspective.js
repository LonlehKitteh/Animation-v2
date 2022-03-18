import { code2, transforms, copyText } from "../datatransform"

export const dataperspective = [
    {
        header: "Informacje znacznika perspective",
        content: `<div class="technical">
                <div class="box">
                    <p>Opis</p>
                    <div class="description">Za pomocą właściwości <span class="css-role">perspective</span> możemy określić (potrzebny dla przekształceń w przestrzeni 3D) <b>rozmiar perspektywy</b>, w której powinny znaleźć się elementy dzieci interesującego nas elementu HTML, <b>lecz nie on sam</b></div>
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
                    <div class="link"><a href="#s1">none</a></div>
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
        content: `Wartość <b>none</b> jest domyślną wartością właściwości <span class="css-role">perspective</span>. Domyślnie elementy dzieci elementu HTML nie znajdują się w żadnej perspektywie.`,
        code: code2('perspective', 'value', transforms[28].perspective, false, false, true),
        copy: copyText('perspective', transforms[28].perspective, false, true)
    },
    {
        header: "rozmiar",
        content: `Za pomocą właściwości <span class="css-role">perspective</span> oraz <b>dowolnej dodatniej liczby</b> wraz z wybraną jednostką absolutną lub jednostką relatywną możemy określić rozmiar perspektywy, w której powinny znaleźć się elementy dzieci interesującego nas elementu HTML, <b>lecz nie on sam</b>.`,
        code: code2('perspective', 'value', transforms[29].perspective, false, false, true),
        copy: copyText('perspective', transforms[29].perspective, false, true)
    }
]