<template>
  <div>
    <div><h1>請輸入您的姓名或暱稱</h1></div>

    <b-input-group size="lg" prepend="暱稱或姓名">
      <b-form-input v-model="userName"></b-form-input>
      <b-input-group-append>
        <b-button variant="primary" @click="createUser()">
          <b-spinner small v-show="inLoading"></b-spinner>
          <span v-show="inLoading">儲存中</span>
          <span v-if="!inLoading">輸入</span>
        </b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      inLoading: false
    };
  },

  methods: {
    createUser() {
      this.inLoading = true;
      if( this.userName){
      console.log(this.$store.state.module.question.userName);
      this.$store.commit("module/question/setName", this.userName);
      console.log(this.$store.state.module.question.userName);
      setTimeout(() => {
          this.$router.push("/create/questions");
      }, 500);
      }else{
        alert("請輸入姓名");
         this.inLoading = false;
      }

    }
  }
};
</script>

<style>
</style>
