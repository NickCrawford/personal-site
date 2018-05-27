<template>
  <div class="grid">
    <grid-card 
      v-for="card in cards"
      v-bind:key="card.title"
      :title="card.title"
      :size="card.size"
      :coverImage="card.coverImage"
      :summary="card.summary"
      :type="card.type"
      :url="card.url"></grid-card>
  </div>
</template>

<script>
import Butter from 'buttercms';
import GridCard from '@/components/GridCard';

export default {

  name: 'posts',
  components: { GridCard },

  async asyncData ({ app }) {
    const butter = Butter('591e7b75c546b08df5e506199833d3a0d4d35293');

    var cards = [];
    await butter.post.list({category_slug: 'posts'})
    .then(function(resp) {
      var posts = resp.data.data;


      for (var i = posts.length - 1; i >= 0; i--) {
        const post = posts[i];

        var size;
        post.tags.filter((tag) => {
          if (tag.slug == 'small') size = 1;
          if (tag.slug == 'medium') size = 2;
          if (tag.slug == 'large') size = 3;
        })

        cards.push({
          title: post.title,
          size: size || 2,
          coverImage: post.featured_image,
          summary: post.summary,
          type: 'post',
          url: post.slug,
        });
      }
      
    }).catch(function(resp) {
      console.log(resp)
    });

    return { cards }
  }
}
</script>

<style lang="css" scoped>
</style>