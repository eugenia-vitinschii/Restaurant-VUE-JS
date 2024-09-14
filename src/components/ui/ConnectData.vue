<template>
  <div class="connect__item">
    <div class="connect__item--img">
      <img src="@/assets/img/logo/footer-logo.png" alt="lorem" />
    </div>
    <div class="connect__item--text">
      <ul>
      <li class="body-text-green">{{ adress }}</li>
      <li class="body-text-green">{{ workDays}}</li>
      <li class="body-text-green"> {{ closedDays }}</li>
      <li class="body-text-green"> {{ street }}</li>
      <li><a class="body-text-green" :href="phone">Phone: <span class="green">{{ phone}}</span></a></li>
      </ul>
    </div>
  </div>
</template>
     
 <script setup>
import { defineOptions, defineProps } from "vue";

defineOptions({
  name: "ConnectData",
});

defineProps({
  adress: { type: String },
  workDays: { type: String },
  closedDays : { type: String },
  street: { type: String },
  phone: { type: String },
});
</script>
     
     