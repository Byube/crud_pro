<template>
  <h5>Checkbox Selection</h5>
  <Dialog
    header="메뉴권한"
    v-model:visible="display"
    :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
    :style="{ width: '23vw' }"
    :modal="true"
  >
    <Tree
      :value="nodes"
      selectionMode="checkbox"
      v-model:selectionKeys="selectedKeys3"
    ></Tree>
    <template #footer>
      <Button
        type="button"
        label="닫기"
        @click="closeDia"
        class="bg-indigolight mr-2"
      />
      <Button
        type="button"
        label="저장"
        @click="sendDia"
        class="bg-indigolight mr-0"
      />
    </template>
  </Dialog>
  <Button label="test" @click="showMe" />
  <Tree
    :value="nodes"
    selectionMode="checkbox"
    v-model:selectionKeys="selectedKeys"
  >
    <template #body="{ data }">
      <button @click="checkKeys(data.key)"></button>
    </template>
  </Tree>
  <div class="grid">
    <div class="col-12">
      <div class="card my-5 justify-center">
        <Button class="m-5" label="2" @click="getMyMenuTree(2)" />
        <Button class="m-5" label="3" @click="getMyMenuTree(3)" />
      </div>
    </div>
  </div>
  <div class="grid">
    <div class="col-12">
      <div class="card my-5 keep-all justify-center">
        <h5>Lenient Filter</h5>
        <Tree
          :value="nodes"
          selectionMode="checkbox"
          v-model:selectionKeys="selected1"
          @node-select="onMenuChecked"
        >
        </Tree>
        <TreeTable
          :value="nodes2"
          :filters="filters1"
          filterMode="lenient"
          :paginator="true"
          :rows="10"
          v-model:selectionKeys="selected1"
          selectionMode="checkbox"
          @node-select="onNodeSelect"
        >
          <Column field="name" header="Name" :expander="true">
            <template #filter>
              <InputText
                type="text"
                v-model="filters1['name']"
                class="p-column-filter"
                placeholder="Filter by name"
              />
            </template>
          </Column>
        </TreeTable>

        <Button label="Check" @click="showCheck" />
      </div>
    </div>

    <div class="col-12">
      <div class="card">
        <h5>Programmatic Control</h5>
        <div style="margin-bottom: 1em">
          <Button
            type="button"
            icon="pi pi-plus"
            label="Expand All"
            @click="expandAll"
          />
          <Button
            type="button"
            icon="pi pi-minus"
            label="Collapse All"
            @click="collapseAll"
          />
        </div>
        <TreeTable
          :value="testnodes"
          :expandedKeys="expandedKeys"
          v-model:selectionKeys="selected2"
          selectionMode="checkbox"
        >
          <Column field="name" header="Name" :expander="true"></Column>
          <Column field="size" header="Size"></Column>
          <Column field="type" header="Type"></Column>
        </TreeTable>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import NodeService from "../service/NodeService.js";
import axios from "axios";

export default {
  setup() {
    onMounted(() => {
      nodeService.value.getTreeNodes().then((data) => (nodes.value = data));
      nodeService.value
        .getTreeTableNodes()
        .then((data) => (nodes2.value = data));
      nodeService.value
        .getTreeTableNodes2()
        .then((data) => (testnodes.value = data));
    });

    const testnodes = ref();

    const selectedKeys3 = ref({});
    const selectedKeys = ref(null);
    const selected1 = ref(null);
    const selected2 = ref(null);
    const nodes = ref(null);
    const nodeService = ref(new NodeService());
    const filters1 = ref({});
    const nodes2 = ref();

    let menu_idx = [];
    const showMe = () => {
      display.value = true;
    };
    const cleanData = () => {
      selectedKeys3.value = null;
      menu_idx = [];
    };

    const display = ref(false);

    const closeDia = () => {
      display.value = false;
      cleanData();
    };
    const sendDia = async () => {
      if (selectedKeys3.value === null || selectedKeys3.value === "") {
        return;
      }

      let menuList = selectedKeys3.value;
      console.log("menuList", menuList);
      const keys = Object.keys(selectedKeys3.value);
      for (let i = 0; i < keys.length; i++) {
        menu_idx.push(keys[i]);
        // console.log(menu_idx);
      }

      menuList = {
        menu: menuList,
        member_idx: 2,
        menu_idx: menu_idx,
        member_role: 2,
      };

      const config = {
        url: "http://localhost:8090/insertMymenu",
        method: "post",
        // data:testForm
        data: menuList,
        // data: { member_idx: 2, menu: selectedKeys3, menu_idx: menu_idx, member_role:2 },
      };

      const response = await axios(config);
      console.log("response.data.menuTree", response.data.menuTree);
      console.log("check true false ", response.data.menuTree[14].checked === true || response.data.menuTree[14].partialChecked === true);
      console.log("check true false ", response.data.menuTree[14].partialChecked);
      // const datas = JSON.parse(response.data.menuTree);
      // console.log("datas",datas);

      selectedKeys.value = response.data.menuTree;

      // console.log(sendData.value);
      cleanData();
    };

    const getMyMenuTree = async (no) => {
      const config = {
        url: "http://localhost:8090/getMymenuRoleList/" + no,
        method: "get",
      };
      const response = await axios(config);
      console.log(response.data);
      selected1.value = response.data.menuTree;
    };

    const checkKeys = (no) => {
      console.log(no);
    };

    const checkClick = (who) => {
      console.log(who);
      console.log(selected1.value);
    };

    const onNodeSelect = (node) => {
      console.log(node);
      console.log(node.key);
    };

    const showCheck = () => {
      console.log(selected1.value);
      // console.log(onNodeSelect.value);
    };

    const onMenuChecked = (node) => {
      console.log(node);
    };

    const expandedKeys = ref({});
    const expandAll = () => {
      for (let node of nodes.value) {
        expandNode(node);
      }

      expandedKeys.value = { ...expandedKeys.value };
    };
    const collapseAll = () => {
      expandedKeys.value = {};
    };
    const expandNode = (node) => {
      if (node.children && node.children.length) {
        expandedKeys.value[node.key] = true;

        for (let child of node.children) {
          expandNode(child);
        }
      }
    };

    return {
      nodes,
      nodeService,
      selectedKeys,
      selectedKeys3,
      showMe,
      display,
      closeDia,
      sendDia,
      checkKeys,
      filters1,
      nodes2,
      checkClick,
      selected1,
      showCheck,
      onNodeSelect,
      getMyMenuTree,
      onMenuChecked,
      expandAll,
      collapseAll,
      testnodes,
      expandedKeys,
      selected2,
    };
  },
};
</script>

<style>
</style>