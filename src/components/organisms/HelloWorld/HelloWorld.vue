<template>
  <div class="hello-world">
    <h1>Razor to prop: {{ prop }}</h1>
    <h2>Store message: {{ stateMsg }}</h2>
    <button
      class="btn btn-secondary"
      @click="modal = !modal"
    >
      Open modal
    </button>
    <div
      v-if="modal"
      class="hello-world__modal"
    >
      <div
        class="hello-world__modal-bg"
        @click="modal = false" 
      />
      <div class="hello-world__modal-content">
        <h2> {{ stateMsg }}</h2>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  props: {
    prop: {
      type: String,
      default: "Default prop"
    }
  },
  data() {
    return {
      modal: false
    };
  },
  computed: {
    stateMsg() {
      return this.$store.state.test.msg;
    }
  },
  watch: {
    modal: {
      handler(val) {
        this.$store.commit(
          "test/CHANGE_MSG",
          `Modal is ${val ? "open" : "closed"} namespaced`
        );
      }
    }
  },
  methods: {
    check() {
      this.$store.commit("CHANGE_MSG", ` not namespaced`);
    }
  }
};
</script>


<style lang="scss" scoped>
.hello-world {
  &__modal {
    &-bg {
      background-color: rgba(black, 0.5);
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: 9;
      left: 0;
      top: 0;
    }
    &-content {
      background-color: white;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      position: fixed;
      z-index: 10;
      padding: 16px;
    }
  }
}
</style>
