<template>
  <div class="skills">
    <div class="txt flex-column">
      <h1 class="title-font">Data-kunskaper</h1>
      <h4 class="title-font">Programmspråk och Ramvärk</h4>
      <p>Alla värden är uppskattingar so kan komma att ändras när som helst.</p>
    </div>
    <Skills/>
  </div>
</template>

<script>
import Skills from '@/components/SkillList.vue';

export default {
  components: {
    Skills
  }
}
</script>

<style>
.skills, .skills .txt {
  width: 100%;
}

.skills .txt {
  margin-bottom: 50px;
}

.skills .txt h1 {
  margin-bottom: 0;
}

.skills .txt h4 {
  margin-top: 0;
}

.skills .txt .title * {
  margin: 0;
}
</style>