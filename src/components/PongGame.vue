<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {},
  setup() {
    let gameStarted = false;
    const ballPosition = ref([0.5, 0.5]);
    const standardVelocity = 0.004;
    const direction = Math.random() * 2 * Math.PI;
    let ballVelocity = [
      Math.cos(direction) * standardVelocity,
      Math.sin(direction) * standardVelocity,
    ];
    let oldBallVelocity = [0, 0];
    let vy = 0;
    const playerPosition = ref([0.1, 0.5]);
    const startGame = () => {
      if (!gameStarted)
        setInterval(() => {
          gameStarted = true;
          //playerIntersects
          if (
            ballPosition.value[0] < 0.1 &&
            ballPosition.value[0] > 0.07 &&
            ballPosition.value[1] > playerPosition.value[1] - 0.15 &&
            ballPosition.value[1] < playerPosition.value[1] + 0.15
          ) {
            ballVelocity[0] = Math.abs(ballVelocity[0]);
            ballVelocity[1] =
              Math.atan(vy / ballVelocity[0]) * standardVelocity;
          }

          //wallIntersects
          if (ballPosition.value[0] > 1) ballVelocity[0] = -ballVelocity[0];
          if (ballPosition.value[1] > 1 || ballPosition.value[1] < 0)
            ballVelocity[1] = -ballVelocity[1];
          if (ballPosition.value[0] < 0) {
            ballPosition.value = [0.5, 0.5];
            oldBallVelocity = [...ballVelocity];
            setTimeout(() => {
              const direction = Math.random() * 2 * Math.PI;
              ballVelocity = [
                Math.cos(direction) * standardVelocity,
                Math.sin(direction) * standardVelocity,
              ];
            }, 1000);
            ballVelocity = [0, 0];
          }

          //move Ball
          ballPosition.value[0] += ballVelocity[0];
          ballPosition.value[1] += ballVelocity[1];
        }, 5);
    };
    const onMouseMove = (event: any, target?: any): void => {
      target = target || event.currentTarget;

      const cx = event.clientX || 0;
      const cy = event.clientY || 0;
      const rect = target.getBoundingClientRect();

      const dx = (cx - rect.left) / (rect.right - rect.left);
      const dy = (cy - rect.top) / (rect.bottom - rect.top);
      vy = ((dy - playerPosition.value[1]) * 50) / (rect.bottom - rect.top);
      playerPosition.value[1] = dy;
    };
    return {
      ballPosition,
      startGame,
      playerPosition,
      onMouseMove,
    };
  },
});
</script>

<template>
  <div class="pong-wrapper" @mouseenter="startGame" @mousemove="onMouseMove">
    <div
      class="ball"
      :style="{
        left: ballPosition[0] * 100 + '%',
        top: ballPosition[1] * 100 + '%',
      }"
    ></div>
    <div
      class="player"
      :style="{
        left: playerPosition[0] * 100 + '%',
        top: playerPosition[1] * 100 + '%',
      }"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.pong-wrapper {
  border-style: solid;
  border-left: none;
  border-right: none;
  overflow: hidden;
  cursor: none;
  width: 100vw;
  height: 60vh;
  margin-left: auto;
  margin-right: auto;
  & > .ball {
    transform: translate(-10px, -10px);
    position: relative;
    width: 20px;
    height: 20px;
    background-color: lightgray;
  }
  & > .player {
    transform: translate(-10px, -40px);
    position: relative;
    width: 20px;
    height: 80px;
    background-color: lightgray;
  }
}
</style>
