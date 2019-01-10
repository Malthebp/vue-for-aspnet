import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { CreateVuexStore } from "./../plugins/CreateVuexStore";

var app = new Vue({
  el: "#app",
  components: {
    HelloWorld
  },
  store: CreateVuexStore()
});
