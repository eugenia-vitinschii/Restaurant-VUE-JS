<template>
  <div class="preview">
    <div class="preview__img">
      <img :src="preview" alt="preview iphoto" />
    </div>
  </div>
</template>
   
<script setup>
import { defineOptions, defineProps } from "vue";

defineOptions({
  name: "PhotoSection",
});

defineProps({
  preview: { type: String },
});
</script>

<style lang="sass">
.preview
   &__img
      position: relative
      height: 400px
      clip-path: inset(0)
      img
         object-fit: cover
         position: fixed
         left: 0
         top: 0
         width: 100%
         height: 100%

</style>
