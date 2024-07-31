const app = Vue.createApp({
  data(){
    return {
      counter:10,
      name:'',
      confirmedName:''
    }
  },
  computed:{
    fullName(){
      if(this.name === ''){
        return ''
      }
      return this.name + ' ' + 'park'
    }
  },
  methods:{
    outputFullName(){
      if(this.name === ''){
        return ''
      }
      return this.name + ' ' + 'park'
    },
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
    setName02(event){
      this.name = event.target.value;
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
    },
    resetInput(){
      this.name = ''
    }
  }
})

app.mount('#events')