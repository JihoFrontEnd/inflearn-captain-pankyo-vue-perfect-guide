<template>
  <div>
    <UserProfile :info="userInfo" />
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  components: { UserProfile },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
  created() {
    const username = this.$route.params.id;
    this.$store.dispatch('FETCH_USER_INFO', username);
  },
};
</script>
