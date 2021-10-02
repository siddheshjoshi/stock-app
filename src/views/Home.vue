<template>
<div class="container">
  <div class="row">
    <div class="title" style="padding-top: 20px; font-size: 18px; font-weight: bold;">
      Stock app 
    </div>
  </div>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Doc number</th>
        <th scope="col">Available stock</th>
        <th scope="col buttons-container">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <th scope="row">{{ item.date }}</th>
        <th>{{ item.docNo }}</th>
        <th>{{ item.availableStock }}</th>
        <th>
          <div class="row float-right 1212 buttons-container">
            <div class="col-6">
              <button class="btn btn-sm btn-outline-primary">Update</button>
            </div>
            <div class="col-6">
              <button @click="showLog(item)" class="btn btn-sm btn-outline-secondary">Log</button>
            </div>
          </div>
        </th>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex"
export default {
  name: 'Home',
  components: {},
  created() {
    if(!this.tableData || this.tableData.length === 0)
      this.generateRandomData(this.totalRows);
    else
      this.data = this.tableData
  },
  data() {
    return {
      data: [],
      totalRows: 10
    }
  },
  computed: {
    ...mapGetters(["tableData"]),
  },
  methods: {
    ...mapMutations(["setTableData"]),
    showLog(item) {
      console.log('item is: ', item)
      this.$router.push({ name: "LogViewer", params: {item: item.docNo} })
    },
    generateRandomData(totalData) {
      for(let i = 0; i < totalData; i++) {
        this.data.push(
          {
          date: this.randomDate(new Date("10-10-2021 10:30"), new Date("10-10-2015 10:30")),
          docNo: this.makeid(5),
          availableStock: this.randomIntFromInterval(10, 1000)
        })
        this.setTableData(this.data)
      }
    },
    randomDate(start, end) {
      var d = new Date(start.getTime() + Math.random() * (end.getTime() -                     start.getTime())),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [year, month, day].join('-');
    },
    makeid(length) {
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
      }
      return result;
    },
    randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
  }
}
</script>

<style scoped>
.buttons-container {
  max-width: 200px;
}

@media screen and (max-width: 500px) {
  .buttons-container {
    width: 150px;
  }
}
</style>
