<template>
  <div>
    <h2>你有你想像的了解{{questionData.user_name}}嗎?</h2>
    <h3>排行榜</h3>
    <b-table striped hover :items="scoreData" :fields="fields"></b-table>
    <div v-for="(data,index) of scoreData" :key="index"></div>
    <b-button block variant="primary" @click="playAgain()">回答問題</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["姓名", "分數", "排名"],
      questionData: {},

      scoreData: []
    };
  },
  mounted() {
    console.log(this.$route.params.urlcode);
    this.getQuestionData();
  },
  methods: {
    playAgain(){
      this.$router.push("/answer/"+this.$route.params.urlcode);
    },
    // 用urlcode 去取回資料
    getQuestionData() {
      const urlcode = this.$route.params.urlcode;
      // console.log("傳出去:", urlcode);
      this.$store.dispatch("module/question/getQuestion", urlcode).then(res => {
        // console.log("success:", res);
        if (res) {
          this.$store.commit("module/answer/setAnswerObject", res.res);
          this.questionData = this.$store.state.module.answer.answerObject;
          console.log("questionData", this.questionData);
          let answerData = JSON.parse(this.questionData.answer);
          // answerData sort
          answerData.sort((a, b) => {
            return b.score - a.score;
          });

          answerData.forEach((data, index) => {
            this.scoreData.push({
              姓名: data.userName,
              分數: data.score,
              排名: index + 1
            });
            console.log("data:", data);
          });
          // this.scoreData =
          // console.log("this.scoreData :", this.scoreData);
          // fields:['姓名', '分數', '排名'],
        } else {
          alert("你輸入錯了喔,請換個網址");
        }
      });
    }
  }
};
</script>

<style>
</style>
