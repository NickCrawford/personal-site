<template>
<div>
  <div id="stars"></div>

  <h1 class="title">
    <img src="@/assets/logo.svg" alt="Bar 187">
  </h1>
  <div class="container">
    <main>
      <nuxt-content :document="menu"></nuxt-content>
    </main>
  </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
      const menu = await $content('menu').fetch()

      return { menu }
    }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 2rem 1rem 4rem;

  background-image: url('~assets/new-york.svg');
  background-repeat: repeat-x;
  background-position-y: 101%;
  background-size: 350px auto;
}

#stars {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 300px;

  background-image:  linear-gradient(to bottom, rgba(34,37,65, 0), rgba(34,37,65, 1)), url('~assets/stars.png');
  
  background-size: contain;

  z-index: 0;
}

.title {
  text-align: center;
  margin: 2rem 1rem;

  z-index: 2;
}

.title img {
  max-width: 300px;
  transform: translate(0,0);
  z-index: 2;
}

main {
  width: 100%;

  text-align: center;

  z-index: 2;
}

main h2 {
  color: var(--font-color);
}

main h3 {
  color: var(--font-color-secondary);
  font-weight: normal;

  display: inline-block;
  margin-right: 0.5rem;
}

main h3 + p {
  /* display: inline-block; */

  margin: 0.25rem 0 3rem;

  font-size: 0.8rem;
}

main a {
  color: var(--font-color-accent);
}
</style>
