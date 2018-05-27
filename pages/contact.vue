<template>
  <div class="contact">
    <h3>If you are interested in talking to me about working on a new project, please get in touch.</h3>
    <form method="POST" action="https://formspree.io/hi@nickcrawford.design">
      <label>
        <input
        id="sign-up-name"
        type="text"
        name="name"
        required
        placeholder="Name"
        autocomplete="name"
        v-model="name"
        :class="{ 'populated': name != '' }">
        <span>Name</span>
      </label>
      <label>
        <input
        id="email"
        type="email"
        name="email"
        required
        placeholder="Email"
        autocomplete="email"
        v-model="email"
        :class="{ 'populated': email != '' }">
        <span>Email</span>
      </label>
      <label>
        <input
        id="message"
        type="text"
        name="message"
        required
        placeholder="Message"
        v-model="message"
        :class="{ 'populated': message != '' }">
        <span>Message</span>
      </label>

      <input id="contact-submit" type="submit" value="Send">
    </form>
  </div>
</template>

<script>
export default {

  name: 'contact',

  data () {
    return {
      name: '',
      email: '',
      message: ''
    };
  }
}
</script>

<style lang="css" scoped>
</style>