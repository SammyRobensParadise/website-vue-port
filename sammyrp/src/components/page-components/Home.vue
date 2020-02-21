<template>
  <div>
    <Navbar></Navbar>
    <keep-alive>
      <PageTile
        v-bind:text="this.Strings.TITLE"
        v-bind:subText="this.Strings.SUBTITLE"
        v-bind:subSubText="this.Strings.ANNOUNCEMENT"
        v-bind:hasAnimation="true"
      ></PageTile>
    </keep-alive>

    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from '../common/Navbar'
import PageTile from '../common/pageTitle'
import DATA from '../../constants'
import Footer from '../common/Footer'
export default {
  name: 'Home',
  props: {},
  components: {
    Navbar,
    PageTile,
    Footer,
  },
  created() {
    const { Strings } = DATA.Home
    this.Strings = Strings
  },
}
</script>
