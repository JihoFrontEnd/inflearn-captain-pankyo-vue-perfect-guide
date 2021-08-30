<template>
  <div>
    <p>name: {{ userInfo.id }}</p>
    <p>karma: {{ userInfo.karma }}</p>
    <p>created: {{ userInfo.created }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo() {
      // computed에서 `this`를 사용하고 싶다면 method 형식으로 사용한다.
      return this.$store.state.userInfo;
    },
  },
  created() {
    // console.log(this.$route.param.id);
    const username = this.$route.params.id;
    // axios.get(`https://api.hnpwa.com/v0/user/${username}.json`);
    this.$store.dispatch('FETCH_USER_INFO', username);
  },
}
</script>

<style>

</style>