<template>
  <div>
    <div class="card">
      <div class="card-container purple-container overflow-hidden">
        <div class="grid">
          <div class="col-6">
            <div class="my-5 keep-all justify-center">
              <h5>Basic</h5>
              <FileUpload
                mode="basic"
                name="demo[]"
                accept=".csv"
                :maxFileSize="1000000"
                :auto="true"
                :customUpload="true"
                @uploader="myUploader"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="my-5 keep-all justify-center">
              <h5>Dynamic</h5>
              <FileUpload
                mode="basic"
                name="demo[]"
                accept=".csv"
                :maxFileSize="1000000"
                :auto="true"
                :customUpload="true"
                @uploader="myDynamicUploader"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-container purple-container overflow-hidden">
        <DataTable
          :value="datas"
          :rowHover="true"
          :loading="loading1"
          v-model:selection="selectedProduct1"
          selectionMode="single"
          dataKey="count"
          key="index"
          breakpoint="1080px"
          responsiveLayout="stack"
          :paginator="true"
          :rows="10"
        >
          <template #empty>
            No datas found.<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </template>
          <template #loading> Loading customers data. Please wait. </template>

          <Column
            header="No."
            field="__rowNum__"
            bodyStyle="text-align:center"
            bodyClass="text-lg"
          >
            <!-- <template #body="{ index }">
              <span>{{ index + 1 }}</span>
            </template> -->
          </Column>
          <Column
            field="Name"
            header="Name"
            bodyStyle="text-align:center"
            bodyClass="text-lg"
          >
          </Column>
          <Column
            field="Id"
            header="Id"
            bodyStyle="text-align:center"
            bodyClass="text-lg"
          />
          <Column
            field="Phone"
            header="Phone"
            bodyStyle="text-align:center"
            bodyClass="text-lg"
          >
            <template #body="{ data }">
              <span>{{ data.Phone }}</span>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
    <div class="card">
      <div class="card-container purple-container overflow-hidden">
        <DataTable
          :value="datas1"
          :rowHover="true"
          :paginator="true"
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
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import * as XLSX from "xlsx";

export default {
  setup() {
    const datas = ref([]);
    const loading1 = ref(false);
    const selectedProduct1 = ref({});

    const myUploader = (csvFile) => {
      let file = csvFile.files[0];
      let reader = new FileReader();
      reader.onload = function () {
        let data = reader.result;
        let workBook = XLSX.read(data, { type: "binary", encoding: "utf8" });
        // let workBook = XLSX.read(data, { encoding: "utf8"});
        console.log(workBook);
        workBook.SheetNames.forEach(function (sheetName) {
          console.log(" >>1 ", workBook.Sheets[sheetName]);
          let obj = Object.keys(workBook.Sheets[sheetName]);
          console.log(" >>5 ", obj);
          // console.log("SheetName: " + XLSX.utils.sheet_to_json);
          let rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
          datas.value = rows;
          console.log(rows);
          console.log(datas.value);
        });
      };
      reader.readAsBinaryString(file);
    };

    const keys = ref();
    const datas1 = ref([]);
    let columns = [];

    const myDynamicUploader = (csvFile) => {
      let file = csvFile.files[0];
      let reader = new FileReader();
      reader.onload = function () {
        let data = reader.result;
        let workBook = XLSX.read(data, { type: "binary", encoding: "utf8" });
        workBook.SheetNames.forEach(function (sheetName) {
          let rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
          console.log(rows);
          datas1.value = rows;
          console.log(datas1.value);
          keys.value = Object.keys(datas1.value[0]);
          for (let i = 0; i < keys.value.length; i++) {
            columns.push({
              field: keys.value[i],
              header: keys.value[i],
            });
          }
          console.log(columns);
        });
      };
      reader.readAsBinaryString(file);
    };

    return {
      myUploader,
      datas,
      datas1,
      loading1,
      selectedProduct1,
      myDynamicUploader,
      columns,
    };
  },
};
</script>

<style>
</style>