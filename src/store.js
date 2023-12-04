import { reactive } from "vue";

export const store = reactive({
    searchKey: "",
    loading: false,
    titleIndex: false,
    specializations: [],
})