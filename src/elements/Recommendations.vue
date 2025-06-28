<template>
    <article class="recommendations">
      <blockquote>
        Christina er en super professionel og fleksibel speaker, som altid leverer! Let at arbejde med og med rigtig god indlevelse i teksten og opgaven.<br>
        <span class="cite">- Rasmus Schwenger, Producer hos Bauer Media</span>
      </blockquote>
      <blockquote>
        Bjørnen’ er en meget professionel og rutineret speaker, er god til at fornemme ’stilart’ i opgaven og leverer altid hurtigt og i topkvalitet.<br>
        <span class="cite">- Torben Johansen, ejer af “Lyd er Godt”</span>
      </blockquote>
      <blockquote>
        Christina selv og hendes smukke stemme med klar diktion og let til smil er altid en fornøjelse at arbejde med! Grundlyden på hendes speaks, optaget i eget studie, er super velegnede til videre forarbejdning i et mix.<br>
        <span class="cite">- Peter Krabbe Aagaard fra KRABBE sound&music</span>
      </blockquote>
      <blockquote>
        It was amazing working with Christina. Not only does she have an incredible voice but is a pleasure to work with. She is easygoing and super flexible which was what we needed when working on a lengthy and demanding project.<br>
        <span class="cite">- Sebastian Giraldo, Account Manager hos Voices.com Inc.</span>
      </blockquote>
    </article>
</template>

<style>

.recommendations {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  
  @media (min-width: 800px) {
    gap: 80px;
  }
}

blockquote {
  position: relative;
  margin: 0;
  background: var(--color-almost-white);
  padding: 32px 20px;
  border-radius: 16px;
  font-size: clamp(20px, 3vw, 32px);
  line-height: 1.6;
  margin: 0;
  text-indent: 1.6em;   
}

blockquote::before {
  content: "“";
  position: absolute;
  left: -0.3em;
  font-size: 3.5em;        
  color: var(--color-light-blue);
  opacity: 0.25; 
  line-height: 1;
  pointer-events: none;
}

.cite {
  display: block;
  margin-top: 1.2rem;
  color: var(--color-dark-blue);
  /* font-style: italic; */
  font-size: clamp(16px, 2vw, 22px);
  text-indent: 0;
}

/* Responsiv */
@media (max-width: 800px) {
  .recommendations {
    grid-template-columns: 1fr;
  }
}
</style>