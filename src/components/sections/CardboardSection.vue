<template>
  <div class="section cardboard">
    <div class="container">
      <div class="section__wrapper cardboard__wrapper">
        <div class="section__item">
          <div class="section__text text" v-motion-roll-visible-bottom>
            <p class="heading-green">{{ heading }}</p>
            <p class="subheading-green">{{ subheading }}</p>
          </div>
          <div class="section__buttons">
            <the-button @click="$emit('getLink')" class="button-green">{{
              button
            }}</the-button>
          </div>
          <div class="section__img">
            <img :src="img" alt="Section img" />
          </div>
        </div>
        <div
          class="section__media"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, scale: 1 }"
          :variants="{ custom: { scale: 2 } }"
          :delay="200"
          :duration="1200"
        >
          <img :src="media" alt="img" />
        </div>
      </div>
    </div>
  </div>
</template>
 
<script setup>
import { defineOptions, defineProps  } from "vue";

import TheButton from "../ui/TheButton.vue";

defineOptions({
  name: "CardboardSection",
});

defineProps({
  heading: { type: String },
  subheading: { type: String },
  button: { type: String },
  img: { type: String },
  media: { type: String },
});
</script>