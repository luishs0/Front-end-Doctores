<script>
import { RouterLink } from "vue-router";
import { store } from "../store";
export default {
  name: "AppFooter",

  data() {
    return {
      store,
    };
  },
  components: {
    RouterLink,
  },
};
</script>

<template>
  <footer>
    <div class="container pt-5 pb-5">
      <div class="d-flex flex-column flex-md-row g-4 row justify-content-around">
        <div class="left-container col-12 col-lg-4">
          <a href="/">
            <img class="logo" src="../assets/imgs/logo-4.png" alt="logo" />
          </a>
          <span>B Doctors</span>
          <h6>
            2300 - 1633 <span class="addres">New York Street</span> <br />
            New York - United States of America <br />
            Box-Office: (800)-534-0258
          </h6>
        </div>
        <div class="container-right text-start col-12 col-lg-8">
          <!-- <h4>We care about you health</h4> -->
          <div class="row g-3 mt-4 links">
            <ul class="col-6 col-md-3">
              <h5 class="text-muted">Careers</h5>
              <li>
                <a href=""> &SmallCircle; Work with us </a>
              </li>

              <li>
                <a href=""> &SmallCircle; Open positions </a>
              </li>

              <li>
                <a href=""> &SmallCircle; Applications open </a>
              </li>

              <li>
                <a href=""> &SmallCircle; Company intranet </a>
              </li>
            </ul>

            <ul class="col-6 col-md-3">
              <h5 class="text-muted">Contacts</h5>
              <li>
                <a href=""> &SmallCircle; Work and contacts </a>
              </li>

              <li>
                <a href=""> &SmallCircle; Contacts B Doctors </a>
              </li>

              <li>
                <a href=""> &SmallCircle; Applications open </a>
              </li>
            </ul>

            <ul class="col-6 col-md-3">
              <h5 class="text-muted">Legal Information</h5>
              <li>
                <a href=""> &SmallCircle; Coockie Policy </a>
              </li>

              <li>
                <a href=""> &SmallCircle; Privacy Policy </a>
              </li>

              <li>
                <a href=""> &SmallCircle; Transparency </a>
              </li>
            </ul>

            <ul class="col-6 col-md-3">
              <h5 class="text-muted">Other Informations</h5>
              <li>
                <a href=""> &SmallCircle; Ethics Committee </a>
              </li>

              <li>
                <a href=""> &SmallCircle; Cookie settings </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="socials d-flex pt-5 justify-content-center justify-content-md-end">
        <div><i class="fa-brands fa-instagram"></i></div>
        <div><i class="fa-brands fa-square-twitter"></i></div>
        <div><i class="fa-brands fa-facebook"></i></div>
        <div><i class="fa-brands fa-linkedin"></i></div>
      </div>
      <hr />
      <div class="d-flex justify-content-center">
        <p>&#169; <span class="date">2023</span> Copyright: B Doctors.com</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss" as *;

img {
  margin-left: -20px;
  width: 30%;
}

footer {
  background-color: #1f254c;
  color: white;
  border-top: 3px solid grey;
}

.addres {
  color: grey;
}

.links {
  border-left: 1px solid grey;
}

li {
  list-style: none;
}

ul {
  padding-right: 1rem;
  margin: 0;
}

a {
  color: white;
  transition: 0.15s;
}

.fa-brands {
  margin-left: 1rem;
  cursor: pointer;
}

.date {
  color: grey;
}
</style>
