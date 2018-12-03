<template>
  <button class="bg-red-dark text-white rounded p-2" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'DButton'
  }
</script>