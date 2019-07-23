<template>
  <div class="mat-all">
    <div>{{userName}}你好</div>

    <div>請輸入想要你朋友回答der問題選項和答案</div>
    <!-- <div>
      <b-form-group>
        <b-form-input :value="q1"></b-form-input>
        <b-form-radio v-model="selected" name="some-radios" value="1">
          <b-form-input :value="r1"></b-form-input>
        </b-form-radio>
        <b-form-radio v-model="selected" name="some-radios" value="2">
          <b-form-input :value="r2"></b-form-input>
        </b-form-radio>
        <b-form-radio v-model="selected" name="some-radios" value="3">
          <b-form-input :value="r3"></b-form-input>
        </b-form-radio>
        <b-form-radio v-model="selected" name="some-radios" value="4">
          <b-form-input :value="r4"></b-form-input>
        </b-form-radio>
      </b-form-group>

      <div class="mt-3">
        答案是{{ selected }}:
        <strong>{{answer}}</strong>
      </div>
      <div>
        <strong></strong>
      </div>
    </div>

    <div>--------</div>-->
    <!-- <b-button @click="getQuestion()">test</b-button> -->
    <div v-for="item of dataObject.questions" :value="item.no" :key="item.no">
      <div>第{{item.no}}題</div>
      <b-form-group>
        <b-form-input v-model="item.text"></b-form-input>
        <b-alert v-model="item.needInput" variant="danger">請輸入問題文字</b-alert>
        <div v-for="(q,index) in item.r" :value="q.op" :key="q.op">
          <b-form-radio
            v-model="q.choose"
            :name="item.no+'q'"
            @change="radioChange(q,item.no)"
            :value="index+1"
            style="margin:5px"
          >
            <b-form-input v-model="q.text" @click="inputClick(q)"></b-form-input>
          </b-form-radio>
          <b-alert v-model="q.needInput" variant="danger">請輸入選項文字</b-alert>
        </div>

        <div>
          問題{{item.no}}答案是:
          <strong>{{item.answerText}}</strong>
        </div>
      </b-form-group>
    </div>
    <b-button @click="sumitDataObject()">送出你的問題和答案</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      // selected: "",
      // q1: "",
      // r1: "OK",
      // r2: "fine",
      // r3: "not bad",
      // r4: "bad",
      // answer: "",
      dataObject: {
        userName: "",
        questions: [
          {
            no: "1",
            text: "",
            r: [
              { op: "1", text: "", needInput: false },
              { op: "2", text: "", needInput: false },
              { op: "3", text: "", needInput: false },
              { op: "4", text: "", needInput: false }
            ],
            answer: "",
            answerText: "",
            needInput: false
          },
          {
            no: "2",
            text: "",
            r: [
              { op: "1", text: "", needInput: false },
              { op: "2", text: "", needInput: false },
              { op: "3", text: "", needInput: false },
              { op: "4", text: "", needInput: false }
            ],
            answer: "",
            answerText: "",
            needInput: false
          },
          {
            no: "3",
            text: "",
            r: [
              { op: "1", text: "", needInput: false },
              { op: "2", text: "", needInput: false },
              { op: "3", text: "", needInput: false },
              { op: "4", text: "", needInput: false }
            ],
            answer: "",
            answerText: "",
            needInput: false
          },
          {
            no: "4",
            text: "",
            r: [
              { op: "1", text: "", needInput: false },
              { op: "2", text: "", needInput: false },
              { op: "3", text: "", needInput: false },
              { op: "4", text: "", needInput: false }
            ],
            answer: "",
            answerText: "",
            needInput: false
          },
          {
            no: "5",
            text: "",
            r: [
              { op: "1", text: "", needInput: false },
              { op: "2", text: "", needInput: false },
              { op: "3", text: "", needInput: false },
              { op: "4", text: "", needInput: false }
            ],
            answer: "",
            answerText: "",
            needInput: false
          },
          {
            no: "6",
            text: "",
            r: [
              { op: "1", text: "", needInput: false },
              { op: "2", text: "", needInput: false },
              { op: "3", text: "", needInput: false },
              { op: "4", text: "", needInput: false }
            ],
            answer: "",
            answerText: "",
            needInput: false
          },
          {
            no: "7",
            text: "",
            r: [
              { op: "1", text: "", needInput: false },
              { op: "2", text: "", needInput: false },
              { op: "3", text: "", needInput: false },
              { op: "4", text: "", needInput: false }
            ],
            answer: "",
            answerText: "",
            needInput: false
          },
          {
            no: "8",
            text: "",
            r: [
              { op: "1", text: "", needInput: false },
              { op: "2", text: "", needInput: false },
              { op: "3", text: "", needInput: false },
              { op: "4", text: "", needInput: false }
            ],
            answer: "",
            answerText: "",
            needInput: false
          },
          {
            no: "9",
            text: "",
            r: [
              { op: "1", text: "", needInput: false },
              { op: "2", text: "", needInput: false },
              { op: "3", text: "", needInput: false },
              { op: "4", text: "", needInput: false }
            ],
            answer: "",
            answerText: "",
            needInput: false
          },
          {
            no: "10",
            text: "",
            r: [
              { op: "1", text: "", needInput: false },
              { op: "2", text: "", needInput: false },
              { op: "3", text: "", needInput: false },
              { op: "4", text: "", needInput: false }
            ],
            answer: "",
            answerText: "",
            needInput: false
          }
        ]
      }
    };
  },
  methods: {
    getQuestion() {
      this.$store
        .dispatch("module/question/getQuestionAll")
        .then(res => {
          console.log("res", res);
        })
        .then(error => {
          console.log(error);
        });
    },
    checkQuestionText(itemNo) {
      if (!this.dataObject.questions[itemNo - 1].text) {
        this.dataObject.questions[itemNo - 1].needInput = true;
      } else {
        this.dataObject.questions[itemNo - 1].needInput = false;
      }
    },
    inputClick(q) {
      q.needInput = false;
    },
    sumitDataObject() {
      this.dataObject.userName = this.userName;
      //setQuestion
      // console.log(this.$store.state.module.question.userName);
      this.$store.commit(
        "module/question/setQuestion",
        JSON.parse(JSON.stringify(this.dataObject))
      );
      console.log(this.$store.state.module.question.question);
      this.$store
        .dispatch(
          "module/question/questionUpload",
          JSON.parse(JSON.stringify(this.dataObject))
        )
        .then((res) => {
          console.log("success:",res);
          if(res.urlcode){
            this.$store.commit("module/question/setUrlcode",res.urlcode);
            this.$router.push("/create/finish");
          }else{
            alert("發生錯誤請 再重新送出");
          }
          
        })
        .then(error => {
          console.log(error);
        });
      // console.log(this.dataObject);
    },
    radioChange(q, itemNo) {
      this.checkQuestionText(itemNo);
      if (q.text) {
        this.dataObject.questions[itemNo - 1].answer = q.op;
        this.dataObject.questions[itemNo - 1].answerText = q.text;
      } else {
        q.needInput = true;
      }
    }
  },
  mounted: function() {
    this.userName = this.$store.state.module.question.userName;
  }
};
</script>
<style scoped>
.mat-all {
  margin: 10px;
}
</style>
