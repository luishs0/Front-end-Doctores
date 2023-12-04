<!-- script section -->
<script>
import { store } from "../store";
import axios from "axios";
export default {
  name: "AppDoctorDetails",
  data() {
    return {
      baseUrl: "http://127.0.0.1:8000",
      doctor: [],
      name: "",
      email: "",
      text: "",
      vote: null,
      review: "",
      reviewer: "",
      loading: true,
      msgSuccess: false,
      msgLoading: false,
      fbSuccess: false,
      fbLoading: false,
      errors: {},
    };
  },
  created() {
    this.getDoctors();
  },
  methods: {
    getDoctors() {
      this.loading = true;
      axios
        .get(`${this.baseUrl}/api/profiles/${this.$route.params.slug}`)
        .then((resp) => {
          this.doctor = resp.data.user;

          console.log(this.doctor);
          this.loading = false;
        });
    },

    sendMessage() {
      this.msgLoading = true;
      const data = {
        name: this.name,
        email: this.email,
        text: this.text,
        user_id: this.doctor.id,
      };

      axios.post(`${this.baseUrl}/api/messages`, data).then((resp) => {
        this.msgSuccess = resp.data.success;
        console.log(resp.data);

        if (this.msgSuccess) {
          this.name = "";
          this.email = "";
          this.text = "";
        } else {
          this.errors = resp.data.errors;
        }
      });
      this.msgLoading = false;
    },

    sendFeedback() {
      this.fbLoading = true;
      const data = {
        vote: this.vote,
        reviewer_name: this.reviewer,
        review: this.review,
        user_id: this.doctor.id,
      };

      axios.post(`${this.baseUrl}/api/feedback`, data).then((resp) => {
        this.fbSuccess = resp.data.success;

        if (this.fbSuccess) {
          this.vote = "";
          this.reviewer = "";
          this.review = "";
        } else {
          console.log(resp.data);
          this.errors = resp.data.errors;
        }
        this.fbLoading = false;
      });
    },
  },
};
</script>

<!-- template section -->
<template>
  <div v-if="loading === false" class="container">


    <div class="profile d-flex justify-content-center pt-5 pb-3">
      <div
        class="profile-container d-flex flex-column flex-md-row align-items-center justify-content-around col-11 col-md-9">
        <div class="img-container">
          <img class="profile-img" v-if="doctor.user_detail.photo" :src="`${baseUrl}/storage/${doctor.user_detail.photo}`"
            alt="" />
          <img v-else class="" src="../assets/imgs/4025200.png" alt="" />
        </div>
        <div class="info-container mt-3">
          <div class="text-center text-md-start">
            <div class="">
              <h5 class="">{{ doctor.name }} {{ doctor.surname }}</h5>
              <span class="doctor-email mb-2">
                <i class="fa-solid fa-envelope"></i> {{ doctor.email }}</span>
            </div>
            <p class="">
              <i class="fa-solid fa-phone"></i> {{ doctor.user_detail.phone }}
            </p>

            <p>{{ doctor.user_detail.performance }}</p>

            <p>
              <i class="fa-solid fa-house"></i> {{ doctor.user_detail.address }}
            </p>

            <p>
                  <i v-for="n in 5" :class="n <= Math.floor(doctor.feedback_avg_vote) ? 'fa-solid' : 'fa-regular'"
                    class="fa-star"></i>
                </p>

            <a v-if="doctor.user_detail.curriculum"
              :href="`http://127.0.0.1:8000/storage/${doctor.user_detail.curriculum}`">See Curriculum</a>
          </div>
        </div>
      </div>
    </div>

    <div class="spec-container row justify-content-center mb-3">
      <div class="spec col-11 col-md-9 d-flex flex-lg-row flex-column justify-content-center pt-2 pb-2">
        <span class="me-3" v-for="spec in doctor.specializations" :key="spec.id">
          <i class="fa-solid fa-hashtag"></i>{{ spec.title }}</span>
      </div>
    </div>

    <div class="description-container row justify-content-center">
      <div class="col-11 col-md-9 doctor-description">
        <div class="col-9 mx-auto">
          {{ doctor.user_detail.description }}
        </div>
      </div>
    </div>

    <div class="row g-3 justify-content-center mt-3 mb-5 ">
      <div class="col-12 col-lg-7">
        <div class="border mb-5 p-4 bg-doc">
          <h2>Message</h2>
          <div class="alert alert-success text-center" v-if="msgSuccess">
            Your message was sussessfully sended!
          </div>
          <div class="text-center" v-if="msgLoading">Invio ...</div>
          <form @submit.prevent="sendMessage()">
            <div>
              <label class="form-label" for="name">Name:</label>
              <input class="form-control mb-3" required id="name" name="name" v-model="name" type="text"
                placeholder="Enter your name" />
            </div>

            <div>
              <label class="form-label" for="email">Email:</label>
              <input class="form-control mb-3" required id="email" name="email" v-model="email" type="email"
                placeholder="Enter your email" />
            </div>

            <div>
              <label class="form-label" for="text">Message:</label>
              <textarea required class="form-control mb-3" name="text" id="text" cols="30" v-model="text"
                placeholder="Write your message"></textarea>
            </div>

            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-primary mt-3">Send</button>
            </div>
          </form>
        </div>
      </div>

      <div class="col-12 col-lg-7 bg-doc">
        <div class="border rounded p-4">
          <h2>Feedback</h2>
          <div class="alert alert-success text-center" v-if="fbSuccess">
            thanks for your feedback!
          </div>
          <div class="text-center" v-if="fbLoading">Invio ...</div>
          <form @submit.prevent="sendFeedback()">
            <div>
              <label class="form-label" for="reviewer_name">Name:</label>
              <input class="form-control mb-3" required id="reviewer_name" name="reviewer_name" v-model="reviewer"
                type="text" placeholder="Enter your name" />
            </div>

            <div>
              <label for="vote">Vote:</label>
              <select required class="form-select mb-3" v-model="vote" name="vote" id="vote">
                <option value="0">Very bad</option>
                <option value="1">Bad</option>
                <option value="2">Not bad</option>
                <option value="3">Good</option>
                <option value="4">Very good</option>
                <option value="5">Perfect</option>
              </select>
            </div>

            <div>
              <label for="review">Review:</label>
              <textarea required class="form-control mt-3 mb-3" v-model="review" name="review" id="review" cols="30"
                placeholder="Enter your review"></textarea>
            </div>

            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-primary mt-3">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- style section -->
<style lang="scss" scoped>
.bg-doc {
  background-color: #d5eaf2;
  border-radius: 15px;
}

.img-container {
  width: 15rem;
  height: 15rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 15px;
  }
}

.profile-container {
  background-color: #d5eaf2;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 15px;
}

.profile-img {
  height: 1rem;
}

.doctor-description {
  background-color: #d5eaf2;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 15px;
  margin-bottom: 1rem;

}

.description-container {
  width: 100%;
}

.row {
  margin-left: 0;
}

.spec-container {

  width: 100%;

  .spec {
    background-color: #d5eaf2;
    border-radius: 10px;
    text-align: center;
    font-size: 1.1rem;
  }
}
</style>
