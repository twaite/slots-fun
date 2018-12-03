<template>
  <div>
    <!-- TODO: fix this transition -->
    <transition name="fade">
      <div class="bg-black pin-l pin-t w-full h-full fixed opacity-90"
        @click="$emit('close')"
        v-if="show"></div>
    </transition>
    <div class="modal fixed pin-x mx-auto bg-white rounded shadow-md border w-1/3 z-10"
      v-if="show">
      <div class="bg-grey-lighter p-3" v-if="$slots.header">
        <slot name="header"></slot>
      </div>
      <div class="p-3">
        <slot></slot>
      </div>
      <div v-if="$slots.footer" class="p-3 bg-grey-lighter">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DModal',
    props: {
      show: {
        type: Boolean,
        default: false,
      }
    }
  }
</script>

<style>
.modal {
  top: 50%;
  transform: translateY(-50%);
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity .5s;
}
</style>
