import Vue from "vue";

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const path = "./../src/components";

const requireComponent = require.context(
  // The relative path of the components folder
  "./../src/components",
  // Whether or not to look in subfolders
  true,
  // The regular expression used to match base component filenames
  /\.(vue|js)$/
);

console.log(requireComponent.keys());

function CreateVueComponents() {
  requireComponent.keys().forEach(fileName => {
    const replaced = fileName.replace(/^\.\//, "").replace(/\.(vue|mjs)$/, "");
    const lastPart = replaced.split("/");
    const name = lastPart[lastPart.length - 1];

    // Get component config
    const componentConfig = requireComponent(fileName);

    // Get PascalCase name of component
    const componentName = upperFirst(
      camelCase(
        // Strip the leading `./` and extension from the filename
        name.replace(/^\.\/(.*)\.\w+$/, "$1")
      )
    );

    // Register component globally
    Vue.component(
      componentName,
      // Look for the component options on `.default`, which will
      // exist if the component was exported with `export default`,
      // otherwise fall back to module's root.
      componentConfig.default || componentConfig
    );
  });
}

export const CreateComponents = () => CreateVueComponents();
