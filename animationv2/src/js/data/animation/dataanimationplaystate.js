export const dataanimationplaystate = [
    {
        header: "Opis właściwości animation-play-state",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-play-state</span> możemy określić <b>stan animacji</b>.</div>`
    },
    {
        header: "Wartości właściwości animation-play-state",
        content: [
            "running", "paused", "sekwencja"
        ]
    },
    {
        header: "Informacje znacznika animation-play-state",
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
            <div class="link"><a href="#55">running</a></div>
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
        header: "running",
        content: `<div>Wartość <b>running</b> jest domyślną wartością właściwości <span class="css-role">animation-play-state</span>. Domyślnie po dodaniu pseudoklasy <b>:hover</b> element div <b>nie zatrzymuje się po najechaniu myszką</b> na element div.</div>`,
        code: `<span class="css-selector">div</span>{
    <span class="css-property">width</span>: <span class="css-number">196px</span>;
    <span class="css-property">height</span>: <span class="css-number">96px</span>;
    <span class="css-property">padding</span>: <span class="css-number">16px</span>;
    <span class="css-property">font-size</span>: <span class="css-number">1.2rem</span>;
    <span class="css-property">background-color</span>: <span class="css-value">blue</span>;
    <span class="css-property">aniamtion-name</span>: <span class="css-value">move</span>;
    <span class="css-property">aniamtion-duration</span>: <span class="css-number">4s</span>;
    <span class="css-property">aniamtion-iteration-count</span>: <span class="css-number">infinite</span>;
}
<span class="css-selector">div:hover</span>{
    <span class="important"><span class="css-property">aniamtion-play-state</span>: <span class="css-value">running</span>;</span>
}
<span class="css-selector">@keyframes</span> move{
    <span class="css-selector">from, to</span>{
        <span class="css-property">transform</span>: <span class="css-value">translateX(<span class="css-number">0</span>)</span>;
    } <span class="css-selector">50%</span>{
        <span class="css-property">transform</span>: <span class="css-value">translateY(<span class="css-number">300px</span>)</span>;
    }
}`,
        copy: `div{
    width: 196px;
    height: 96px;
    padding: 16px;
    font-size: 1.2rem;
    background-color: blue;
    aniamtion-name: move;
    aniamtion-duration: 4s;
    aniamtion-iteration-count: infinite;
}
div:hover{
    aniamtion-play-state: running;
}
@keyframes move{
    from, to{
        transform: translateX(0);
    } 50%{
        transform: translateY(300px);
    }
}`
    },
    {
        header: "paused",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-play-state</span> oraz wartości <b>paused</b> możemy określić, że po najechaniu myszką na element div <b>animacja się zatrzyma</b>.</div>`,
        code: `<span class="css-selector">div</span>{
    <span class="css-property">width</span>: <span class="css-number">196px</span>;
    <span class="css-property">height</span>: <span class="css-number">96px</span>;
    <span class="css-property">padding</span>: <span class="css-number">16px</span>;
    <span class="css-property">font-size</span>: <span class="css-number">1.2rem</span>;
    <span class="css-property">background-color</span>: <span class="css-value">blue</span>;
    <span class="css-property">aniamtion-name</span>: <span class="css-value">move</span>;
    <span class="css-property">aniamtion-duration</span>: <span class="css-number">4s</span>;
    <span class="css-property">aniamtion-iteration-count</span>: <span class="css-number">infinite</span>;
}
<span class="css-selector">div:hover</span>{
    <span class="important"><span class="css-property">aniamtion-play-state</span>: <span class="css-value">paused</span>;</span>
}
<span class="css-selector">@keyframes</span> move{
    <span class="css-selector">from, to</span>{
        <span class="css-property">transform</span>: <span class="css-value">translateX(<span class="css-number">0</span>)</span>;
    } <span class="css-selector">50%</span>{
        <span class="css-property">transform</span>: <span class="css-value">translateY(<span class="css-number">300px</span>)</span>;
    }
}`,
        copy:`div{
    width: 196px;
    height: 96px;
    padding: 16px;
    font-size: 1.2rem;
    background-color: blue;
    aniamtion-name: move;
    aniamtion-duration: 4s;
    aniamtion-iteration-count: infinite;
}
div:hover{
    aniamtion-play-state: paused;
}
@keyframes move{
    from, to{
        transform: translateX(0);
    } 50%{
        transform: translateY(300px);
    }
}`
    },
    {
        header: "sekwencja",
        content: `<div>Za pomocą sekwencji oddzielonych od siebie <b>przecinkiem</b> wartości właściwości <span class="css-role">animation-play-state</span> możemy określić zachowanie elementu div z pseudoklasą <b>:hover</b> na kilku animacjach jednocześnie.</div>`,
        code: `<span class="css-selector">div</span>{
    <span class="css-property">width</span>: <span class="css-number">196px</span>;
    <span class="css-property">height</span>: <span class="css-number">96px</span>;
    <span class="css-property">padding</span>: <span class="css-number">16px</span>;
    <span class="css-property">font-size</span>: <span class="css-number">1.2rem</span>;
    <span class="css-property">background-color</span>: <span class="css-value">#009fff</span>;
    <span class="css-property">aniamtion-name</span>: <span class="css-value">move, color</span>;
    <span class="css-property">aniamtion-duration</span>: <span class="css-number">4s</span>;
    <span class="css-property">aniamtion-iteration-count</span>: <span class="css-number">infinite</span>;
}
<span class="css-selector">div:hover</span>{
    <span class="important"><span class="css-property">aniamtion-play-state</span>: <span class="css-value">running, paused</span>;</span>
}
<span class="css-selector">@keyframes</span> move{
    <span class="css-selector">from, to</span>{
        <span class="css-property">transform</span>: <span class="css-value">translateX(<span class="css-number">0</span>)</span>;
    } <span class="css-selector">50%</span>{
        <span class="css-property">transform</span>: <span class="css-value">translateY(<span class="css-number">300px</span>)</span>;
    }
}
<span class="css-selector">@keyframes</span> color {
    <span class="css-selector">from, to</span>{
        <span class="css-property">background</span>: <span class="css-value">blue</span>;
    } <span class="css-selector">50%</span>{
        <span class="css-property">background</span>: <span class="css-value">orange</span>;
    }
}`,
        copy: `div{
    width: 196px;
    height: 96px;
    padding: 16px;
    font-size: 1.2rem;
    background-color: #009fff;
    aniamtion-name: move, color;
    aniamtion-duration: 4s;
    aniamtion-iteration-count: infinite;
}
div:hover{
    aniamtion-play-state: running, paused;
}
@keyframes move{
    from, to{
        transform: translateX(0);
    } 50%{
        transform: translateY(300px);
    }
}
@keyframes color {
    from, to{
        background: blue;
    } 50%{
        background: orange;
    }
}`
    }
]