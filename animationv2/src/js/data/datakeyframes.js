export const datakeyframes = [
    {
        header: "Czym jest @keyframes",
        content: `<div>Jest to <b>reguła</b>, bez której dodanie animacji byłoby niemożliwe. Istnieje wiele innych reguł np. <span class="css-role">@font-face</span>, <span class="css-role">@media</span> czy <span class="css-role">@charset</span>. Reguła <span class="css-role">@keyframes</span> składa się z:
        <div class="css-lan">
           <pre><code class="css"><span class="css-comment">/* Reguła @keyframes */</span>

<span class="css-keyframes-role">@keyframes</span> nazwa_animacji{
  <span class="css-keyframes-role">selektor animacji</span>{
      <span class="css-property">właściwość</span>: <span class="css-value">wartość</span>;
  }
}
</code></pre></div>
<p>Przykładowy zapis animacji:</p>
<div class="css-lan">
           <pre><code class="css"><span class="css-comment">/* Przykładowy zapis */</span>

<span class="css-keyframes-role">@keyframes</span> animacja1{
  <span class="css-keyframes-role">from</span>{
      <span class="css-property">background-color</span>: <span class="css-number">coral</span>;
  }
  <span class="css-keyframes-role">to</span>{
      <span class="css-property">background-color</span>: <span class="css-number">blue</span>;
  }
}
</code></pre></div>
<div>Ta animacja sprawi, że interesujący nas element HTML, któremu przypiszemy tę animację zmieni kolor z <b>coral</b> na <b>blue</b>.</div>
<div class="alert alert-danger" role="alert">
<i class="fas fa-exclamation"></i><span>
    Selektorem animacji może być: 
    <ul class="examples">
    <b>
            <li>Każda liczba nieujemna</li>
            <li>Słowa kluczowe from oraz to</li>
            <li>Dopuszcza się również pisania selektorów z użyciem przecinka</li>
            <li>Liczba selektorów animacji jest nieograniczona</li></b>
        </ul>
</span>
 </div>
`,
    },
    {
        header: 'Przykład z życia',
        content: `<div class="css-track-animation"><div class="modified"></div></div>
<div class="css-lan">
<pre><code class="css"><span class="html-comment"><&#33;-- HTML --></span>
&#60;div&#62;&#60;/div&#62;
<span class="css-comment">/* CSS */</span>
<span class="css-selector">div</span>{
    <span class="css-property">width</span>: <span class="css-number">196px</span>;
    <span class="css-property">height</span>: <span class="css-number">96px</span>;
    <span class="css-property">padding</span>: <span class="css-number">16px</span>;
    <span class="css-property">font-size</span>: <span class="css-number">1.2rem</span>;
    <span class="css-property">background-color</span>: <span class="css-value">blue</span>;
    <span class="css-property">animation</span>: <span class="css-value">example-animation 4s linear infinite</span>;
}

<span class="css-keyframes-role">@keyframes</span> example-animation{
  <span class="css-keyframes-role">from</span>{
      <span class="css-property">background-color</span>: <span class="css-number">#84b484</span>;
  }
  <span class="css-keyframes-role">25%, 75%</span>{
      <span class="css-property">opacity</span>: <span class="css-number">0</span>;
  }
  <span class="css-keyframes-role">50%</span>{
      <span class="css-property">transform</span>: <span class="css-value">translateX</span>(<span class="css-number">150px</span>);
      <span class="css-property">opacity</span>: <span class="css-number">1</span>;
  }
  <span class="css-keyframes-role">to</span>{
      <span class="css-property">background-color</span>: <span class="css-number">blue</span>;
  }
}
</code></pre></div>
        `,
    }
]