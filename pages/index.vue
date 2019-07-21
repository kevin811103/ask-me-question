<template>
  <div >
    <b-button @click="into()">來測試看看你朋友有多了解你</b-button>
  </div>
</template>

<script>
export default {
  methods: {
    into(){
      this.$router.push("/create/user");
    }
  },
}
</script>
