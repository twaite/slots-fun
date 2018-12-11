<template>
  <div id="app">
    <d-header/>
    <d-loader :getData="loadData" class="main">
      <template slot-scope="{ loading }">
        <d-spinner v-if="loading"/>
        <div v-else class="max-w-app">
          <d-title-section :reviews="$store.state.reviews"/>
          <d-reviews-section :reviews="$store.state.reviews"/>
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
import { mapActions } from 'vuex'

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
    ...mapActions([
      'loadData',
    ]),
  },
}
</script>

<style lang="postcss">
@tailwind preflight;
@tailwind components;
@tailwind utilities;

* {
  font-family: 'Noto Sans JP', sans-serif;
}

#app {
  @apply bg-grey-lighter min-h-screen flex flex-col;
}

.main {
  @apply flex flex-col flex-grow justify-center items-center mx-4;
}
</style>
