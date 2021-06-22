<template>
  <div id="header">
    <div>
      <h3>Cryptocurrency Table</h3>
    </div>
    <div>
      <b-dropdown size="sm" text="Select Rows Per Page" class="m-2">
        <b-dropdown-item-button @click.native="$store.dispatch('setPerPage', 5)"
          >5</b-dropdown-item-button
        >
        <b-dropdown-item-button
          @click.native="$store.dispatch('setPerPage', 10)"
          >10</b-dropdown-item-button
        >
        <b-dropdown-item-button
          @click.native="$store.dispatch('setPerPage', 25)"
          >25</b-dropdown-item-button
        >
        <b-dropdown-item-button
          @click.native="$store.dispatch('setPerPage', 100)"
          >100</b-dropdown-item-button
        >
      </b-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
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
