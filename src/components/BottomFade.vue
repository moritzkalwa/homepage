<script lang="ts">
import { computed, defineComponent, inject, Ref, ref } from "vue"
import { useRoute } from "vue-router"

export default defineComponent({
  components: {  },
  setup() {
    const findScroll = (e?: Event) => {
        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;
        // When the user is [modifier]px from the bottom, fire the event.
        let modifier = 50; 
        return Math.max(Math.min(-(currentScroll - documentHeight)/modifier, 1.0), 0.0)
    }
    const scrolledToBottom = ref(findScroll())
    const scrollInterval = setInterval(() => {
        scrolledToBottom.value = findScroll()
    }, 50)
    return {
        scrolledToBottom,
    }
  },
})
</script>

<template>
    <div class="fade" :style="{ opacity: scrolledToBottom }"></div>
</template>


<style lang="scss" scoped>
.fade {
    pointer-events: none;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 20vh;
    background-image: linear-gradient(transparent, coral);
    z-index: 100;
}

.scrolledToBottom {
    display: none;
}

</style>