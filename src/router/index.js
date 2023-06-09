import Vue from 'vue'
import VueRouter from 'vue-router'

// Home
import HomeView from '@/views/HomeView'

// Community
import CreateView from '@/views/Community/CreateView'
import DetailView from '@/views/Community/DetailView'
import IndexView from '@/views/Community/IndexView'
import NotFound404 from '@/views/NotFound404'

// Movie
import MovieView from '@/views/Movie/MovieView'
import RandomView from '@/views/Movie/RandomView'
import WatchListView from '@/views/Movie/WatchListView'

Vue.use(VueRouter)

// 라우트 이름으로 접근하려면 객체를 router-link, 컴포넌트의 to prop으로 전달
// /user/123 경로로 이동시키는 방법 2가지
// <router-link :to="{name: 'user', params: {userId: 123}}">User</router-link>
// router.push({name: 'user', params: {userId: 123}})

const routes = [
  {
    path: '/404-not-found',
    name: 'NotFound404',
    component: NotFound404
  },

  // home
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  // Movie
  {
    path: '/movies',
    name: 'MovieView',
    component: MovieView
  },
  {
    path: '/random',
    name: 'RandomView',
    component: RandomView
  },
  {
    path: '/watch-list',
    name: 'WatchListView',
    component: WatchListView
  },

  // Community
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/create',
    name: 'create',
    component: CreateView
  },
  // :id
  {
    path: '/:id',
    name: 'detail',
    component: DetailView
  },
  // 나머지 경로들은 404페이지로 redirect시킨다 (맨마지막에 위치)
  {
    path: '*',
    redirect: {name: 'NotFound404'}
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
