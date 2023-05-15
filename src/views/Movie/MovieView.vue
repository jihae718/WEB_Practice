<template>
  <div class="container">
    <h1 class="mb-4">MovieView</h1>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      <MovieCard
      v-for="movie in movies" :key='movie.id'
      :movie='movie'
      />
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/Movie/MovieCard'

export default {
  name: 'MovieView',
  components: {
    MovieCard
  },
  computed: {
    movies() {
      return this.$store.state.movies
    }
  },

  // 영화 정보가 안가져와지는데?? => App/vue에서 created후크 걸어줘야해
  // created(){
  //   console.log(this.$store.state.movies)
  // }
}
</script>

<style>

</style>