<template>
  <div id="navigation-wrapper">
    <nav
      class="navbar navbar-expand-md navbar-fixed-top navbar-default fixed-top navigation-tag b-navbar-toggle b-navbar-collapse"
      role="navigation"
      name="navigation bar"
      value="nav"
      description="navigation bar for website"
    >
      <a class="navbar-brand active" v-bind:href="Links.HOME">
        {{ Strings.HOME }}
      </a>

      <b-button
        v-b-toggle.collapse-2
        id="navbarToggler"
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="fa fa-bars"></span>
      </b-button>
      <b-collapse class="collapse navbar-collapse" id="collapse-2">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a
              class="nav-link"
              id="navbar_projects"
              v-bind:href="Links.PORTFOLIO"
              target="_blank"
              >{{ Strings.PORTFOLIO }}</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" id="navbar_dribbble" v-bind:href="Links.DRIBBBLE" target="_blank">{{
              Strings.DRIBBBLE
            }}</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="./src/assets/Resume_winter_20_v4.pdf"
              download="Sammy Robens-Paradise Resume"
              id="navbar_resume"
              >{{ Strings.RESUME }}</a
            >
          </li>
          <li class="nav-item">
            <!-- TODO change to use router -->
            <a class="nav-link" href="./me.html" id="navbar_whos_sammy">{{ Strings.WHOS_SAMMY }}</a>
          </li>

          <li class="nav-item">
            <div
              class="nav-link"
              id="navbar_contact"
              data-toggle="modal"
              href=""
              data-target="#contactModal"
              v-on:click="showContactPopover = true"
            >
              {{ Strings.CONNECT }}
            </div>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="navbar_github_link"
              v-bind:href="Links.GITHUB"
              target="_blank"
              >{{ Strings.GITHUB }}</a
            >
          </li>
        </ul>
      </b-collapse>
    </nav>
    <template>
      <Popover
        v-bind:show="showContactPopover"
        v-bind:title="PopoverContent.title"
        v-bind:subTitle="PopoverContent.subTitle"
        v-bind:content="PopoverContent.content"
        v-on:close="showContactPopover = false"
      ></Popover>
    </template>
  </div>
</template>
<script>
import DATA from '../../constants'
import Popover from './Popover'
export default {
  name: 'Navbar',
  created() {
    const { Strings, Links } = DATA.Navigation
    this.Strings = Strings
    this.Links = Links
    this.PopoverContent = {
      title: 'Get in touch!',
      subTitle: 'Send me an email or check out my linkedin',
      content: [
        { type: 'a', value: 'Linkedin', ref: Links.LINKEDIN },
        { type: 'a', value: 'srobensparadise@gmail.com', ref: `mailto:${Links.EMAIL}` },
      ],
    }
  },
  data() {
    return {
      showContactPopover: false,
    }
  },
  components: {
    Popover,
  },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
#navigation-wrapper {
  font-family: 'Montserrat', sans-serif !important;
}
.navigation-padding {
  fill: none;
  height: 4rem;
  width: 100%;
}
.navbar-brand {
  color: #333 !important;
}
.nav-link:hover {
  color: #32228a;
  cursor: pointer;
}

.navbar.navbar-default {
  background-color: #ffffff;
  opacity: 0.7;
  box-shadow: 0px 0.3px #ffff;
}

.navbar-toggler {
  background-color: grey !important;
}
a {
  text-decoration: none !important;
}
</style>
