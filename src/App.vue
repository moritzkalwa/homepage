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
        <a href="https://github.com/moritzkalwa" class="route">Github</a>
        <div class="spacer"></div>
        <a href="https://discordapp.com/users/190487569362845696" class="route"
          >Discord</a
        >
        <div class="spacer"></div>
        <a href="#contact" class="route" v-smooth-scroll>Contact</a>
        <div class="spacer"></div>
        <a href="https://nuntium.moritzkalwa.dev/" class="route">Nuntium</a>
        <div class="spacer"></div>
        <a href="https://staging.resync.tv/" class="route">resync</a>
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
  background-attachment: fixed;
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
  margin-top: auto;
  display: flex;
  background-color: var(--color-background-alternate);
}

nav {
  display: flex;
  flex-wrap: wrap;
  font-size: min(3vw, 1.5rem);
  margin-left: auto;
  margin-right: 5vw;
  margin-top: auto;
  margin-bottom: auto;
  padding: 5px;
  border-radius: 5px;
  -webkit-box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.25); 
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.25);
  & > a {
    color: var(--color-background);
    text-align: center;
  }
  & > .spacer {
    background-color: var(--color-background);
    width: 1px;
    border-radius: 10%;
  }
}

.route {
  padding: 7px;
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
