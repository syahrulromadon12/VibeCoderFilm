<script setup>
  import { onMounted, ref } from "vue";
  // import MovieCard from '@/components/MovieCard.vue';
  import MovieService from "@/api/movieService";

  const movies = ref([]);
  const loading = ref(true);
  const error = ref(null);

  onMounted(async () => {
    try {
      const res = await MovieService.get
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  });

</script>

<template>
  <main>
  </main>
</template>
