<template>
  <div class="list-items list-group">
    <list-item
      v-for="(item, index) in displayItems"
      :key="index"
      :item="item"
    />
    <button
      class="btn btn-primary"
      @click="fetch"
    >
      Load more
    </button>
  </div>
</template>

<script>
export default {
  components: {
    ListItem: () => import("@/components/atoms/ListItem/ListItem.vue")
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      displayItems: []
    };
  },
  mounted() {
    this.displayItems = this.items;
    this.$nextTick().then(ok => {
      this.fetch();
    });
  },
  methods: {
    fetch() {
      this.axios.get("http://localhost:56051/api/loads").then(response => {
        this.displayItems.push(...response.data.Loads);
      });
    }
  }
};
</script>


<style lang="scss" scoped>
.list-items {
  &__btn {
  }
}
</style>
