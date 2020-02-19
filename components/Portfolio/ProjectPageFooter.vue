<template>
  <div class="project-page-footer">
    <div class="footer-content container">
      <nuxt-link to="/" class="link-style">« View more projects</nuxt-link>

      <div>
        <h3 class="subtitle is-5">Get in touch</h3>
        <a href="mailto:hi@nickcrawford.design" class="contact-button"
          >hi@nickcrawford.design</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '~assets/styles/variables.scss';

.project-page-footer {
  background-color: #fafafa;
  color: $darker;
}

.project-page-footer .footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-page-footer .link-style {
  color: $darker;
  text-align: left;
}

.project-page-footer h3 {
  margin-top: 0.25em;
  text-align: right;
  color: $success;
}

.project-page-footer .contact-button {
  display: block;
  text-align: left;
  // margin-left: 0;
  margin-right: 0;
}
</style>
