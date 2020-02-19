<template>
  <div class="row">
    <div class="container" id="section-container">
      <a href="#">
        <div class="col-sm-12 projects-section-section" id="section-sec">
          <div class="section-section">
            <h2 class="section-p" id="section-title">{{ title }}</h2>
            <p class="section-p" id="section-subtext">
              {{ subTitle }}
            </p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProjectContainer',
  props: {
    imageLink: String,
    routerLink: String,
    hrefLink: String,
    title: String,
    subTitle: String,
    animationSide: String,
  },
}
</script>
<style scoped>
.section-section {
  margin-top: 3rem;
}
.center {
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.section-link-out {
  margin-top: -1rem;

  width: 100%;
}

.card-body {
  background-color: #f4f8fc;
}

.card {
  background-color: #f4f8fc;
  margin-bottom: 2rem;
}
.projects-section-section {
  opacity: 0;
  margin-left: -50rem;
  padding-top: 1rem;
  width: 100%;
  height: 34rem;
  background-size: cover;
  width: 100%;
  background-repeat: no-repeat;
  transition: background-color 0.3s ease-in-out;
  margin-bottom: 1rem;
  margin-top: 1rem;
  border-radius: 1rem 1rem 1rem 1rem;
  box-shadow: 0px 5px 10px rgb(201, 201, 201);
  top: 0;
  transition: top 0.3s ease, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;
  position: relative;
}
@keyframes slide-in-left {
  from {
    margin-left: -50rem;
    opacity: 0;
  }

  to {
    margin-left: 0rem;
    opacity: 1;
  }
}
@keyframes slide-in-right {
  from {
    margin-left: 50rem;
    opacity: 0;
  }

  to {
    margin-left: 0rem;
    opacity: 1;
  }
}
.projects-section-section:hover {
  top: -1rem;
  box-shadow: 0px 5px 16px #32228a;
  background-color: rgb(233, 232, 232);
  cursor: pointer;
}
.no-show-sections {
  display: none;
}
@media screen and (max-width: 480px) {
  .mobile-support-coming {
    height: 12rem;
  }
}

@media screen and (max-width: 1000px) {
  .display-4 {
    font-size: 2rem !important;
  }

  .display-3 {
    font-size: 3.5rem !important;
  }
}

@media screen and (max-width: 750px) {
  .display-3 {
    font-size: 2rem !important;
  }
}

@media screen and (max-width: 450px) {
  .display-3 {
    font-size: 1.5rem !important;
  }
}

@media screen and (max-width: 780px) {
  .center-content {
    margin-left: 15px !important;
  }
}
</style>
