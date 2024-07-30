const app = Vue.createApp({
  data(){
    return {
      counter:10,
      name:'',
      confirmedName:''
    }
  },
  methods:{
    confirmInput(){
      this.confirmedName = this.name;
    },
    submitForm(e){
      // e.preventDefault()
      alert('Test')
    },
    setName(event,lastName){
      this.name = event.target.value + ' ' + lastName;
    },
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