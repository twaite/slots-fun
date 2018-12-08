<template>
  <div class="pb-4">
    <div v-for="review in reviews" :key="review.id"
      class="review-card">
      <div class="flex">
        <img :src="`/${review.user.avatar}`"
          class="review-card__avatar"
          v-if="review.user.avatar">
        <img src="/placeholder_avatar.png"
          class="review-card__avatar"
          v-else>
        <div>
          <div class="review-card__header">
            <d-stars :stars="review.stars"/>
            <strong class="ml-2 mr-1">{{review.user.name}}</strong> on {{review.createdAt}}
          </div>
          <div class="review-card__body">
            {{review.text}}
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
  import DStars from '@/components/DStars.vue';

  export default {
    name: 'DReviewSection',
    props: ['reviews'],
    components: {
      DStars,
    }
  }
</script>

<style lang="postcss">
.review-card {
  @apply p-4 mb-4 bg-white rounded shadow border;
  transition: box-shadow .2s ease-out;
}

.review-card:hover {
  @apply shadow-md;
}

.review-card__avatar {
  @apply block h-16 w-16 rounded-full mb-4 mr-4;
}

.review-card__header {
  @apply flex pb-2 items-center;
}

.review-card__body {
  @apply leading-normal;
}
</style>
