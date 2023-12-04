<script>
import { RouterLink } from "vue-router";
import { store } from "../store";
import AppJumbotron from "./AppJumbotron.vue";

export default {

  name: "AppHeader",

  data() {
    return {
      links: [
        {
          label: "HOME",
          routeName: "home",
        },

        {
          label: "ABOUT US",
          routeName: "about-us",
        },

        {
          label: "SERVICES",
          routeName: "services",
        },

        {
          label: "CONTACT",
          routeName: "contact",
        },
      ],
      store,
    };
  },
  components: {
    RouterLink,
    AppJumbotron,
  },
};
</script>

<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <!-- logo -->
          <a href="/">
            <img class="logo" src="../assets/imgs/logo-4.png" alt="logo" />
          </a>
          <!-- <strong><span class="logo">B Doctors</span></strong> -->
          <!-- /logo -->

          <!-- hambunger menu -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- /hamburger menu -->

          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav">
            <div class="navbar-nav links text-secondary">
              <Router-link
                v-for="(link, index) in links"
                :to="{ name: link.routeName }"
                class="nav-link"
                :key="index"
                >{{ link.label }}
              </Router-link>
              <a href="http://127.0.0.1:8000/login" class="nav-link">LOGIN</a>
              <a href="http://127.0.0.1:8000/register" class="nav-link">REGISTER</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>


<style lang="scss" scoped>
@use "../styles/general.scss" as *;

header {
  background-image: linear-gradient(to right, #d4e4fb, #d5eaf2);
}

.logo {
  color: #1f254c;
  width: 4rem;
}

img {
  width: 50px;
}

.links {
  a {
    color: #606b87;

    &:after {
      display: block;
      content: "";
      border-bottom: solid 3px #606b87;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }

    &:hover:after {
      transform: scaleX(1);
    }

    &:hover {
      transition-duration: 0.5s;
      color: #606b87;
    }

    .active {
      color: rgb(101, 24, 24);
    }
  }
}
</style>
