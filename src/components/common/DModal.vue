<template>
  <div>
    <transition name="fade">
      <div v-if="show">
        <div class="backdrop"
          @click="$emit('close')"></div>
        <div class="modal">
          <div class="modal__header" v-if="$slots.header">
            <slot name="header"></slot>
          </div>
          <div class="p-3">
            <slot></slot>
          </div>
          <div v-if="$slots.footer" class="modal__footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
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

<style lang="postcss">
.modal {
  top: 50%;
  transform: translateY(-50%);
  @apply fixed pin-x mx-auto bg-white rounded shadow-md border w-1/3 z-10;
}

.modal__header, .modal__footer {
  @apply bg-grey-lighter p-3;
}

.backdrop {
  @apply bg-black pin-l pin-t w-full h-full fixed opacity-90;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
