<template>
  <header>
    <transition name="fadeUp" mode="out-in" appear>
      <h1 v-if="$route.path === '/projects'" key="'projects'">All Projects</h1>
      <h1 v-else-if="$route.path === '/posts'" key="'posts'">Posts & Links</h1>
      <h1 v-else-if="$route.path === '/contact'" key="'contact'">Contact</h1>
      <nuxt-link to="/" tag="h1" key="'home'" v-else>Nick Crawford</nuxt-link>
    </transition>
    <nav>
      <nuxt-link to="/" class="nav-item">Showcase</nuxt-link>
      <nuxt-link to="/projects" class="nav-item">All Projects</nuxt-link>
      <nuxt-link to="/posts" class="nav-item">Links</nuxt-link>
      <nuxt-link to="/contact" class="nav-item">Contact</nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {

  name: 'PageHead',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>