<template>
	<section>
		<h2>{{ username }}</h2>
		<h3>{{userage}} Years</h3>
	</section>
</template>
<script>
export default {
	props: {
		username: {
			type: String,
			required: true,
		},
		userage: {
			type: Number,
			required: true,
		},
	},
};
</script>
<style scoped>
section {
	margin: 2rem auto;
	max-width: 40rem;
	border-radius: 12px;
	border: 1px solid #ccc;
}
</style>

<!-- 
<h2>{{ username }}</h2>:

부모 컴포넌트에서 전달된 username 값을 화면에 표시합니다.
예: username이 "John"이라면 화면에 "John"이 출력됩니다.
<h3>{{ userage }} Years</h3>:

부모 컴포넌트에서 전달된 userage 값을 화면에 표시합니다.
userage 뒤에 "Years"를 붙여서 나이를 출력합니다.
예: userage가 30이면 화면에 "30 Years"가 출력됩니다. 



-->