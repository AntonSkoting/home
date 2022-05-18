<template>
    <div class="skill-list">
        <Item v-for="(skill, index) in skills" :key="index" :skill="skill"/>
    </div>
</template>

<script>
import Item from './SkillItem.vue'

export default {
    components: { Item }, 
    data() {
        return {
            listOfSkills: [
                {
                    name: 'C'
                },
                {
                    name: 'C#', 
                    proficiency: .75
                },
                {
                    name: '.Net'
                },
                {
                    name: 'html', 
                    proficiency: .9
                }, 
                {
                    name: 'CSS', 
                    proficiency: .7
                },
                {
                    name: 'JavaScript', 
                    proficiency: .8
                }, 
                {
                    name: 'Java', 
                    proficiency: .2
                },
                {
                    name: 'Phython', 
                    proficiency: .3
                }, 
                {
                    name: 'React'
                },
                {
                    name: 'NodeJS & Express'
                },
                {
                    name: 'Vue', 
                    proficiency: .9
                }
            ]
        }
    }, 
    computed: {
        skills: function() {
            return this.listOfSkills.sort((a, b) => {
                var {name: aName, proficiency: aProf} = a;
                var {name: bName, proficiency: bProf} = b;

                aName = typeof aName === 'string' ? aName : '';
                bName = typeof bName === 'string' ? bName : '';

                aProf = isNaN(aProf) ? 0.5 : aProf;
                bProf = isNaN(bProf) ? 0.5 : bProf;

                return bProf - aProf !== 0 ? bProf - aProf : aName.localeCompare(bName);
            });
        }
    }
}
</script>

<style>
div.skill-list {
    /*padding: 2em;*/
    
    display: grid;
    grid-auto-rows: 4em;
    grid-template-columns: repeat(auto-fill, 10em);
    justify-content: center;
    gap: 3em;
}
</style>