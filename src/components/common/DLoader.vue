<template>
  <div>
    <slot :loading="loading"></slot>
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
      };
    },
    async created() {
      this.data = await this.getData();
      this.loading = false;
    }
  }
</script>