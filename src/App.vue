<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from "@/components/NavBar.vue"
import Logo from "@/components/Logo.vue"
import BottomFade from "@/components/BottomFade.vue"
</script>

<template>
  <header>
    <div class="wrapper">
      <Logo />
      <nav>
        <RouterLink class="route" to="/">Home</RouterLink>
        <a href="/resume.pdf" class="route" hidden>Resume</a>
        <a href="https://github.com/moritzkalwa" class="route">Github</a>
        <a href="https://discordapp.com/users/190487569362845696" class="route">Discord</a>
        <RouterLink class="route" to="/pong">Pong</RouterLink>
      </nav>

    </div>
  </header>

  <RouterView />
  <BottomFade />
</template>

<style lang="scss">
* { margin: 0; padding: 0; font-family: 'Roboto', sans-serif; color: lightgray;}
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
body {
  background-color: coral;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.wrapper {
  margin: 5px;
  display: flex;
}

nav {
  font-size: large;
  margin-left: auto;
  padding: 2vh;
  padding-right: 5vw;
  display: flexbox;
  justify-content: center;
  text-align: center;
  &>* {
    text-align: center;
  }
}

.route {
  padding: 5px;
  text-decoration: none;
  &:link {
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
  }
  &:active {
    text-decoration: none;
  }
}
</style>
