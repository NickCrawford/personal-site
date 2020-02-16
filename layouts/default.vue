<template>
  <div>
    <div class="main-container">
      <nuxt />
    </div>
    <!-- <footer>
      <p>About</p>
      <p></p>
    </footer>-->
  </div>
</template>

<script></script>

<style lang="scss">
@import '~assets/styles/variables';

.main-container {
  // max-width: 1024px;
  padding: 0 0.5rem;
  margin: 0 auto;

  @media screen and (min-width: $md-bp) {
    padding: 0 1rem;
  }

  @media screen and (min-width: $lg-bp) {
    padding: 0 2rem;
  }
}
</style>
