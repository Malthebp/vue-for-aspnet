<template>
  <div class="list-item list-group-item">
    <h3>{{ item.Title }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
