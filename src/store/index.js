import Vue from 'vue'
// Vuex는 데이터를 store라는 파일을 통해 관리하고 프로젝트 전체에 걸쳐 활용할 수 있게 해줌
import Vuex from 'vuex'
import axios from 'axios'    // 추가
import createPersistedState from "vuex-persistedstate"    // 추가

// TMDB 영화 API
const MOVIE_URL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=997eb5de104f78b2d7d37a21230077bc&language=ko-KR&page=1'


Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],           // 플러그인 추가

  // state: 프젝에서 공통으로 사용하는 변수
  state: {
    // Movie
    movies: [],
    watchList: [],

    // Community
    article_id : 1,
    articles : []
  },

  // getters : 컴포넌트들의 computed(계산된 속성)의 공통 사용 정의
  // 하위 모듈의 getters를 불러오려면 this.$store.getters['경로명/함수명']
  getters: {
  },

  // mutations: state를 변경시킴 (동기처리, 대문자)
  // - 함수 형태로 작성
  // - commit('함수명', 전달인자')로 실행
  mutations: {
    // Movie
    GET_MOVIES(state, movies){
      state.movies = movies
    },
    ADD_MOVIE(state, movie){
      state.watchList.push(movie)
    },
    WATCHDONE(state, watch){
      state.watchList.forEach((watchItem) => {
        if(watchItem.id === watch.id){
          watchItem.is_watched = !watchItem.is_watched
        }
      })
    },
    DELETE_WATCH(state, watch){
      state.watchList = state.watchList.filter((watchItem)=>{
        return !(watchItem.id === watch.id)
      })
    },

    // Community
    // 게시글 작성 (CreateView)
    CREATE_ARTICLE(state, article){   // 액션에서 전달받은 article
      state.articles.push(article)               // state의 articles에 추가
      state.article_id = state.article_id + 1    // id는 1씩 늘어나도록
    },
    // 게시글 삭제 (DetailView)
    DELETE_ARTICLE(state, id){
      state.articles = state.articles.filter((article)=>{
        return !(article.id===id)
      })
    }
  },

  // actions : mutations를 실행시킴 (비동기처리, 소문자)
  // - 함수 형태로 작성. 비동기처리여서 콜백함수로 주로 작성
  // - dispatch('함수명', '전달인자')로 실행
  actions: {
    // Movies
    getMovies(context){
      axios({
        method: 'get',
        url: MOVIE_URL,
      })
      .then((res)=> {
        const movies = res.data.results
        context.commit('GET_MOVIES', movies)
      })
    },
    addMovie(context, movie){
      context.commit('ADD_MOVIE', movie)
    },
    watchDone(context, watch){
      context.commit('WATCH_DONE', watch)
    },

    // Community
    createArticle(context, payload){    // CreateView에서 데이터 받아서 
      const article = {                 // 필요한 정보들을 객체로 변수에 담는다
        id: context.state.article_id,   // id <- state
        title: payload.title,           // title <- payload
        content: payload.content,       // content <- payload
        createdAt: new Date().getTime(),    // 생성시간 : 지금 시간을 가져오는 방법!!
      }
      context.commit('CREATE_ARTICLE', article)    // commit으로 mutations실행
    }
  },

  modules: {
  }

})
