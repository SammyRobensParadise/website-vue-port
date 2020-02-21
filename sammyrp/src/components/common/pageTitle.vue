<template>
  <div class="row" id="header">
    <div class="col-sm-12">
      <h1
        role="title"
        description="landing page text"
        class="justify-content-center landing-text display-3"
        v-bind:class="{ anim: hasAnimation, cursor: hasAnimation }"
      >
        {{ text }}
      </h1>
      <h2 class="justify-content-center landing-text-sub display-4" v-if="!!subtext">
        {{ subText }}}
      </h2>
      <h3 v-if="!!subSubText">{{ subSubText }}</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PageTitle',
  props: {
    text: String,
    subText: String,
    subSubText: String,
    hasAnimation: Boolean,
  },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
#header {
  font-family: 'Montserrat', sans-serif !important;
}
.landing-text {
  top: 0rem;
  -webkit-background-clip: text;
  background-clip: text;
  white-space: nowrap;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  width: 13em;
}
.cursor {
  border-right: 2px solid rgba(0, 0, 0, 0.75);
}
.anim {
  animation: typewriter 4s steps(44) 1s 1 normal both,
    blinkTextCursor 500ms steps(44) infinite normal;
}

@keyframes typewriter {
  from {
    width: 0;
  }

  to {
    width: 13em;
  }
}

@keyframes blinkTextCursor {
  from {
    border-right-color: rgba(0, 0, 0, 0, 0.75);
  }

  to {
    border-right-color: #fff;
  }
}
.landing-text-sub {
  top: 10rem;
  background-clip: text;
  -webkit-background-clip: text;
}
@media screen and (max-width: 870px) {
  .landing-text-sub {
    top: 18rem;
  }
}

@media screen and (max-width: 580px) {
  .landing-text-sub {
    display: none;
  }
}
</style>
