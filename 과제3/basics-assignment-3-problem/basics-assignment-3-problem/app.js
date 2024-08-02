const app = Vue.createApp({
  data(){
    return {
      counter:0,
    }
  },

  computed : {
    result(){
      if(this.counter < 37){
        return 'Not there yet'
      }else if(this.counter === 37){
        return this.counter;
      }else {
        return 'Too Much !'
      }
    }
  },
  watch : {
    result(){
      const that = this;
      setTimeout(function(){
        that.counter = 0;
      },5000)
    }
  },
  // watch: {
  //   counter(){
  //     if(this.counter === 37){
  //       alert('Not there yet')
  //     }else if(this.counter > 37){
  //       alert('Too much!" if the result')
  //     }

  //     setTimeout(function(){
  //       this.counter = 0
  //     },5000)
  //   }
  // },
  methods:{
    add(num){
      this.counter = this.counter + num
    }, 
  }
})

app.mount('#assignment')