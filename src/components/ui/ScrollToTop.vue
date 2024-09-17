<template>
  <div 
  class="scroll"
  v-if="isVisible"
  >
    <a 
    href="#">
      <svg
        width="60px"
        height="60px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 15L12 10L7 15"
          stroke="#000000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const isVisible = ref(false);

const handleScroll = () => {
  if (window.pageYOffset > 500) {
    isVisible.value = true;
  } else {
    isVisible.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

 