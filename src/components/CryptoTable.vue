<template>
  <div class="overflow-auto">
    <b-table
      id="my-table"
      :items="$store.getters.getFormattedList"
      :per-page="perPage"
      :current-page="currentPage"
      :busy="$store.state.isBusy"
      striped
      hover
      small
    >
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template></b-table
    >
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
export default {
  name: "CryptoTable",
  data() {
    return {
      items: [],
      perPage: 10,
      currentPage: 1,
    };
  },
  created() {
    this.$store.dispatch("loadCryptos");
  },
  computed: {
    rows() {
      return this.$store.state.cryptos.length;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
