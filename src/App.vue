<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Logo from "@/components/MainLogo.vue";
import BottomFade from "@/components/BottomFade.vue";
</script>

<template>
  <div class="header">
    <div class="nav-wrapper">
      <Logo />
      <nav>
        <a href="#contact" class="route" v-smooth-scroll hidden>Contact</a>
        <a href="/resume.pdf" class="route" hidden>Resume</a>
        <a href="https://github.com/moritzkalwa" class="route">Github</a>
        <a href="https://discordapp.com/users/190487569362845696" class="route"
          >Discord</a
        >
      </nav>
    </div>
  </div>

  <RouterView />
  <BottomFade />
</template>

<style lang="scss">
@import "@/assets/base.scss";
body {
  background-color: var(--color-background);
  background-size: 75px;
  background-repeat: repeat;
  width: 100vw;
  &::-webkit-scrollbar {
    display: none;
  }
  overflow-x: hidden;
}

.header {
  overflow: hidden;
  position: sticky;
  top: 0;
  z-index: 10;
  padding-bottom: 20px;
  &:after {
    content: "";
    z-index: -1;
    display: block;
    position: relative;
    background-color: var(--color-background-alternate);
    padding-top: 100%;
    margin-top: -100%;
    height: 20px;
    width: 110%;
    transform:rotate(1.5deg);
  }
}

.nav-wrapper {
  margin-bottom: 5px;
  display: flex;
  background-color: var(--color-background-alternate);
}

nav {
  font-size: large;
  margin-left: auto;
  margin-right: 5vw;
  display: flexbox;
  margin-top: auto;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--color-background);
  & > * {
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
