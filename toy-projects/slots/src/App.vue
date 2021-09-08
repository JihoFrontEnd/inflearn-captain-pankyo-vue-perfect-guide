<template>
  <div>
    <ul>
      <slot-item>아이템 1</slot-item>
      <slot-item>아이템 2</slot-item>
      <slot-item>아이템 3</slot-item>
      <slot-item>아이템 4</slot-item>
      <slot-item>아이템 5</slot-item>
    </ul>
    <hr>
    <ul>
      <props-item v-for="item in items" :key="item" :item="item"></props-item>
    </ul>
  </div>
</template>

<script>
import SlotItem from './SlotItem.vue';
import PropsItem from './PropsItem.vue';

export default {
  components: { SlotItem, PropsItem },
  data() {
    return {
      items: ['아이템 1', '아이템 2', '아이템 3', '아이템 4', '아이템 5'],
    }
  },
}
</script>