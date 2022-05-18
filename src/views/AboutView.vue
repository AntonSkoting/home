<template>
  <div class="about">
    <h1 class="title-font">Lite allmänt om mig...</h1>
    <img src="@/assets/photo.jpg" alt="Foto">
    <div class="general-info">
      <h4>Pronomen:</h4><p>Han / Honom</p>
      <h4>Ålder:</h4><p>{{age}} år</p>
      <h4>Körkort:</h4><p>B <span>&#10004;</span></p>
      <h4>Referenser:</h4><p>Lämnas på begäran.</p>
      <h4>Vaccinerad mot Covid-19:</h4><p>3 ggr <span>&#10004;</span></p>
    </div>
    <p class="text">Jag läste till ingenjör på Karlstad Universitet när jag först fick pröva på programmering, sedan dess har jag velat bli programmerare. Efter universitetet har fortsatt att lära mig så mycket som möjligt och hållit mig upptagen med små jobb och egna projekt så gott jag kan. Mitt mål i nuläget är att hitta ett jobb där jag kan finna mig till rätta och trivas, och få en chans att använda det jag har lärt mig i praktiken.</p>
  </div>
</template>

<script>
export default {
  computed: {
    age: function() {
      return new Date(Date.now() - new Date("1993-03-23")).getFullYear() - 1970;
    }
  }
}
</script>

<style>
.about {
  max-width: 750px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-auto-rows: auto;
  grid-template-areas: "title title" "img info" "txt txt";
  align-items: center;
  gap: 2rem 3rem;
}

.about h1 {
  grid-area: title;
  margin: 0;
  color: var(--color-trim);
}

.about img {
  grid-area: img;
  width: 150px;
  height: 150px;
  object-fit: cover;
  object-position: top;
  border: 4px solid var(--color-trim);
  border-radius: 20px;
}

.about .general-info {
  grid-area: info;
  width: fit-content;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-auto-rows: 1em;
  gap: 1em 1.5em;
  text-align: left;
}

.about .general-info * {
  margin: 0;
}

.about .general-info * span {
  font-size: 75%;
  color: lime;
}

.about p.text {
  grid-area: txt;
  margin: 0;
}

@media only screen and (max-width: 700px) {
  .about {
    grid-template-columns: 1fr;
    grid-template-areas: "title" "img" "txt" "info";
  }

  .about * {
    margin: 0 auto;
  }

  .about h1 {
    text-align: center;
  }
}
</style>