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
    <!-- v-model="q.choose" -->
    <div v-for="item of dataObject.questions" :value="item.no" :key="item.no">
      <div>第{{item.no}}題</div>
      <b-form-group>
        <b-form-input v-model="item.text" @click="questionTextClick(item)"></b-form-input>
        <b-alert v-model="item.needInput" variant="danger" >請輸入問題文字</b-alert>
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
            text: "1",
            r: [
              { op: "1", text: "11", needInput: false },
              { op: "2", text: "12", needInput: false },
              { op: "3", text: "13", needInput: false },
              { op: "4", text: "14", needInput: false }
            ],
            answer: "",
            answerText: "",
            needInput: false
          },
          {
            no: "2",
            text: "2",
            r: [
              { op: "1", text: "21", needInput: false },
              { op: "2", text: "22", needInput: false },
              { op: "3", text: "23", needInput: false },
              { op: "4", text: "24", needInput: false }
            ],
            answer: "",
            answerText: "",
            needInput: false
          },
          {
            no: "3",
            text: "3",
            r: [
              { op: "1", text: "31", needInput: false },
              { op: "2", text: "32", needInput: false },
              { op: "3", text: "33", needInput: false },
              { op: "4", text: "34", needInput: false }
            ],
            answer: "",
            answerText: "",
            needInput: false
          },
          {
            no: "4",
            text: "4",
            r: [
              { op: "1", text: "41", needInput: false },
              { op: "2", text: "42", needInput: false },
              { op: "3", text: "43", needInput: false },
              { op: "4", text: "44", needInput: false }
            ],
            answer: "",
            answerText: "",
            needInput: false
          },
          {
            no: "5",
            text: "5",
            r: [
              { op: "1", text: "51", needInput: false },
              { op: "2", text: "52", needInput: false },
              { op: "3", text: "53", needInput: false },
              { op: "4", text: "54", needInput: false }
            ],
            answer: "",
            answerText: "",
            needInput: false
          },
          {
            no: "6",
            text: "6",
            r: [
              { op: "1", text: "61", needInput: false },
              { op: "2", text: "62", needInput: false },
              { op: "3", text: "63", needInput: false },
              { op: "4", text: "64", needInput: false }
            ],
            answer: "",
            answerText: "",
            needInput: false
          },
          {
            no: "7",
            text: "7",
            r: [
              { op: "1", text: "71", needInput: false },
              { op: "2", text: "72", needInput: false },
              { op: "3", text: "73", needInput: false },
              { op: "4", text: "74", needInput: false }
            ],
            answer: "",
            answerText: "",
            needInput: false
          },
          {
            no: "8",
            text: "8",
            r: [
              { op: "1", text: "81", needInput: false },
              { op: "2", text: "82", needInput: false },
              { op: "3", text: "83", needInput: false },
              { op: "4", text: "84", needInput: false }
            ],
            answer: "",
            answerText: "",
            needInput: false
          },
          {
            no: "9",
            text: "9",
            r: [
              { op: "1", text: "91", needInput: false },
              { op: "2", text: "92", needInput: false },
              { op: "3", text: "93", needInput: false },
              { op: "4", text: "94", needInput: false }
            ],
            answer: "",
            answerText: "",
            needInput: false
          },
          {
            no: "10",
            text: "10",
            r: [
              { op: "1", text: "101", needInput: false },
              { op: "2", text: "102", needInput: false },
              { op: "3", text: "103", needInput: false },
              { op: "4", text: "104", needInput: false }
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
    questionTextClick(item){
      console.log(item);
      item.needInput=false;

    },
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
	console.log("doSumitDataObject");
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
      console.log(q.op,":",itemNo)
      if (q.text) {
        this.dataObject.questions[itemNo - 1].answer = q.op;
        this.dataObject.questions[itemNo - 1].answerText = q.text;
      } else {
        q.needInput = true;
      }
      console.log("ansobj:",this.dataObject.questions);
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
