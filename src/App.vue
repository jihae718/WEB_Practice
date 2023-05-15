<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">

        <!-- img를 a태그로 감싸면, img클릭시 이동하도록 구현 가능 -->
        <a href="/">
          <!-- object-fit:cover를 쓰면 가로세로 비율은 유지하면서 컨테이너에 꽉 차도록 설정 -->
          <img class="mx-3" src="@/assets/logo.png" style="width:150px; object-fit:cover;" >
        </a>
        
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">

        <!-- 영화 정보 -->
        <li class="nav-item dropdown px-3">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style="cursor:pointer;">Movies</a>
          <ul class="dropdown-menu">
            <li><router-link :to="{name: 'MovieView'}" class="dropdown-item">All Movies</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link :to="{name: 'RandomView'}" class="dropdown-item">Movie Recommendation</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <!-- 볼 목록은 로그인했을때만 보여야 할것 같은데? -->
            <li><router-link :to="{name: 'WatchListView'}" class="dropdown-item">Watch List</router-link></li>
          </ul>
        </li>  

        <!-- Community -->
        <li class="nav-item dropdown px-3">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style="cursor:pointer;">Community</a>
          <ul class="dropdown-menu">
            <li><router-link :to="{name: 'index'}" class="dropdown-item">All Articles</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link :to="{name: 'create'}" class="dropdown-item">New Articles</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link :to="{name: 'create'}" class="dropdown-item">Photos</router-link></li>
          </ul>
        </li>  

        <li class="nav-item dropdown px-3">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style="cursor:pointer;">Reservation</a>
          <ul class="dropdown-menu">
            <li><router-link :to="{name: 'index'}" class="dropdown-item">Reserve</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link :to="{name: 'create'}" class="dropdown-item">New Articles</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link :to="{name: 'create'}" class="dropdown-item">Photos</router-link></li>
          </ul>
        </li>  

        </ul>

      <!-- ID, PS 입력창 구현하자 -->
      </div>
    </nav>

    <div id="bannerimage" class="mb-3"></div>

    <router-view/>

  </div>
</template>

<script>
export default ({
  // 이게 없으면 영화정보가 안가져와져!
  created(){
    this.$store.dispatch('getMovies')
  }
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#bannerimage {
  width: 100%;
  background-image: url('@/assets/movie.jpg');
  /* 영화사진들이 돌아가도록 수정 */
  height: 405px;
  background-color: rgb(93, 150, 93);
  background-position: center;
}

nav {
  padding: 30px;
  color:rgb(143, 180, 167)
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: darkslategrey;
  text-decoration-line: none;
}

.navbar{
  background-color: rgb(221, 206, 224) !important;
}

h1 {
  font-family: 'Lobster', cursive;
  color: slategray;
  text-shadow: lightgrey 2px 5px;
}
.card:hover {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

</style>
