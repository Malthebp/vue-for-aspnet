import Vue from "vue";
import { CreateVuexStore } from "./../plugins/CreateVuexStore";
import { CreateComponents } from "./../plugins/CreateComponents";

CreateComponents();
var app = new Vue({
  el: "#app",
  store: CreateVuexStore()
});
