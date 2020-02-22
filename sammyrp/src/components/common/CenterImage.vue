<template>
  <div class="center-image" id="center-image-id">
    <div class="row" id="center-row">
      <div class="col-sm-12 text-align-center">
        <img
          v-bind:src="imageFilePath"
          v-bind:alt="imageAltText"
          v-bind:srcset="imageSrcSet"
          v-bind:style="styleAsProps"
          class="center-image"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CenterImage',
  props: {
    imageFilePath: String,
    imageAltText: String,
    imageSrcSet: String,
    shouldCover: Boolean,
    hasAnimation: Boolean,
    Animation: Object,
    styleAsProps: Object,
  },
}
</script>
<style scoped>
#center-image-id {
  user-select: none !important;
  display: inline-block;
  margin: 0 auto;
  width: 100%;
}
.center-image {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
</style>
