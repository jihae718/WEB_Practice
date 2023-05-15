<template>
  <div>
    <h1>Detail</h1>
    <!-- 작성한 글이 없으면 다음 내용도 없으므로, ?를 이용해서 있을때만 보여준다 -->
  
  <div class="card border-mb-3 mx-auto mt-3" style="max-width: 50rem;">
    <div class="card-header bg-transparent border">{{article?.id}}번째 게시물</div>
    <div class="card-body">
      <h2 class="card-title">제목 : {{article?.title}}</h2>
      <p class="card-text">내용 : {{article?.content}}</p>
      <p class="card-text">작성시간 : {{articleCreatedAt}}</p>

      <!-- Comment Form 기능추가 예정 -->
      <div class="form-floating mb-3">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label for="floatingTextarea">Comments</label>
      </div>

      <!-- 글 삭제 버튼은 본인일때만 삭제할 수 있도록 (장고?) -->
      <button type="button" class="btn btn-outline-danger mx-3" @click="deleteArticle">글 삭제</button>
      <button type="button" class="btn btn-outline-secondary" @click="$router.push({name: 'index'})">뒤로가기</button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'DetailView',

  data(){
    return {
      article: null,
    }
  },

  computed: {
    articles(){
      return this.$store.state.articles
    },
    articleCreatedAt(){
      const article = this.article
      const createdAt = new Date(article?.createdAt).toLocaleString()
      return createdAt
    }
  },

  methods: {
    // id로 게시글 가져오기
    getArticleById(id) {
      // const id = this.$route.params.id
      for (const article of this.articles) {
        if (article.id === Number(id)){    // id가 str으로 저장되어있으니까 숫자로 변환
          this.article = article     // 그 게시글을 this게시글로 한다
          break
        }
      }
      if (!this.article) {      // 찾았는데 그 id에 해당하는 게시글이 없으면?
        this.$router.push({name:'NotFound404'})    // 404페이지로 보내버림
      }
    },

    // 게시글 삭제
    deleteArticle(){
      this.$store.commit('DELETE_ARTICLE', this.article.id)    // id정보 담아서 바로 삭제
      this.$router.push({name:'index'})
    }
  },

  // 생성되었을 때 라이프사이클 후크 ★
  created(){
    this.getArticleById(this.$route.params.id)
  }
}
</script>

<style>

</style>