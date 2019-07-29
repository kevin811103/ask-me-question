<template>
  <div>
    <h2>{{userName}}</h2>
    <h2>來看看夠不夠瞭解你朋友</h2>
    <!-- <div  v-for="(item, index) in answerObject.question" :key="index">
      
    </div>-->
    <!-- <b-button @click="getQuestionData()">取資料</b-button> -->
    <div v-for="item of questionList" :value="item.no" :key="item.no">
      <div>第{{item.no}}題</div>
      <b-form-group>
        <b-row>
          <b-col sm="3">
            <label for="input-small">你覺得{{answerObject.username}}</label>
          </b-col>
          <b-col sm="9">
            <b-form-input v-model="item.text" readonly></b-form-input>
          </b-col>
        </b-row>

        <!--   v-model="q.choose" -->

        <div v-for="(q,index) in item.r" :value="q.op" :key="q.op">
          <b-form-radio
            :name="item.no+'q'"
            @change="radioChange(q.op,item.no,q.text)"
            :value="index+1"
            style="margin:5px"
          >
            <b-form-input v-model="q.text" readonly></b-form-input>
          </b-form-radio>
        </div>

        <!-- <div>
          問題{{item.no}}答案是:
          <strong>{{item.answerText}}</strong>
        </div>-->
      </b-form-group>
    </div>
    <b-button @click="sumitDataObject()">送出你的答案</b-button>

    <b-modal
      v-model="modalShow"
      hide-footer
      title="歡迎來到友情考驗"
      hide-header-close
      no-close-on-esc
      no-close-on-backdrop
    >
      <div class="d-block text-center">
        <b-row>
          <b-col sm="3">
            <label for="input-small">您的稱呼:</label>
          </b-col>
          <b-col sm="9">
            <b-alert show variant="warning" v-model="needAlert">請輸入稱號喔</b-alert>
            <b-form-input
              id="input-small"
              size="sm"
              placeholder="您的稱呼"
              v-model="userName"
              @click="nameInputClick()"
            ></b-form-input>
          </b-col>
        </b-row>
      </div>
      <b-row></b-row>
      <b-button class="mt-3" variant="outline-primary" block @click="userNameFinish">輸入完</b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answerObject: {},
      questionList: {},
      modalShow: true,
      userName: "",
      needAlert: false,
      reAnserObject: {
        // urlcode: this.$route.params.urlcode,
        userName: "",
        questions: [
          { no: "1", answerOp: "", answerText: "" },
          { no: "2", answerOp: "", answerText: "" },
          { no: "3", answerOp: "", answerText: "" },
          { no: "4", answerOp: "", answerText: "" },
          { no: "5", answerOp: "", answerText: "" },
          { no: "6", answerOp: "", answerText: "" },
          { no: "7", answerOp: "", answerText: "" },
          { no: "8", answerOp: "", answerText: "" },
          { no: "9", answerOp: "", answerText: "" },
          { no: "10", answerOp: "", answerText: "" }
        ],
        answerRight: [], //題號
        score: 0
      }
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
          console.log("this.answerObject:", this.answerObject);
          this.questionList = JSON.parse(this.answerObject.question);
          console.log("this.questionList:", this.questionList);
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
    radioChange(answerNo, questionNo, text) {
      console.log("qanswerNo:", answerNo);
      console.log("questionNo:", questionNo);
      console.log("在第", questionNo, "題回答答案是", answerNo, ":", text);
      this.reAnserObject.questions[
        parseInt(questionNo) - 1
      ].answerOp = answerNo;
      this.reAnserObject.questions[parseInt(questionNo) - 1].answerText = text;
    },
    inputClick() {},
    sumitDataObject() {
      // 比對答案送出成績 並跳轉

      for (let no = 0; no < 10; no++) {
        console.log(this.questionList[no].answer);
        console.log(this.reAnserObject.questions[no].answerOp);
        if (
          this.questionList[no].answer ==
          this.reAnserObject.questions[no].answerOp
        ) {
          this.reAnserObject.score += 1;
          this.reAnserObject.answerRight.push(no + 1);
        }
      }
      // 將回答者姓名寫入
      this.reAnserObject.userName = this.userName;
      // console.log("123:", this.reAnserObject); //[]
      // console.log("answerObject:", this.answerObject.answer); //[]
      // this.answerObject.answer.push("555");
      // console.log(this.answerObject.answer.length);
      // console.log(this.answerObject.answer);

      // if (!this.answerObject.answer) {
      //   let saveAnswerObject = { savedata: [] };
      //   saveAnswerObject.savedata.push(this.reAnserObject);
      //   this.answerObject.answer = saveAnswerObject.savedata;
      // } else {
      //   this.answerObject.answer.push(this.reAnserObject);
      // }
      console.log(this.answerObject);
      let tempArray = JSON.parse(this.answerObject.answer);
      console.log("tempArray",tempArray);
      // tempArray.push("22222");
console.log('tempArray.length:',tempArray.length);

      if(tempArray.length==0){
        console.log('is length');
      }
      tempArray.push(this.reAnserObject);
      console.log(this.reAnserObject);
      alert("答對了" + this.reAnserObject.score + "題");
      if (this.reAnserObject.length == 0) {
        console.log("null");
      }
      // console.log(
      //   "aaa:",
      //   JSON.stringify(this.reAnserObject) + this.answerObject.answer
      // );

      this.$store
        // .dispatch("module/answer/saveAnswerObject", this.reAnserObject)
        .dispatch("module/answer/saveAnswerObject", {
          urlcode: this.$route.params.urlcode,
          answerList: JSON.stringify(tempArray)
          // this.answerObject.answer
          // JSON.stringify(this.reAnserObject) +","+ this.answerObject.answer
        })
        .then(res => {
          console.log("存完:", res);
          if (res.status == 200) {
            console.log("finish");

            this.$router.push("/score/" + this.$route.params.urlcode);
          } else {
          }
        });

      // console.log("success:", res);
    },
    showModal() {
      this.modalShow = true;
      // "[{"no":"1","text":"1","r":[
      //   {"op":"1","text":"11","needInput":false,"choose":1},{"op":"2","text":"12","needInput":false},
      //   {"op":"3","text":"13","needInput":false},{"op":"4","text":"14","needInput":false}],
      //   "answer":"1","answerText":"1","needInput
      //   ":false},{"no":"2","text":"2","r":[{"op":"1","text":"21","needInput":false},{"op":"2","text":"22","needInput":false},{"op":"3","text":"23","needInput":false},{"op":"4","text":"24","needInput":false}],"answer":"","answerText":"","needInput":false},{"no":"3","text":"3","r":[{"op":"1","text":"31","needInput":false},{"op":"2","text":"32","needInput":false},{"op":"3","text":"33","needInput":false},{"op":"4","text":"34","needInput":false}],"answer":"","answerText":"","needInput":false},{"no":"4","text":"4","r":[{"op":"1","text":"41","needInput":false},{"op":"2","text":"42","needInput":false},{"op":"3","text":"43","needInput":false},{"op":"4","text":"44","needInput":false}],"answer":"","answerText":"","needInput":false},{"no":"5","text":"5","r":[{"op":"1","text":"51","needInput":false},{"op":"2","text":"52","needInput":false},{"op":"3","text":"53","needInput":false},{"op":"4","text":"54","needInput":false}],"answer":"","answerText":"","needInput":false},{"no":"6","text":"6","r":[{"op":"1","text":"61","needInput":false},{"op":"2","text":"62","needInput":false},{"op":"3","text":"63","needInput":false},{"op":"4","text":"63","needInput":false}],"answer":"","answerText":"","needInput":false},{"no":"7","text":"7","r":[{"op":"1","text":"71","needInput":false},{"op":"2","text":"72","needInput":false,"choose":2},{"op":"3","text":"73","needInput":false},{"op":"4","text":"74","needInput":false}],"answer":"2","answerText":"72","needInput":false},{"no":"8","text":"8","r":[{"op":"1","text":"81","needInput":false},{"op":"2","text":"82","needInput":false},{"op":"3","text":"83","needInput":false},{"op":"4","text":"84","needInput":false,"choose":4}],"answer":"4","answerText":"84","needInput":false},{"no":"9","text":"9","r":[{"op":"1","text":"91","needInput":false,"choose":1},{"op":"2","text":"92","needInput":false},{"op":"3","text":"93","needInput":false},{"op":"4","text":"94","needInput":false}],"answer":"","answerText":"","needInput":false},{"no":"10","text":"10","r":[{"op":"1","text":"101","needInput":false},{"op":"2","text":"102","needInput":false},{"op":"3","text":"103","needInput":false},{"op":"4","text":"104","needInput":false,"choose":4}],"answer":"4","answerText":"104","needInput":false}]"
    },
    userNameFinish() {
      if (!this.userName) {
        // alert("拜託請輸入一下");
        this.needAlert = true;
      } else {
        this.modalShow = false;
      }
    },
    nameInputClick() {
      this.needAlert = false;
    }
  }
};
</script>

<style>
</style>
