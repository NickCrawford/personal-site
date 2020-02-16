<template>
  <div id="home">
    <aside>
      <div>
        <h1 class="title is-1">Nick Crawford</h1>

        <h2 class="subtitle is-4">
          Web Designer, Founder, Musician
        </h2>

        <span class="line-break"></span>
      </div>

      <contact-container class="stretch"></contact-container>
    </aside>

    <div id="projects-container">
      <h3 class="subtitle is-3" style="grid-column: span 3;">
        Selected Works...
      </h3>

      <project-card rows="2" cols="2" :project="projects[0]"></project-card>
      <project-card rows="2" cols="3" :project="projects[1]"></project-card>
      <project-card rows="2" cols="1" :project="projects[2]"></project-card>
      <!-- <project-card rows="2" cols="1" :project="projects[1]"></project-card>
      <project-card rows="2" cols="3" :project="projects[2]"></project-card>

      <project-card rows="2" cols="1"></project-card>
      <project-card rows="2" cols="2"></project-card>
      <project-card rows="1" cols="3"></project-card>
      <project-card rows="1" cols="2"></project-card> -->
    </div>
  </div>
</template>

<script>
import ContactContainer from '@/components/Home/ContactContainer.vue'
import ProjectCard from '@/components/Home/ProjectCard.vue'

export default {
  components: { ContactContainer, ProjectCard },

  async asyncData({ $prismic, error, params }) {
    let documents
    let ref = $prismic.api.refs.find(ref => ref.id === 'master').ref

    try {
      documents = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'project'),
        {
          ref
        }
      )
    } catch (err) {
      console.error(err)
    }

    if (documents) {
      return { projects: documents.results }
    } else {
      // error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

#home {
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(6, 1fr);
  grid-template-areas: 'aside aside projects projects projects projects';
  column-gap: 8rem;

  align-items: flex-start;

  padding: 4rem 1rem 2rem;
}

aside {
  grid-area: aside;
  position: sticky;
  top: 4rem;

  height: 100%;
  max-height: calc(100vh - 6rem);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#projects-container {
  grid-area: projects;

  display: grid;
  grid-auto-rows: minmax(max-content, 20vh);
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: dense;

  grid-gap: 2rem;

  min-height: calc(100vh - 6rem);
}

.line-break {
  display: block;
  height: 0.25rem;
  width: 100%;
  max-width: 5rem;
  margin: 2rem 0 3.5rem;

  background-color: $dark;
}
</style>
