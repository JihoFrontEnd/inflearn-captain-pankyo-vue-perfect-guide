<template>
  <div>
    <UserProfile />
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  components: { UserProfile },
  created() {
    const username = this.$route.params.id;
    this.$store.dispatch('FETCH_USER_INFO', username);
  },
};
</script>
