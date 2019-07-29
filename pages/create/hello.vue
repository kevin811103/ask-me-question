<template>
  <div>
    <!-- <b-input    v-model="username" :readonly="canRead" </b-input>
    <b-button @click="saveN()" >save</b-button>
    <b-button @click="changeread()" >canRead</b-button>-->
    {{question.no}}
    <b-input v-model="question.text" style="width:500px"></b-input>
    <b-form-group label="Individual radios">
      <div v-for="(rp,index) of question.r" :key="rp.no">
        {{index}}
        <span>{{rp.np}}</span>

        <b-form-radio :name="question.no" :value="index" @change="radioChange(rp.no)">Option B</b-form-radio>
        
        
        <b-form-input v-model="rp.text"></b-form-input>

        <!-- <b-form-input v-model="text" placeholder="Enter your name"></b-form-input> -->
      </div>
    </b-form-group>
    <b-button @click="saveStore()">存檔</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      canRead: false,
      // question.r.forEach((data)=>{

      // })
      question: {
        no: "1",
        text: "",
        r: [
          { no: "1", text: "" },
          { no: "2", text: "" },
          { no: "3", text: "" },
          { no: "4", text: "" }
        ],
        answer: ""
      }
    };
  },
  mounted() {
    this.testmount();
  },
  methods: {

    testmount(){
      console.log("一開始");
    },
    saveStore(){
        this.$store.commit("setQuestionData",this.question);
        console.log(this.$store.state.questionOb);
        this.$store.dispatch("saveQuestion",this.question);
    },
    radioChange(chooseNo){
      console.log("chooseNo",chooseNo);
      this.question.answer=chooseNo;
      console.log(this.question);
    },
    inputChange() {
      console.log("我被換了");
    },
    inputClick() {
      console.log("我被點了");
    },
    changeread() {
      this.canRead = !this.canRead;
    },
    saveN() {
      this.$store.commit("setName", this.username);
      this.$store.stateㄡ;
    }
  }
};
</script>

<style>
</style>
