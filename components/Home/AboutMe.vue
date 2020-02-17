<template>
  <div id="about">
    <div class="about-container">
      <div class="content">
        <h2 class="subtitle is-1">Hi, I'm Nick</h2>
        <p class="is-5">
          I'm an independent graphic designer and web developer currently living
          in Brooklyn, NY. I create products &amp; brands that are fun,
          user-friendly, and good for the world.
        </p>
      </div>

      <div class="photo">
        <img
          src="@/assets/images/Nick_Crawford.jpg"
          alt="Photo of Nick Crawford"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables.scss';

#about {
  margin: 6rem 0 0;
  background: $success;
  color: $light;
}

.about-container {
  align-items: center;

  max-width: $xl-bp;
  margin: 0 auto;

  @media screen and (min-width: $md-bp) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 3fr 2fr;
    grid-gap: 4rem;
  }
}

.photo {
  width: 100%;
  height: 100%;
  max-height: 66vh;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: 33% 0%;
  }
}

.content {
  font-size: 0.75em;
  padding: 0.25rem 2rem 2rem;

  @media screen and (min-width: $md-bp) {
    font-size: 1em;
    padding: 2rem 4rem;
  }
}
</style>
