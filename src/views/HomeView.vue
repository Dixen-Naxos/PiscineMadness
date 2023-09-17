<script setup lang="ts">
import Image from "@/components/Image.vue";

const randomNumber = Math.floor(Math.random() * 10);

const reloadView = () => {
  window.location.reload();
};

// Reload the view every 15 seconds
setInterval(reloadView, 60000);
</script>

<template>
  <div class="">
    <div class="">
      <h1>Trouvez celle qui est différente</h1>
    </div>
    <div class="">
      <div class="flex-wrap">
        <Image v-for="i in 300" :key="i" :image_nb="i !== randomNumber ? 1 : 2"/>
      </div>

    </div>
  </div>

</template>
<style>

</style>
