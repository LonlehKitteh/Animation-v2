import Schemat from '../../../images/schemat.png'
import { copyText } from '../datatransform'

export const datatransformorigin = [
    {
        header: "Punkt Zero",
        content: `
            <div class="pictured schemat">
                <h2>transform-origin: <span class="parameter">x</span> y;</h2>
                <img src="${Schemat}" alt="transform-origin-sketch" />
            </div>
            <div class="alert alert-info" role="alert">
                <i class="fas fa-exclamation"></i>
                <span>Za pomocą właściwości <b>transform-origin</b> możemy określić w przestrzeni pozycję początkową <b>punktu zero</b> interesującego nas elementu HTML. 
                Właściwość <b>transform-origin</b> nie jest funkcją, ponieważ nie posiada nawiasów, wszystkie parametry podajemy bez przecinka. Paramert <b>x</b> jest parametrem wymaganym, a parametry <b>y</b> nie są parametrami wymaganymi.</span>
            </div>
            <b>Wartościami parametru x mogą być:</b>
            <ul class="examples">
                <li>jednostki absolutne</li>
                <li>jednostki relatywne</li>
                <li>procenty</li>
                <li>wartości pozycjonujące (bez top oraz bottom) np. right, left, center</li>
            </ul>
        
            <b>Wartościami parametru y mogą być:</b>
            <ul class="examples">
                <li>jednostki absolutne</li>
                <li>jednostki relatywne</li>
                <li>procenty</li>
                <li>wartości pozycjonujące (bez left oraz right) np. top, center, bottom</li>
            </ul>`
    },
    {
        header: "Informacje znacznika transform-origin",
        content: `<div class="technical">
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
        content: `Właściwość CSS <span class="css-role">transform-origin</span> służy między innymi do stworzenia rotacji względem <b>punktu zero</b>. Ustawiłem <b>punkt zero</b> w lewym górnym rogu więc cały element obraca się względem niego.`,
        code: `<span class="css-selector">div</span>{
        <span class="css-property">width</span>: <span class="css-number">196px</span>;
        <span class="css-property">height</span>: <span class="css-number">96px</span>;
        <span class="css-property">padding</span>: <span class="css-number">16px</span>;
        <span class="css-property">font-size</span>: <span class="css-number">1.2rem</span>;
        <span class="css-property">background-color</span>: <span class="css-value">#009fff</span>;
        <span class="css-property">animation</span>: <span class="css-value">rotation 4s linear infinite</span>;
        <span class="important"><span class="css-property">transform-origin</span>: <span class="css-value">center bottom</span>;</span>
    }

    <span class="css-selector">@keyframes</span> rotation {
        <span class="css-selector">from, to</span>{
            <span class="css-property">transform</span>: <span class="css-value">rotate(<span class="css-number">0</span>)</span>;
        } <span class="css-selector">50%</span>{
            <span class="css-property">transform</span>: <span class="css-value">rotate(<span class="css-number">180deg</span>)</span>;
        }
    }`,
        copy: copyText('animation', 'rotation 4s linear infinite', `transform-origin: center bottom; 
    }
@keyframes rotation{
    from, to{
        transform: rotate(0);
    }
    50%{
        transform: rotate(180deg);
    }`, false)
    }
]