<template>
  <div class="stars">
    <d-icon 
      name="star"
      v-for="n in 5" 
      :color="n <= stars ? 'black' : 'grey'"
      :key="n"/>
  </div>
</template>

<script>
  import DIcon from '@/components/common/DIcon.vue';

  export default {
    name: 'DStars',
    props: {
      stars: Number,
    },
    components: {
      DIcon,
    }
  }
</script>


<style lang="postcss" scoped>
  .stars {
    @apply flex;
  }
</style>
