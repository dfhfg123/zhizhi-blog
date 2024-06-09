<template>
  <div ref="container" class="list-container" @scroll="handleScroll">
    <div :style="{ height: totalHeight + 'px' }"></div>
    <div
      v-for="(item, index) in visibleItems"
      :key="item.id"
      :style="{ transform: `translateY(${(start + index) * itemHeight}px)` }"
      class="list-item"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

// Define props
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  itemHeight: {
    type: Number,
    required: true,
  },
  visibleCount: {
    type: Number,
    required: true,
  },
});

// Define reactive variables
const container = ref(null);
const start = ref(0);

// Compute total height of the list
const totalHeight = computed(() => props.items.length * props.itemHeight);

// Compute the items that are visible in the viewport
const visibleItems = computed(() =>
  props.items.slice(start.value, start.value + props.visibleCount)
);

// Handle scroll event
const handleScroll = () => {
  if (container.value) {
    start.value = Math.floor(container.value.scrollTop / props.itemHeight);
  }
};

// Set up onMounted lifecycle hook
onMounted(() => {
  handleScroll(); // Initialize start value
});
</script>

<style>
.list-container {
  height: 500px; /* 可视区域高度 */
  overflow-y: auto;
  position: relative;
}
.list-item {
  height: 50px; /* 每个项的高度 */
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
}
</style>
