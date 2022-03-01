import { transforms, code, copyText } from "../datatransform"

export const datatransform = [
    {
        header: "Opis właściwości transform",
        content: "Transform to bardzo ważna właściwość CSS, która pozwala nam przesuwać obiekty na stronie umieszczać je w dowolnym miejscu (pozycjonować)"
    },
    {
        header: "Wartości właściwości transform",
        content: [
            "none",
            "perspective()",
            "translateX()",
            "translateY()",
            "translate()",
            "translateZ()",
            "translate3d()",
            "scaleX()",
            "scaleY()",
            "scale()",
            "scaleZ()",
            "scale3d()",
            "skewX()",
            "skewY()",
            "skew()",
            "rotate()",
            "rotateX()",
            "rotateY()",
            "rotateZ()",
            "rotate3d()",
            "matrix()",
            "matrix3d()",
            "kombinacja"
        ]
    },
    {
        header: "Informacje znacznika transform",
        content: `
        <div class="technical">
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
                <div class="link"><a href="#s3">none</a></div>
            </div>
            <div class="box">
                <p>Wyjątki initial</p>
                <div class="green">brak</div>
            </div>
            <div class="box">
                <p>Animowanie</p>
                <div class="green">tak</div>
            </div>
        </div>
        `
    },
    {
        header: "none",
        content: `
        <div class="pictured-section">
        <p>Wartość none jest wartością <b>domyślną</b>, to znaczy, że nie trzeba jej dopisywać aby została ustawiona. Domyślnie element HTML nie posiada żadnego dodatkowego przekształcenia w przestrzeni.</p>

            <div class="alert alert-info" role="alert">
                <i class="fas fa-exclamation"></i>
                <span>Warto wiedzieć, że element posiadający właściwość <b>transform</b> wraz z wartością inną niż <b>none</b>, posiada automatycznie właściwość <b>position</b> wraz z wartością <b>relative</b>. To znaczy, że jeżeli Twój element ma np. <b>transform: translateX(0)</b> i w prawdzie nigdzie się nie przesuwa a Ty chciałbyś mu dać <b>position: fixed</b>, czyli na stale przykleić w jakieś miejsce, to niestety tak nie zadziała, nawet po zastosowaniu <b>!important.</b> 
                Rozwiązaniem tego problemu jest wymuszenie <b>transform: none !important</b> lub usunięcie właściwości <b>transform</b> z interesującego nas elementu.
                </span>
            </div>
        </div>`,
        code: code('transform', 'value', transforms[0].transform),
        copy: copyText('transform', transforms[0].transform)
    },
    {
        header: "perspective",
        content: "perspective",
        code: code('transform', 'value', transforms[1].transform),
        copy: copyText('transform', transforms[1].transform)
    },
    {
        header: "translateX",
        content: `<div>Za pomocą właściwości <b>transform</b> oraz funkcji <b>translateX()</b> możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na przesunięciu elementu HTML <b>względem poziomej osi X</b>.</div>
        <h2>translateX(<span class="parameter">x</span>)</h2>
        <p>Parametr <span class="parameter">x</span> jest <b>wymaganym</b> parametrem funkcji translateX(). Parametr <span class="parameter">x</span> określa wielkość przesunięcia elementu HTML względem poziomej osi X.</p>
        <b>Przykładowe zapisy: </b>
        <ul class="examples">
            <li>translateX(200px)</li>
            <li>translateX(-20em)</li>
            <li>translateX(50%)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[2].transform),
        copy: copyText('transform', transforms[2].transform)
    },
    {
        header: "translateY",
        content: `<div>
        Za pomocą właściwości transform oraz funkcji translateY() możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na przesunięciu elementu HTML względem pionowej osi Y.</div>
        <h2>translateY(<span class="parameter">y</span>)</h2>
        <p>Parametr y jest wymaganym parametrem funkcji translateY(). Parametr y określa wielkość przesunięcia elementu HTML względem pionowej osi Y.</p>
        <b>Przykładowe zapisy: </b>
        <ul class="examples">
            <li>translateY(200q)</li>
            <li>translateY(-5rem)</li>
            <li>translateY(50%)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[3].transform),
        copy: copyText('transform', transforms[3].transform)
    },
    {
        header: "translate",
        content: `<div>Za pomocą właściwości transform oraz funkcji translate() możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na przesunięciu elementu HTML względem poziomej osi X i pionowej osi Y.</div>
        <h2>translate(<span class="parameter">x</span>, y)</h2>
        <p>Parametr x jest wymaganym parametrem funkcji translate(). Parametr x określa wielkość przesunięcia elementu HTML względem poziomej osi X. Parametr y nie jest wymagany. Określa wielkość przesunięcia elementu HTML względem pionowej osi Y.</p>
        <b>Przykładowe zapisy:</b>
        <ul class="examples">
            <li>translateY(200q, 200px)</li>
            <li>translateY(-5rem)</li>
            <li>translateY(50%, -80%)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[4].transform),
        copy: copyText('transform', transforms[4].transform)
    },
    {
        header: "translateZ",
        content: "in progress...",
        code: code('transform', 'value', transforms[5].transform),
        copy: copyText('transform', transforms[5].transform)
    },
    {
        header: "translate3d",
        content: "test test test",
        code: code('transform', 'value', transforms[6].transform),
        copy: copyText('transform', transforms[6].transform)
    },
    {
        header: "scaleX",
        content: `<div>Za pomocą właściwości transform oraz funkcji scaleX() możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na przeskalowaniu elementu HTML względem poziomej osi X.</div>
        <h2>scaleX(<span class="parameter">x</span>)</h2>
        <p>Parametr x jest wymaganym parametrem funkcji scaleX(). Parametr x określa wielkość przeskalowania elementu HTML względem poziomej osi X.</p>
        <b>Przykładowe zapisy:</b>
        <ul class="examples">
            <li>scaleX(2)</li>
            <li>scaleX(0.5)</li>
            <li>scaleX(-1.5)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[7].transform),
        copy: copyText('transform', transforms[7].transform)
    },
    {
        header: "scaleY",
        content: `<div>Za pomocą właściwości transform oraz funkcji scaleY() możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na przeskalowaniu elementu HTML względem pionowej osi Y.</div>
        <h2>scaleY(<span class="parameter">y</span>)</h2>
        <p>Parametr y jest wymaganym parametrem funkcji scaleY(). Parametr y określa wielkość przeskalowania elementu HTML względem poziomej osi Y.</p>
        <b>Przykładowe zapisy:</b>
        <ul class="examples">
            <li>scaleY(0)</li>
            <li>scaleY(-0.75)</li>
            <li>scaleY(1.25)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[8].transform),
        copy: copyText('transform', transforms[8].transform)
    },
    {
        header: "scale",
        content: `<div>Za pomocą właściwości transform oraz funkcji scale() możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na przeskalowaniu elementu HTML względem poziomej osi X i pionowej osi Y.</div>
        <h2>scale(<span class="parameter">x</span>, y)</h2>
        <p>Parametr x jest wymaganym parametrem funkcji scale(). Parametr x określa wielkość przeskalowania elementu HTML względem poziomej osi X. Parametr y nie jest parametrem wymaganym, określa wielkość przeskalowania elementu html względem pionowej osi Y.</p>
        <b>Przykładowe zapisy:</b>
        <ul class="examples">
            <li>scaleY(2)</li>
            <li>scaleY(-0.75, 1.1)</li>
            <li>scaleY(1.25, -2)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[9].transform),
        copy: copyText('transform', transforms[9].transform)
    },
    {
        header: "scaleZ",
        content: "test test test",
        code: code('transform', 'value', transforms[10].transform),
        copy: copyText('transform', transforms[10].transform)
    },
    {
        header: "scale3d",
        content: "test test test",
        code: code('transform', 'value', transforms[11].transform),
        copy: copyText('transform', transforms[11].transform)
    },
    {
        header: "skewX",
        content: `<p>Za pomocą właściwości transform oraz funkcji skewX() możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na pochyleniu elementu HTML względem poziomej osi X.</p>
        <div class="alert alert-info" role="alert">
                <i class="fas fa-exclamation"></i>
                <span>Warto wiedzieć, że CSS oferuje nam rozmaite jednostki kątowe takie jak: ( deg, turn, rad, grad ) 
                <b><ul>
                    <li>360deg to 1turn</li>
                    <li>360deg to 400grad</li>
                    <li>360deg to około 6.28rad</li>
                </ul></b>
                </span>
        </div>
        <h2>skewX(<span class="parameter">x</span>)</h2>
        <p>Parametr x jest wymaganym parametrem funkcji skewX(). Parametr x określa wielkość pochylenia elementu HTML względem poziomej osi X.</p>
        <b>Przykładowe zapisy:</b>
        <ul class="examples">
            <li>skewX(-45deg)</li>
            <li>skewX(0.5turn)</li>
            <li>skewX(60grad)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[12].transform),
        copy: copyText('transform', transforms[12].transform)
    },
    {
        header: "skewY",
        content: `<div>Za pomocą właściwości transform oraz funkcji skewY() możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na pochyleniu elementu HTML względem pionowej osi Y.</div>
        <h2>skewY(<span class="parameter">x</span>)</h2>
        <p>Parametr y jest wymaganym parametrem funkcji skewY(). Parametr y określa wielkość pochylenia elementu HTML względem poziomej osi Y.</p>
        <b>Przykładowe zapisy:</b>
        <ul class="examples">
            <li>skewY(-2.5rad)</li>
            <li>skewY(50deg)</li>
            <li>skewY(-2turn)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[13].transform),
        copy: copyText('transform', transforms[13].transform)
    },
    {
        header: "skew",
        content: `<div>Za pomocą właściwości transform oraz funkcji skew() możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na pochyleniu elementu HTML względem poziomej osi X i pionowej osi Y.</div>
        <h2>skew(<span class="parameter">x</span>, y)</h2>
        <p>Parametr x jest wymaganym parametrem funkcji skew(). Parametr x określa wielkość przeskalowania elementu HTML względem poziomej osi X. Parametr y nie jest wymaganym parametrem, określa wielkość pochylenia względem osi pionowej Y.</p>
        <b>Przykładowe zapisy:</b>
        <ul class="examples">
            <li>skew(30deg, -2.5rad)</li>
            <li>skew(45deg, 1turn)</li>
            <li>skew(1rad, -50grad)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[14].transform),
        copy: copyText('transform', transforms[14].transform)
    },
    {
        header: "rotate",
        content: `<div>Za pomocą właściwości transform oraz funkcji rotate() możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na obróceniu elementu HTML WZGLĘDEM PUNKTU ZERO.</div>
        <h2>rotate(<span class="parameter">angle</span>)</h2>
        <p>Parametr angle jest wymaganym parametrem funkcji rotate(). Parametr angle określa wielkość obrotu elementu HTML względem punktu zero.</p>
        <b>Przykładowe zapisy:</b>
        <ul class="examples">
            <li>rotate(1turn)</li>
            <li>rotate(-45deg)</li>
            <li>rotate(5rad)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[15].transform),
        copy: copyText('transform', transforms[15].transform)
    },
    {
        header: "rotateX",
        content: "test test test",
        code: code('transform', 'value', transforms[16].transform),
        copy: copyText('transform', transforms[16].transform)
    },
    {
        header: "rotateY",
        content: "test test test",
        code: code('transform', 'value', transforms[17].transform),
        copy: copyText('transform', transforms[17].transform)
    },
    {
        header: "rotateZ",
        content: "test test test",
        code: code('transform', 'value', transforms[18].transform),
        copy: copyText('transform', transforms[18].transform)
    },
    {
        header: "rotate3d",
        content: "test test test",
        code: code('transform', 'value', transforms[19].transform),
        copy: copyText('transform', transforms[19].transform)
    },
    {
        header: "matrix",
        content: "test test test",
        code: code('transform', 'value', transforms[20].transform),
        copy: copyText('transform', transforms[20].transform)
    },
    {
        header: "matrix3d",
        content: "test test test",
        code: code('transform', 'value', transforms[21].transform),
        copy: copyText('transform', transforms[21].transform)
    },
    {
        header: "kombinacja",
        content: `<p>Za pomocą właściwości transform oraz sekwencji funkcji możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na wykonaniu jednej funkcji a następnie drugiej.</p>
        <div class="alert alert-info" role="alert">
                <i class="fas fa-exclamation"></i>
                <span>Kolejność transformacji jest bardzo istotna, ponieważ to może prowadzić do złej transformacji.</span>
        </div>
        <b>Przykładowe zapisy:</b>
        <ul class="examples">
            <li>rotate(45deg) scaleY(2)</li>
            <li>translateX(-50%) skew(45deg)</li>
            <li>scaleY(-1.5) translate(150q, 4em)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[22].transform),
        copy: copyText('transform', transforms[22].transform)
    }
]