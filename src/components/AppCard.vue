<script>

export default {
    name: "AppCard",
    props: {
        doctor: Object,
        sponsoredUsers: Object,
    },
    data() {
        return {
            baseUrl: 'http://127.0.0.1:8000',
        }
    },
    computed: {
        getStar() {

            return Math.floor(this.doctor.feedback_avg_vote)
        }
    }

}

</script>



<template>
    <div class="card">

        <div v-for="doctors in sponsoredUsers">
            <div v-if="doctor.name === doctors.name" class="sponsored">
                Sponsored!
            </div>
        </div>

        <div v-if="doctor.user_detail.photo" class="card_img">
            <img :src="`${baseUrl}/storage/${doctor.user_detail.photo}`" alt="">
        </div>
        <div v-else class="card_img">
            <img src="../assets/imgs/4025200.png" alt="">
        </div>
        <div class="card-body text-start">
            <div class="name-email d-flex justify-content-between flex-column flex-sm-row flex-md-column">
                <h4 class=" mb-4 mt-2">Dr. {{ doctor.name }} {{ doctor.surname }}
                </h4>
                <span class="doctor-email mb-2"> <i class="fa-solid fa-envelope"></i> {{
                    doctor.email
                }}</span>
            </div>
            <p class=""> <i class="fa-solid fa-phone"></i> {{ doctor.user_detail.phone }}</p>
            <p>
                <span class="me-1 d-block d-md-inline-block" v-for="spec in doctor.specializations">
                    <i class="fa-solid fa-hashtag"></i>{{ spec.title }}</span>
            </p>

            <p>{{ doctor.user_detail.performance }}</p>
            <div class="d-flex justify-content-between">

                <p class="">
                    <i v-for="n in 5" :class="n <= getStar ? 'fa-solid' : 'fa-regular'" class="fa-star"></i>
                </p>
                <p class="text-end">
                    <router-link :to="{ path: `doctorslist/${doctor.slug}` }" class="btn btn-primary">Details</router-link>
                </p>
            </div>


        </div>
    </div>
</template>


<style lang="scss" scoped>
.col-card {
    height: 100%
}

.card {
    height: 100%;
    overflow: hidden;
    border-radius: 20px;
    transition: 0.2s;

    .card_img {
        width: 100%;
        height: 17rem;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
        }
    }

    .card-body {
        .card-body-title {
            text-decoration: underline;
        }
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: 10px 5px 5px lightgray;
    }
}

.our-doctors {

    color: #20254c;

    &::before {
        content: "";
        display: inline-block;
        width: 10%;
        height: 3px;
        background-color: #20254c9e;
        margin-right: 10px;
        vertical-align: middle;
    }

    &::after {
        content: "";
        display: inline-block;
        width: 10%;
        height: 3px;
        background-color: #20254c9e;
        margin-left: 10px;
        vertical-align: middle;
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