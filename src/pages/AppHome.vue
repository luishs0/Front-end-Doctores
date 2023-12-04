<!-- script section -->
<script>
import axios from "axios";
import { store } from "../store";
import { RouterLink } from "vue-router";
import AppJumbotron from "../components/AppJumbotron.vue";
import AppCard from "../components/AppCard.vue";

export default {
  name: "AppHome",
  components: { AppJumbotron, RouterLink, AppCard },
  data() {
    return {
      store,
      label: "Search",
      docSearch: "",
      routeName: "doctorslist",
      baseUrl: "http://127.0.0.1:8000",
      doctors: [],
      loading: false,
      sponsoredUsers: [],
    };
  },
  computed: {
    getStar() {
      return
    }
  },

  created() {
    this.getDoctors();
  },

  methods: {
    getDoctors() {
      this.loading = true;
      axios
        .get(`${this.baseUrl}/api/profiles`, {
          params: {
            ...(this.docSearch && {
              specialization_id: this.docSearch,
            }),
          },
        })
        .then((resp) => {
          this.doctors = resp.data.results.user;
          this.store.specializations = resp.data.results.specializations;
          console.log(this.doctors);
          this.loading = false;
          if (this.docSearch) {
            this.$router.push({
              name: "doctorslist",
              query: { spec: this.docSearch },
            });
          }
          this.loading = false;
          this.sponsoredUsers = resp.data.results.sponsoredUsers;
          console.log(this.sponsoredUsers);
        });
    },
  },
};
</script>

<template>
  <div>
    <AppJumbotron />
  </div>
  <main>
    <div class="container pt-3">
      
      <!-- <div class="container my-5 bg-light py-5 px-5">
        <h2 class="text-center our-doctors mb-5">Sponsored Doctors</h2>
        <div class="row row-cols-4 justify-content-center justify-content-md-between gy-5">
          <div class="card" v-for="sponsoredUser in sponsoredUsers" style="width: 18rem;">
            <div class="ms_card-img">

              <div v-for="doctor in doctors ">
                <div v-if="sponsoredUser.name === doctor.name" class="sponsored">
                  Sponsored!
                </div>
              </div>

              <img v-if="sponsoredUser.user_detail.photo" class="card-img-top"
                :src="`${baseUrl}/storage/${sponsoredUser.user_detail.photo}`" alt="...">
              <img v-else class="card-img-top" src="../assets/imgs/4025200.png" alt="">
            </div>
            <div class="card-body">
              <h4 class=" mb-4 mt-2">Dr. {{ sponsoredUser.name }} {{ sponsoredUser.surname }}</h4>
              <div class="doctor-email mb-2"> <i class="fa-solid fa-envelope"></i> {{ sponsoredUser.email }}</div>
              <p class=""> <i class="fa-solid fa-phone"></i> {{ sponsoredUser.user_detail.phone }}</p>
              <p>
                <span class="me-1 d-block d-md-inline-block" v-for="spec in sponsoredUser.specializations"> 
                  <i class="fa-solid fa-hashtag"></i>{{spec.title }}
                </span>
              </p>
              <div class="d-flex justify-content-between">

                <p>
                  <i v-for="n in 5" :class="n <= Math.floor(sponsoredUser.feedback_avg_vote) ? 'fa-solid' : 'fa-regular'"
                    class="fa-star"></i>
                </p>
                <p class="text-end">
                  <router-link :to="{ path: `doctorslist/${sponsoredUser.slug}` }"
                    class="btn btn-primary">Details</router-link>
                </p>
              </div>
            </div>

          </div>
        </div>

      </div> -->


      <div class="container my-5 bg-light py-5 px-5">
        <div class="evidenza">
          <h2 class="text-center our-doctors">Our Doctors</h2>
          <div class="mb-3 mt-5 col-8 mx-auto">
            <select class="form-select" @change="getDoctors" v-model="docSearch" placeholder="test">
              <option value="">Choose a specialization</option>
              <option v-for="spec in store.specializations" :value="spec.slug" :key="spec.id">
                {{ spec.title }}
              </option>
            </select>
          </div>
          <div class="row pt-5 g-5">
            <div v-if="loading">Wait a minute</div>
            <div v-else v-for="doctor in this.doctors" class="col-12 col-md-6 col-lg-4 mb-5" :key="doctor.id">
              <AppCard :doctor="doctor" :sponsored-users="this.sponsoredUsers" />
            </div>
          </div>
        </div>
      </div>
    </div>


  </main>
</template>
<!-- /template section -->

<style lang="scss" scoped>
.our-doctors {
  color: #20254c;

  &::before {
    content: "";
    display: inline-block;
    width: 5%;
    height: 3px;
    background-color: #20254c9e;
    margin-right: 10px;
    vertical-align: middle;
  }

  &::after {
    content: "";
    display: inline-block;
    width: 5%;
    height: 3px;
    background-color: #20254c9e;
    margin-left: 10px;
    vertical-align: middle;
  }
}

.carousel {
  width: 80%;
  margin: auto;
}

.evidenza {
  min-height: 200px;
}


.card {
  padding: 0;
  overflow: hidden;
  border-radius: 20px;
}

.ms_card-img {
  max-height: 190px;
  overflow: hidden;

  img {
    height: 190px;
    object-fit: cover;
  }
}

.sponsored {
  color: white;
  position: absolute;
  top: 4%;
  right: 0;
  border-radius: 1rem 0 0 1rem;
  padding: 0.4rem .6rem;
  background-color: rgba(247, 190, 4, 0.644);
}
</style>
