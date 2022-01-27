<script setup lang="ts">
import CV from "@/components/CV.vue";
</script>

<template>
  <main>
    <h1>
      Hi, I do stuff with C++, Python(Sympy, Numpy, SciPy), TS, Node and Vue.
    </h1>
    <h2>Check out my github or play some horrible pong.</h2>
    <CV />
  </main>
</template>

<style lang="scss">
main {
  text-align: center;
  & > * {
    margin-top: 5vh;
  }
}
</style>
