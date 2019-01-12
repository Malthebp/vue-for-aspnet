import Vue from "vue";
import path from "path";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

export default class NcComponents {
  constructor() {
    this.init();
  }
  init() {
    const requireComponent = require.context(
      COMPONENT_PATH,
      true,
      /\.(vue|js)$/
    );

    requireComponent.keys().forEach(fileName => {
      const replaced = fileName
        .replace(/^\.\//, "")
        .replace(/\.(vue|mjs)$/, "");
      const lastPart = replaced.split("/");
      const name = lastPart[lastPart.length - 1];
      const componentName = upperFirst(
        camelCase(name.replace(/^\.\/(.*)\.\w+$/, "$1"))
      );

      Vue.component(componentName, function(resolve) {
        require([
          "./../../src/components/organisms/" + replaced + ".vue"
        ], resolve);
      });
    });
  }
}
