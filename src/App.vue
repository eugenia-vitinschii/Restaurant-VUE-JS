
<template>
  <the-header/> 
  <div class="content">
      <RouterView />
     <scroll-to-top/>
  </div>
  <the-footer />

</template>

<script setup>

import TheHeader from "../src/components/layout/TheHeader.vue";
import TheFooter from "../src/components/layout/TheFooter.vue";
import ScrollToTop from "./components/ui/ScrollToTop.vue";
</script>
