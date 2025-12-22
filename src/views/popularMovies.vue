<script setup>
import { ref, onMounted } from "vue";
import MovieService from "@/api/movieService";
import MovieCard from "@/components/MovieCard.vue";

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
      v-else
      class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
    >
      <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>


<style scoped>
</style>

