<template>
  <d-modal :show="show" @close="$emit('close')">
    <div slot="header">
      <h3>Add a Review</h3>
    </div>
    <d-stars :highlight="true" class="pb-2" v-model="review.stars"/>
    <textarea v-model="review.text" class="w-full border rounded" rows="3"/>
    <div slot="footer">
      <div class="flex justify-end">
        <d-button @click="$emit('close')">
          Cancel
        </d-button>
        <d-button class="ml-2" @click="$emit('addReviewClicked', review)">
          Add
        </d-button>
      </div>
    </div>
  </d-modal>
</template>

<script>
import DModal from './common/DModal.vue';
import DButton from './common/DButton.vue';
import DStars from '@/components/DStars.vue';

export default {
  name: 'DAddReview',
  components: {
    DModal,
    DStars,
    DButton,
  },
  props: {
    show: {
      type: Boolean,
    }
  },
  data() {
    return {
      review: {
        text: '',
        stars: 0,
      }
    };
  },
}
</script>
