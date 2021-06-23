<template>
  <div>
    <svg-icon
      data-v-783f90ce=""
      xlmns="https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg"
    ></svg-icon>
    <b-table
      id="my-table"
      :items="$store.getters.getFormattedList"
      :per-page="$store.state.perPage"
      :current-page="$store.state.currentPage"
      :busy="$store.state.isBusy"
      :fields="fields"
      striped
      hover
      small
    >
      <template #cell(url)="data">
        <img :src="data.item.url" width="20px" height="20px" />
      </template>

      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template></b-table
    >
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      fields: [
        "url",
        {
          key: "name",
          sortable: true,
          thStyle: { width: "250px !important" },
        },
        {
          key: "symbol",
          sortable: true,
        },
        {
          key: "price",
          sortable: true,
        },
        {
          key: "change",
          sortable: true,
        },
      ],
      updatingList: null,
    };
  },
  methods: {
    updateList() {
      this.updatingList = setInterval(() => {
        this.$store.dispatch("loadCryptos");
      }, 1000000);
    },
  },
  created() {
    this.$store.dispatch("loadCryptos");
    this.updateList();
  },
  beforeDestroy() {
    clearInterval(this.updateList);
  },
};
</script>

<style lang="css" scoped>
.my-class {
  width: 100px;
}
</style>