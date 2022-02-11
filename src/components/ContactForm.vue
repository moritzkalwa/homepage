<script lang="ts">
import { defineComponent, reactive, ref, computed } from "vue"
import { RouterLink } from "vue-router"
const messageDest = "/.netlify/functions/message"
const emailReg = /[A-Z0-9._%+-]+@[A-Z0-9-]+.[A-Z]{2,4}/gim

export default defineComponent({
  setup() {
    const form = reactive({
      name: "",
      email: "",
      message: "",
    })
    const valid = reactive({
      name: true,
      email: true,
      message: true,
    })
    const success = ref<boolean | null>(null)
    const submit = async (e?: Event) => {
      e?.preventDefault()
      // @ts-expect-error this sucks
      if (document.activeElement == e?.target) document.activeElement.blur();
      valid.name = true
      valid.email = true
      valid.message = true
      success.value = null
      if (!form.name) valid.name = false
      if (!form.email || !form.email.match(emailReg)) valid.email = false
      if (!form.message) valid.message = false
      if (!valid.name || !valid.email || !valid.message) return
      try {
        const res = await fetch(messageDest, {
          method: "POST",
          body: JSON.stringify(form),
        })
        if (!res.ok) {
          success.value = false
          return
        }
        form.name = ""
        form.email = ""
        form.message = ""
        success.value = true
      } catch (error) {
        console.error(error)
        success.value = false
      }
    }
    const onkeydown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && e.ctrlKey) {
        e.preventDefault()
        submit()
      }
    }

    const nameValid = computed(() => {
      return (!form.email && !form.message) || form.name
    })

    const messageValid = computed(() => {
      return (!form.email && !form.name) || form.message  
    })

    const emailValid = computed(() => {
      return (!form.message && !form.name) || form.email  
    })

    return {
      RouterLink,
      submit,
      onkeydown,
      form,
      valid,
      success,
      nameValid,
      messageValid,
      emailValid
    }
  },
})
</script>

<template>
  <div class="contact-wrapper" id="contact">
    <TransitionGroup name="fade">
      <section v-if="success === null" class="contact-form-wrapper">
        <h1 >contact me</h1>
        <p>
          use the form below to get in touch and i'll respond as soon as possible.
        </p>

        <form :onsubmit="submit" class="contact-form">
          <input
            v-model="form.name"
            @input="valid.name = true"
            type="text"
            name="name"
            placeholder="name"
            autocomplete="name"
            spellcheck="false"
            class="input"
            style="width: max(150px, 30vw)"
            :class="{ invalid: !nameValid }"
          />
          <input
            v-model="form.email"
            @input="valid.email = true"
            type="email"
            name="email"
            placeholder="email"
            autocomplete="email"
            spellcheck="false"
            class="input"
            style="width: max(150px, 30vw)"
            :class="{ invalid: !emailValid }"
          />
          <textarea
            v-model="form.message"
            @input="valid.message = true"
            name="message"
            placeholder="message"
            @keydown="onkeydown"
            :maxlength="1500"
            autocomplete="off"
            class="input textarea"
            style="width: max(150px, 30vw)"
            :class="{ invalid: !messageValid }"
          />

          <button type="submit">submit</button>
        </form>
      </section>

      <section v-if="success === false">
        <h1>
          hmm, looks like something went wrong.
        </h1>
        <p>
          please send me
          <a href="mailto:kalwa.moritz@gmail.com" target="_blank" class="animate-underline link"
            >an email</a
          >
          instead
        </p>
      </section>

      <section v-if="success === true">
        <h1 class="mb-2 text-3xl">message sent.</h1>
        <p class="text-clr-white opacity-75">
          i will most likely respond within 48 hours.
        </p>
      </section>
    </TransitionGroup>
  </div>
</template>
<style lang="scss" scoped>
.contact-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  &>.contact-form-wrapper {
    max-width: 85vw;
    &>.contact-form {
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
      margin-top: 1.25rem;
    }
  }
  .input, .input:focus {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    border-radius: 0.25rem;
    border: none;
    outline: none;
    text-align: center;
    min-height: 30px;
    background-color: var(--color-background-alternate);
    color: var(--color-background);
    &::placeholder {
      color: var(--color-background);
      text-align: center;
    }
    &.textarea {
      min-height: 15vh;
      text-align: left;
      padding: 10px;
    }
    &:invalid, &.invalid {
      border-style: solid;
      border-color: red;
    }
  }
  button {
    padding: 5px;
    width: max(100px, 15vw);
    background-color: var(--color-background-alternate);
    color: var(--color-background);
    border: none;
    border-radius: 0.75rem;
  }
}
</style>