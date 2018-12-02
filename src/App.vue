<template>
  <div id="app">
    <d-header/>
    <d-title-section></d-title-section>
  </div>
</template>

<script>
import DHeader from '@/components/common/DHeader.vue';
import DTitleSection from '@/components/DTitleSection.vue';

export default {
  name: 'app',
  components: {
    DHeader,
    DTitleSection
  }
}
</script>

<style>
@tailwind preflight;
@tailwind components;
@tailwind utilities;

* {
  font-family: 'Noto Sans JP', sans-serif;
}
</style>
