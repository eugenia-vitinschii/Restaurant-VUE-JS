<template>
   <button><slot></slot></button>
 </template>
 
 
 <script setup>
 import { defineOptions} from "vue";
 
 defineOptions({
   name: "TheButton",
 });


 </script>