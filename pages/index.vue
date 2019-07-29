<template>
  <div >
    <b-button @click="into()">設計問券</b-button>
      <!-- <adsbygoogle />

      <adsbygoogle /> -->
  </div>
</template>

<script>
export default {
  methods: {
    into(){
	console.log("dointo");
      this.$router.push("/create/user");
    }
  },
}
</script>
