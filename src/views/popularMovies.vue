<!-- src/views/PopularMovies.vue -->
<script setup>
import { ref, onMounted } from "vue";
import MovieService from "@/api/movieService";

const movies = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const res = await MovieService.getPopular();
    movies.value = res.data.results;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-6">Popular Movies</h1>

    <!-- Loading -->
    <div v-if="loading" class="text-gray-400">Loading...</div>

    <!-- Error -->
    <div v-if="error" class="text-red-500">
      Error: {{ error }}
    </div>

    <!-- Movie List -->
    <div
      v-if="!loading && !error"
      class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
    >
      <div
        v-for="movie in movies"
        :key="movie.id"
        class="bg-white rounded shadow p-2 hover:shadow-lg transition"
      >
        <img
          :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
          class="w-full rounded"
          alt="Poster"
        />

        <h2 class="font-semibold mt-2 text-sm line-clamp-2">
          {{ movie.title }}
        </h2>

        <p class="text-gray-500 text-xs">
          {{ movie.release_date }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* optional */
</style>

