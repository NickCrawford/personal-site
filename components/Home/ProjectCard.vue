<template>
  <div class="project-card-container" :style="styleObject">
    <svg class="defs-only">
      <filter
        id="duotone"
        color-interpolation-filters="sRGB"
        x="0"
        y="0"
        height="100%"
        width="100%"
      >
        <feColorMatrix
          type="matrix"
          values="0.29  0     0 0     0
              0     0.56  0     0     0
              0     0     0.35  0     0
              0     0     0     1     0 "
        />
      </filter>
    </svg>

    <div class="bg-ornament"></div>
    <div class="project-card">
      <div class="mobile-image-container">
        <img
          :src="layer.image.url"
          :alt="layer.image.alt"
          v-for="(layer, index) in project.data.layers"
          :key="`layer-${index}`"
          class="portfolio-image"
          v-bind:data-depth="layer.depth"
          :style="{
            transform: `translate(${parallaxX(layer.depth)}%, ${parallaxY(
              layer.depth
            )}%)`,
            'z-index': layer.depth
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
const hexToDec = function(hexString) {
  var decString = hexString.replace(/[^a-f0-9]/gi, '')
  return parseInt(decString, 16)
}

const PARALLAX_AMPLIFIER = 4

function throttled(delay, fn) {
  let lastCall = 0
  return function(...args) {
    const now = new Date().getTime()
    if (now - lastCall < delay) {
      return
    }
    lastCall = now
    return fn(...args)
  }
}

export default {
  props: {
    rows: {
      type: [String, Number],
      default: 1
    },

    cols: {
      type: [String, Number],
      default: 3
    },

    project: {
      type: Object
    }
  },

  computed: {
    styleObject() {
      return `grid-row: span ${this.rows}; grid-column: span ${this.cols};`
    }
  },

  data() {
    return {
      mouse: {
        x: null,
        y: null
      }
    }
  },

  mounted() {
    this.$el.addEventListener('mousemove', throttled(30, this.handleMouseMove))
    this.$el.addEventListener('mouseleave', this.handleMouseLeave)
  },

  destroyed() {
    this.$el.removeEventListener('mousemove', this.handleMouseMove)
    this.$el.removeEventListener('mouseleave', this.handleMouseLeave)
  },

  methods: {
    // Returns the proper amount to translate an image based on it's parallax depth
    parallaxX(depth) {
      if (!this.$el || !this.mouse.x) return 0

      let retVal =
        this.$el.getBoundingClientRect().x +
        this.$el.clientWidth / 2 -
        this.mouse.x

      return -(retVal / this.$el.clientWidth) * (depth + 1) * PARALLAX_AMPLIFIER
    },
    parallaxY(depth) {
      if (!this.$el || !this.mouse.y) return 0

      let retVal =
        this.$el.getBoundingClientRect().y +
        this.$el.clientHeight / 2 -
        this.mouse.y

      return (
        -(retVal / this.$el.clientHeight) * (depth + 1) * PARALLAX_AMPLIFIER
      )
    },

    projectBackgroundColor() {
      if (!this.project) return '#545454'

      try {
        return this.project.data['background_color']
      } catch (err) {
        return '#545454'
      }
    },

    handleMouseMove(e) {
      // console.log(e)
      this.mouse.x = e.clientX
      this.mouse.y = e.clientY
    },

    handleMouseLeave(e) {
      if (!this.$el) return

      const bounding = this.$el.getBoundingClientRect()
      this.mouse.x = bounding.x + bounding.width / 2
      this.mouse.y = bounding.y + bounding.height / 2
    }
  }
}
</script>

<style lang="scss" scoped>
.project-card-container {
  position: relative;
  z-index: 0;

  // opacity: 1;

  // transition: 0.3s filter ease, 0.3s opacity ease;
  // filter: grayscale(0) brightness(80%) drop-shadow();

  &:hover {
    cursor: pointer;
    z-index: 100;
    // opacity: 1;

    // filter: grayscale(0) brightness(100%)
    //   drop-shadow(0px 16px 10px rgba(0, 0, 0, 0.25));
  }
}

.project-card {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0.25rem;

  width: 100%;
  height: 100%;
  // overflow: hidden;
  transform: translate(0, 0);

  z-index: 102;

  display: flex;
  flex-direction: column;
}

.mobile-image-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.portfolio-image {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  padding: -2rem;

  object-fit: contain;
  object-position: center center;

  transition: transform 0.2s ease-out;
}

.portfolio-image[data-depth='0'] {
  pointer-events: unset;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%; //calc(1 / 12 * 100vw + 100%);
  z-index: 0;

  padding: 0rem;
  object-fit: cover;
  object-position: center;

  border-radius: 0.25rem;
  overflow: hidden;

  filter: drop-shadow();
  transition: 0.3s filter ease, transform 0.2s ease-out;

  &:hover {
    filter: drop-shadow(0px 16px 10px rgba(0, 0, 0, 0.25));
  }
}

.defs-only {
  position: absolute;
  height: 0;
  width: 0;
  overflow: none;
  left: -100%;
}
</style>
