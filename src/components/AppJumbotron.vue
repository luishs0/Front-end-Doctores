<script>
import { RouterLink } from "vue-router";
export default {
  name: "AppJumbotron",
};
</script>

<template>
  <section class="jumbotron">
    <div class="jumbotron-container">
      <div class="container px-5">
        <div class="row">
          <div
            class="jumbo-left pt-4 pb-4 col-12 col-lg-8 text-white text-center text-lg-start d-flex flex-column justify-content-center">
            <h3 class="text-secondary">We care about you...</h3>
            <h1 class="mb-3">
              THE BEST<br />ONLINE<br />SUPPORT FOR YOUR HEALTH
            </h1>

            <div class="call-to-action row g-2">
              <div class="col-12 col-md-6 col-lg-3 col-xl-12">
                <RouterLink :to="{ name: 'about-us' }" class="btn mt-2 btn-primary">READ MORE</RouterLink>
              </div>
              <div
                class="col-12 col-md-6 col-lg-9 col-xl-12 d-flex mt-4 justify-content-center justify-content-lg-start align-items-center">
                <RouterLink :to="{ name: 'doctorslist' }" class="d-flex">
                  <div href="#" class="play-btn text-primary me-2"><i class="fa-regular fa-circle-play me-1"></i>
                  </div>
                  <div class="d-inline-block text-secondary">
                    Meet our doctors
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="jumbo-right d-none d-lg-block col-4">
            <div class="jumbo-img">
              <img src="../assets/imgs/jumbo-doctor.png" alt="jumbotron doctors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@use "../styles/general.scss" as *;

.jumbotron {
  background-image: linear-gradient(to bottom right, #d4e4fb, #d5f0e9);
  border-bottom: 3px solid #f8f9fa;

  h3 {
    font-size: 1.4rem;
  }

  h1 {
    color: #1f254c;
    font-size: 1.8rem;
  }

  .jumbo-img {
    img {
      width: 100%;
      padding-top: 8rem;
    }
  }

  .play-btn {
    i {
      font-size: 1.7rem;
    }
  }
}
</style>
