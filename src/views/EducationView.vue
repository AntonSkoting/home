<template>
  <div class="education flex-column">
    <div class="txt flex-column">
      <h1 class="title-font">Utbildning</h1>
      <p>Lista av kurser, sorterad efter lärosäte och ämne; expanderar när man klickar på dem.</p>
    </div>
    <div class="lists">
      <DropDown>
        <template v-slot:header>
          <Course class="title" :boxItems="['Lexicon', 'Java-Scrpt, Front-end', '2022']"/>
        </template>
        <Course :box-items="['Lexicon', 'Säkerhet på nätet', '2022']"/>
        <Course :box-items="['Lexicon', 'Agila metoder', '2022']"/>
        <Course :box-items="['Lexicon', 'UX/UI-Design', '2022']"/>
        <Course :box-items="['Lexicon', 'Webbutveckling med Vue.js', '2022']"/>
        <Course :box-items="['Lexicon', 'Webbutveckling med React', '2021']"/>
        <Course :box-items="['Lexicon', 'Backend för frontendutvecklare', '2021']"/>
        <Course :box-items="['Lexicon', 'HTML, CSS & Javascript', '2021']"/>
      </DropDown>
      <DropDown closed>
        <template v-slot:header>
          <Course class="title" :boxItems="['Konvux, NTI-skolan', 'Programmering, C#', '2021']"/>
        </template>
        <Course :box-items="['Konvux, NTI-skolan', 'Programmering I, C#', '2021']"/>
        <Course :box-items="['Konvux, NTI-skolan', 'Programmering II, C#', '2021']"/>
      </DropDown>
      <DropDown>
        <template v-slot:header>
          <Course class="title" :boxItems="['Karlstad universitet (KAU)', 'Blandat (202,5 hp)', '2019']"/>
        </template>
        <DropDown>
          <template v-slot:header>
            <Course :boxItems="['Karlstad universitet (KAU)', 'Datakunskap', '2019']"/>
          </template>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Datastrukturer och algoritmer', '2019']"/>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Digitalteknik', '2018']"/>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Kretsteknik', '2018']"/>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Programutvecklingsmetodik', '2018']"/>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Programmeringsteknik', '2017']"/>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Datorn som ingenjörsverktyg', '2014']"/>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Elteknik', '2014']"/>
        </DropDown>
        <DropDown closed>
          <template v-slot:header>
            <Course :boxItems="['Karlstad universitet (KAU)', 'Design', '2018']"/>
          </template>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Skissteknik I', '2018']"/>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Skissteknik II', '2018']"/>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Design och hållbar utveckling', '2016']"/>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Ergonomi', '2016']"/>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Integrerad produktutveckling', '2016']"/>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Tillverkningsteknik, Innovation och Design', '2016']"/>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Kommunikationsverktyg i designarbete', '2015']"/>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Konstruktionsteknik I, IoD', '2014']"/>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Konstruktionsteknik II, IoD', '2015']"/>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Produktionssystem IoD', '2015']"/>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Visuellt tänkande och gestaltning', '2015']"/>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Introduktionskurs IoD', '2013']"/>
        </DropDown>
        <DropDown closed>
          <template v-slot:header>
            <Course :boxItems="['Karlstad universitet (KAU)', 'Maskinteknik', '2016']"/>
          </template>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Hållfasthetslära', '2016']"/>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Maskinelement', '2015']"/>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Materialteknik I', '2016']"/>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Materialteknik II', '2015']"/>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Energiteknik', '2014']"/>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Mekanik', '2014']"/>
        </DropDown>
        <DropDown closed>
          <template v-slot:header>
            <Course :boxItems="['Karlstad universitet (KAU)', 'Matematik', '2016']"/>
          </template>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Matematik för ingenjörer I', '2014']"/>
          <Course :boxItems="['Karlstad universitet (KAU)', 'Matematik för ingenjörer II', '2016']"/>
        </DropDown>
      </DropDown>
      <div class="single-item">
        <Course class="title" :boxItems="['Älvkullegymnasiet', 'Gymnasie-ingengör: Samhällsbyggande Eltekik', '2013']"/>
      </div>
    </div>
  </div>
</template>

<script>
import DropDown from '@/components/EducationList.vue'
import Course from '@/components/EducationItem.vue'

export default {
  components: { DropDown, Course}
}
</script>

<style scoped>
.education .txt {
  margin-bottom: 50px;
}

.education .lists .title {
  /* background-color: rgba(0, 0, 0, 0.1); */
  background-color: var(--color-trim);
  color: var(--color-bg);
  font-weight: bold;
}
</style>