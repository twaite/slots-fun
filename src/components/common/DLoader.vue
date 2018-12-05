<template>
  <div>
    <h3 v-if="loading" class="p-3">Loading...</h3>
    <slot v-else :data="data"></slot>
  </div>
</template>


<script>
  import { reviews } from '@/data.js';

  export default {
    name: 'DLoader',
    data() {
      return {
        loading: true,
        data: {},
      };
    },
    created() {
      setTimeout(() => {
        this.loading = false
        this.data = { reviews };
      }, 1000);
    }
  }
</script>