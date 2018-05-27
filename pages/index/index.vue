<template>
  <div class="showcase">
    <no-ssr>
      <flickity :options="flickityOptions" class="main-carousel">
        <div v-for="card in cards" :key="card.title" class="carousel-cell">
          <h2>{{ card.title }}</h2>
          <grid-card 
            :title="card.title"
            :size="card.size"
            :coverImage="card.coverImage"
            :summary="card.summary"
            :type="card.type"
            :url="card.url"></grid-card>
        </div>
      </flickity>
    </no-ssr>
  </div>
</template>

<script>
import Butter from 'buttercms';
import GridCard from '@/components/GridCard';

export default {

  name: 'Showcase',
  components: { GridCard },
  async asyncData ({ app }) {
    const butter = Butter('591e7b75c546b08df5e506199833d3a0d4d35293');

    var cards = [];
    await butter.post.list({tag_slug: 'showcase'})
    .then(function(resp) {
      var posts = resp.data.data;

      for (var i = posts.length - 1; i >= 0; i--) {
        const post = posts[i];
        cards.push({
          title: post.title,
          size: 1,
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
  }, 
  data () {
    return {
      cards: [],
      flickityOptions: {
        wrapAround: true, 
        autoPlay: 6000, 
        pauseAutoPlayOnHover: false,
        contain: true,
      }
    }
  },
   mounted () {
    // element argument can be a selector string
    //   for an individual element
  },
}
</script>

<style lang="css" scoped>
</style>