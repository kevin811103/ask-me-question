<template>
  <div>
    <h2>來看看夠不夠瞭解你朋友吧</h2>
    <!-- <div  v-for="(item, index) in answerObject.question" :key="index">
      
    </div>-->
    <!-- <b-button @click="getQuestionData()">取資料</b-button> -->
    <div v-for="item of questionList" :value="item.no" :key="item.no">
      <div>第{{item.no}}題</div>
      <b-form-group>
        <b-row >
          <b-col sm="3">
            <label for="input-small">你覺得{{answerObject.username}}</label>
          </b-col>
          <b-col sm="9">
            <b-form-input v-model="item.text"></b-form-input>
          </b-col>
        </b-row>

      <!--   v-model="q.choose" -->

        <div v-for="(q,index) in item.r" :value="q.op" :key="q.op">
          <b-form-radio
          
            :name="item.no+'q'"
            @change="radioChange(q,item.no)"
            :value="index+1"
            style="margin:5px"
          >
            <b-form-input v-model="q.text" @click="inputClick(q)"></b-form-input>
          </b-form-radio>
          <b-alert v-model="q.needInput" variant="danger">請輸入選項文字</b-alert>
        </div>

        <!-- <div>
          問題{{item.no}}答案是:
          <strong>{{item.answerText}}</strong>
        </div> -->
      </b-form-group>
    </div>
       <b-button @click="sumitDataObject()">送出你的答案</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answerObject: {},
      questionList: {}
    };
  },
  mounted() {
    console.log(this.$route.params.urlcode);
    this.getQuestionData();
  },
  methods: {
    // 用urlcode 去取回資料
    getQuestionData() {
      const urlcode = this.$route.params.urlcode;
      // console.log("傳出去:", urlcode);
      this.$store.dispatch("module/question/getQuestion", urlcode).then(res => {
        // console.log("success:", res);
        if (res) {
          this.$store.commit("module/answer/setAnswerObject", res.res);
          this.answerObject = this.$store.state.module.answer.answerObject;
          // console.log("answerObject:", this.answerObject);
          this.questionList = JSON.parse(this.answerObject.question);
          // console.log("this.questionList:", this.questionList);
        } else {
          alert("你輸入錯了喔,請換個網址");
        }
        // if(res.urlcode){
        //   this.$store.commit("module/question/setUrlcode",res.urlcode);
        //   this.$router.push("/create/finish");
        // }else{
        //   alert("發生錯誤請 再重新送出");
        // }
      });
      // N6xM3tR5zU0f;
    },
    radioChange(){

    },
    inputClick(){
      
    },
    sumitDataObject(){

    }
  }
};
</script>

<style>
</style>
