<template>
  <div id="header">
    <div>
      <h3>Cryptocurrency Table</h3>
    </div>
    <div>
      <label>Select rows per page:</label>
      <b-dropdown size="sm" :text="$store.state.perPage" class="m-2">
        <b-dropdown-item-button
          v-for="item in perPageOptions"
          :key="item"
          @click.native="$store.dispatch('setPerPage', item)"
          >{{ item }}</b-dropdown-item-button
        >
      </b-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      perPageOptions: [5, 10, 25, 50, 100],
    };
  },
};
</script>

<style scoped>
#header {
  display: flex;
  margin: 10px 20px 10px 20px;
  flex-direction: row;
  justify-content: space-between;
}
</style>
