<template>
  <div>
    <slot :data="data" :loading="loading"></slot>
  </div>
</template>

<script>
  import { reviews } from '@/data.js';

  export default {
    name: 'DLoader',
    props: {
      getData: Function, // Returns a promise
    },
    data() {
      return {
        loading: true,
        data: {},
      };
    },
    async created() {
      this.data = await this.getData();
      this.loading = false;
    }
  }
</script>