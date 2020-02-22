<template>
  <div>
    <div v-if="show" class="popover-cs">
      <div class="popover-main" id="popover-main">
        <div id="topbar"><i class="gg-close close" v-on:click="$emit('close')"></i></div>
        <div id="popoverbody">
          <h3>{{ title }}</h3>
          <h4>{{ subTitle }}</h4>
          <div v-for="content in content" v-bind:key="content" id="content">
            <div v-if="content.type === 'p'">
              <p>{{ content.value }}</p>
            </div>
            <div v-else-if="content.type == 'a'">
              <a v-bind:href="content.ref">{{ content.value }}</a>
            </div>
            <div v-else>
              <p>{{ content.value }}</p>
            </div>
          </div>
        </div>
        <div id="bottombar"></div>
      </div>
    </div>
    <div v-if="show" class="bk"></div>
  </div>
</template>
<script>
export default {
  name: 'Popover',
  props: {
    title: String,
    subTitle: String,
    content: Array,
    show: Boolean,
  },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
@import url('https://css.gg/close.css');
.popover-cs {
  font-family: 'Montserrat', sans-serif !important;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  /* center all inline content */
  text-align: center;
  position: fixed;
  z-index: 10001;
}
.bk {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: #000;
  z-index: 10000;
  opacity: 0.7;
}
.popover-main {
  display: inline-block;
  margin-top: 6rem;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  background: #ffffff;
  box-shadow: 0px 6px 56px 3px rgba(0, 0, 0, 0.75);
  border-radius: 1rem;
}
.close {
  float: right;
  margin-top: 0.75rem;
  padding-block-end: 1rem;
  margin-right: 1rem;
}
.gg-close {
  transform: scale(1.2);
}
#popoverbody {
  padding-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
}
#topbar {
  border-top: solid 1rem #32218a;
  box-sizing: border-box;
  border-radius: 1rem 1rem 0rem 0rem;
}
#bottombar {
  padding-top: 2rem;
}
</style>
