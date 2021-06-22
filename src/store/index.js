import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { apiRoutes } from "../utils/api-routes";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isBusy: true,
    cryptos: [],
    perPage: 10,
    currentPage: 1,
  },
  mutations: {
    setCryptos(state, cryptos) {
      state.cryptos = cryptos;
    },
    setIsBusy(state, isBusy) {
      state.isBusy = isBusy;
    },
    setPerPage(state, perPage) {
      state.perPage = perPage;
    },
  },
  actions: {
    loadCryptos({ commit }) {
      commit("setIsBusy", true);
      axios
        .get(apiRoutes.limit100)
        .then((response) => {
          commit("setCryptos", response.data.data.coins);
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => commit("setIsBusy", false));
    },
    setPerPage({ commit }, perPage) {
      commit("setPerPage", perPage);
    },
  },
  getters: {
    getFormattedList(state) {
      let tempCryptoList = [];

      for (let crypto of state.cryptos) {
        let cryptoField = {};
        cryptoField["name"] = crypto["name"];
        cryptoField["symbol"] = crypto["symbol"];
        cryptoField["price"] = `$ ${crypto["price"]}`;
        let change = crypto["change"];
        cryptoField["change"] = `${change} %`;
        cryptoField["_cellVariants"] = {
          change: change < 0 ? "danger" : change > 0 ? "success" : "",
        };
        tempCryptoList.push(cryptoField);
      }

      return tempCryptoList;
    },
  },
  modules: {},
});
