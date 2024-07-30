const app = Vue.createApp({
  data(){
    return {
      // message:'alert'
      user:'',
      confirmedInput :''
    }
  },
  methods : {

    alertMsg(e){
      alert('test1111')
    },
    inputUser(e){
      this.user = e.target.value;;
    },
    confirmInput(){
      this.confirmedInput =  this.user;
    }
  }
})
app.mount('#assignment')