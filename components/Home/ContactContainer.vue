<template>
  <footer>
    <div class="contact-container">
      <p class="subtitle is-5">
        Get in touch
      </p>
      <p>
        Work inquiries, speaking and teaching engagements, funny jokes, or
        just-saying-hi’s can be sent to:
      </p>

      <p class="subtitle is-5" style="margin-top: 0.25rem;">
        hi@nickcrawford.design
      </p>
    </div>

    <ul class="social-media-container">
      <li
        class="social-media-item"
        v-for="(social, index) in socials"
        :key="index"
      >
        <a :href="social.url" target="_blank">
          <component :is="social.icon" class="icon"></component>
          <span>
            {{ social.name }}
          </span>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
import TwitterIcon from '~/assets/images/social/twitter.svg?inline'
import InstagramIcon from '~/assets/images/social/instagram.svg?inline'
import DribbbleIcon from '~/assets/images/social/dribbble.svg?inline'
import CodepenIcon from '~/assets/images/social/codepen.svg?inline'
import LinkedInIcon from '~/assets/images/social/linkedin.svg?inline'

export default {
  data() {
    return {
      socials: [
        {
          name: 'Twitter',
          icon: TwitterIcon,
          url: 'https://twitter.com/_NickCrawford'
        },
        {
          name: 'Instagram',
          icon: InstagramIcon,
          url: 'https://instagram.com/NickCrawfordDesign'
        },
        {
          name: 'LinkedIn',
          icon: LinkedInIcon,
          url: 'https://linkedin.com/in/CrawfordNick'
        },
        {
          name: 'Dribbble',
          icon: DribbbleIcon,
          url: 'https://dribbble.com/NickCrawford'
        },
        {
          name: 'CodePen',
          icon: CodepenIcon,
          url: 'https://codepen.io/NickCrawford'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/styles/variables';

footer {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.contact-container {
  max-width: 20em;
}

.social-media-container {
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  margin-top: 2rem;

  width: 100%;

  @media screen and (min-width: $md-bp) {
    justify-content: flex-start;
  }
}

.social-media-item:first-of-type {
  @media screen and (min-width: $md-bp) {
    margin-left: -0.75rem;
  }
}

.social-media-item a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0.75rem;

  text-decoration: none;

  transition: transform 0.2s ease;
  transform-origin: center center;

  &:hover {
    transform: scale(1.1);
    span {
      color: $accent;
    }
    svg {
      fill: $accent;
    }
  }
}

.social-media-item span {
  text-decoration: none;
  color: $success;

  transition: color 0.2s ease;
}

.social-media-item svg {
  display: block;
  width: 100%;
  max-width: 2rem;

  margin-bottom: 0.5rem;
  height: auto;
  fill: $success;

  transition: fill 0.2s ease;
}
</style>
