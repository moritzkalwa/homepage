<script setup lang="ts">
import Pong from "@/components/PongGame.vue";
</script>

<template>
  <main>
    <h1>Let's play some horrible Pong!</h1>
    <Pong />
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
