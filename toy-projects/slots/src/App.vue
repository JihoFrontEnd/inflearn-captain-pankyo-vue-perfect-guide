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
    <hr>
    <ul>
      <slot-item v-for="item in items" :key="item">{{ item }}</slot-item>
    </ul>
    <hr>
    <ul>
      <slot-item>
        아이템 1
      </slot-item>
      <slot-item>
        아이템 2
        <button>click me</button>
      </slot-item>
      <slot-item>
        <div>
          아이템 3
        </div>
        <img src="./assets/endgame.png" />
      </slot-item>
      <slot-item>
        <div style="color: blue; font-size: 20px">
          아이템 4
        </div>
      </slot-item>
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