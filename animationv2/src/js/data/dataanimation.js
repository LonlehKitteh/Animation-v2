export const animation = [
    'none',
    'move',
    'move, color',
    '2s',
    '2s, 5s'
]
export const animationNames = [
    'animation-name',
    'animation-duration',
    'animation-timing-function',
    'animation-delay',
    'animation-iteration-count',
    'animation-direction',
    'animation-fill-mode',
    'animation-play-state',
    'animation'
]

export const dataanimation = [
    { mainHeader: "Animation-name" },
    {
        header: "Opis właściwości animation-name",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-name</span> możemy <b>nazwać</b>, która animacja powinna zostać dodana do elementu HTML.</div>`
    },
    {
        header: "Wartości właściwości animation-name",
        content: [
            "none", "nazwa animacji", "sekwencja"
        ]
    },
    {
        header: "Informacje znacznika animation-name",
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
        content: `<div>Wartość none jest <b>domyślną</b> wartością właściwości <span class="css-role">animation-name</span>. Domyślnie na elemencie HTML nie jest wykonywana <b>żadna</b> animacja.</div>`,
        code: `
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
        content: `<div>Za pomocą właściwości <span class="css-role">animation-name</span> oraz nazwy istniejącej animacji utworzonej za pomocą reguły <b>@keyframes</b> możemy dodać animację.`,
        code: `
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
        content: `<div>Za pomocą sekwencji oddzielonych od siebie przecinkiem wartości właściwości <span class="css-role">animation-name</span> możemy dodać kilka animacji jednocześnie.</div>`,
        code: `
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
        header: "Opis właściwości animation-duration",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-duration</span> możemy określić <b>czas trwania</b> animacji.</div>`
    },
    {
        header: "Wartości właściwości animation-duration",
        content: [
            "czas", "sekwencja"
        ]
    },
    {
        header: "Informacje znacznika animation-duration",
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
            <div>0s</div>
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
        header: "czas",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-duration</span> oraz dowolnej nieujemnej liczby wraz z wybraną <b>jednostką czasu</b> możemy określić czas trwania wykonywania się animacji interesującego nas elementu HTML.</div>
        <div class="alert alert-info" role="alert">
                <i class="fas fa-exclamation"></i>
                <span>Warto wiedzieć że:
                <ul class="examples">
                    <li style="border:none">1s = 1000ms</li>
                </ul>
                </span>
        </div>
        `,
        code: `
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
        content: "sekwencja"
    },
    { mainHeader: "Animation-timing-function" },
    {
        header: "Opis właściwości animation-timing-function",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-timing-function</span> możemy dodać <b>tempo</b> do animacji.</div>`
    },
    {
        header: "Wartości właściwości animation-timing-function",
        content: [
            "ease", "ease-in", "ease-out", "ease-in-out", "linear", "step-start", "step-end", "steps()", "cubic-bezier()", "sekwencja", "zestawienie"
        ]
    },
    {
        header: "Informacje znacznika animation-timing-function",
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
            <div class="link"><a href="#s14">ease</a></div>
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
        header: "ease",
        content: "ease"
    },
    {
        header: "ease-in",
        content: "ease-in"
    },
    {
        header: "ease-out",
        content: "ease-out"
    },
    {
        header: "ease-in-out",
        content: "ease-in-out"
    },
    {
        header: "linear",
        content: "linear"
    },
    {
        header: "step-start",
        content: "steap-start"
    },
    {
        header: "step-end",
        content: "step-end"
    },
    {
        header: "steps()",
        content: "steps()"
    },
    {
        header: "cubic-bezier()",
        content: "cubic-bezier()"
    },
    {
        header: "sekwencja",
        content: "sekwencja"
    },
    {
        header: "zestawienie",
        content: "zestawienie"
    },
    { mainHeader: "Animation-delay" },
    {
        header: "Opis właściwości animation-delay",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-delay</span> możemy dodać <b>opuźnienie</b> animacji.</div>`
    },
    {
        header: "Wartości właściwości animation-delay",
        content: [
            "czas", "sekwencja"
        ]
    },
    {
        header: "Informacje znacznika animation-delay",
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
            <div>0s</div>
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
        header: "czas",
        content: "czas",
    },
    {
        header: "sekwencja",
        content: "sekwencja"
    },
    { mainHeader: "Animation-iteration-count" },
    {
        header: "Opis właściwości animation-iteration-count",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-iteration-count</span> możemy dodać <b>ilość powtórzeń</b> animacji.</div>`
    },
    {
        header: "Wartości właściwości animation-iteration-count",
        content: [
            "liczba całkowita", "infinite", "sekwencja"
        ]
    },
    {
        header: "Informacje znacznika animation-iteration-count",
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
            <div>1</div>
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
        header:"liczba całkowita",
        content:"liczba całkowita"
    },
    {
        header:"infinite",
        content:"infinite"
    },
    {
        header:"sekwencja",
        content:"sekwencja"
    },
    { mainHeader: "Animation-direction" },
    {
        header: "Opis właściwości animation-direction",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-direction</span> możemy określić <b>kierunek rozpoczęcia</b> wykonywania się oraz kierunek co drugiego powtarzania wykonywania się animacji interesującego nas elementu HTML.</div>`
    },
    {
        header: "Wartości właściwości animation-direction",
        content: [
            "normal", "reverse", "alternate", "alternate-reverse", "sekwencja"
        ]
    },
    {
        header: "Informacje znacznika animation-direction",
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
            <div class="link"><a href="#39">normal</a></div>
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
        header:"normal",
        content:"normal"
    },
    {
        header:"reverse",
        content:"reverse"
    },
    {
        header:"alternate",
        content:"alternate"
    },
    {
        header:"alternate-reverse",
        content:"alternate-reverse"
    },
    {
        header:"sekwencja",
        content:"sekwencja"
    },
    { mainHeader: "Animation-fill-mode" },
    {
        header: "Opis właściwości animation-fill-mode",
        content: `<div>Za pomocą właściwości <span class="css-role">animation-fill-mode</span> możemy dodać <b>dodatkowe właściwości</b> do elementu HTML.</div>`
    },
    {
        header: "Wartości właściwości animation-fill-mode",
        content: [
            "none", "backwards", "forwards", "both", "sekwencja"
        ]
    },
    {
        header: "Informacje znacznika animation-fill-mode",
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
            <div class="link"><a href="#47">none</a></div>
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
        header:"none",
        content:"none"
    },
    {
        header:"backwards",
        content:"backwards"
    },
    {
        header:"forwards",
        content:"forwards"
    },
    {
        header:"both",
        content:"both"
    },
    {
        header:"sekwencja",
        content:"sekwencja"
    },
    { mainHeader: "Animation-play-state" },
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
        header:"running",
        content:"running"
    },
    {
        header:"paused",
        content:"paused"
    },
    {
        header:"sekwencja",
        content:"sekwencja"
    },
    { mainHeader: "Animation" },
    {
        header: "Opis właściwości animation",
        content: `<div>Za pomocą właściwości <span class="css-role">animation</span> możemy określić grupę wartości animacji w jednej komendzie.</div>`
    },
    {
        header: "Wartości właściwości animation",
        content: [
            "grupa", "sekwencja"
        ]
    },
    {
        header: "Informacje znacznika animation",
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
            <div>none 0s ease 0s 1 normal none running</div>
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
        header:"grupa",
        content:"grupa"
    },
    {
        header:"sekwencja",
        content:"sekwencja"
    }
]