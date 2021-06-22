<template>
  <div class="overflow-auto">
    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      :fields="fields"
      small
    ></b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
    <p class="mt-3">Current Page: {{ currentPage }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CryptoTable",
  data() {
    return {
      items: [],
      perPage: 10,
      currentPage: 1,
      fields: ["iconUrl", "name", "symbol", "price", "change"],
    };
  },
  created() {
    axios
      .get("https://api.coinranking.com/v1/public/coins/?limit=20")
      .then((response) => {
        this.items = response.data.data.coins;
      })
      .catch((e) => {
        console.log(e);
      });
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
