<template>
  <div>
    <div>Please create new user</div>

    <b-input-group size="lg" prepend="input your name">
      <b-form-input :value="userName"></b-form-input>
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
      userName: "123",
      inLoading: false
    };
  },
  methods: {
    createUser() {
      this.inLoading = true;
      setTimeout(() => {
          this.$router.push("/create/questions");
      }, 800);
    }
  }
};
</script>

<style>
</style>
