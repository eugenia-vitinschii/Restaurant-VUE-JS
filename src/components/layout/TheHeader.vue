<template>
  <div class="header">
    <div class="container">
      <div class="header__wrapper">
        <nav class="header__nav" :class="{active: showBurger}">
          <ul>
            <li><router-link class="header__link" to="/">Home</router-link></li>
            <li><router-link class="header__link" to="/about">Menu</router-link></li>
            <li><router-link class="header__link" to="/about">Order lunch</router-link></li>
            <li><router-link class="header__link" to="/about">Bowl</router-link></li>
            <li><router-link class="header__link" to="/about">Catering</router-link></li>
            <li><router-link class="header__link" to="/about">Order catering</router-link></li>
            <li><router-link class="header__link" to="/about">catering FAQ</router-link></li>
            <li><router-link class="header__link" to="/about">Let's connect</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div class="burger" v-on:click="showBurger = !showBurger"
  v-bind:class="{ active: showBurger }"><span></span></div>
</template>

<script setup>
import { defineOptions , ref} from "vue";

defineOptions({
  name: "TheHeader"
});

const showBurger = ref(false);
</script>