import Vue from "vue";
import NcVuexStore from "./NcVuexStore";
import NcComponents from "./NcComponents";

export default class NcApp {
  constructor(config = {}) {
    const hasStore = "store" in config;
    this.config = {
      element: config.element || "#app",
      store: {
        active: hasStore ? config.store.active : true,
        plugins: hasStore ? config.store.plugins : [],
        strict: hasStore
          ? config.store.strict
          : process.env.NODE_ENV !== "production"
      }
    };

    this.init();
  }

  init() {
    new NcComponents();
    this.vue = new Vue({
      el: this.config.element,
      store: this.config.store.active
        ? new NcVuexStore(this.config.store).getStore()
        : null
    });
  }

  use(plugin, config = {}) {
    Vue.use(plugin, config);
  }
}
