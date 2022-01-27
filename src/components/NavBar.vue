<script lang="ts">
import { computed, defineComponent, inject, Ref } from "vue"
import { useRoute } from "vue-router"

export default defineComponent({
  components: {  },
  setup() {
    const route = useRoute()
    const routeDisplay = computed(() => {
      if (route.name === "home") return `test`
      return "test"
    })
    return {
      routeDisplay,
    }
  },
})
</script>

<template>
  <nav class="nav">
    <div v-if="routeDisplay" class="flex h-full opacity-50 pl-5 items-center">
      {{ routeDisplay }}
    </div>
    <div class="flex h-full items-center"></div>
  </nav>
</template>


<style lang="scss" scoped>
.nav {
  @apply flex shadow-sm w-full z-10 fixed justify-between;
}
</style>