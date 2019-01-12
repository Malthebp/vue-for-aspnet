<template>
  <div class="list-items list-group">
    {{ msg }}
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      msg: "Hi ",
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
