import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';
import AppAboutUs from './pages/AppAboutUs.vue';
import AppServices from './pages/AppServices.vue';
import AppContact from './pages/AppContact.vue';
import AppNotFound from './pages/AppNotFound.vue';
import AppDoctorsList from './pages/AppDoctorsList.vue';
import AppDoctorDetails from './pages/AppDoctorDetails.vue'

const router = createRouter({

    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
            meta: {
                title: 'BDoctors - Home'
            }
        },

        {
            path: "/about-us",
            name: "about-us",
            component: AppAboutUs,
            meta: {
                title: 'BDoctors - About Us',
            }
        },

        {
            path: "/services",
            name: "services",
            component: AppServices,
            meta: {
                title: 'BDoctors - Our Servicer',
            }
        },

        {
            path: "/contact",
            name: "contact",
            component: AppContact,
            meta: {
                title: 'BDoctors - Our Contacts',
            }
        },
        {
            path: "/doctorslist",
            name: "doctorslist",
            component: AppDoctorsList,
            meta: {
                title: 'BDoctors - Doctors',
            }
        },
        {
            path: "/doctorslist/:slug",
            name: "doctorsdetails",
            props: true,
            component: AppDoctorDetails,
            meta: {
                title: 'BDoctors - DoctorDetails',
            }
        },

        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: AppNotFound,
            meta: {
                title: 'Error 404!',
            }
        },
    ]
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    next();
});

export { router }; 