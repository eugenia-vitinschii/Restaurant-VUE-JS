<template>
  <!-- header -->
  <div class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__logo">
          <router-link to="/">
            <img src="@/assets/img/logo/header-logo.png" alt="logo" />
          </router-link>
        </div>
        <!-- nav -->
        <nav class="header__nav" :class="{ active: showBurger }">
          <ul v-on:click="showBurger = !showBurger">
            <li><router-link class="header__link" to="/">Home</router-link></li>
            <li>
              <router-link class="header__link" to="/menu">Menu</router-link>
            </li>
            <li>
              <router-link class="header__link" to="/order-lunch">Order lunch</router-link>
            </li>
            <li>
              <router-link class="header__link" to="/catering">Catering</router-link>
            </li>
            <li>
              <router-link class="header__link" to="/order-catering">Order catering</router-link>
            </li>
            <li>
              <router-link class="header__link" to="/catering-faq">catering FAQ</router-link>
            </li>
            <li>
              <router-link class="header__link" to="/lets-connect">Let's connect</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <!-- burger button -->
  <div
    class="burger"
    v-on:click="showBurger = !showBurger"
    v-bind:class="{ active: showBurger }"
  >
    <span></span>
  </div>
</template>

<script setup>
import { defineOptions, ref } from "vue";

defineOptions({
  name: "TheHeader",
});

const showBurger = ref(false);
</script>