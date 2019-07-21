<template>
  <!-- <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
  
  </div> -->

  <div class="main">
	<i class="fa fa-exclamation-triangle"></i>
	<h1>Oops!We got an error</h1>
	<div class="msg-container">
		<!-- <h2>message</h2> -->
          <nuxt-link to="/">回首頁</nuxt-link>
		<p></p>
	</div>
</div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
</script>
<style scoped>
.main{
	text-align:center;
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-50%,-50%);
	box-sizing:border-box;
}
.main .fa{
	font-size:5em;
}
.msg-container{
	border:1px solid black;
}
.msg-container h2{
	margin:10px 0;
	width:100%;
}
.msg-container p{
	border-top:1px solid black;
	padding:10px;
}
</style>
