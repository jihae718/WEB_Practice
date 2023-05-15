<template>
  <div class="index">
    <h1>All Articles</h1> <br><br>

    <div class="container">
      <!-- 버튼에 라우터 넣는 3가지 방법 -->
      <div style="display: inline-block; float:right;">
        <button @click="$router.push('/create')" type="button" class="btn btn-outline-secondary" >Write</button>
      </div>
      <!-- <router-link :to="{name: 'create'}"></router-link> -->
      <!-- <button type="button" class="btn btn-secondary" @click="$router.push({name: 'index'})">뒤로가기</button> -->

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      <!-- articles는 state데이터라 그냥 써도 되고, key를 article.id로 접근 가능 -->
      <!-- 자식에서 article이라는 용어를 쓸 수 있도록 바인딩 -->
        <ArticleItem
          v-for="article in articles" :key='article.id'
          :article=article
        />
      </div>
    </div>

  </div>
</template>

<script>
import ArticleItem from '@/components/Community/ArticleItem'

export default {
  name: 'IndexView',
  components: {
    ArticleItem,
  },

  // 이게 있어야 작성한 글이 나타난다 ★
  computed: {
    articles(){
      return this.$store.state.articles
    }
  }
}
</script>

<style>

</style>