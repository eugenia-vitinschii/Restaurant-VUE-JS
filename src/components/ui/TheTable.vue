<template>
  <tr>
    <td>
      <p class="subheading-green">{{ title }}</p>
      <p class="body-text-green">{{ description }}</p>
    </td>
    <td>
      <p class="body-text-green menu__table--price">
        {{price }}
      </p>
    </td>
  </tr>
</template>
    
<script setup>
import { defineOptions, defineProps } from "vue";

defineOptions({
  name: "TheTable",
});

defineProps({
  title: { type: String },
  description: { type: String },
  price: { type: String },
});
</script>
    
    