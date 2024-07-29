const app = Vue.createApp({
  data(){
    return {
      yourName:"Park Ji Se",
      yourAge:43,
      googleLink:"https//google.com"
    }
  },
  methods : {
    caculateAge(){
      return this.yourAge + 5;
    },
    calculateRandom(){
      return Math.random();
    }
  }
})

app.mount('#assignment')