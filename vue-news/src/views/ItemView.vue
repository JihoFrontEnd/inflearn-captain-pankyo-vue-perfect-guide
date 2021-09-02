<template>
  <div>
    <section>
      <UserProfile /> 
      <h2>{{ getItemInfo.title }}</h2>
    </section>
    <section>
      <div v-html="getItemInfo.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
  components: { UserProfile },
  computed: { ...mapGetters(['getItemInfo']) },
  created() {
    const itemid = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM_INFO', itemid);
  },
};
</script>
