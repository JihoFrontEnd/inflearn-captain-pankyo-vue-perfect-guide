<template>
  <div>
    <input type="checkbox" :value="value" @click="toggleCheckBox">
    <input type="checkbox" :value="value" @click="$emit('input', !value)">
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    toggleCheckBox() {
      this.$emit('input', !this.value);
    }
  },
}
</script>