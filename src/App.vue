<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Geo&family=Georama:wght@300;400;500;700;900&family=Lato:wght@300;400;700;900&family=Montserrat:wght@300;400;500;700&family=Mulish:wght@300;400;700&family=Roboto:wght@300;400;500;700;900&display=swap");

body {
  font-family: "Roboto", sans-serif !important;
}

a {
  text-decoration: none;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
  width: 90%;
}
</style>
