export const arr = [
  {
    header: "Czym są animacje?",
    content: `
        <div class="alert alert-danger" role="alert">
          <i class="fas fa-exclamation"></i><span>
            <b>Animacja jest to zmiana stanu ze stanu A do stanu B</b>.s
            Zmiana stanu może polegać na najprostszej zmianie koloru, jaki i również na skomplikowanej transformacji.
            Należy pamiętać, że transormacja i przejście to nie to samo różnice przedstawie w sekcji poniżej.
            <b>Animacji używamy wtedy, kiedy chcemy uzyskać efekt animowania obiektu</b> zaraz  po załadowaniu strony przez użytkownika,
            lub gdy chcemy, aby animowanie obiektu trwało w nieskończoność, lub gdy po prostu chcemy aby element na stronie się ruszał.
            </span>
        </div>
        <p>Praktycznie <b>wszystko</b> może zostać animowane.
        Np. <b>width, height, background-color, color, transform, cursor</b> i wiele więcej...
    </p>
    <p>W prawdzie mówiąc ciężko jest wymienić, właściwości CSS których nie można animować, to nie znaczy że ich nie ma. Przykładowe właściwości, których nie można animować: <b>all, animation, will-change</b>.
    Podobny efekt można uzyskać za pomocą <b>marquee</b>, poniżej przygotowałem przykładową animację którą można osiągnąć w samym CSS.</p>`
  },
  {
    header: "Rodzaje Animacji",
    contentMainHeader: `Niestety <span class="css-role">animacja</span> może być przeprowadzona w dwojaki sposób, to znaczy wyróżniamy <b>dwa rodzaje</b> <span class="css-role">animacji</span>:`,

    left: {
      header: 'Animacja schodkowa',
      textBefore: `To jest taka <span class="css-role">animacja</span>, która jest płynna to znaczy element posiada <b>przejście</b> pomiędzy stanami. Np: <b>color, border, padding, width, height</b>, itd...`,
      textAfter: `Zauważ, że ta <span class="css-role">animacja</span> ma płynne przejście pomiędzy stanami`,
      code: `<span class="css-comment">/* Przykładowa animacja płynna */</span>

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
}`,
      copy: `/* Przykładowa animacja płynna */

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
}`
    },

    right: {
      header: 'Animacja płynna',
      textBefore: `To jest taka <span class="css-role">animacja</span>, która <b>nie posiada przejścia</b> pomiędzy stanami. Np: <b>background-image, cursor, display, flex-wrap, resize,</b> itd...`,
      textAfter: 'Zauważ, że to wygląda dokładnie jakby ten element <b>nie miał przejścia pomiędzy stanami</b>, oczywiście da się to obejść w inny sposób np nie animować właściwości <b>display</b> tylko <b>opacity</b> :)',
      code: `<span class="css-comment">/* Przykładowa animacja schodkowa */</span>

<span class="css-keyframes-role">@keyframes</span> example-static-animation{
  <span class="css-keyframes-role">to</span>{
      <span class="css-property">cursor</span>: <span class="css-value">copy</span>;
      <span class="css-property">justify-content</span>: <span class="css-value">space-between</span>;
  }
}`,
      copy: `/* Przykładowa animacja schodkowa */
      
@keyframes example-static-animation{
  to{
      cursor: copy;
      justify-content: space-between;
  }
}`
    },

    endNote: `<div class="alert alert-danger" role="alert">
    <i class="fas fa-exclamation"></i>
    <span>
    Warto wspomnieć, że <b>animacja</b> może się łączyć na przykład z <b>:hover :active</b> itd. a w szczególności <b>::before</b> i <b>::after</b>. 
    Animacje to nie jest coś zupełnie innego, czy dziwnego dzięki niej można dodawać stronie ciekawe efekty. 
    Jendakże, wiąże się to z obciążeniem strony warto to mieć na uwadze gdy tworzycie większą stronę internetową.
    </span>
    </div>`
  },
  {
    header: "Dlaczego to takie istotne?",
    contentMainHeader: 'Najlepiej będzie omówić problem na przykładzie pożej:',
    left: {
      header: 'Przejście',
      textBefore: '',
      textAfter: '',
      code: `<span class="css-comment">/* Przycisk pierwszy */</span>

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
}`,
      copy: `<span class="css-comment">/* Przycisk pierwszy */</span>

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
}`
    },
    right: {
      header: 'Animacja',
      textBefore: '',
      textAfter: '',
      code: `<span class="css-comment">/* Przycisk drugi */</span>

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
}`,
      copy: `/* Przycisk drugi */

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
}`
    },
    endNote: `
    <div class="alert alert-info" role="alert">
    <i class="fas fa-exclamation"></i>
    <span>
    <b>Pierwszy</b> (ten z lewej) przycisk jest zbudowany z <b>:hover</b> i <b>::after</b>, które razem odpowiadają za "wypełnienie" kolorem tła diva. Została dodana właściwość <b>transition: 1s</b> w celu uzyskania efektu przejścia.
      Działa tak długo, jak jesteś myszką na danym elemencie div i jeżeli opuścisz element div to zauważysz płynny powrót do pozycji początkowej.
      <b>Drugi</b> przycisk jest zbudowany z <b>:hover</b> i <b>::after</b> i <b>animacji</b>, które razem odpowiadają za "wypełnienie" kolorem tła diva.
      Animacja przy użyciu <b>:hover</b> mogą działać tak długo, jak użytkownik jest cursorem na elemencie, ale po opuszczeniu elementu przez kursor <b>natychmiastowo</b> wraca do stanu początkowego. (bez żadnego przejścia)
    </span>
    </div>`
  }
]