export const arr = [
  {
    header: "Wstęp",
    content: `
        <div class="subheader">W tej części kursu dowiesz się:</div>
        <ul>
            <li>Czym są animacje, a także, kiedy należy ich używać,</li>
            <li>Zapoznasz się z różnicami pomiędzy przejściem a animacją</li>
            <li>Poznasz regułę @keyframes,</li>
            <li>Nauczysz się wszystkich potrzebnych komend związanych z animacjami.</li>
        </ul>`
  },
  {
    header: "Czym są animacje?",
    content: `
        <div class="alert alert-info" role="alert">
          <i class="fas fa-exclamation"></i><span>
            Animacja jest to zmiana stanu ze stanu A do stanu B.
            Zmiana stanu może polegać na najprostszej zmianie koloru, jaki i również na skomplikowanej transformacji.
            Należy pamiętać, że transormacja i przejście to nie to samo różnice przedstawie w sekcji poniżej.
            Animacji używamy wtedy, kiedy chcemy uzyskać efekt animowania obiektu zaraz  po załadowaniu strony przez użytkownika,
            lub gdy chcemy, aby animowanie obiektu trwało w nieskończoność, lub gdy po prostu chcemy aby element na stronie się ruszał.
            </span>
        </div>
        <p>Praktycznie wszystko może zostać animowane.
        Np. width, height, background-color, color, transform, cursor i wiele więcej...
        W prawdzie mówiąc ciężko jest wymienić, właściwości CSS których nie można animować, to nie znaczy że ich nie ma. Przykładowe właściwości, których nie można animować: <tt>all, animation, will-change, </tt>
    </p>
    <p>Na przykład:</p>
    <div class="css-track">
    <div></div>
    </div>
    <p>Podobny efekt można uzyskać za pomocą marquee</p>
    <p>Ten element div animuje się od początku załadowania się strony i robi to w nieskończoność, można sprawdzić :)</p>`
  },
  {
    header: "Rodzaje Animacji",
    content: `<p>Niestety <b>animacja</b> może być przeprowadzona w dwojaki sposób, to znaczy wyróżniamy dwa rodzaje <b>animacji</b>: </p>
      <div class="flex" style="align-items:initial;">
        <div class="flex-child">
          <h2>Animacja płynna</h2>
          <div>
            <p>To jest taka animacja, która jest płynna to znaczy element posiada przejście pomiędzy stanami.</p>
            <p>Np: color, border, padding, width, height, itd...</p>
            <div class="example-flow-animation">
              <div></div>
            </div>
            <p>Zauważ, że ta animacja ma płynne przejście pomiędzy stanami</p>
            <div class="flex-center">
<div><pre><code class="css">/* Przykładowa animacja płynna */

@keyframes example-flow-animation{
  from, to{
      transform: translateX(0);
      width: 25%;
  }
  50%{
      transform: translateX(100%);
      width: 50%;
      background: black;
  }
}</code></pre>
</div>
            </div>
          </div>
        </div>
        <div class="flex-child">
          <h2>Animacja schodkowa</h2>
          <div>
            <p>To jest taka animacja, która <u>nie</u> posiada przejścia pomiędzy stanami.</p>
            <p>Np: background-image, cursor, display, flex-wrap, resize, itd...</p>
            <div class="example-static-animation">
              <div></div>
              <div></div>
            </div>
            <p>Zauważ, że to wygląda dokładnie jakby ten element nie miał przejścia pomiędzy stanami, oczywiście da się to obejść w inny sposób np nie animować właściwości display tylko opacity :)</p>
            <div class="flex-center">
<div><pre><code class="css">/* Przykładowa animacja schodkowa */

@keyframes example-static-animation{
  to{
      cursor: copy;
      justify-content: space-between;
  }
}</code></pre>
</div>
            </div>
          </div>
        </div>
      </div>
      `
  },
  {
    header: "Animacja, pseudoklasy i pseudoelementy",
    content: `
      <p>
        Warto wspomnieć, że <b>animacja</b> może się łączyć na przykład z <i>:hover :active itd.</i> a w szczególności <i>::before</i> i <i>::after</i>.
      </p>
      <p>Animacje to nie jest coś zupełnie innego, czy dziwnego</p>
      `
  },
  {
    header: "Dlaczego to takie istotne?",
    content: `
      <p>
        Najlepiej będzie omówić problem na przykładzie pożej:
      </p>
      <div class="flex">
      <div id="animacja1">Hover me</div>
      <div id="animacja2">Hover me</div>
      </div>
      <p>
        <b>Pierwszy</b> (ten z lewej) przycisk jest zbudowany z <u>:hover</u> i<u> ::after</u>, które razem odpowiadają za "wypełnienie" kolorem tła diva. Została dodana właściwość <i>transition: 1s;</i> w celu uzyskania efektu przejścia.
      </p>
      <p><b>
        Działa tak długo, jak jesteś myszką na danym elemencie div i jeżeli opuścisz element div to zauważysz płynny powrót do pozycji początkowej.
      </b></p>
      <p>
        <b>Drugi</b> przycisk jest zbudowany z <u>:hover ::after</u> i<u> animacji</u>, które razem odpowiadają za "wypełnienie" kolorem tła diva.
      </p>
      <div class="flex-center">
        <div>
        <pre><code class="css">/* Przycisk pierwszy */

#animacja1{
  margin: 1rem;
  padding: .5rem 1rem;
  font-size: 1.4rem;
  text-transform: uppercase;
  position: relative;
  z-index: 2;
  border: 1px solid #009fff;
  transition: color 1s ease-in-out;
}
#animacja1::after{
  content: '';
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background: #009fff;
  transition: width 1s ease-in-out;
}
#animacja1:hover{
  color: white;
}
#animacja1:hover::after{
  width: 100%;
}</code></pre>
        </div>
        <div>
        <pre><code class="css">/* Przycisk drugi */

#animacja2{
  margin: 1rem;
  padding: .5rem 1rem;
  font-size: 1.4rem;
  text-transform: uppercase;
  position: relative;
  z-index: 2;
  border: 1px solid #009fff;
}
#animacja2::after{
  content: '';
  width: 0;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background: #009fff;
}
#animacja2:hover{
  animation: animacja1 1s ease-in-out forwards;
}
#animacja2:hover::after{
  animation: animacja2 1s ease-in-out forwards;
}
@keyframes animacja1{
  from{
    color: black;
  } to {
    color: white;
  }
}
@keyframes animacja2{
  from{
    width: 0;
  } to {
    width: 100%;
  }
}</code></pre>
        </div>
      </div>
      <h2>
        Wniosek
      </h2>
      <p>
        <b>Animacja</b><u> :hover</u> działa tak długo, jak użytkownik jest cursorem na elemencie, ale po opuszczeniu diva przez kursor <u>natychmiastowo</u> wraca do stanu początkowego. (bez żadnego przejścia)
      </p>`
  },
  {
    header: "Co należy zapamiętać?",
    content: `
      <ul>
        <li>Czym jest animacja.</li>
        <li>Do czego używamy animacji.</li>
        <li>Że animacja może łączyć się z <u>:hover</u>.</li>
        <li>Różnice pomiędzy przejściem a animacją.</li>
      </ul>`
  }
]