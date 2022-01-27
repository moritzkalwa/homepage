<script lang="ts">
import { computed, defineComponent, inject, Ref, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  components: {},
  setup() {
    let enterTimeout: NodeJS.Timeout;
    let animationDone = false;
    let moving = ref(false);
    const onEnter = () => {
      enterTimeout = setTimeout(() => {
        animationDone = true;
      }, 500);
    };
    const onLeave = () => {
      if (enterTimeout) clearTimeout(enterTimeout);
      animationDone = false;
    };
    const onClick = () => {
      if (animationDone) {
        moving.value = true;
      }
    };

    return {
      onEnter,
      onLeave,
      onClick,
      moving,
    };
  },
});
</script>

<template>
  <div
    class="logo"
    :class="{ moving }"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
    @click="onClick"
  >
    <img alt="logo" src="@/assets/Logo.svg" />
  </div>
</template>

<style lang="scss" scoped>
.logo {
  width: 50px;
  height: 50px;
  background-color: lightgray;
  border-radius: 50%;
  margin: 1vh;
  & > img {
    position: relative;
    top: -2px;
    margin-right: auto;
    height: 50px;
    width: 50px;
  }
  &.moving {
    position: relative;
    background-color: coral;
    cursor: pointer;
    animation: moving 6s forwards linear;
    &:before {
      content: "";
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-image: linear-gradient(112.5, transparent 50%, lightgray 50%),
        linear-gradient(112.5, lightgray 50%, transparent 50%);
      transform: rotate(72.5deg);
      animation: mouth 0.3s infinite alternate;
    }
    & > img {
      width: 0px;
      height: 0px;
      margin-left: 25px;
      margin-top: 25px;
    }
  }
  &:not(.moving):hover {
    animation: logo 0s forwards 0.5s;
    &:before {
      content: "";
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-image: linear-gradient(112.5, transparent 50%, lightgray 50%),
        linear-gradient(112.5, lightgray 50%, transparent 50%);
      transform: rotate(72.5deg);
      animation: mouth 0s forwards 0.5s;
    }

    & > img {
      animation: logo-text 0.5s forwards;
    }
  }
}
@keyframes moving {
  from {
    left: 0;
  }
  to {
    left: 100vw;
  }
}

@keyframes logo-text {
  from {
    witdh: 50px;
    height: 50px;
    margin-left: 0px;
    margin-top: 0px;
  }
  to {
    width: 0px;
    height: 0px;
    margin-left: 25px;
    margin-top: 25px;
  }
}

@keyframes mouth {
  from {
    background-image: linear-gradient(360deg, lightgray 0%, lightgray 100%);
  }
  to {
    background-image: linear-gradient(135deg, transparent 50%, lightgray 50%),
      linear-gradient(90deg, lightgray 50%, transparent 50%);
  }
}

@keyframes logo {
  from {
    background-color: lightgray;
    cursor: default;
  }
  to {
    background-color: coral;
    cursor: pointer;
  }
}
</style>
