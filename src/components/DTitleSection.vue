<template>
  <section class="p-5">
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
      <!-- TODO: make into it's own component -->
      <d-icon 
        name="star"
        v-for="n in 5" 
        :color="n <= averageStars ? 'black' : 'grey'"
        :key="n"/>
      <span class="text-grey-dark ml-3 hover:underline cursor-pointer"
        @click="showReviewCountModal = true">
        {{totalReviews}} Reviews
      </span>
    </div>
    <div class="flex justify-center">
      <!-- TODO: iterate --> 
      <img src="@/assets/logo.png" class="bg-white rounded shadow app-image hover:shadow-lg">
      <img src="/food.jpg" class="bg-white rounded shadow app-image hover:shadow-lg">
      <img src="/table.jpg" class="bg-white rounded shadow app-image hover:shadow-lg">
    </div>

    <!-- Reviews Modal -->
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
      @addReviewClicked="addReview"/>
  </section>
</template>

<script>
  import DButton from '@/components/common/DButton.vue';
  import DIcon from '@/components/common/DIcon.vue';
  import DModal from '@/components/common/DModal.vue';
  import DReviewCount from '@/components/DReviewCount.vue';
  import DAddReviewModal from '@/components/DAddReviewModal.vue';

  export default {
    name: 'DTitleSection',
    components: {
      DButton,
      DIcon,
      DModal,
      DReviewCount,
      DAddReviewModal,
    },
    data() {
      return {
        showReviewCountModal: false,
        showAddReviewModal: false,
        images: [
          'logo.png',
          'food.jpg',
          'table.jpg',
        ],
        starMap: [5, 4, 3, 2, 1],
        reviews: [
          {
            count: 1,
          },
          {
            count: 5,
          },
          {
            count: 3
          },
          {
            count: 3
          },
          {
            count: 21
          }
        ]
      }
    },
    computed: {
      averageStars() {
        const reviewCountMapped = this.reviews.map(review => review.count);
        const totalStarCount = reviewCountMapped.reduce((total, sum, index) => total + (sum * (index + 1)));
        return Math.floor(totalStarCount/this.totalReviews);
      },
      totalReviews() {
        return this.reviews.map(review => review.count)
          .reduce((total, sum) => total + sum);
      }
    },
    methods: {
      addReview(review) {
        console.log(review);
        // TODO: add review
        this.showAddReviewModal = false;
      }
    }
  }
</script>

<style>
  .app-image {
    transition: transform .2s, box-shadow .2s;
    max-width: 200px;
    max-height: 200px;
    height: auto;
    width: auto;
    margin: .25em;
  }
  .app-image:hover {
    transform: scale(1.1);
  }
</style>
