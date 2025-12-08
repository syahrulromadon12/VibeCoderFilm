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
  <div class="p-6 bg-black min-h-screen">
    <h1 class="text-3xl font-bold mb-6 text-white">Popular Movies</h1>

    <!-- Loading -->
    <div v-if="loading" class="text-gray-400">Loading...</div>

    <!-- Error -->
    <div v-if="error" class="text-red-500">
      Error: {{ error }}
    </div>

    <!-- Movie List -->
    <div
      v-if="!loading && !error"
      class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
    >
      <div
        v-for="movie in movies"
        :key="movie.id"
        class="bg-white/10 backdrop-blur-md border border-white/20 
               rounded-xl p-3 shadow-md hover:bg-white/20 transition"
      >
        <img
          :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
          class="w-full rounded-lg"
          alt="Poster"
        />

        <h2 class="font-semibold mt-2 text-sm text-white line-clamp-2">
          {{ movie.title }}
        </h2>

        <p class="text-gray-300 text-xs">
          {{ movie.release_date }}
        </p>
      </div>
    </div>
  </div>
</template>


<style scoped>
</style>

