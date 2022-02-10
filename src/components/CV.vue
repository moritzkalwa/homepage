<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="timeline">
    <div class="container left">
      <div class="date" style="right: -250px">Octobre 2017 - February 2019</div>
      <div class="content">
        <h2>Heinrich-Heine-Universität</h2>
        <p>
          In Octobre of 2017 I started studying phsysics part time at
          Heinrich-Heine-Universität.
        </p>
      </div>
    </div>
    <div class="container right">
      <div class="date" style="left: -90px">June 2020</div>
      <div class="content">
        <h2>Abitur</h2>
        <p>I finished school in June of 2020 with a final grade of 1.1</p>
      </div>
    </div>
    <div class="container left">
      <div class="date" style="right: -130px">Oktobre 2020 -</div>
      <div class="content">
        <h2>RWTH-Aachen</h2>
        <p>I started studying physics full time at RWTH-Aachen.</p>
      </div>
    </div>
    <div class="container right">
      <div class="date" style="left: -140px">Decembre 2021 -</div>
      <div class="content">
        <h2>Vue</h2>
        <p>
          Started using Vue and helping with
          <a href="https://staging.resync.tv/">resync</a>. Shoutouts
          <a href="https://vaaski.dev/">@vaaski</a>.
        </p>
      </div>
    </div>
    <div class="container left">
      <div class="date" style="right: -140px">February 2022 -</div>
      <div class="content">
        <h2>Nuntium</h2>
        <p>Started work on <a href="https://nuntium.moritzkalwa.dev/">Nuntium</a>, a blockchain based news and content site.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  background: --var(--color-background);
}

.timeline {
  position: relative;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 15px 0;
  margin-top: 50px;
}

.timeline::after {
  content: "";
  position: absolute;
  width: 2px;
  background: var(--color-accent);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
}

.container {
  padding: 15px 30px;
  position: relative;
  background: inherit;
  width: 50%;
}

.container.left {
  left: 0;
}

.container.right {
  left: 50%;
}

.container::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  top: calc(50% - 8px);
  right: -8px;
  background: var(--color-background);
  border: 2px solid var(--color-accent);
  border-radius: 16px;
  z-index: 1;
}

.container.right::after {
  left: -8px;
}

.container::before {
  content: "";
  position: absolute;
  width: 50px;
  height: 2px;
  top: calc(50% - 1px);
  right: 8px;
  background: var(--color-accent);
  z-index: 1;
}

.container.right::before {
  left: 8px;
}

.container .date {
  position: absolute;
  display: inline-block;
  top: calc(50% - 8px);
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 1;
}

.container.left .date {
  right: -75px;
}

.container.right .date {
  left: -75px;
}

.container .content {
  padding: 30px 90px 30px 30px;
  background: var(--color-accent);
  position: relative;
  border-radius: 0 500px 500px 0;
}

.container.right .content {
  padding: 30px 30px 30px 90px;
  border-radius: 500px 0 0 500px;
}

.container .content h2 {
  margin: 0 0 10px 0;
  font-size: 18px;
  font-weight: normal;
}

.container .content p {
  margin: 0;
  font-size: 16px;
  line-height: 22px;
}

@media (max-width: 767.98px) {
  .timeline::after {
    left: 90px;
  }

  .container {
    width: 100%;
    padding-left: 120px;
    padding-right: 30px;
  }

  .container.right {
    left: 0%;
  }

  .container.left::after,
  .container.right::after {
    left: 82px;
  }

  .container.left::before,
  .container.right::before {
    left: 100px;
    border-color: transparent var(--color-accent) transparent transparent;
  }

  .container.left .date,
  .container.right .date {
    display: none;
  }

  .container.left .content,
  .container.right .content {
    padding: 30px 30px 30px 90px;
    border-radius: 500px 0 0 500px;
  }
}
</style>
