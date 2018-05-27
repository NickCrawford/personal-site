<template>
  <div class="home">
    <transition name="componentFade" mode="out-in" appear>
      <nuxt-child :key="$route.name"></nuxt-child>
    </transition>
  </div>
</template>

<script>
// import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    // AppLogo
  }
}
</script>

<style>

</style>
