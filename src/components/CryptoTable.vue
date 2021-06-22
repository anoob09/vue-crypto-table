<template>
  <div class="overflow-auto">
    <Header />
    <Table />
    <Pagination />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Table from "./Table.vue";
import Pagination from "./Pagination.vue";

export default {
  name: "CryptoTable",
  data() {
    return {
      items: [],
    };
  },
  components: { Header, Table, Pagination },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
