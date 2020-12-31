<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
:root {
  --bg: #212543;
  --font-color: #FFFFFB;
  --font-color-secondary: #DDD1AB;
  --font-color-accent: #F7D94B;
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

background-color: var(--bg);
  /* background-image: linear-gradient(to bottom, var(--bg), #121322); */
  color: var(--font-color);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
