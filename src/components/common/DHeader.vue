<template>
  <header class="flex items-center bg-red-dark py-2 px-5 text-white shadow">
    <div class="flex-1">
      <h2>Reviewr</h2>
    </div>
    <div>
      <input type="text" placeholder="Search" 
        class="py-2 px-3 w-64 rounded border-grey border search"/>
    </div>
  </header>
</template>

<script>
  import DIcon from './DIcon.vue';
  
  export default {
    name: 'DHeader',
    components: {
      DIcon
    }
  }
</script>