<template>
  <div>
    <ul class="item-list">
      <li v-for='job in this.$store.state.jobsList' :key='job.id' class="post">
        <div class="points">
          {{ job.points || 0 }}
        </div>
        <div>
          <p class="item-title">
            <a v-bind:href="job.url" target="_blank">
              {{ job.title }}
            </a>
          </p>
          <small class="item-text">
            {{ job.time_ago }} by {{ job.domain }}
          </small>
        </div>
      </li>
    </ul>
    <p v-for="job in this.$store.state.jobsList" :key="job.id">
      <a v-bind:href="job.url">
        {{ job.title }}
      </a>
      <small>
        {{ job.time_ago }}, {{ job.domain }}
      </small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS_LIST');
  },
};
</script>