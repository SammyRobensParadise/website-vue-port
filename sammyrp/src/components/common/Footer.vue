<template>
  <div class="footer-wrapper" id="footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <p class="section-p cp">
            {{ this.Footer.COPYRIGHT }}
            <a v-bind:href="`mailto:${this.Footer.Links.LINK}`">{{ this.Footer.Links.LINK }}</a>
          </p>
          <p class="section-p cp">
            {{ `Last updated: ${lastUpdatedDate} | Build ID: ${localSha}` }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DataHandlers from '../utils/getters'
import DATA from '../../constants'
export default {
  name: 'Footer',
  created() {
    const { Footer } = DATA
    this.Footer = Footer
  },
  data() {
    return {
      lastUpdatedDate: 'Loading...',
      localSha: 'loading...',
    }
  },
  mounted() {
    DataHandlers.getGithubHistory().then((response) => {
      let { date } = response.data.commit.committer
      let { sha } = response.data
      date = date.slice(0, 10)
      this.localSha = sha
      this.lastUpdatedDate = date
    })
  },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
.footer-wrapper {
  font-family: 'Montserrat', sans-serif !important;
  bottom: 0rem;
  margin-top: 2rem;
  border-top: 0.15rem solid #afafaf;
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
