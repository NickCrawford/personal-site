<template>
  <div>
    <header-bar :textColor="'#333'"></header-bar>
    <client-only>
      <div id="form-wrapper">
        <div
          class="typeform-widget"
          data-url="https://nickcrawforddesign.typeform.com/to/HqYwoQ"
          data-hide-headers="true"
          data-hide-footer="true"
          style="width: 100%; height: 100vh;"
        ></div>
        <script>
  ;(function() {
    var qs,
      js,
      q,
      s,
      d = document,
      gi = d.getElementById,
      ce = d.createElement,
      gt = d.getElementsByTagName,
      id = 'typef_orm',
      b = 'https://embed.typeform.com/'
    if (!gi.call(d, id)) {
      js = ce.call(d, 'script')
      js.id = id
      js.src = b + 'embed.js'
      q = gt.call(d, 'script')[0]
      q.parentNode.insertBefore(js, q)
    }
  })()
        </script>
      </div>
    </client-only>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue'

export default {
  components: { HeaderBar }
}
</script>

<style>
#form-wrapper {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  min-height: 100vh;

  /* margin-top: 4rem; */
}
</style>