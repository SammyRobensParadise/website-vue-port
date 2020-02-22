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
    <CenterImage
      v-bind:imageFilePath="LandingImage.imageSrc"
      v-bind:imageAltText="LandingImage.altText"
      v-bind:styleAsProps="LandingImage.customCSS"
    ></CenterImage>
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from '../common/Navbar'
import PageTile from '../common/pageTitle'
import DATA from '../../constants'
import Footer from '../common/Footer'
import CenterImage from '../common/CenterImage'
export default {
  name: 'Home',
  props: {},
  components: {
    Navbar,
    PageTile,
    Footer,
    CenterImage,
  },
  data() {
    return {
      LandingImage: {
        imageSrc: require('../../assets/sammybiking.svg'),
        altText: `Sammy Biking with Guitar`,
        customCSS: {
          height: 'auto',
          width: '50%',
        },
      },
    }
  },
  created() {
    const { Strings } = DATA.Home
    this.Strings = Strings
  },
}
</script>
