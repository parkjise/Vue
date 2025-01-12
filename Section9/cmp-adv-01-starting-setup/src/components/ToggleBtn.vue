<template>
	<div v-for="(item, index) in items" :key="index">
		<h2 :class="item.isActive ? 'active' : ''">Hi{{ index + 1 }}</h2>
		<button @click="toggleActive(index)">Toggle Button{{ index + 1 }}</button>
	</div>
</template>
<script>
import { ref } from "vue";
export default {
	setup() {
		// 상태를 개별적으로 관리하는 배열 생성
		const items = ref([
			{ isActive: false },
			{ isActive: false },
			{ isActive: false },
		]);
		// 특정 아이템의 isActive 상태를 토글
		const toggleActive = (index) => {
			items.value[index].isActive = !items.value[index].isActive;
		};

		return {
			items,
			toggleActive,
		};
	},
};
</script>
<style scoped>
div {
	width: 500px;
	display: flex;
	justify-content: space-between;
}
h2.active {
	background: #000;
	color: #fff;
	flex: 1;
}
</style>
