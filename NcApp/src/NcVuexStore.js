import Vue from "vue";
import Vuex from "vuex";

export default class NcVuexStore {
  constructor(config = {}) {
    this.config = config;
    this.init();
  }

  init() {
    Vue.use(Vuex);

    const storeFiles = require.context(
      STORE_PATH,
      true,
      /^\.\/(?!-)[^.]+\.(js|mjs)$/
    );
    const storeFileNames = storeFiles.keys();

    const modules = {};

    storeFileNames.forEach(function(fileName) {
      const name = fileName.replace(/^\.\//, "").replace(/\.(js|mjs)$/, "");

      const file = storeFiles(fileName);

      modules[name] = file;
      modules[name].namespaced = true;
    });

    this.store = new Vuex.Store({
      modules,
      plugins: this.config.plugins,
      strict: this.config.strict
    });
  }

  getStore() {
    if (!this.store) {
      console.warn("No store has been created.");
      return;
    }

    return this.store;
  }
}
