<template>
  <div>
    <transition name="layout" mode="out-in">
      <div>
        <nuxt />

        <div class="page-footer">
          <div class="footer-content">
            <div>
              <p>hi@nickcrawford.design</p>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- <footer>
      <p>About</p>
      <p></p>
    </footer>-->
  </div>
</template>

<script></script>

<style lang="scss">
@import '~assets/styles/variables';

.page-footer {
  // background: white;
  color: $success;
}

.footer-content {
  padding: 2rem;

  display: flex;
  justify-content: center;

  p {
    margin: 0;
  }

  .is-white {
    color: white;
  }
}
</style>
