<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <div v-html="aboutContent.body"></div>
  </div>
</template>

<script setup>

const { data: aboutContent } = await useContent('about').fetch()
</script>
