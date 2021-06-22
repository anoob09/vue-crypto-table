<template>
  <div class="d-flex flex-column align-items-center">
    <b-pagination
      v-model="$store.state.currentPage"
      :total-rows="rows"
      :per-page="$store.state.perPage"
      aria-controls="my-table"
    ></b-pagination>
    <p class="mt-3">Current Page: {{ $store.state.currentPage }}</p>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  computed: {
    rows() {
      return this.$store.state.cryptos.length;
    },
  },
};
</script>