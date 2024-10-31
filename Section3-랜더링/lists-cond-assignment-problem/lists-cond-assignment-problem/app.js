const app = Vue.createApp({
  data(){
    return{
      enteredTaskValue:'',
      goals:[],
      listShow:true,
    }
  },
  methods:{
    addTask(){
      this.goals.push(this.enteredTaskValue)
    },
    toggleTask(){
      this.listShow = !this.listShow
    },
    deleteTask(idx){
      this.goals.splice(idx,1)
    }
  }
});

app.mount('#assignment');