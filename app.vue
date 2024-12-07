<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ copy }}</p>
    <img :src="img" alt="Image" />
  </div>
</template>

<script setup>
const about = await queryContent(`/about`).find();
const { title, copy, img } = about[0];
</script>
