const app = Vue.createApp({
  data(){
    return {
      counter:0,
    }
  },
  methods:{
    add(){
      this.counter = this.counter + 1
    },
    reduce(){
      this.counter = this.counter -1
    },
    addn(num){
      this.counter = this.counter + num
    },
    reducen(num){
      this.counter = this.counter - num
    }
  }
})

app.mount('#events')