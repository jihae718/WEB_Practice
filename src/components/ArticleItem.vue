<template>

  <div class="col">
    <div class="card h-100" @click="goDetail(article.id)">
      <div class="card-body">
        <h5 class="card-title">{{article.id}}_{{article.title}}</h5>
        <p class="card-text">{{article.content.substr(0,10)+'...'}}</p>
      </div>
      <div class="card-footer">
        <small class="text-muted"> 작성일: {{article.createdAt}}</small>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'ArticleItem',
  
  props: {
    article: Object,    // 자식에서 데이터 형식 명시
  },

  // params
  // name 형태에서 파라미터를 전달할 때 사용 -> $router.params
  // 주소에 포함된 변수를 전달하고 싶을 떄 사용 -> /user/123
  methods: {
    goDetail(id){
      this.$router.push({
        name:'detail',
        params:{id}
        })
    }
  }
}
</script>

<style>
.card-title {
  color:cadetblue;
  border-bottom: 0.5px solid #dcf1fb; 
  padding: 0 0 0 0.2em;
}
</style>