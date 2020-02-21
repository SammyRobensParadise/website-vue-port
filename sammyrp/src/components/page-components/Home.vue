<template>
  <div>
    <Navbar></Navbar>
    <PageTile
      v-bind:text="this.Strings.TITLE"
      v-bind:subText="this.Strings.SUBTITLE"
      v-bind:subSubText="this.Strings.ANNOUNCEMENT"
      v-bind:hasAnimation="true"
    ></PageTile>
  </div>
</template>
<script>
import Navbar from '../common/Navbar'
import PageTile from '../common/pageTitle'
import DATA from '../../constants'
export default {
  name: 'Home',
  props: {},
  components: {
    Navbar,
    PageTile,
  },
  created() {
    const { Strings } = DATA.Home
    this.Strings = Strings
  },
}
</script>
