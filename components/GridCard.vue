<template>
  <a v-if="type === 'external'" :href="url" v-bind:class="['grid-card', { 'small': size == 1 || !size, 'medium': size == 2, 'large': size == 3 || size > 3 }, { 'project': type == 'project', 'post': type === 'post', 'external': type === 'external'}]">
    <img :src="coverImage"/>
    <figcaption>
      <div class="title-wrapper">
        <h3>{{ title || 'Project Title' }}</h3>
      </div>
      <div class="summary-wrapper">
        <p>{{ summary || 'Click to learn more' }}</p>
      </div>
    </figcaption>
  </a>
  <nuxt-link v-else :to="`/${type}/${url}`" tag="figure" figure v-bind:class="['grid-card', { 'small': size == 1 || !size, 'medium': size == 2, 'large': size == 3 || size > 3 }, { 'project': type == 'project', 'post': type === 'post', 'external': type === 'external'}]">
    <img :src="coverImage"/>
    <figcaption>
      <div class="title-wrapper">
        <h3>{{ title || 'Project Title' }}</h3>
      </div>
      <div class="summary-wrapper">
        <p>{{ summary || 'Click to learn more' }}</p>
      </div>
    </figcaption>
  </nuxt-link>
</template>

<script>
export default {

  name: 'GridCard',
  props: ['size', 'coverImage', 'title', 'summary', 'type', 'url'],
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>