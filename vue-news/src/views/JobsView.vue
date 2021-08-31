<template>
  <div>
    <ul class="item-list">
      <li v-for='job in this.$store.state.jobsList' :key='job.id' class="post">
        <div class="points">
          {{ job.points || 0 }}
        </div>
        <div>
          <p class="item-title">
            <a v-bind:href="job.url">
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

<style scoped>
.item-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.item-title {
  margin: 0;
}
.item-text {
  color: #828282;
}
</style>