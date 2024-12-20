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
<!-- active-user 컴포넌트:

:username="user.name": 부모 컴포넌트의 user.name 값을 username이라는 이름으로 자식 컴포넌트에 전달합니다.
:userage="user.age": 부모 컴포넌트의 user.age 값을 userage라는 이름으로 자식 컴포넌트에 전달합니다.
이 컴포넌트는 사용자 정보를 화면에 표시합니다.
user-data 컴포넌트:

@set-data="setUserData":
set-data라는 이벤트가 발생하면 setUserData 메서드를 실행합니다.
이 이벤트는 user-data 컴포넌트에서 emit을 통해 발생시킵니다.
setUserData 메서드는 전달받은 값을 사용해 user 데이터를 업데이트합니다. -->