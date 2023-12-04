<!-- script section -->
<script>
export default {
  // name
  name: "AppContact",
};
</script>

<!-- template section -->
<template>
  <div class="container-1">
    <div class="background-page">

      <div class="container">
        <h1 class="text-center mb-5 pt-3">B Doctors Contact us</h1>

        <div class="details row text-center text-sm-start align-items-stretch pt-5 mb-5">
          <div class="title col col-12 col-md-3">
            <h2>Contacts</h2>
          </div>
          <div class="address col col-12 col-md-3">
            <h4 class="text-center"> <i class="fa-solid fa-building"></i> Office info:</h4>
            <p class="text-center">02 123123123</p>
            <p class="text-center">PEC: bdoctors@doctor.com</p>
          </div>
          <div class="program col col-12 col-md-3">
            <h4 class="text-center"> <i class="fa-solid fa-users"></i> Public relations office:</h4>
            <p class="text-center">Uping Street seen from Withsbrurck, 203</p>
          </div>
          <div class="contact-center col col-12 col-md-3">
            <h4 class="text-center"> <i class="fa-solid fa-phone"></i> Contact center:</h4>
            <p class="text-center">02 698279829</p>
          </div>
        </div>
        <hr>
        <div class="details row text-center text-sm-start align-items-stretch pt-5 mb-5">
          <div class="title col col-12 col-md-3">
            <h2>Structure details</h2>
          </div>
          <div class="address col col-12 col-md-3">
            <h4 class="text-center"> <i class="fa-solid fa-location-dot"></i> Address:</h4>
            <p class="text-center">Downing Street seen from Whitehall, 2013</p>
          </div>
          <div class="program col col-12 col-md-3">
            <h4 class="text-center"> <i class="fa-solid fa-calendar-days"></i> Opening times:</h4>
            <p class="text-center">
              Lun-Ven 7:00-17:00 <br />
              Sabato 8:00-12:00 <br />
            </p>
          </div>
          <div class="contact-center col col-12 col-md-3">
            <h4 class="text-center"> <i class="fa-solid fa-circle-info"></i> Information Admissions Solvency:</h4>
            <p class="text-center">
              Telefono 02 2643 2800 <br />
              Lun-Ven 7:00-17:00
            </p>
          </div>
        </div>
        <div class="d-flex justify-content-center img-container pb-5">
          <img src="../assets/imgs/logo-4.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<!-- style section -->
<style lang="scss" scoped>
@use "../styles/general.scss" as *;

.container {
  min-height: calc(100vh - 56px);

}

h1 {
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

// .col {
//   border-left: 1px solid black;
// }

.container-1 {
  background-image: url('../assets/imgs/structure-hospital.jpeg');
  background-size: cover;
  background-position: center;

}

.background-page {
  background-color: #d5eaf2a0;
}

.tables {
  position: absolute;
  top: 50%;
  left: 50%;
}

.img-container {
  padding-top: 3rem;

  img {
    width: 40%;
  }
}
</style>
