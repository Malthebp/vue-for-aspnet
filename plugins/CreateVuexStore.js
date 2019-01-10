import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const storeConfig = require("./../src/store/store.config.js").default;
const config = {
  plugins: storeConfig.plugins || [],
  strict: storeConfig.strict || process.env.NODE_ENV !== "production"
};

const storeFiles = require.context(
  "./../src/store",
  true,
  /^\.\/(?!-)[^.]+\.(js|mjs)$/
);
const storeFileNames = storeFiles.keys();

const modules = {};

storeFileNames.forEach(function(fileName) {
  const name = fileName
    .replace(/^\.\//, "")
    .replace(/\.(js|mjs)$/, "")
    .replace("modules/", "");

  const module = getFileModule(fileName, name);
});

function getFileModule(path, name) {
  const file = storeFiles(path);

  modules[name] = file;
  modules[name].namespaced = true;
  return file;
}

export const CreateVuexStore = () =>
  new Vuex.Store({
    modules,
    config
  });
