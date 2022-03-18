import { code2, transforms, copyText } from "../datatransform"

export const dataperspectiveorigin = [
    {
        header: "Informacje znacznika perspective-origin",
        content: `<div class="technical">
                <div class="box">
                    <p>Opis</p>
                    <div class="description">Za pomocą właściwości <span class="css-role">perspective-origin</span> możemy określić <b>pozycję początkową punktu zbiegu perspektywy</b> interesującego nas elementu HTML. Mowa tu o perspektywie utworzonej za pomocą właściwości <span class="css-role">perspective</span></div>
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
        content: `<div class="pictured">
                    <h2>perspective-origin: <span class="parameter">x</span> y;</h2>
                </div>
                <div>Za pomocą właściwości <b>perspective-origin</b> oraz z góry zdefiniowanego wzorca wartości możemy określić <b>pozycję początkową punktu zbiegu perspektywy</b> interesującego nas elementu HTML.</div>
                <div class="alert alert-info" role="alert">
                <i class="fas fa-exclamation"></i>
                <span>Za pomocą właściwości <b>perspective-origin</b> oraz z góry zdefiniowanego wzorca wartości możemy określić <b>pozycję początkową punktu zbiegu perspektywy</b> interesującego nas elementu HTML.
                Właściwość <b>perspective-origin</b> nie jest funkcją, ponieważ nie posiada nawiasów, wszystkie parametry podajemy bez przecinka. Paramert x jest parametrem wymaganym, a parametry y i z nie są parametrami wymaganymi.</span>
            </div>
            <b>Wartościami parametru x mogą być:</b>
            <ul class="examples">
                <li>jednostki absolutne</li>
                <li>jednostki relatywne</li>
                <li>procenty</li>
                <li>wartości pozycjonujące (bez top oraz bottom) np. right, left, center</li>
            </ul>
            <p>Składnik x określa pozycję początkową punktu zbiegu perspektywy interesującego nas elementu HTML względem lewej krawędzi tego elementu HTML.</p>
        
            <b>Wartościami parametru y mogą być:</b>
            <ul class="examples">
                <li>jednostki absolutne</li>
                <li>jednostki relatywne</li>
                <li>procenty</li>
                <li>wartości pozycjonujące (bez left oraz right) np. top, center, bottom</li>
            </ul>
            <p>Składnik y określa pozycję początkową punktu zbiegu perspektywy interesującego nas elementu HTML względem górnej krawędzi tego elementu HTML.</p>    `,
        code: code2('perspective-origin', 'value', transforms[30].perspectiveOrigin, false, true, true),
        copy: copyText('perspective-origin', transforms[30].perspectiveOrigin, `perspective: 300px;`, true)
    }
]