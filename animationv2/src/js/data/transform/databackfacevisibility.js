export const databackfacevisibility = [
    {
        header: "Informacje znacznika backface-visibility",
        content: `<div class="technical">
                <div class="box">
                    <p>Opis</p>
                    <div class="description">Za pomocą właściwości <span class="css-role">backface-visibility</span> możemy określić <b>widzialność</b> tylnej strony interesującego nas elementu HTML.</div>
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
                    <div class="link"><a href="#s1">visible</a></div>
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
        header: "visible",
        content: `Wartość <b>visible</b> jest domyślną wartością właściwości <span class="css-role">backface-visibility</span>. Domyślnie tylna strona elementu HTML jest <b>widzialna</b>.`,
        code: `<span class="css-selector">div</span>{
    <span class="css-property">animation</span>: <span class="css-value">moja-animacja-1 5s linear infinite</span>;
    <span class="css-property">text-align</span>: <span class="css-value">center</span>;
    <span class="css-property">width</span>: <span class="css-number">300px</span>;
    <span class="css-property">height</span>: <span class="css-number">300px</span>;
    <span class="css-property">background-color</span>: <span class="css-value">coral</span>;
    <span class="important"><span class="css-property">backface-visibility</span>: <span class="css-value">visible</span>;</span>
}

<span class="css-selector">@keyframes</span> moja-animacja-1 {
    <span class="css-selector">0%</span>{
        <span class="css-property">transform</span>: <span class="css-value">perspective(<span class="css-number">300px</span>) rotateY(<span class="css-number">0</span>)</span>;
    } <span class="css-selector">100%</span>{
        <span class="css-property">transform</span>: <span class="css-value">perspective(<span class="css-number">300px</span>) rotateY(<span class="css-number">360deg</span>)</span>;
    }
}`,
    copy:`
div{
    animation: moja-animacja-1 5s linear infinite;
    text-align: center;
    width: 300px;
    height: 300px;
    background-color: coral;
    backface-visibility: visible;
}

@keyframes moja-animacja-1 {
    0%{
        transform: perspective(300px) rotateY(0);
    } 100%{
        transform: perspective(300px) rotateY(360deg);
    }
}`
    },
    {
        header: "hidden",
        content: `Za pomocą wartości <b>hidden</b> właściwości <span class="css-role">backface-visibility</span> możemy sprawić, że tylna strona interesującego nas elementu HTML stanie się <b>niewidzialna</b>.`,
        code: `<span class="css-selector">div</span>{
    <span class="css-property">animation</span>: <span class="css-value">moja-animacja-1 5s linear infinite</span>;
    <span class="css-property">text-align</span>: <span class="css-value">center</span>;
    <span class="css-property">width</span>: <span class="css-number">300px</span>;
    <span class="css-property">height</span>: <span class="css-number">300px</span>;
    <span class="css-property">background-color</span>: <span class="css-value">coral</span>;
    <span class="important"><span class="css-property">backface-visibility</span>: <span class="css-value">hidden</span>;</span>
}

<span class="css-selector">@keyframes</span> moja-animacja-1 {
    <span class="css-selector">0%</span>{
        <span class="css-property">transform</span>: <span class="css-value">perspective(<span class="css-number">300px</span>) rotateY(<span class="css-number">0</span>)</span>;
    } <span class="css-selector">100%</span>{
        <span class="css-property">transform</span>: <span class="css-value">perspective(<span class="css-number">300px</span>) rotateY(<span class="css-number">360deg</span>)</span>;
    }
}`,
        copy:`
div{
    animation: moja-animacja-1 5s linear infinite;
    text-align: center;
    width: 300px;
    height: 300px;
    background-color: coral;
    backface-visibility: hidden;
}

@keyframes moja-animacja-1 {
    0%{
        transform: perspective(300px) rotateY(0);
    } 100%{
        transform: perspective(300px) rotateY(360deg);
    }
}`
    }
]