<!-- script section -->
<script>
import { store } from "../store";
import axios from "axios";
import AppDoctorDetails from "./AppDoctorDetails.vue";
import AppCard from "../components/AppCard.vue";
export default {
  name: "AppDoctorList",
  data() {
    return {
      baseUrl: "http://127.0.0.1:8000",
      doctors: [],
      loading: true,
      store,
      docSearch: this.$route.query.spec,
      voto: this.$route.query.vote,
      feedback_num: this.$route.query.feedback,
      counter: 0,
      total: 0,
      specializations: [],
      sponsoredUsers: Object
    };
  },
  components: { AppDoctorDetails, AppCard },
  created() {
    this.getDoctors();
  },
  methods: {
    getDoctors() {
      this.$router.replace({
        query: {
          vote: this.voto,
          spec: this.docSearch,
          fdback: this.feedback_num,
        },
      });
      axios
        .get(`${this.baseUrl}/api/profiles`, {
          params: {
            ...(this.docSearch && { specialization_slug: this.docSearch }),
            ...(this.voto && { vote: this.voto }),
            ...(this.feedback_num && { feedback_num: this.feedback_num }),
          },
        })
        .then((resp) => {
          this.doctors = resp.data.results.user;
          this.store.specializations = resp.data.results.specializations;
          console.log(this.doctors);
          this.loading = false;
          this.sponsoredUsers = resp.data.results.sponsoredUsers;
        });
    },
  },
};
</script>

<!-- template section -->
<template>
  <div class="container mt-2">
    <div class="searchbar mt-3 row align-items-center">
      <div class="col-12 col-lg-6">
        <select class="form-select mb-2" @change="getDoctors()" v-model="docSearch" placeholder="test">
          <option value="">choose a specialization</option>
          <option v-for="spec in store.specializations" :value="spec.slug" :key="spec.id">
            {{ spec.title }}
          </option>
        </select>
      </div>

      <div class="col-12 col-lg-3 text-center">
        <label for="voto">Average vote</label>

        <select class="ms-1" name="voto" id="voto" v-model="this.voto" @change="getDoctors()">
          <option value="">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div class="col-12 col-lg-3">
        <label for="number_of_feedback">Number of Feedback</label>
        <select class="ms-1" name="number_of_feedback" id="number_of_feedback" v-model="this.feedback_num"
          @change="getDoctors()">
          <option value="">0</option>
          <option value="5">>5</option>
          <option value="10">>10</option>
          <option value="15">>15</option>
          <option value="20">>20</option>
          <option value="25">>25</option>
        </select>
      </div>
    </div>

    <h2 class="text-center my-5 our-doctors pb-5">Doctors</h2>

    <div class="row justify-content-center g-5 pb-5 bg-light">
      <div v-if="loading">
        <h2 class="text-center">Loading...</h2>
      </div>

      <div v-else class="col-12 col-md-6 col-lg-4 col-card" v-for="doctor in this.doctors" :key="doctor.id">
        <AppCard :doctor="doctor" :sponsoredUsers="this.sponsoredUsers" />
      </div>
      <div class="mt-5" v-if="!loading && doctors.length <= 0">
        <h2 class="text-center">No Doctors matched :(</h2>
      </div>
    </div>


  </div>
</template>

<!-- style section -->
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

.container {
  min-height: calc(100vh - 56px);
}
</style>
