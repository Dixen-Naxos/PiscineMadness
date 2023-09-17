<template>
  <img :src="image_nb === 1 ? image1 : image2" v-on:click="image_nb === 1 ? wrongImage() : rightImage()">
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
const router = useRouter();

const props = defineProps({
  image_nb: { type: Number, required: true }
});
import image1 from "@/assets/Img.png"
import image2 from "@/assets/lmg.png"

const wrongImage = () => {
  router.push({name: 'notsolution'})
}

const rightImage = () => {
  router.push({name: 'solution'});
}
</script>

<style scoped>

</style>