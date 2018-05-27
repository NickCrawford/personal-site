<template>
  <div class="post-page" v-html="post.data.body"></div>
</template>

<script>
import Butter from 'buttercms';

export default {
  name: 'post',

  async asyncData ({ params }) {
    const butter = Butter('591e7b75c546b08df5e506199833d3a0d4d35293');

    var post;
    await butter.post.retrieve(params.slug)
    .then((res) => {
      post = res.data
    }).catch((res) => {
      console.log(res)
    })
    return { post }
  }
}
</script>

<style lang="css" scoped>
</style>

