<template>
  <div>
    <fetch-data url="https://jsonplaceholder.typicode.com/users/1">
      <!-- ... -->
      <template slot-scope="{ response, loading }">
        <div v-if="!loading">{{ response }}</div>
        <div v-else>loading...</div>
      </template>
    </fetch-data>
  </div>
</template>

<script>
import FetchData from './components/FetchData.vue'

export default {
  components: {
    FetchData
  },
}
</script>