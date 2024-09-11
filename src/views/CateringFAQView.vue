<template>
  <!-- catering FAQ options -->
  <cardboard-section
    :heading="'Catering FAQ'"
    :subheading="'Every year more than 300 couples trust us to organize their celebration!'"
    :button="'catering'"
    @getLink="$router.push('/catering')"
    :img="'src/assets/img/bg-img/catering-faq-img-1.png'"
    :media="'src/assets/img/bg-heading/catering-faq-img-1.png'"
  />
  <!-- catering FAQ  scrolling section -->
  <photo-section :preview="'src/assets/img/photo-section/menu-sideDishes.jpg'" />
  <div class="info">
    <div class="container">
      <div class="info__wrapper">
        <div class="info__wrapper--item">
          <p class="subheading-green">Lorem, ipsum.</p>
          <p class="body-text-green">Lorem, ipsum.</p>
        </div>
        <div class="info__wrapper-item"></div>
        <div class="info__wrapper-item"></div>
        <div class="info__wrapper-item"></div>
      </div>
    </div>
  </div>
  <!-- catering FAQ  scrolling section -->
  <photo-section :preview="'src/assets/img/photo-section/catering-faq-bg-1.png'" />
</template>
   
<script setup>
import { defineOptions } from "vue";

import CardboardSection from "@/components/sections/CardboardSection.vue";
import PhotoSection from "@/components/sections/PhotoSection.vue";

defineOptions({
  name: "CateringFAQPage",
});

</script>
   