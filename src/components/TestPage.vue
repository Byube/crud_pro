<template>
  <div class="grid">
    <div class="col-12">
      <div class="card my-5 keep-all justify-center">
        <p>test</p>
        <TreeSelect v-model="selectedNode" :options="nodes"/>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import icon from '../../public/data/icon';
export default {
    setup(){
        const nodes = icon.iconList;
        const selectedNode = ref();
        
        return{
            nodes,
            selectedNode,
        }
    }
};
</script>

<style>
</style>