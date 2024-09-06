<template>
  <div class="menu__heading">
    <div class="menu__heading--title">
      <p class="heading-green">Heading: {{ heading }}</p>
    </div>
    <div class="menu__heading--img">
      <img :src="img" alt="menu-img" />
    </div>
  </div>
</template>
   
   <script setup>
import { defineOptions, defineProps } from "vue";

defineOptions({
  name: "MenuHeading",
});

defineProps({
  heading: { type: String },
  img: { type: String },
});
</script>
   
   