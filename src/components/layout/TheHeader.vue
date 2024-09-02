<template>
  <div class="header">
    <div class="container">
      <div class="header__wrapper">
        <nav class="header__nav">
          <ul>
            <li><router-link class="header__link" to="/">Home</router-link></li>
            <li><router-link class="header__link" to="/about">About</router-link></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineOptions } from "vue";

defineOptions({
  name: "TheHeader"
});
</script>