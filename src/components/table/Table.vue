<template>
  <DataTable
    :value="cars.data"
    :rowHover="true"
    :paginator="true"
    selectionMode="single"
    key="index"
    breakpoint="1080px"
    responsiveLayout="stack"
    :rows="10"
    showGridlines
  >
    <template #empty>
      No datas found.<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </template>
    <template #loading> Loading customers data. Please wait. </template>
    <Column
      v-for="col of columns"
      :field="col.field"
      :header="col.header"
      bodyStyle="text-align:center"
      :key="col.field"
    ></Column>
  </DataTable>
</template>

<script>
import { toRefs } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
export default {
  props: {
    TableData: {
      type: Object,
    },
  },
  setup(props) {
    let { TableData } = toRefs(props);
    let cars = TableData.value;
    let columns = [];
    console.log("test");
    console.log(TableData.value);
    const keys = Object.keys(cars.data[0]);
    for (let i = 0; i < keys.length; i++) {
      columns.push({
        field: keys[i],
        header: keys[i].charAt(0).toUpperCase() + keys[i].slice(1),
      });
    }
    return {
      cars,
      columns,
    };
  },
};
</script>

<style>
</style>
