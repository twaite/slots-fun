<template>
  <div id="app" class="bg-grey-lighter">
    <d-header/>
    <d-loader>
      <template slot-scope="{ data }">
        <d-title-section @addReview="addReview"/>
        <d-reviews-section :reviews="data.reviews"/>
      </template>
    </d-loader>
  </div>
</template>

<script>
import DHeader from '@/components/common/DHeader.vue';
import DLoader from '@/components/common/DLoader.vue';
import DTitleSection from '@/components/DTitleSection.vue';
import DReviewsSection from '@/components/DReviewSection.vue';

export default {
  name: 'app',
  components: {
    DHeader,
    DTitleSection,
    DReviewsSection,
    DLoader,
  },
  methods: {
    addReview(reviews) {

    }
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
