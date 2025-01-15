<template>
  <div>
    <h2>11111</h2>
    <ul>
      <learning-resource v-for="res in stroedResources" :key="res.id"
        :title="res.title"
        :description="res.description"
        :link="res.link"
      >

      </learning-resource>
    </ul>
  </div>
</template>

<script>
  import LearningResource from './components/learning-resources/LearningResource.vue'
  export default{
    components:{
      LearningResource
    },
    data(){
      return{
        stroedResources:[
          {
            id:'official-guide',
            title:'Official Guide',
            description:'The official Vue.js',
            link:'https://vuejs.org'
          },
          {
            id:'Google',
            title:'Official Guide',
            description:'The official Vue.js',
            link:'https://google.com'
          },
          {
            id:'Naver',
            title:'Official Guide',
            description:'The official Vue.js',
            link:'https://naver.com'
          },
        ]
      }
    }
  }
</script>