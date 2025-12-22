<script setup>
defineProps({
  movie: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="group bg-white/10 border border-white/20
           rounded-xl overflow-hidden
           transform-gpu transition-all duration-300 ease-in-out
           hover:scale-[1.03] hover:bg-white/20 hover:rotate-[0.3deg]"
  >
    <!-- Poster -->
    <div class="relative">
      <img
        loading="lazy"
        decoding="async"
        :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
        class="w-full aspect-[2/3] object-cover"
        alt="Poster"
      />

      <!-- Rating -->
      <div
        class="absolute top-2 right-2 bg-black/70
               text-yellow-400 text-xs font-semibold
               px-2 py-1 rounded-md"
      >
        ⭐ {{ movie.vote_average?.toFixed(1) }}
      </div>
    </div>

    <!-- Content -->
    <div class="p-3 text-white">
      <h2 class="font-semibold text-sm line-clamp-2">
        {{ movie.title }}
      </h2>

      <div class="flex justify-between items-center mt-1 text-xs text-gray-300">
        <span>{{ movie.release_date?.slice(0, 4) }}</span>
        <span>🔥 {{ Math.round(movie.popularity) }}</span>
      </div>

      <!-- Overview (hover) -->
      <p
        class="mt-2 text-xs text-gray-300 line-clamp-3
               opacity-0 group-hover:opacity-100
               transition-opacity duration-300"
      >
        {{ movie.overview }}
      </p>
    </div>
  </div>
</template>