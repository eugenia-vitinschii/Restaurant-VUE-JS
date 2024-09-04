<template>
  <cardboard-section
    :heading="'lorem'"
    :subheading="'loremssd'"
    :button="'dedede'"
    :img="'src/assets/img/lime.png'"
    :media="'src/assets/img/color-veg-1.png'"
  />
  <transparent-section
    :class="'photo'"
    :heading="'lorem'"
    :subheading="'loremssd'"
    :button="'dedede'"
  />
  <cardboard-section
    :heading="'lorem'"
    :subheading="'loremssd'"
    :button="'dedede'"
    :img="'src/assets/img/cabbage.png'"
    :media="'src/assets/img/color-veg-2.png'"
  />
  <transparent-section
    :heading="'lorem'"
    :subheading="'loremssd'"
    :button="'dedede'"
  />
  <cardboard-section
    :heading="'lorem'"
    :subheading="'loremssd'"
    :button="'dedede'"
    :img="'src/assets/img/cabbage.png'"
    :media="'src/assets/img/color-veg-3.png'"
  />
  <transparent-section
    :class="'photo--2'"
    :heading="'lorem'"
    :subheading="'loremssd'"
    :button="'dedede'"
  />
</template>

<script setup>
import { defineOptions } from "vue";

defineOptions({
  name: "HomePage",
});

import TransparentSection from "@/components/sections/TransparentSection.vue";
import CardboardSection from "@/components/sections/CardboardSection.vue";
</script>