export const arr = [
  {
    header: "Wstęp",
    content: `
        <div class="subheader">W tej części kursu dowiesz się:</div>
        <ul>
            <li>Czym są <b>animacje</b>, a także, kiedy należy ich używać,</li>
            <li>Zapoznasz się z różnicami pomiędzy <b>przejściem a animacją</b></li>
            <li>Poznasz regułę <b>@keyframes</b>,</li>
            <li>Nauczysz się wszystkich potrzebnych <b>komend</b> związanych z <b>animacjami</b>.</li>
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
        W prawdzie mówiąc ciężko jest wymienić, właściwości CSS których nie można animować, to nie znaczy że ich nie ma. Przykładowe właściwości, których nie można animować: <tt>all, animation, will-change</tt>
    </p>
    <p><b>Na przykład:</b></p>
    <div class="css-track">
    <div></div>
    </div>
    <p>Podobny efekt można uzyskać za pomocą <b>marquee</b>, ten element div animuje się od początku załadowania się strony i robi to w nieskończoność, można sprawdzić :)</p>`
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
<div>
<pre><code class="css"><span class="css-comment">/* Przykładowa animacja płynna */</span>

<span class="css-keyframes-role">@keyframes</span> example-flow-animation{
  <span class="css-keyframes-role">from, to</span>{
      <span class="css-property">transform</span>: <span class="css-value">translateX</span>(<span class="css-number">0</span>);
      <span class="css-property">width</span>: <span class="css-number">25%</span>;
  }
  <span class="css-keyframes-role">50%</span>{
      <span class="css-property">transform</span>: <span class="css-value">translateX</span>(<span class="css-number">100%</span>);
      <span class="css-property">width</span>: <span class="css-number">50%</span>;
      <span class="css-property">background</span>: <span class="css-value">black</span>;
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
<div><pre><code class="css"><span class="css-comment">/* Przykładowa animacja schodkowa */</span>

<span class="css-keyframes-role">@keyframes</span> example-static-animation{
  <span class="css-keyframes-role">to</span>{
      <span class="css-property">cursor</span>: <span class="css-value">copy</span>;
      <span class="css-property">justify-content</span>: <span class="css-value">space-between</span>;
  }
}</code></pre>
</div>
            </div>
          </div>
        </div>
      </div>
      <p></p>
      <div class="alert alert-info" role="alert">
        <i class="fas fa-exclamation"></i>
        <span>
        Warto wspomnieć, że <b>animacja</b> może się łączyć na przykład z :hover :active itd. a w szczególności ::before i ::after. 
        Animacje to nie jest coś zupełnie innego, czy dziwnego dzięki niej można dodawać stronie ciekawe efekty. 
        Jendakże, wiąże się to z obciążeniem strony warto to mieć na uwadze gdy tworzycie większą stronę internetową.
        </span>
        </div>
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
        <b>Pierwszy</b> (ten z lewej) przycisk jest zbudowany z :hover i ::after, które razem odpowiadają za "wypełnienie" kolorem tła diva. Została dodana właściwość transition: 1s; w celu uzyskania efektu przejścia.
      </p>
      <p><b>
        Działa tak długo, jak jesteś myszką na danym elemencie div i jeżeli opuścisz element div to zauważysz płynny powrót do pozycji początkowej.
      </b></p>
      <p>
        <b>Drugi</b> przycisk jest zbudowany z :hover ::after i animacji, które razem odpowiadają za "wypełnienie" kolorem tła diva.
      </p>
      <div class="flex-center">
        <div>
        <pre><code class="css"><span class="css-comment">/* Przycisk pierwszy */</span>

<span class="css-selector">#animacja1</span>{
  <span class="css-property">margin</span>: <span class="css-number">1rem</span>;
  <span class="css-property">padding</span>: <span class="css-number">.5rem 1rem</span>;
  <span class="css-property">font-size</span>: <span class="css-number">1.4rem</span>;
  <span class="css-property">text-transform</span>: <span class="css-value">uppercase</span>;
  <span class="css-property">position</span>: <span class="css-value">relative</span>;
  <span class="css-property">z-index</span>: <span class="css-number">2</span>;
  <span class="css-property">border</span>: <span class="css-number">1px</span> <span class="css-value">solid #009fff</span>;
  <span class="important"><span class="css-property">transition</span>: <span class="css-value">color</span> <span class="css-number">1s</span> <span class="css-value">ease-in-out</span>;</span>
}
<span class="css-selector">#animacja1::after</span>{
  <span class="css-property">content</span>: <span class="css-value">''</span>;
  <span class="css-property">width</span>: <span class="css-number">0</span>;
  <span class="css-property">height</span>: <span class="css-number">100%</span>;
  <span class="css-property">position</span>: <span class="css-value">absolute</span>;
  <span class="css-property">top</span>: <span class="css-number">0</span>;
  <span class="css-property">left</span>: <span class="css-number">0</span>;
  <span class="css-property">z-index</span>: <span class="css-number">-1</span>;
  <span class="css-property">background</span>: <span class="css-value">#009fff</span>;
  <span class="important"><span class="css-property">transition</span>: <span class="css-value">width</span> <span class="css-number">1s</span> <span class="css-value">ease-in-out</span>;</span>
}
<span class="css-selector">#animacja1:hover</span>{
  <span class="css-property">color</span>: <span class="css-value">white</span>;
}
<span class="css-selector">#animacja1:hover::after</span>{
  <span class="css-property">width</span>: <span class="css-number">100%</span>;
}</code></pre>
        </div>
        <div>
        <pre><code class="css"><span class="css-comment">/* Przycisk drugi */</span>

<span class="css-selector">#animacja2</span>{
  <span class="css-property">margin</span>: <span class="css-number">1rem</span>;
  <span class="css-property">padding</span>: <span class="css-number">.5rem 1rem</span>;
  <span class="css-property">font-size</span>: <span class="css-number">1.4rem</span>;
  <span class="css-property">text-transform</span>: <span class="css-value">uppercase</span>;
  <span class="css-property">position</span>: <span class="css-value">relative</span>;
  <span class="css-property">z-index</span>: <span class="css-number">2</span>;
  <span class="css-property">border</span>: <span class="css-number">1px</span> <span class="css-value">solid #009fff</span>;
}
<span class="css-selector">#animacja2::after</span>{
  <span class="css-property">content</span>: <span class="css-value">''</span>;
  <span class="css-property">width</span>: <span class="css-number">0</span>;
  <span class="css-property">height</span>: <span class="css-number">100%</span>;
  <span class="css-property">position</span>: <span class="css-value">absolute</span>;
  <span class="css-property">top</span>: <span class="css-number">0</span>;
  <span class="css-property">left</span>: <span class="css-number">0</span>;
  <span class="css-property">z-index</span>: <span class="css-number">-1</span>;
  <span class="css-property">background</span>: <span class="css-value">#009fff</span>;
}
<span class="css-selector">#animacja2:hover</span>{
  <span class="important"><span class="css-property">animation</span>: animacja1 <span class="css-number">1s</span> <span class="css-value">ease-in-out forwards</span>;</span>
}
<span class="css-selector">#animacja2:hover::after</span>{
  <span class="important"><span class="css-property">animation</span>: animacja2 <span class="css-number">1s</span> <span class="css-value">ease-in-out forwards</span>;</span>
}
<span class="css-keyframes-role">@keyframes</span> animacja1{
  <span class="css-keyframes-role">from</span>{
    <span class="css-property">color</span>: <span class="css-value">black</span>;
  } <span class="css-keyframes-role">to</span> {
    <span class="css-property">color</span>: <span class="css-value">white</span>;
  }
}
<span class="css-keyframes-role">@keyframes</span> animacja2{
  <span class="css-keyframes-role">from</span>{
    <span class="css-property">width</span>: <span class="css-number">0</span>;
  } <span class="css-keyframes-role">to</span> {
    <span class="css-property">width</span>: <span class="css-number">100%</span>;
  }
}</code></pre>
        </div>
      </div>
      <h2>
        Wniosek
      </h2>
      <p>
        <b>Animacja</b> przy użyciu :hover mogą działać tak długo, jak użytkownik jest cursorem na elemencie, ale po opuszczeniu diva przez kursor <b>natychmiastowo</b> wraca do stanu początkowego. (bez żadnego przejścia)
      </p>`
  },
  {
    header: "Co należy zapamiętać?",
    content: `
      <ul>
        <li>Czym jest animacja.</li>
        <li>Do czego używamy animacji.</li>
        <li>Że animacja może łączyć się z :hover.</li>
        <li>Różnice pomiędzy przejściem a animacją.</li>
      </ul>`
  }
]