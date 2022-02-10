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
    <form action="mailto:kalwa.moritz@gmail.com" method="post" enctype="text/plain" class="contact-form" hidden>
        <input type="text" name="name" placeholder="Your name"><br>
        <input type="text" name="mail" placeholder="Your E-Mail"><br>
        Comment:<br>
        <input type="text" name="comment" size="50"><br><br>
        <input type="submit" value="Send">
        <input type="reset" value="Reset">
    </form>
</template>

<style lang="scss" scoped>
.contact-form {
    width: 100%;
    display: flexbox;
}
</style>
