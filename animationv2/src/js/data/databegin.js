export const arr = [
  {
    header: "Wstęp",
    content: `
        <div class="subheader">W tej części kursu dowiesz się:</div>
        <ul>
            <li>Czym są <span class="css-role">animacje</span>, a także, kiedy należy ich używać</li>
            <li>Zapoznasz się z różnicami pomiędzy <b>przejściem</b> a <span class="css-role">animacją</span></li>
            <li>Poznasz regułę <span class="css-property"><b>@keyframes</b></span></li>
            <li>Nauczysz się wszystkich potrzebnych <b>komend</b> związanych z <span class="css-role">animacjami</span></li>
        </ul>`
  },
  {
    header: "Czym są animacje?",
    content: `
        <div class="alert alert-info" role="alert">
          <i class="fas fa-exclamation"></i><span>
            <b>Animacja jest to zmiana stanu ze stanu A do stanu B</b>.
            Zmiana stanu może polegać na najprostszej zmianie koloru, jaki i również na skomplikowanej transformacji.
            Należy pamiętać, że transormacja i przejście to nie to samo różnice przedstawie w sekcji poniżej.
            <b>Animacji używamy wtedy, kiedy chcemy uzyskać efekt animowania obiektu</b> zaraz  po załadowaniu strony przez użytkownika,
            lub gdy chcemy, aby animowanie obiektu trwało w nieskończoność, lub gdy po prostu chcemy aby element na stronie się ruszał.
            </span>
        </div>
        <p>Praktycznie <b>wszystko</b> może zostać animowane.
        Np. <b>width, height, background-color, color, transform, cursor</b> i wiele więcej...
        W prawdzie mówiąc ciężko jest wymienić, właściwości CSS których nie można animować, to nie znaczy że ich nie ma. Przykładowe właściwości, których nie można animować: <b>all, animation, will-change</b>.
    </p>
    <p><b>Na przykład:</b></p>
    <div class="css-track">
    <div></div>
    </div>
    <p>Podobny efekt można uzyskać za pomocą <b>marquee</b>, ten element div rusza się od początku załadowania się strony i robi to w <b>nieskończoność</b>, można sprawdzić :)</p>`
  },
  {
    header: "Rodzaje Animacji",
    content: `<p>Niestety <span class="css-role">animacja</span> może być przeprowadzona w dwojaki sposób, to znaczy wyróżniamy <b>dwa rodzaje</b> <span class="css-role">animacji</span>: </p>
      <div class="flex" style="align-items:initial;">
        <div class="flex-child">
          <h2>Animacja płynna</h2>
          <div>
            <p>To jest taka <span class="css-role">animacja</span>, która jest płynna to znaczy element posiada <b>przejście</b> pomiędzy stanami.</p>
            <p>Np: <b>color, border, padding, width, height</b>, itd...</p>
            <div class="example-flow-animation">
              <div></div>
            </div>
            <p>Zauważ, że ta <span class="css-role">animacja</span> ma płynne przejście pomiędzy stanami</p>
            <div class="flex-center">
<div class="css-lan">
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
            <p>To jest taka <span class="css-role">animacja</span>, która <b>nie posiada przejścia</b> pomiędzy stanami.</p>
            <p>Np: <b>background-image, cursor, display, flex-wrap, resize,</b> itd...</p>
            <div class="example-static-animation">
              <div></div>
              <div></div>
            </div>
            <p>Zauważ, że to wygląda dokładnie jakby ten element <b>nie miał przejścia pomiędzy stanami</b>, oczywiście da się to obejść w inny sposób np nie animować właściwości <b>display</b> tylko <b>opacity</b> :)</p>
            <div class="flex-center">
<div class="css-lan"><pre><code class="css"><span class="css-comment">/* Przykładowa animacja schodkowa */</span>

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
      <div class="twoButtons">
        <div class="css-lan">
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
        <div class="css-lan">
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
  }
]