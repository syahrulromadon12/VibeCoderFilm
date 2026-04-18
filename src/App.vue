<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="bg-black min-h-screen text-white">

    <!-- NAVBAR ala Netflix -->
    <header class="fixed top-0 left-0 w-full h-16 bg-black/70 backdrop-blur-md flex justify-content-between items-center px-10 z-50">

      <div class="text-red-600 font-extrabold text-2xl tracking-wide mr-10">
        VibeCoderFilm
      </div>

      <!-- MENU -->
      <nav class="flex space-x-6 text-sm">
        <RouterLink
          to="/"
          class="hover:text-gray-300 transition"
          active-class="text-red-600"
          exact-active-class="text-red-600"
        >
          Home
        </RouterLink>

        <RouterLink
          to="/popular"
          class="hover:text-gray-300 transition"
          active-class="text-red-600"
        >
          Popular
        </RouterLink>

        <RouterLink
          to="/about"
          class="hover:text-gray-300 transition"
          active-class="text-red-600"
        >
          About
        </RouterLink>
      </nav>
    </header>

    <!-- CONTENT -->
    <main class="pt-16">
      <RouterView />
    </main>

  </div>
</template>

<style scoped>
/* No custom CSS needed — Tailwind handles everything */
</style>
