<template>
  <div class="drop-down">
      <div class="header" @click="toggleDropDown"><slot name="header">
        <h4 class="default">Open / Close</h4>    
      </slot></div>
      <transition name="accordion" @enter="enter" @after-enter="afterEnter" @leave="leave">
        <div class="body" v-show="showDropDown"><slot>
          <p class="default">body</p>
        </slot></div>
      </transition>
  </div>
</template>

<script>
export default {
    props: { closed: Boolean },
    data: function() {
        return {
            showDropDown: false
        }
    }, 
    methods: {
        toggleDropDown: function() { this.showDropDown = !this.showDropDown }, 
        // openDropDown: function() { this.showDropDown = true }, 
        // closeDropDown: function() { this.showDropDown = false },
        enter: function(el) {
            el.style.height = 'auto';
            const height = getComputedStyle(el).height;

            el.style.height = 0;

            getComputedStyle(el); // Force repaint (optional)

            requestAnimationFrame(() => {
                el.style.height = height;
            })
        },
        afterEnter: function(el) {
            el.style.height = 'auto';
        },
        leave: function(el) {
            el.style.height = getComputedStyle(el).height;

            getComputedStyle(el) // Force repaint (optional)
            
            requestAnimationFrame(() => {
                el.style.height = 0;
            })
        }
    }, 
    mounted: function() {
        this.showDropDown = !this.closed
    }
}
</script>

<style>
.drop-down .header .default, .drop-down .body .default {
    margin: 0;
    padding: .5rem 1rem;
}

.drop-down .header {
    cursor: pointer;
    font-weight: bold;
}

.drop-down .body {
    overflow: hidden;
}

.accordion-enter-active, .accordion-leave-active {
    transition: height .5s ease-in-out;
    overflow: hidden;
}
</style>