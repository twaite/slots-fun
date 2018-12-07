<template>
  <div id="app" class="bg-grey-lighter min-h-screen flex flex-col">
    <d-header/>
    <d-loader :getData="getReviews" class="flex flex-col flex-grow justify-center">
      <template slot-scope="{ data, loading }">
        <d-spinner v-if="loading"/>
        <div v-else>
          <d-title-section/>
          <d-reviews-section :reviews="data"/>
        </div>
      </template>
    </d-loader>
  </div>
</template>

<script>
import DHeader from '@/components/common/DHeader.vue';
import DLoader from '@/components/common/DLoader.vue';
import DTitleSection from '@/components/DTitleSection.vue';
import DReviewsSection from '@/components/DReviewSection.vue';
import DSpinner from '@/components/common/DSpinner.vue';
import { reviews } from '@/data.js';

export default {
  name: 'app',
  components: {
    DHeader,
    DTitleSection,
    DReviewsSection,
    DLoader,
    DSpinner,
  },
  methods: {
    getReviews() {
      return new Promise((resolve, rejected) => {
        setTimeout(() => {
          resolve(reviews)
        }, 2000);
      });
    }
  }
}
</script>

<style lang="postcss">
@tailwind preflight;
@tailwind components;
@tailwind utilities;

* {
  font-family: 'Noto Sans JP', sans-serif;
}
</style>
