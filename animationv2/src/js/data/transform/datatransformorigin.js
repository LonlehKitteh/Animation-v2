import Schemat from '../../../images/schemat.png'
import { copyText } from '../datatransform'

export const datatransformorigin = [
    {
        header: "Punkt Zero",
        content: `
            <div class="pictured">
                <h2>transform-origin: <span class="parameter">x</span> y z;</h2>
                <div class="flex"><img src="${Schemat}" alt="transform-origin-sketch" /></div>
            </div>
            <div class="alert alert-info" role="alert">
                <i class="fas fa-exclamation"></i>
                <span>Za pomocą właściwości transform-origin możemy określić w przestrzeni pozycję początkową punktu zero interesującego nas elementu HTML. 
                Właściwość transform-origin nie jest funkcją, ponieważ nie posiada nawiasów, wszystkie parametry podajemy bez przecinka. Paramert x jest parametrem wymaganym, a parametry y i z nie są parametrami wymaganymi.</span>
            </div>
            <b>Wartościami parametru x mogą być:</b>
            <ul class="examples">
                <li>jednostki absolutne</li>
                <li>jednostki relatywne</li>
                <li>procenty</li>
                <li>wartości pozycjonujące (bez top oraz bottom) np. right, left, center</li>
            </ul>
            <p>W przypadku podania wartości dodatnich punkt zero zostanie przesunięty w prawo względem lewej krawędzi. W przypadku podania wartości ujemnych punkt zero zostanie przesunięty w lewo względem prawej krawędzi. Wartości procentowe liczone są względem aktualnego rozmiaru szerokości elementu html.</p>
        
            <b>Wartościami parametru y mogą być:</b>
            <ul class="examples">
                <li>jednostki absolutne</li>
                <li>jednostki relatywne</li>
                <li>procenty</li>
                <li>wartości pozycjonujące (bez left oraz right) np. top, left, bottom</li>
            </ul>
            <p>W przypadku podania wartości dodatnich punkt zero zostanie przesunięty w dół względem górnej krawędzi. W przypadku podania wartości ujemnych punkt zero zostanie przesunięty w górę względem dolnej krawędzi. Wartości procentowe liczone są względem aktualnego rozmiaru wysokości elementu html.</p>
        
            <b>Wartościami parametru z mogą być:</b>
            <ul class="examples">
                <li>jednostki absolutne</li>
                <li>jednostki relatywne</li>
            </ul>
            <p>W przypadku podania wartości dodatnich punkt zero zostanie przesunięty do tyłu względem osi Z. W przypadku podania wartości ujemnych punkt zero zostanie przesunięty do przodu względem osi Z.</p>
    `
    },
    {
        header: "Informacje znacznika transform-origin",
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
                <div>50% 50%</div>
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
        header: "Zastosowanie",
        content: "Właściwość CSS transform-origin służy między innymi do stworzenia rotacji względem punktu zero. Ustawiłem punkt zero w lewym górnym rogu więc cały element obraca się względem niego.",
        code: `<span class="css-selector">div</span>{
        <span class="css-property">width</span>: <span class="css-number">196px</span>;
        <span class="css-property">height</span>: <span class="css-number">96px</span>;
        <span class="css-property">padding</span>: <span class="css-number">16px</span>;
        <span class="css-property">font-size</span>: <span class="css-number">1.2rem</span>;
        <span class="css-property">background-color</span>: <span class="css-value">#009fff</span>;
        <span class="css-property">animation</span>: <span class="css-value">rotation 4s linear infinite</span>
        <span class="important"><span class="css-property">transform-origin</span>: <span class="css-value">left top</span>;</span>
    }

    <span class="css-selector">@keyframes</span> rotation {
        <span class="css-selector">from, to</span>{
            <span css-property>transform</span>: <span class="css-value">rotate(<span class="css-number">0</span>)</span>
        } <span class="css-selector">50%</span>{
            <span css-property>transform</span>: <span class="css-value">rotate(<span class="css-number">180deg</span>)</span>
        }
    }`,
        copy: copyText('animation', 'rotation 4s linear infinite', `transform-origin: left top; 
    }
@keyframes rotation{
    from, to{
        transform: rotate(0)
    }
    50%{
        transform: rotate(180deg)
    }`, false)
    }
]