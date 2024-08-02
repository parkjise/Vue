const app = Vue.createApp({
  data(){
    return {
      counter:0,
      name:'',
      confirmedName:'',
      lastName:'',
      // fullname:''
    }
  },
  watch:{
    counter(value){
      if(value > 50){
        const that = this;
        setTimeout(function(){
          that.counter = 0;
        },2000)
      }
    }
    // name(value){
    //   if(value === ''){
    //     this.fullname = ''
    //   }else {
    //     this.fullname = value + ' ' + 'Park';
    //   }
    // },
    // lastName(value){
    //   if(value === ''){
    //     this.fullname = ''
    //   }else {
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // }
  },
  computed:{
    fullname(){
      if(this.name === '' || this.lastName === ''){
        return '';
      }
      return this.name + ' ' + this.lastName;
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