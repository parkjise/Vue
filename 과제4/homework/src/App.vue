<template>
	<div>
		<active-user :username="user.name" :userage="user.age"></active-user>
		<user-data @set-data="setUserData"></user-data>
	</div>
</template>
<script>
export default {
	data() {
		return {
			user: {
				name: "Park Ji Se",
				age: 44,
			},
		};
	},
	methods: {
		setUserData(name, age) {
			this.user = {
				name: name,
				age: +age,
			};
		},
	},
};
</script>
<style scoped></style>
