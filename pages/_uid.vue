<template>
  <section>
    <div v-html="$prismic.asHtml(document.data.title)"></div>
  </section>
</template>

<script>
export default {
  async asyncData({ $prismic, error, params }) {
    let document
    let ref = $prismic.api.refs.find(ref => ref.id === 'master').ref

    try {
      document = await $prismic.api.getByUID('page', params.uid, {
        ref
      })
    } catch (err) {
      console.error(err)
    }

    if (document) {
      return { project: document.data }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>
