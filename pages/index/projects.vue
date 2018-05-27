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

  name: 'projects',
  components: { GridCard },

  async asyncData ({ app }) {
    const butter = Butter('591e7b75c546b08df5e506199833d3a0d4d35293');

    
    var cards = [];
    await butter.post.list({category_slug: 'projects'})
    .then(function(resp) {
      var projects = resp.data.data;

      for (var i = projects.length - 1; i >= 0; i--) {
        const project = projects[i];
        
        var size;
        project.tags.filter((tag) => {
          if (tag.slug == 'small') size = 1;
          if (tag.slug == 'medium') size = 2;
          if (tag.slug == 'large') size = 3;
        })
        
        cards.push({
          title: project.title,
          size: size || 2,
          coverImage: project.featured_image,
          summary: project.summary,
          type: 'project',
          url: project.slug,
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