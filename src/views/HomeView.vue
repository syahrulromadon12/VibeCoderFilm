<script setup>
/**
 * HomeView.vue — Halaman Home
 *
 * Best Practice Vue 3 Views:
 * 1. View/Page component hanya MENGATUR LAYOUT — logic data ada di store.
 * 2. Gunakan `onMounted()` untuk trigger data fetching saat component mount.
 * 3. Gunakan `storeToRefs()` untuk destructure reactive state dari Pinia store.
 *    PENTING: Tanpa storeToRefs, state KEHILANGAN reactivity saat di-destructure!
 * 4. Actions (functions) bisa di-destructure langsung tanpa storeToRefs.
 */
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useMovieStore } from '@/stores/movieStore'
import HeroBanner from '@/components/HeroBanner.vue'
import MovieRow from '@/components/MovieRow.vue'

// Inisialisasi store
const movieStore = useMovieStore()

// Best Practice: gunakan storeToRefs() untuk state (agar tetap reactive)
const {
  trending,
  topRated,
  nowPlaying,
  upcoming,
  actionMovies,
  comedyMovies,
  horrorMovies,
  animationMovies,
  sciFiMovies,
  isLoading,
  error,
} = storeToRefs(movieStore)

// Actions bisa di-destructure langsung (bukan reactive data)
const { fetchHomeData } = movieStore

// Lifecycle hook: fetch data saat component pertama kali di-mount
onMounted(() => {
  // Hanya fetch jika belum ada data (simple caching strategy)
  if (trending.value.length === 0) {
    fetchHomeData()
  }
})
</script>

<template>
  <!-- -mt-16: kompensasi pt-16 dari App.vue agar hero full-bleed di belakang navbar -->
  <div class="-mt-16">
    <!-- Loading State -->
    <div
      v-if="isLoading"
      class="flex items-center justify-center h-[85vh]"
    >
      <div class="flex flex-col items-center gap-4">
        <!-- Spinner -->
        <div
          class="w-12 h-12 border-4 border-red-600 border-t-transparent
                 rounded-full animate-spin"
        />
        <p class="text-gray-400 text-sm">Loading movies...</p>
      </div>
    </div>

    <!-- Error State -->
    <div
      v-else-if="error"
      class="flex items-center justify-center h-[85vh]"
    >
      <div class="text-center">
        <p class="text-red-500 text-lg mb-4">{{ error }}</p>
        <button
          class="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
          @click="fetchHomeData"
        >
          Try Again
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <template v-else>
      <!--
        HeroBanner: tampilkan movie trending pertama sebagai featured.
        Best Practice: Gunakan v-if untuk guard agar tidak error saat data kosong.
      -->
      <HeroBanner
        v-if="trending.length > 0"
        :movie="trending[0]"
      />

      <!-- Movie Rows Container -->
      <div class="-mt-16 relative z-10 pb-12">
        <!--
          Best Practice:
          - Setiap MovieRow menerima props yang jelas (title & movies).
          - isLargeRow=true pada trending untuk tampilan poster portrait.
        -->
        <MovieRow
          title="🔥 Trending This Week"
          :movies="trending"
          :is-large-row="true"
        />

        <MovieRow
          title="🏆 Top Rated"
          :movies="topRated"
        />

        <MovieRow
          title="🎬 Now Playing"
          :movies="nowPlaying"
        />

        <MovieRow
          title="📅 Upcoming"
          :movies="upcoming"
        />

        <MovieRow
          title="💥 Action"
          :movies="actionMovies"
        />

        <MovieRow
          title="😂 Comedy"
          :movies="comedyMovies"
        />

        <MovieRow
          title="👻 Horror"
          :movies="horrorMovies"
        />

        <MovieRow
          title="🎨 Animation"
          :movies="animationMovies"
        />

        <MovieRow
          title="🚀 Sci-Fi"
          :movies="sciFiMovies"
        />
      </div>
    </template>
  </div>
</template>
