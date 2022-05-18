<template>
  <header>
    <h1 id="page-title" class="title-font">Anton Skoting</h1>
    <nav>
      <router-link class="title-font" :to="{name: 'about'}">Om Mig</router-link>
      <router-link class="title-font" :to="{name: 'skills'}">Datakunskaper</router-link>
      <router-link class="title-font" :to="{name: 'education'}">Utbilding</router-link>
    </nav>
  </header>
  <main>
    <router-view/>
  </main>
  <footer><div class="contact">
    <h4 class="title">Kontact Information:</h4>
    <ContactInfo/>
  </div></footer>
</template>

<script>
import ContactInfo from '@/components/ContactInfo.vue'

export default {
  components: { ContactInfo }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-bg);
  color: var(--color-txt);
  min-height: 100vh;
  display: grid;
  grid-template-rows: 100px 1fr 175px;
}

header, footer {
  color: var(--color-bg);
  display: flex;
  align-items: center;
  padding: 0 30px;
  background-repeat: no-repeat;
  background-position-y: center;
  background-size: cover;
}

header {
  background-image: url(./assets/backgroundimg.jpg);
  justify-content: space-between;
}

footer {
  background-image: url(./assets/backgroundimg_mirrored.jpg);
  justify-content: flex-end;
}

header h1, footer h4, footer p {
  color: var(--color-bg);
}

#page-title {
  font-style: italic;
}

nav {
  margin: 15px;
  display: flex;
  justify-content: space-evenly;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  color: var(--color-bg);
  margin-left: 1em;
  opacity: 1;
}

nav a:nth-of-type(1) {
  margin-left: 0;
}

nav a.router-link-exact-active {
  opacity: 0.5;
}

main {
  padding: 15px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contact {
  font-size: 14px;
}

.contact .title {
  margin: 0 0 1em 0;
  text-decoration: underline;
}

@media only screen and (max-width: 700px) {
  #app {
    grid-template-rows: 250px 1fr 175px;
  }

  header, nav {
    flex-direction: column;
    align-items: center;
  }

  nav a {
    margin: 0 0 1em 0;
  }

  nav a:last-of-type {
    margin: 0;
  }

  footer {
    justify-content: center;
  }
}
</style>
