<template>
  <header class="header">
    <nuxt-link to="/" class="logo-wrapper">
      <svg
        viewBox="0 0 840 144"
        class="title is-1"
        preserveAspectRatio="xMidYMid meet"
        :style="{
          fill: textColor,
          width: '100%'
        }"
      >
        <text x="0" y="122">Nick Crawford</text>
      </svg>
    </nuxt-link>
  </header>
</template>

<script>
export default {
  props: {
    textColor: {
      type: String,
      default: '#000000'
    }
  }
}
</script>

<style lang="scss" scoped>
header.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  padding: 1rem 2rem;

  text-align: center;
  z-index: 999;

  vertical-align: middle;
}

.header .logo-wrapper {
  display: inline-block;
  width: 12rem;
  max-width: 100%;
  overflow: hidden;

  opacity: 0.5;
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 1;
  }

  svg {
    margin-bottom: 0;
    display: block;
  }
}
</style>
