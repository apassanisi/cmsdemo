<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <div v-html="aboutContent.body"></div>
  </div>
</template>

<script setup>
useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});
const { data: aboutContent } = await useContent('about').fetch()
</script>
