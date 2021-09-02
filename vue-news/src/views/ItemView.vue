<template>
  <div>
    <section>
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${getItemInfo.user}`">
            {{ getItemInfo.user }}
          </router-link>
          <div class="time">
            {{ getItemInfo.time_ago }}
          </div>
        </div>
      </div>
      <h2>{{ getItemInfo.title }}</h2>
    </section>
    <section>
      <div v-html="getItemInfo.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getItemInfo']),
  },
  created() {
    const itemid = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM_INFO', itemid);
  },
};
</script>
