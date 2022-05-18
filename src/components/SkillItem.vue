<template>
    <div class="skill-item">
        <div class="name">{{name}}</div>
        <div class="percentage-bar"><div class="bar" :style="{ width: proficiency + '%' }"></div></div>
        <div class="label">Färdighet</div>
        <div class="percentage">{{proficiency}}%</div>
    </div>
</template>

<script>
export default {
    props: { skill: Object }, 
    computed: {
        name: function() { return this.skill.name || 'Name'; }, 
        proficiency: function() 
        {
            let result = this.skill.proficiency;
            result = !isNaN(result) && result >= 0 && result <= 1 ? result : 0.5;
            return Math.floor(100 * result);
        }, 
        image: function() { return this.skill.img ? `url(<%= BASE_URL %>${this.skill.img})` : 'none' }
    }
}
</script>

<style>
.skill-item {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: repeat(3, 1em);
    gap: 0.5em;
    
    text-align: right;
    color: var(--color-trim);
}

.skill-item .label, .skill-item .percentage {
    font-style: italic;
}

.skill-item .percentage-bar, .skill-item .name {
    grid-column: 1/3;
}

.skill-item .percentage-bar {
    background-color: rgba(0, 0, 0, 0.1);
}

.skill-item .percentage-bar .bar {
    background-color: var(--color-trim);
    height: 100%;
}

.skill-item .name {
    text-align: left;
    font-style: italic;
    font-weight: bold;
}
</style>