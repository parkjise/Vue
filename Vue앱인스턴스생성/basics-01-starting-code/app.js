const app = Vue.createApp({
  data(){
    return{
      courseGoalA:"Finish the course and learn Vue !",
      courseGoalB:"Mster the course and Make Vue !",
      naverLink:"https:naver.com"
    }
  },
  methods:{
    outputGoal(){
      const randomNumber = Math.random();
      if(randomNumber < 0.5){
        return this.courseGoalA
      }else {
        return this.courseGoalB
      }
    }
  }
});


app.mount('#user-goal')