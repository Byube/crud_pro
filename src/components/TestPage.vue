<template>
  <div class="grid">
    <div class="col-12">
      <div class="card my-5 keep-all justify-center">
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
  </div>
</template>

<script>
// import XLSX from "xlsx";
export default {
  setup() {
    const myUploader = (csvFile) => {
      // const file = csvFile.files[0];
      // let reader = new FileReader();
      // reader.readAsBinaryString(file);
      // reader.onload = (e) => {
      //   console.log(e);
      //   let data = reader.result;
      //   console.log(data);
      // };

      let file = csvFile.files[0];
      let reader = new FileReader();
      reader.onload = function () {
        let data = reader.result;
        let workBook = XLSX.read(data, { type: "binary" });
        console.log(workBook);
        workBook.SheetNames.forEach(function (sheetName) {
          console.log(' >> ',workBook.Sheets[sheetName]);
          console.log("SheetName: " + sheetName);
          let rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
          console.log(JSON.stringify(rows));
        });
      };
      reader.readAsBinaryString(file);
    };

    return {
      myUploader,
    };
  },
};
</script>

<style>
</style>