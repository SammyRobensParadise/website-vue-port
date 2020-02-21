<template>
  <div class="footer-wrapper" id="footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <p class="section-p cp">
            {{ this.Footer.COPYRIGHT }}
            <a v-bind:href="`mailto:${this.Footer.Links.LINK}`">{{ this.Footer.Links.LINK }}</a>
          </p>
          <p class="section-p cp">{{ this.LastUpdatedDate }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import DataHandlers from '../utils/getters'
import DATA from '../../constants'
export default {
  name: 'Footer',
  created() {
    const { Footer } = DATA
    this.Footer = Footer
  },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
.footer-wrapper {
  font-family: 'Montserrat', sans-serif !important;
}
.cp {
  margin-top: 2rem;
}
.section-p {
  text-align: center;
  mix-blend-mode: difference !important;
  -webkit-mix-blend-mode: difference;
  -moz-mix-blend-mode: difference;
  color: #afafaf;
}
</style>
