<template>
  <div class="mat-all">
    <div>ＸＸＸ你好</div>

    <div>請輸入想要你朋友回答der問題選項和答案</div>
    <div>
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

    <div>--------</div>
    <div v-for="item of dataObject.questions" :value="item.no" :key="item.no">
      <!-- <div>
        {{item.no}}
        <div>{{item.choose}}</div>
      </div>-->
      <b-form-group>
        <b-form-input :value="item.text"></b-form-input>
        <div v-for="q of item.r" :value="q.op" :key="q.op">
          <b-form-radio v-model="q.choose" name="some-radios" value="1">
            <b-form-input :value="q.text"></b-form-input>
          </b-form-radio>
        </div>

        <div>
          問題{{item.no}}答案是:
          <strong>{{item.choose}}</strong>
        </div>
        <!-- <b-form-radio v-model="selected" name="some-radios" value="2">
          <b-form-input :value="r2"></b-form-input>
        </b-form-radio>
        <b-form-radio v-model="selected" name="some-radios" value="3">
          <b-form-input :value="r3"></b-form-input>
        </b-form-radio>
        <b-form-radio v-model="selected" name="some-radios" value="4">
          <b-form-input :value="r4"></b-form-input>
        </b-form-radio>-->
      </b-form-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
      q1: "",
      r1: "OK",
      r2: "fine",
      r3: "not bad",
      r4: "bad",
      answer: "",
      dataObject: {
        userName: "",
        questions: [
          {
            no: "1",
            text: "",
            r: [
              { op: "1", text: "", choose: "" },
              { op: "2", text: "", choose: "" },
              { op: "3", text: "", choose: "" },
              { op: "4", text: "", choose: "" }
            ],
            answer: "",
            choose: false
          },
          {
            no: "2",
            text: "",
            r: [
              { op: "1", text: "", choose: "" },
              { op: "2", text: "", choose: "" },
              { op: "3", text: "", choose: "" },
              { op: "4", text: "", choose: "" }
            ],
            answer: "",
            choose: false
          },
          {
            no: "3",
            text: "",
            r: [
              { op: "1", text: "", choose: "" },
              { op: "2", text: "", choose: "" },
              { op: "3", text: "", choose: "" },
              { op: "4", text: "", choose: "" }
            ],
            answer: "",
            choose: false
          },
          {
            no: "4",
            text: "",
            r: [
              { op: "1", text: "", choose: "" },
              { op: "2", text: "", choose: "" },
              { op: "3", text: "", choose: "" },
              { op: "4", text: "", choose: "" }
            ],
            answer: "",
            choose: false
          }
        ]
      }
    };
  },
  watch: {
    dataObject: {
      // do stuff
      handler(q) {
        // do stuff
        console.log(q);

        q.questions.forEach(element => {
          element.r.forEach(rr => {
            element.choose = rr.choose;
          });
        });
      },
      deep: true
    },
    selected(answer) {
      switch (answer) {
        case "1":
          this.answer = this.r1;
          break;
        case "2":
          this.answer = this.r2;
          break;
        case "3":
          this.answer = this.r3;
          break;
        case "4":
          this.answer = this.r4;
          break;
      }
    }
  }
};
</script>
<style scoped>
.mat-all {
  margin: 10px;
}
</style>
