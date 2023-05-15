<template>
  <div>
    <h1>New Article</h1>
    <!-- form 자동으로 넘어가는 것 방지 -->

  <div class="card border-mb-3 mx-auto mt-3 p-3" style="max-width: 50rem;">
    <form @submit.prevent="CreateArticle">
      <label for="title">제목 : </label>
      <input type="text" id="title" v-model.trim="title"> <br><br>
      <label for="content">내용 : </label>
      <!-- .trim붙여서 공백 제거한 것을 넘겨줌 -->
      <textarea id="content" cols="30" rows="10" v-model.trim="content"></textarea> <br><br>
      <!-- 모든속성은 문자열에 넣어야한다! -->
      <button class="btn btn-outline-danger mx-3" type="submit">Submit</button>
      <button type="button" class="btn btn-outline-secondary" @click="$router.push({name: 'index'})">뒤로가기</button>
    </form>


  </div>


  </div>
</template>

<script>
export default {
  name: 'CreateView',
  data() {
    return {
      title : null,
      content : null,
    }
  },
  methods: {
    CreateArticle(){
      const title = this.title
      const content = this.content
      if (!title) {
        alert('제목을 입력해주세요')
      } else if(!content) {
        alert('내용을 입력해주세요')
      } else {
        const payload = {
          title, content      // 유효하면 payload에 객체 형태로 입력받은 데이터 저장
        }
        this.$store.dispatch('createArticle', payload)    // actions 실행
        this.$router.push({name:'index'})    // index(홈)으로 보내버림
      }
    }
  }
}
</script>

<style>

</style>