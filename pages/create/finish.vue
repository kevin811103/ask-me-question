<template>
  <div>
    <h1>恭喜你完成填寫</h1>
    <div>
      <b-input v-model="urlCode" id="copyRange" style="width:370px;" disabled></b-input>
    </div>
    <div style="margin-top:10px">
      <b-button @click="copy()">複製起來分享給你朋友看看摟</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urlCode: "12314124"
    };
  },
  mounted() {
    this.urlCode =
      window.location.origin +
      "/answer/" +
      this.$store.state.module.question.urlcode;
    console.log(
      "this.urlCode:",
      window.location.origin +
        "/answer/" +
        this.$store.state.module.question.urlcode
    );
    console.log("this.urlCode:", this.urlCode);
  },
  methods: {
    copy() {
      console.log("copey");
      var TextRange = document.createRange();

      TextRange.selectNode(document.getElementById("copyRange"));

      let sel = window.getSelection();
      sel.removeAllRanges();

      sel.addRange(TextRange);

      document.execCommand("copy");
      sel.removeAllRanges();
    //   alert("複製完成！"); //此行可加可不加
    }
  }
};
</script>

<style>
</style>
