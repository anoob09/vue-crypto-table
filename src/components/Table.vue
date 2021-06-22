<template>
  <div>
    <b-table
      id="my-table"
      :items="$store.getters.getFormattedList"
      :per-page="$store.state.perPage"
      :current-page="$store.state.currentPage"
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
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      updatingList: null,
    };
  },
  methods: {
    updateList() {
      this.updatingList = setInterval(() => {
        this.$store.dispatch("loadCryptos");
      }, 20000);
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