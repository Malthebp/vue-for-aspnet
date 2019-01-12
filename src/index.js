import NcApp from "./../NcApp/src/NcApp.js";
import axios from "axios";
import VueAxios from "vue-axios";
import Vue from "vue";
const app = new NcApp();

app.use(VueAxios, axios);
