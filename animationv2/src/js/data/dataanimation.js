export const dataanimation = [
    { mainHeader: "Animation-name" },
    {
        header: "Opis właściwości animation-name",
        content: "Transform to bardzo ważna właściwość CSS, która pozwala nam przesuwać obiekty na stronie umieszczać je w dowolnym miejscu (pozycjonować)"
    },
    {
        header: "Wartości właściwości animation-name",
        content: [
            "none", "nazwa animacji", "sekwencja"
        ]
    },
    {
        header: "Informacje techniczne znacznika transform",
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
            <div class="link"><a href="#s3">none</a></div>
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
        header: "none",
        content: `<div>Wartość none jest <b>domyślną</b> wartością właściwości animation-name. Domyślnie na elemencie HTML nie jest wykonywana <b>żadna</b> animacja.</div>`,
        code:`
        <pre><code class="css">
    <span class="css-selector">div</span>{
        <span class="css-property">width</span>: <span class="css-number">196px</span>;
        <span class="css-property">height</span>: <span class="css-number">96px</span>;
        <span class="css-property">padding</span>: <span class="css-number">16px</span>;
        <span class="css-property">font-size</span>: <span class="css-number">1.2rem</span>;
        <span class="css-property">background-color</span>: <span class="css-value">#009fff</span>;
        <span class="css-property">animation-iteration-count</span>: <span class="css-value">infinite</span>;
        <span class="css-property">animation-duration</span>: <span class="css-value">4s</span>;
        <span class="important"><span class="css-property">animation-name</span>: <span class="css-value">none</span>;</span>
    }

    <span class="css-selector">@keyframes</span> jeju_ruszam_sie {
        <span class="css-selector">from, to</span>{
            <span class="css-property">transform</span>: <span class="css-value">translateX(<span class="css-number">0</span>)</span>;
        } <span class="css-selector">50%</span>{
            <span class="css-property">transform</span>: <span class="css-value">translateY(<span class="css-number">300px</span>)</span>;
        }
    }
    </code></pre>
        `
    },
    {
        header: "nazwa animacji",
        content: `<div>Za pomocą właściwości <b>animation-name</b> oraz nazwy istniejącej animacji (utworzonej za pomocą reguły <b>@keyframes</b>) możemy dodać animację.`,
        code:`
        <pre><code class="css">
    <span class="css-selector">div</span>{
        <span class="css-property">width</span>: <span class="css-number">196px</span>;
        <span class="css-property">height</span>: <span class="css-number">96px</span>;
        <span class="css-property">padding</span>: <span class="css-number">16px</span>;
        <span class="css-property">font-size</span>: <span class="css-number">1.2rem</span>;
        <span class="css-property">background-color</span>: <span class="css-value">#009fff</span>;
        <span class="css-property">animation-iteration-count</span>: <span class="css-value">infinite</span>;
        <span class="css-property">animation-duration</span>: <span class="css-value">4s</span>;
        <span class="important"><span class="css-property">animation-name</span>: <span class="css-value">jeju_ruszam_sie</span>;</span>
    }

    <span class="css-selector">@keyframes</span> jeju_ruszam_sie {
        <span class="css-selector">from, to</span>{
            <span class="css-property">transform</span>: <span class="css-value">translateX(<span class="css-number">0</span>)</span>;
        } <span class="css-selector">50%</span>{
            <span class="css-property">transform</span>: <span class="css-value">translateY(<span class="css-number">300px</span>)</span>;
        }
    }
    </code></pre>
        `
    },
    {
        header: "sekwencja",
        content: `<div>Za pomocą sekwencji oddzielonych od siebie przecinkiem wartości właściwości <b>animation-name</b> możemy dodać kilka animacji jednocześnie.</div>`,
        code:`
        <pre><code class="css">
    <span class="css-selector">div</span>{
        <span class="css-property">width</span>: <span class="css-number">196px</span>;
        <span class="css-property">height</span>: <span class="css-number">96px</span>;
        <span class="css-property">padding</span>: <span class="css-number">16px</span>;
        <span class="css-property">font-size</span>: <span class="css-number">1.2rem</span>;
        <span class="css-property">background-color</span>: <span class="css-value">#009fff</span>;
        <span class="css-property">animation-iteration-count</span>: <span class="css-value">infinite</span>;
        <span class="css-property">animation-duration</span>: <span class="css-value">4s</span>;
        <span class="important"><span class="css-property">animation-name</span>: <span class="css-value">jeju_ruszam_sie, zmieniam_kolory</span>;</span>
    }

    <span class="css-selector">@keyframes</span> jeju_ruszam_sie {
        <span class="css-selector">from, to</span>{
            <span class="css-property">transform</span>: <span class="css-value">translateX(<span class="css-number">0</span>)</span>;
        } <span class="css-selector">50%</span>{
            <span class="css-property">transform</span>: <span class="css-value">translateY(<span class="css-number">300px</span>)</span>;
        }
    }

    <span class="css-selector">@keyframes</span> zmieniam_kolory {
        <span class="css-selector">from, to</span>{
            <span class="css-property">background</span>: <span class="css-value">blue</span>;
        } <span class="css-selector">50%</span>{
            <span class="css-property">background</span>: <span class="css-value">orange</span>;
        }
    }
    </code></pre>
        `
    },
    { mainHeader: "Animation-duration" },
    {
        header: "Opis właściwości animation-name",
        content: "Transform to bardzo ważna właściwość CSS, która pozwala nam przesuwać obiekty na stronie umieszczać je w dowolnym miejscu (pozycjonować)"
    },
    {
        header: "Wartości właściwości animation-name",
        content: [
            "none", "nazwa animacji", "sekwencja"
        ]
    },
    {
        header: "Informacje techniczne znacznika transform",
        content: `
        in progress...
        `
    },
    {
        header: "none",
        content: "none"
    },
    { mainHeader: "Animation-timing-function" },
    { mainHeader: "Animation-delay" },
    { mainHeader: "Animation-iteration-count" },
    { mainHeader: "Animation-direction" },
    { mainHeader: "Animation-fill-mode" },
    { mainHeader: "Animation-play-state" },
    { mainHeader: "Animation" }
]