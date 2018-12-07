<template>
  <div class="p-4">
    <div v-for="review in reviews" :key="review.id"
      class="p-4 mb-4 bg-white rounded shadow border hover:shadow-md">
      <div class="flex">
        <img :src="`/${review.user.avatar}`"
          class="block h-16 w-16 rounded-full mb-4 mr-4"
          v-if="review.user.avatar">
        <img src="/placeholder_avatar.png"
          class="block h-16 w-16 rounded-full mb-4 mr-4"
          v-else>
        <div>
          <div class="flex pb-2 items-center">
            <d-icon 
              name="star"
              v-for="n in 5" 
              :color="n <= review.stars ? 'black' : 'grey'"
              :key="n"/>
            <strong class="ml-2 mr-1">{{review.user.name}}</strong> on {{review.createdAt}}
          </div>
          <div class="leading-normal">
            {{review.text}}
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
  import DIcon from './common/DIcon.vue';
  export default {
    name: 'DReviewSection',
    props: ['reviews'],
    components: {
      DIcon,
    }
  }
</script>
