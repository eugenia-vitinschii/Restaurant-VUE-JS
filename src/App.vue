
<template>
  <the-header/>
  <div class="content">
      <RouterView />
  </div>
  <the-footer />

</template>

<script setup>

import TheHeader from "../src/components/layout/TheHeader.vue";
import TheFooter from "../src/components/layout/TheFooter.vue"
</script>
