export const arr = [
    {
        header: "Wstęp",
        content: `
        <div class="subheader">W tej części kursu dowiesz się:</div>
        <ul>
            <li>Czym są <b>animacje</b>, a także, kiedy należy ich używać,</li>
            <li>Zapoznasz się z różnicami pomiędzy przejściem a <b>animacją</b></li>
            <li>Poznasz regułę <i>@keyframes</i>,</li>
            <li>Nauczysz się wszystkich potrzebnych komend związanych z animacjami.</li>
        </ul>`
    },
    {
        header: "Czym są animacje?",
        content: `
        <u>Animacja jest to zmiana stanu ze stanu A do stanu B, a potem ze stanu B do stanu C.</u>
        Zmiana stanu może polegać na najprostszej zmianie koloru, jaki i również na skomplikowanej transformacji.
        <p><u>Praktycznie wszystko może zostać animowane.</u></p>
        <p>Np. width, height, background-color, color, transform, cursor i wiele więcej... </p>`
    },
    {
        header: "Po co nam animacje?",
        content: `
        <p>
            <b>Animacji</b> używamy wtedy, kiedy chcemy uzyskać efekt animowania obiektu zaraz po załadowaniu strony przez użytkownika,
            lub gdy chcemy, aby animowanie obiektu trwało w nieskończoność.
        </p>
        <p>Na przykład:</p>
        <div class="css-track">
        <div></div>
        </div>
        <p>Podobny efekt można uzyskać za pomocą marquee</p>
        <p>Ten element div animuje się od początku załadowania się strony i robi to w nieskończoność, można sprawdzić :)</p>`
    },
    {
        header: "Animacja, pseudoklasy i pseudoelementy",
        content: `
      <p>
        Warto wspomnieć, że animacja może się łączyć na przykład z <b>:hover :active itd.</b> a w szczególności <u>::before</u> i <u>::after</u>.
      </p>
      <div class="css-track">
        <div></div>
      </div>
      <p>
        <b>Zauważ, co się dzieje z naszym elementem w momencie, kiedy nasza myszka opuści polę diva.</b>
      </p>
      <p>
        <u>Animacja zostaje przerwana a nasz element NATYCHMIASTOWO wraca do miejsca początkowego.</u>
      </p>`
    },
    {
      header:"Dlaczego to takie istotne?",
      content:`
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
      <h3 style="text-align: center;font-size:1.6rem;">
        Wniosek
      </h3>
      <p>
        <b>Animacja</b><u> :hover</u> działa tak długo, jak użytkownik jest cursorem na elemencie, ale po opuszczeniu diva przez kursor <u>natychmiastowo</u> wraca do stanu początkowego. (bez żadnego przejścia)
      </p>`
    },
    {
      header:"Co należy zapamiętać?",
      content:`
      <ul>
        <li>Czym jest animacja.</li>
        <li>Do czego używamy animacji.</li>
        <li>Że animacja może łączyć się z <u>:hover</u>.</li>
        <li>Różnice pomiędzy przejściem a animacją.</li>
      </ul>`
    }
]