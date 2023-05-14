<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg bg-body-tertiary mb-3">
      <div class="container-fluid">

        <!-- img를 a태그로 감싸면, img클릭시 이동하도록 구현 가능 -->
        <a href="/">
          <!-- object-fit:cover를 쓰면 가로세로 비율은 유지하면서 컨테이너에 꽉 차도록 설정 -->
          <img class="mx-3" src="@/assets/logo.png" style="width:150px; object-fit:cover;" >
        </a>

        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li class="nav-item px-3">
            <router-link :to="{name:'index'}">Blog</router-link>
          </li>
          <li class="nav-item px-3">
            <router-link :to="{name:'movie'}">Movies</router-link>
          </li>
          <li class="nav-item px-3">
            <router-link :to="{name:'cafe'}">CafeApp</router-link>
          </li>
          <li class="nav-item px-3">
            <router-link :to="{name:'insta'}">Instagram</router-link>
          </li>
          <li class="nav-item px-3">
            <router-link :to="{name:'insta'}">TodoApp</router-link>
          </li>
        </ul>

      <!-- ID, PS 입력창 구현하자 -->
      </div>
    </nav>

    <router-view/>

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
h1 {
  font-family: 'Lobster', cursive;
  color: slategray;
  text-shadow: lightgrey 2px 5px;
}
.card:hover {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

</style>
