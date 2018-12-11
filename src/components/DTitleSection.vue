<template>
  <section class="py-4">
    <div class="flex items-center">
      <div class="flex-1">
        <h1>Vue Steakhouse</h1>
      </div>
      <div>
        <d-button @click="showAddReviewModal = true">
          + Add Review
        </d-button>
      </div>
    </div>
    <div class="flex items-center">
      <d-stars :value="averageStars"/>
      <span class="text-grey-dark ml-3 hover:underline cursor-pointer"
        @click="showReviewCountModal = true">
        {{totalReviews}} Reviews
      </span>
    </div>
    <div class="images">
      <img v-for="image in images" :key="image" :src="image" class="app-image">
    </div>

    <!-- Reviews Modal -->
    <!-- TODO: move this to it's own component -->
    <d-modal :show="showReviewCountModal" @close="showReviewCountModal = false">
      <h3 slot="header">
        Review Count
      </h3>
      <p class="text-grey-darker mb-2">Created in 2018 with 33 reviews</p>
      <d-review-count
        class="mb-1"
        v-for="(reviewCount, index) in reviews.slice().reverse()"
        :key="index"
        :reviewCount="reviewCount.count"
        :starCount="starMap[index]"
        :totalReviews="totalReviews"/>
    </d-modal>

    <d-add-review-modal
      :show="showAddReviewModal"
      @close="showAddReviewModal = false"
      @addReviewClicked="addReviewAndCloseModal"/>
  </section>
</template>

<script>
  import DButton from '@/components/common/DButton.vue';
  import DIcon from '@/components/common/DIcon.vue';
  import DModal from '@/components/common/DModal.vue';
  import DReviewCount from '@/components/DReviewCount.vue';
  import DAddReviewModal from '@/components/DAddReviewModal.vue';
  import DStars from '@/components/DStars.vue';
  import { mapActions } from 'vuex';

  export default {
    name: 'DTitleSection',
    components: {
      DButton,
      DModal,
      DReviewCount,
      DAddReviewModal,
      DStars,
    },
    props: {
      reviews: Array,
    },
    data() {
      return {
        showReviewCountModal: false,
        showAddReviewModal: false,
        images: [
          '/logo.png',
          '/food.jpg',
          '/table.jpg',
        ],
        starMap: [5, 4, 3, 2, 1],
      }
    },
    computed: {
      averageStars() {
        const reviewCountMapped = this.reviews.map(review => review.stars);
        const totalStarCount = reviewCountMapped.reduce((total, sum, index) => total + (sum * (index + 1)));
        return Math.floor(totalStarCount/this.totalReviews);
      },
      totalReviews() {
        return this.reviews.map(review => review.stars)
          .reduce((total, sum) => total + sum);
      }
    },
    methods: {
      ...mapActions([
        'addReview',
      ]),
      addReviewAndCloseModal(review) {
        this.addReview(review);
        this.showAddReviewModal = false;
      },
    }
  }
</script>

<style lang="postcss">
  .images {
    @apply flex flex-wrap justify-center py-5;
  }

  .app-image {
    transition: transform .2s, box-shadow .2s;
    max-width: 200px;
    max-height: 200px;
    height: auto;
    width: auto;
    margin: .25em;
    @apply bg-white rounded shadow app-image;
  }
  .app-image:hover {
    transform: scale(1.1);
    @apply shadow-lg;
  }
</style>
