<template>
  <div class="layout-menu-container">
    <div class="flex flex-row rounded-t-none">
        <div class="font-bold text-4xl mt-2 pt-2 flex flex-row">
          <img src="../../../assets/images/512.png" class="w-2 mr-2.5">
          <p>Total Wallet</p>
        </div>
    </div>
    <AppSubmenu
      :items="model"
      class="layout-menu border-t mt-3 pt-5"
      :root="true"
      @menuitem-click="onMenuItemClick"
    />
  </div>
</template>

<script>
import AppSubmenu from "@/views/header/sideNav/AppSubmenu.vue";
import { getCurrentInstance } from "vue";
export default {
  props: {
    model: Array,
  },
  components: {
    AppSubmenu,
  },
  setup() {
    const { emit } = getCurrentInstance();
    const onMenuItemClick = (event) => {
      emit("menuitem-click", event);
    };
    return {
      onMenuItemClick,
    };
  },
  computed: {
    darkTheme() {
      return this.$appState.darkTheme;
    },
  },
};
</script>