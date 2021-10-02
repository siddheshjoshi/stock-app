<template>
    <div class="container">
        <div class="row pt-3">
            <div class="col-4 text-start">
                <router-link to="/"
                 style="color: #4444e1;
                        font-weight: bold;
                        font-size: 16px; cursor: pointer; text-decoration: none;"
                class="ps-2" >Back ></router-link>
            </div>
            <div class="col-8 text-start">
                Details for DocNo: <strong>{{ tableItem.docNo }}</strong>
            </div>
        </div>
        <div class="row mt-3 py-4 details-container">
            <div class="col-12 text-start">
                Last updated date: {{ tableItem.date }} <br />
                Current stock: {{ tableItem.availableStock }}
            </div>
        </div>
        <div class="row pt-3 m-4">
            <ul class="col-12 text-start mx-2">
                <li class="py-2"> Stock quantity 15 added by User1 on 2021-05-02 10:22 pm IST </li>
                <li class="py-2"> Stock quantity 11 sold by User33 on 2021-05-02 10:22 pm IST </li>
                <li class="py-2"> Stock quantity 18 sold by User5 on 2021-05-02 10:22 pm IST </li>
                <li class="py-2"> Stock quantity 15 added by User6 on 2021-05-02 10:22 pm IST </li>
                <li class="py-2"> Stock quantity 400 added by User42 on 2021-05-02 10:22 pm IST </li>
            </ul>
        </div>

        <div class="row">
            <div class="col-12 text-start m-4">
                <button class="btn btn-outline-secondary btn-small">Print</button>
            </div>
        </div>

    </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
    created() {
        this.tableItem = this.tableData.find((item) => item.docNo === this.$route.params.item);
    },
    data() {
        return {
            tableItem: []
        }
    },
    computed: {
        ...mapGetters(["tableData"])
    }
}
</script>

<style scoped>
.details-container {
    background-color: #e5e5e5;
    border: 1px solid a5a1a1;
    margin-left: 10px;
}

</style>