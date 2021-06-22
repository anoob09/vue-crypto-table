import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isBusy: true,
    cryptos: [],
  },
  mutations: {
    setCryptos(state, cryptos) {
      state.cryptos = cryptos;
    },
    setIsBusy(state, isBusy) {
      state.isBusy = isBusy;
    },
  },
  actions: {
    loadCryptos({ commit }) {
      axios
        .get("https://api.coinranking.com/v1/public/coins/?limit=20")
        .then((response) => {
          commit("setCryptos", response.data.data.coins);
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => commit("setIsBusy", false));
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
        cryptoField["_cellVariants"] = { change: change < 0 ? "danger" : "" };
        tempCryptoList.push(cryptoField);
      }

      return tempCryptoList;
    },
  },
  modules: {},
});
