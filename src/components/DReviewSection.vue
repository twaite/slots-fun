<template>
  <div>
    <div v-for="review in reviews" :key="review.id"
      class="m-4 p-4 rounded shadow border hover:shadow-md">
      <div class="flex">
        <img :src="`/${review.user.avatar}`"
          class="block h-16 w-16 rounded-full mb-4 mr-4"
          v-if="review.user.avatar">
        <img src="/placeholder_avatar.png"
          class="block h-16 w-16 rounded-full mb-4 mr-4"
          v-else>
        <div>
          <d-icon 
            name="star"
            v-for="n in 5" 
            :color="n <= review.stars ? 'black' : 'grey'"
            :key="n"/>
          <div class="flex">
            <h4 class="mb-2">{{review.user.name}}</h4>
            <span class="mx-2">on</span>
            {{review.createdAt}}
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