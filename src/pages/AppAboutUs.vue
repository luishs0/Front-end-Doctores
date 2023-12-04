<!-- script section -->
<script>
export default {
  // name
  name: "AppAboutUs",
};
</script>

<!-- template section -->
<template>
  <div class="color-header">
    <img class="jumbo-about" src="../assets/imgs/jumbo-about1.jpg" alt="" />
    <div class="about-title container d-none d-md-block">
      <h2 class="text-start bold mb-5">Our Story</h2>
      <p>
        The <bold class="bold">BD Doctors</bold> Hospital is a research hospital
        and university general hospital founded in 1971 to provide specialized
        care for the most complex health conditions, already recognized in 1972
        as an Institute of Hospitalization and Care of a Scientific Character
        (IRCCS) for diabetes. Basic research began in 1991, with the
        inauguration of the biotechnology department (DiBiT), while in 1996 the
        Vita-Salute San Raffaele University was born. As a consequence of the
        expansion of the research area, which today has over 150 laboratories,
        the IRCCS qualification was extended in 2001 to the entire field of
        molecular medicine. In 2012 the BD Doctors became part of the San Donato
        Group (GSD), the largest private hospital group in Italy.
      </p>
    </div>
    <div class="about-title container d-md-none text-center title-mobile">
      Leaders in world medicine proven.
    </div>
  </div>

  <div class="container color-title pt-5 pb-5">
    <h2 class="mb-5 bold">Our Numbers</h2>
    <hr />
    <section class="row">
      <div class="section-img col-12 col-md-6 mb-3">
        <img src="../assets/imgs/world.webp" alt="" />
      </div>

      <div class="col-12 col-md-6 d-flex align-items-center">
        <h4 class="text-center">
          More than <bold class="bold">275,000,000</bold> visits and
          <bold class="bold">2,300,000</bold> appointments every year with our
          specialists.
        </h4>
      </div>
    </section>
    <hr />
  </div>

  <div class="container">
    <h2 class="mb-5 bold">Our Strengths</h2>
    <div class="row g-4 mb-5">
      <div class="col-12 col-md-4">
        <div class="card">
          <img src="../assets/imgs/img-cure.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h3 class="mb-4 mt-5 text-center color-title">
              State-of-the-Art Care
            </h3>
            <p class="card-text text-center">
              The medical-scientific excellence of the BD Doctors Hospital
              arises from the triple identity of the institute, a place where
              research, clinical practice and university education interact on a
              daily basis.
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="card">
          <img src="../assets/imgs/img-alta-tecnologia.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h3 class="mb-4 mt-5 text-center color-title">High Technology</h3>
            <p class="card-text text-center">
              From surgical robots to imaging and radiation therapy tools
              precision: cutting-edge technologies at the BD Doctors Hospital
              allow ever earlier diagnoses and more personalized treatments.
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="card">
          <img src="../assets/imgs/img-appproccio.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h3 class="mb-4 mt-5 text-center color-title">Multi Approach</h3>
            <p class="card-text text-center pb-">
              At the BD Doctors Hospital, diseases are tackled at 360°, thanks
              to the presence of various specialists who combine their skills at
              the service of all our patient in the whole world.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- style section -->
<style lang="scss" scoped>
@use "../styles/general.scss" as *;

.jumbo-about {
  width: 100%;
  opacity: 0.4;


  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 56px);
  }

  max-height: 50rem;

  img {
    width: 100%;
    object-fit: cover;
  }

  object-fit: cover;
  object-position: top;
}

.color-header {
  background-color: #d5eaf2;
  color: #20254c;
  position: relative;
  object-fit: cover;
}

.about-title {
  font-size: 1.2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.bold {
  font-weight: 700;
  color: #20254c;
}

.section-img {
  text-align: center;

  img {
    width: 70%;
  }
}

.container {
  hr {
    border: 2px solid #80c8f5;
  }
}

.title-mobile {
  font-size: 1.6rem;
}

.color-title {
  color: #20254c;
  font-weight: 600;
}

.card {

  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 10px 5px 5px lightgray;
  }

  .card-img-top {
    height: 10rem;
    object-fit: cover;
  }
}
</style>
