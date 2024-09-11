<template>
   <div class="section" >
     <div class="container">
       <div class="section__wrapper">
         <div class="section__text text">
           <p class="heading-white">{{ heading }}</p>
           <p class="subheading-white">{{ subheading }}</p>
         </div>
         <div class="section__buttons">
           <the-button @click="$emit('getLink')" class="button-white">{{ button }}</the-button>
         </div>
       </div>
     </div>
   </div>
 </template>
 
  <script setup>
  import { defineOptions } from "vue";
  import {defineProps} from "vue";

  defineOptions({
    name: "TransparentSection",
  });

defineProps({
  heading: { type: String },
  subheading: { type: String },
  button: { type: String },
});
  </script>