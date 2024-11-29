<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }}
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone : </strong>{{ phoneNumber }}</li>
      <li><strong>Email : </strong>{{ emailAddress }}</li>
      <li>1</li>
    </ul>
  </li>
</template>
<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function (value) {
      //   return value === "1" || value === "0";
      // },
    },
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // this.firendsIsFavorite = !this.firendsIsFavorite;
      this.$emit("toggle-Favorite", this.id);
    },
  },
};
</script>

<!-- 
일반적으로 다음 공식 문서에서 프로퍼티 유효성 검사에 대한 모든 것을 
배울 수 있습니다. https://v3.vuejs.org/guide/component-props.html

특히 다음 값 타입(type  프로퍼티)이 지원됩니다.

문자열(String)

숫자(Number)

불리언(Boolean)

배열(Array)

객체(Object)

날짜(Date)

함수(Function)

심볼(Symbol)

생성자 함수(Date와 같은 내장된 함수 또는 커스텀 함수)도 타입이 될 수 있습니다.
-->
