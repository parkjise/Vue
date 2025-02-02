<template>
  <base-card>
    <!-- 탭 전환 버튼 -->
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <!-- 현재 선택된 탭 렌더링 -->
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources', // 기본 탭
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js',
          link: 'https://vuejs.org',
        },
        {
          id: 'Google',
          title: 'Official Guide02',
          description: 'The official ssss.js',
          link: 'https://google.com',
        },
        {
          id: 'Naver',
          title: 'Official Guide03',
          description: 'The official Vuddddde.js',
          link: 'https://naver.com',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources, // 리소스 배열 제공
      addResource: this.addResource, // 리소스 추가 메서드 제공
      deleteResource: this.removeResource,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab; // 현재 탭 업데이트
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(), // 고유 ID 생성
        title: title,
        description: description,
        link: url,
      };
      this.storedResources.unshift(newResource); // 새로운 리소스를 배열 맨 앞에 추가
      this.selectedTab = 'stored-resources'; // 탭을 'stored-resources'로 변경
    },
    removeResource(resId) {
      const resIndex = this.storedResources.findIndex(
        (res) => res.id === resId
      );
      this.storedResources.splice(resIndex, 1);
    },

    //     this.storedResources:

    // 리소스를 저장한 배열입니다. 배열 내부의 요소는 리소스 객체들로 구성되어 있습니다.
    // 예:
    // javascript
    // 복사
    // 편집
    // this.storedResources = [
    //   { id: '1', name: 'Resource 1' },
    //   { id: '2', name: 'Resource 2' },
    //   { id: '3', name: 'Resource 3' }
    // ];
    // findIndex:

    // 배열의 요소 중 조건에 맞는 첫 번째 요소의 인덱스를 반환합니다.
    // 조건: res.id === resId (리소스의 id가 삭제하려는 resId와 같은지 확인).
    // 예: 만약 resId가 '2'라면, resIndex는 1이 됩니다.
    //     splice(resIndex, 1):
    // **resIndex**에서 1개의 요소를 배열에서 제거합니다.
    // 만약 resIndex가 1이라면, 배열에서 두 번째 요소가 삭제됩니다.

    //     **resId**를 전달받음 (예: '2').
    // this.storedResources 배열에서 resId와 일치하는 리소스의 인덱스(resIndex)를 찾음.
    // 배열에서 해당 인덱스의 리소스를 삭제.
  },
};
</script>

<!-- 

<keep-alive>:
컴포넌트를 캐싱하여 탭 전환 시 상태를 유지.

storedResources:
현재 저장된 리소스 데이터를 관리하는 배열.
provide:
자식 컴포넌트에서 사용할 데이터를 제공.
computed:
현재 선택된 탭에 따라 버튼의 mode 값을 설정(null 또는 flat).
setSelectedTab 메서드:
탭 전환 기능을 담당.
addResource 메서드:
자식 컴포넌트에서 입력받은 데이터를 추가하고, stored-resources 탭으로 이동. 

-->
