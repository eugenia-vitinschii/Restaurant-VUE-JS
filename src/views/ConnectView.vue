<template>
  <!-- let's connect options -->
  <cardboard-section
    :heading="'Connect'"
    :subheading="'We will make sure that your celebration will be remembered for a long time!'"
    :button="'see menu'"
    @getLink="$router.push('/menu')"
    :img="'src/assets/img/bg-img/menu-img.png'"
    :media="'src/assets/img/bg-heading/home-img-3.png'"
  />
  <!-- let's connect  scrolling section -->
  <photo-section :preview="'src/assets/img/photo-section/food-bg.png'" />
  <div class="connect">
    <div class="container">
      <div class="connect__wrapper">
        <p class="heading-white">connect</p>
      </div>
    </div>
  </div>
  <!--  let's connect scrolling section -->
  <photo-section :preview="'src/assets/img/photo-section/menu-banquet.png'" />
</template>
   
<script setup>
import { defineOptions } from "vue";

import CardboardSection from "@/components/sections/CardboardSection.vue";
import PhotoSection from "@/components/sections/PhotoSection.vue";

defineOptions({
  name: "ConnectPage",
});
</script>
   