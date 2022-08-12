<script setup lang="ts">
import CV from "@/components/CV.vue";
import ContactForm from "@/components/ContactForm.vue";
</script>

<template>
  <main>
    <h1>
      Hi, I do stuff with C++, Python(Sympy, Numpy), TS, Node and Vue.
    </h1>
    <h2>Don't stop dreaming.</h2>
    <CV />
    <ContactForm id="contact" />
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
