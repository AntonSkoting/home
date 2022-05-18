<template>
  <div class="course">
      <div v-for="(item, index) in items" :key="index">{{item}}</div>
  </div>
</template>

<script>
export default {
    props: { boxItems: Array }, 
    computed: {
        items: function() { return this.boxItems ? this.boxItems.filter(item => typeof item === 'string') : [] }
    }
}
</script>

<style>
.course {
    padding: .5rem 1rem;
    display: flex;
    flex-direction: row;
}

.course div {
    width: 12rem;
    margin-right: 2rem;
}

.course div:last-of-type {
    width: auto;
    margin-right: 0;
}
</style>