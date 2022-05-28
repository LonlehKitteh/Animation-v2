import { transforms, code, copyText } from "../datatransform"

function example(name, parameter, value1, value2, value3, bonusText = '', neededText) {
    return `<h2>${name}(<span class="parameter">${parameter}</span>)</h2>
    <p>Parametr <span class="parameter">${parameter}</span> jest <b>wymaganym</b> parametrem funkcji <b>${name}()</b>. Parametr <span class="parameter">${parameter}</span> ${neededText} ${bonusText}</p>
    <b>Przykładowe zapisy: </b>
    <ul class="examples">
        <li>${name}(${value1})</li>
        <li>${name}(${value2})</li>
        <li>${name}(${value3})</li>
    </ul>`
}

export const datatransform = [
    {
        header: "Informacje znacznika transform",
        content: `
        <div class="technical">
            <div class="box">
                <p>Opis</p>
                <div class="description"><span class="css-role">Transform</span> to bardzo ważna właściwość CSS, która pozwala nam <b>przesuwać</b> obiekty na stronie umieszczać je w dowolnym miejscu (pozycjonować)</div>
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
        content: `<div>Za pomocą właściwości <span class="css-role">transform</span> oraz funkcji <b>perspective()</b> możemy określić (potrzebny dla przekształceń w przestrzeni 3D) <b>rozmiar perspektywy</b> interesującego nas elementu HTML. Warto używać tej właściwości, ponieważ nadaje ona elementowi <b>"efekt przekształcenia w przestrzeni"</b></div>
        ${example('perspective', 'value', '200px', '40em', '2ch', 'Parametrem <span class="parameter">value</span> może być każda <b>liczba dodatnia</b>.', 'określa rozmiar perspektywy elementu HTML')}
        `,
        code: code('transform', 'value', transforms[1].transform),
        copy: copyText('transform', transforms[1].transform)
    },
    {
        header: "translateX",
        content: `<div>Za pomocą właściwości <span class="css-role">transform</span> oraz funkcji <b>translateX()</b> możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na przesunięciu elementu HTML <b>względem poziomej osi X</b>.</div>
        ${example('translateX', 'x', '200px', '-20em', '50%', '', 'określa wielkość przesunięcia elementu HTML względem poziomej osi X.')}
        `,
        code: code('transform', 'value', transforms[2].transform),
        copy: copyText('transform', transforms[2].transform)
    },
    {
        header: "translateY",
        content: `<div>
        Za pomocą właściwości <span class="css-role">transform</span> oraz funkcji translateY() możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na przesunięciu elementu HTML względem pionowej osi Y.</div>
        ${example('translateY', 'y', '200q', '-5rem', '50%','', 'określa wielkość przesunięcia elementu HTML względem pionowej osi Y.',)}
        `,
        code: code('transform', 'value', transforms[3].transform),
        copy: copyText('transform', transforms[3].transform)
    },
    {
        header: "translate",
        content: `<div>Za pomocą właściwości <span class="css-role">transform</span> oraz funkcji translate() możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na przesunięciu elementu HTML względem poziomej osi X i pionowej osi Y.</div>
        <h2>translate(<span class="parameter">x</span>, y)</h2>
        <p>Parametr <span class="parameter">x</span> jest wymaganym parametrem funkcji <b>translate()</b>. Parametr <span class="parameter">x</span> określa wielkość przesunięcia elementu HTML względem poziomej osi X. Parametr <b>y</b> nie jest wymagany. Określa wielkość przesunięcia elementu HTML względem pionowej osi Y.</p>
        <b>Przykładowe zapisy:</b>
        <ul class="examples">
            <li>translate(200q, 200px)</li>
            <li>translate(-5rem)</li>
            <li>translate(50%, -80%)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[4].transform),
        copy: copyText('transform', transforms[4].transform)
    },
    {
        header: "translateZ",
        content: `<div>Za pomocą właściwości <span class="css-role">transform</span> oraz funkcji <b>translateZ()</b> możemy przekształcić interesujący nas element HTML w przestrzeni 3D. Wspomniane przekształcenie polega na przesunięciu elementu HTML względem prostopadłej do <b>punktu zero osi Z</b></div>.
        ${example('translateZ', 'z', '200px', '-20em', '50ch', '', 'możemy przekształcić interesujący nas element HTML w przestrzeni 3D. Wspomniane przekształcenie polega na przesunięciu elementu HTML względem <b>punktu zero</b> osi Z.')}
        `,
        code: code('transform', 'value', transforms[5].transform),
        copy: copyText('transform', transforms[5].transform)
    },
    {
        header: "translate3d",
        content: `<div>Za pomocą właściwości <span class="css-role">transform</span> oraz funkcji <b>translate3d()</b> możemy przekształcić interesujący nas element HTML w przestrzeni 3D. Wspomniane przekształcenie polega na jednoczesnym przesunięciu elementu HTML względem poziomej <b>osi X</b> oraz względem pionowej <b>osi Y</b> oraz <b>osi Z</b> względem <b>punktu zero</b></div>.
        <h2>translate3d(<span class="parameter">x</span>, y, z)</h2>
        <p>Parametr <span class="parameter">x</span> jest wymaganym parametrem funkcji <b>translate()</b>. Parametr <span class="parameter">x</span> określa wielkość przesunięcia elementu HTML względem poziomej osi X. Parametr <b>y</b> nie jest wymagany. Określa wielkość przesunięcia elementu HTML względem pionowej osi Y. Parametr <b>z</b> nie jest wymagany. Określa wielkość przesunięcia elementu HTML względem osi Z.</p>
        <b>Przykładowe zapisy:</b>
        <ul class="examples">
            <li>translate3d(100px, 200px, 50px)</li>
            <li>translate3d(150px, -25%, -75px)</li>
            <li>translate3d(0px)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[6].transform),
        copy: copyText('transform', transforms[6].transform)
    },
    {
        header: "scaleX",
        content: `<div>Za pomocą właściwości <span class="css-role">transform</span> oraz funkcji <b>scaleX()</b> możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na przeskalowaniu elementu HTML względem poziomej <b>osi X</b>.</div>
        ${example('scaleX', 'x', '2', '0.5', '-1.5', '', 'określa wielkość przeskalowania elementu HTML względem poziomej osi X.')}
        `,
        code: code('transform', 'value', transforms[7].transform),
        copy: copyText('transform', transforms[7].transform)
    },
    {
        header: "scaleY",
        content: `<div>Za pomocą właściwości <span class="css-role">transform</span> oraz funkcji <b>scaleY()</b> możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na przeskalowaniu elementu HTML względem pionowej <b>osi Y</b>.</div>
        ${example('scaleY', 'y', '0', '-0.75', '1.25', '', 'określa wielkość przeskalowania elementu HTML względem pionowej osi Y.')}
        `,
        code: code('transform', 'value', transforms[8].transform),
        copy: copyText('transform', transforms[8].transform)
    },
    {
        header: "scale",
        content: `<div>Za pomocą właściwości <span class="css-role">transform</span> oraz funkcji <b>scale()</b> możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na przeskalowaniu elementu HTML względem poziomej <b>osi X</b> i pionowej <b>osi Y</b>.</div>
        <h2>scale(<span class="parameter">x</span>, y)</h2>
        <p>Parametr <span class="parameter">x</span> jest wymaganym parametrem funkcji <b>scale()</b>. Parametr <span class="parameter">x</span> określa wielkość przeskalowania elementu HTML względem poziomej osi X. Parametr <b>y</b> nie jest parametrem wymaganym, określa wielkość przeskalowania elementu html względem pionowej osi Y.</p>
        <b>Przykładowe zapisy:</b>
        <ul class="examples">
            <li>scale(2)</li>
            <li>scale(-0.75, 1.1)</li>
            <li>scale(1.25, -2)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[9].transform),
        copy: copyText('transform', transforms[9].transform)
    },
    {
        header: "scaleZ",
        content: `<div>Za pomocą właściwości <span class="css-role">transform</span> oraz funkcji <b>scaleZ()</b> możemy przekształcić interesujący nas element HTML w przestrzeni 3D. Wspomniane przekształcenie polega na dodatkowym przeskalowaniu elementu HTML względem <b>osi Z</b>.</div>
        ${example('scaleZ', 'z', '0.5', '2', '-1', `Funkcja <b>scaleZ()</b> oddziałuje tylko na te funkcje służące do przekształcenia elementu HTML w przestrzeni 3D, które występują <b>po funkcji scaleZ()</b> w naszym zapisie. Funkcja <b>scaleZ()</b> ma sens tylko wtedy, gdy na danym elemencie HTML chcemy dokonać przekształcenia w przestrzeni 3D za pomocą jakiejkolwiek innej funkcji służącej do przekształcenia elementu HTML w przestrzeni 3D.`, `określa wielkość dodatkowego przeskalowania elementu HTML względem <b>osi Z</b>.`)}
        `,
        code: code('transform', 'value', transforms[10].transform),
        copy: copyText('transform', transforms[10].transform)
    },
    {
        header: "scale3d",
        content: `<div>Za pomocą właściwości <span class="css-role">transform</span> oraz funkcji <b>scale3d()</b> możemy przekształcić interesujący nas element HTML w przestrzeni 3D. Wspomniane przekształcenie polega na jednoczesnym przeskalowaniu rozmiaru szerokości elementu HTML względem poziomej <b>osi X</b> oraz rozmiaru wysokości elementu HTML względem pionowej <b>osi Y</b>, jak również na dodatkowym przeskalowaniu elementu HTML względem <b>osi Z</b>.</div>
        <h2>scale3d(<span class="parameter">x</span>, <span class="parameter">y</span>, <span class="parameter">z</span>)</h2>
        <p>Wszystkie parametry są wymagane w funkcji <b>scale3d()</b>. Parametr <span class="parameter">x</span> określa wielkość przeskalowania rozmiaru szerokości elementu HTML względem poziomej <b>osi X</b>. Parametr <span class="parameter">y</span> określa wielkość przeskalowania rozmiaru szerokości elementu HTML względem pionowej <b>osi Y</b>. Parametr <span class="parameter">z</span> określa wielkość dodatkowego przeskalowania elementu HTML względem <b>osi Z</b>.</p>
        <div class="alert alert-info" role="alert">
                <i class="fas fa-exclamation"></i>
                <span>Jest to połączenie wszystkich poprzednich <b>scale</b> więc <b>scaleZ</b> działa bez zmian.</span>
        </div>
        <b>Przykładowe zapisy:</b>
        <ul class="examples">
            <li>scale3d(0.5, 2, 0.75)</li>
            <li>scale3d(-1, 0.8, 2)</li>
            <li>scale3d(1.552, 1, 0.8)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[11].transform),
        copy: copyText('transform', transforms[11].transform)
    },
    {
        header: "skewX",
        content: `<p>Za pomocą właściwości <span class="css-role">transform</span> oraz funkcji <b>skewX()</b> możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na pochyleniu elementu HTML względem poziomej <b>osi X</b>.</p>
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
        <p>Parametr <span class="parameter">x</span> jest wymaganym parametrem funkcji <b>skewX()</b>. Parametr <span class="parameter">x</span> określa wielkość pochylenia elementu HTML względem poziomej <b>osi X</b>.</p>
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
        content: `<div>Za pomocą właściwości <span class="css-role">transform</span> oraz funkcji <b>skewY()</b> możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na pochyleniu elementu HTML względem pionowej <b>osi Y</b>.</div>
        ${example('skewY', 'y', '-2.5rad', '50deg', '-2turn', '', `określa wielkość pochylenia elementu HTML względem poziomej <b>osi Y</b>.`)}
        `,
        code: code('transform', 'value', transforms[13].transform),
        copy: copyText('transform', transforms[13].transform)
    },
    {
        header: "skew",
        content: `<div>Za pomocą właściwości <span class="css-role">transform</span> oraz funkcji <b>skew()</b> możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na pochyleniu elementu HTML względem poziomej <b>osi X</b> i pionowej <b>osi Y</b>.</div>
        <h2>skew(<span class="parameter">x</span>, y)</h2>
        <p>Parametr <span class="parameter">x</span> jest wymaganym parametrem funkcji skew(). Parametr <span class="parameter">x</span> określa wielkość przeskalowania elementu HTML względem poziomej <b>osi X</b>. Parametr <b>y</b> nie jest wymaganym parametrem, określa wielkość pochylenia względem pionowej <b>osi Y</b>.</p>
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
        content: `<div>Za pomocą właściwości <span class="css-role">transform</span> oraz funkcji <b>rotate()</b> możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na obróceniu elementu HTML względem <b>punktu zero</b>.</div>
        <h2>rotate(<span class="parameter">angle</span>)</h2>
        <p>Parametr <span class="parameter">angle</span> jest wymaganym parametrem funkcji <b>rotate()</b>. Parametr <span class="parameter">angle</span> określa wielkość obrotu elementu HTML względem <b>punktu zero</b>.</p>
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
        content: `<div>Za pomocą właściwości <span class="css-role">transform</span> oraz funkcji <b>rotateX()</b> możemy przekształcić interesujący nas element HTML w przestrzeni 3D. Wspomniane przekształcenie polega na obrocie elementem HTML względem poziomej <b>osi X</b>.</div>
        ${example('rotateX', 'x', '40deg', '-1turn', '4.77rad', '', 'określa wielkość obrotu elementem HTML względem poziomej osi X.')}
        `,
        code: code('transform', 'value', transforms[16].transform),
        copy: copyText('transform', transforms[16].transform)
    },
    {
        header: "rotateY",
        content: `<div>Za pomocą właściwości <span class="css-role">transform</span> oraz funkcji <b>rotateY()</b> możemy przekształcić interesujący nas element HTML w przestrzeni 3D. Wspomniane przekształcenie polega na obrocie elementem HTML względem pionowej <b>osi Y</b>.</div>
        ${example('rotateY', 'y', '60deg', '-0.8turn', '5.25rad', '', 'określa wielkość obrotu elementem HTML względem pionowej <b>osi Y</b>.')}
        `,
        code: code('transform', 'value', transforms[17].transform),
        copy: copyText('transform', transforms[17].transform)
    },
    {
        header: "rotateZ",
        content: `<div>Za pomocą właściwości <span class="css-role">transform</span> oraz funkcji <b>rotateZ()</b> możemy przekształcić interesujący nas element HTML w przestrzeni 3D. Wspomniane przekształcenie polega na obrocie elementem HTML względem <b>osi Z</b>.</div>
        ${example('rotateZ', 'z', '45deg', '0.1turn', '-6.66rad', '', `określa wielkość obrotu elementem HTML względem <b>osi Z</b>.`)}
        `,
        code: code('transform', 'value', transforms[18].transform),
        copy: copyText('transform', transforms[18].transform)
    },
    {
        header: "rotate3d",
        content: `<div>Za pomocą właściwości <span class="css-role">transform</span> oraz funkcji <b>rotate3d()</b> możemy przekształcić interesujący nas element HTML w przestrzeni 3D. Wspomniane przekształcenie polega na obrocie elementem HTML względem wektora 3D wyznaczonego przez stosunek długości wektorów znajdujących się na <b>osi X</b>, <b>osi Y</b> oraz <b>osi Z</b>.</div>
        <h2>rotate3d(<span class="parameter">x</span>, <span class="parameter">y</span>, <span class="parameter">z</span>, <span class="parameter">angle</span>)</h2>
        <p>Wszystkie parametry są wymagane. Parametr <span class="parameter">x</span> określa długość <b>wektora X</b>. Parametr <span class="parameter">y</span> określa długość <b>wektora Y</b>. Parametr <span class="parameter">z</span> określa długość <b>wektora Z</b>. Parametr angle jest wymaganym parametrem funkcji rotate3d(). Parametr <span class="parameter">angle</span> określa wielkość obrotu elementem HTML względem wektora 3D wyznaczonego przez stosunek długości wektorów znajdujących się na <b>osi X</b>, <b>osi Y</b> oraz <b>osi Z</b>.</p>
        <b>Przykładowe zapisy:</b>
        <ul class="examples">
            <li>rotate3d(1, 2.5, 3, 75deg)</li>
            <li>rotate3d(-1, 2, 1, -0.75turn)</li>
            <li>rotate3d(-1, -1, -1, 100grad)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[19].transform),
        copy: copyText('transform', transforms[19].transform)
    },
    {
        header: "matrix",
        content: `<div>Za pomocą właściwości <span class="css-role">transform</span> oraz funkcji <b>matrix()</b> możemy w dowolny dostępny sposób przekształcić interesujący nas element HTML w przestrzeni 2D <b>wykorzystując do tego celu tylko jedną funkcję</b>.</div>
        <div class="alert alert-warning" role="alert">
                <i class="fas fa-exclamation"></i>
                <span>Warto wspomnieć, że ta funckja jest dosyć uciążliwa w zapamiętaniu, ponieważ należy <b>biegle się obsługiwać w trygonometrii</b> i trzeba zapamiętać <b>6 parametrów wymaganych</b> aby ta funnkcja działała. Użycie tej fukncji może mieć większy sens jedynie w przypadku <b>skomplikowanych animacji w JS</b>.</span>
        </div>
        <b>Przykładowe zapisy:</b>
        <ul class="examples">
            <li>matrix(1, 0, 0, 1, 100, 50)</li>
            <li>matrix(0.5, 0, 0, 0.5, 0, 0)</li>
            <li>matrix(0.5, 0, 0, 0.5, 100, 50)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[20].transform),
        copy: copyText('transform', transforms[20].transform)
    },
    {
        header: "matrix3d",
        content: `<div>Za pomocą właściwości <span class="css-role">transform</span> oraz funkcji <b>matrix3d()</b> możemy w dowolny dostępny sposób przekształcić interesujący nas element HTML w przestrzeni 3D <b>wykorzystując do tego celu tylko jedną funkcję</b>.</div>
        <div class="alert alert-warning" role="alert">
                <i class="fas fa-exclamation"></i>
                <span>Warto wspomnieć, że ta funckja jest dosyć uciążliwa w zapamiętaniu, ponieważ należy <b>biegle się obsługiwać w trygonometrii</b> i trzeba zapamiętać <b>16 parametrów wymaganych</b> aby ta funnkcja działała. Użycie tej fukncji może mieć większy sens jedynie w przypadku <b>skomplikowanych animacji w JS</b>.</span>
        </div>
        <b>Przykładowe zapisy:</b>
        <ul class="examples">
            <li>matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 125, 75, 50, 1)</li>
            <li>matrix3d(0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 1)</li>
            <li>matrix3d(0.5, 0, 0, 0, 0, 0.5, 0, 0, 0, 0, 0.5, 0, 125, 75, 50, 1)</li>
        </ul>
        `,
        code: code('transform', 'value', transforms[21].transform),
        copy: copyText('transform', transforms[21].transform)
    },
    {
        header: "kombinacja",
        content: `<p>Za pomocą właściwości <span class="css-role">transform</span> oraz <b>sekwencji funkcji</b> możemy przekształcić interesujący nas element HTML w przestrzeni 2D. Wspomniane przekształcenie polega na wykonaniu <b>jednej funkcji a następnie drugiej</b>.</p>
        <div class="alert alert-info" role="alert">
                <i class="fas fa-exclamation"></i>
                <span>Kolejność transformacji jest bardzo istotna, ponieważ to może prowadzić do <b>złej transformacji</b>.</span>
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