<template>
	<section>
		<form @submit.prevent="submitData">
			<input type="text" placeholder="Your Name" v-model="enteredName" />
			<input type="text" placeholder="Your Age" v-model="enteredAge" />
			<button>Set User Data</button>
		</form>
	</section>
</template>
<script>
export default {
	emits: ["set-data"],
	data() {
		return {
			enteredName: "",
			enteredAge: "",
		};
	},
	methods: {
		submitData() {
			this.$emit("set-data", this.enteredName, this.enteredAge);
		},
	},
};
</script>
<style scoped></style>

<!-- 
user-data 컴포넌트에서 set-data 이벤트를 발생시킵니다.
부모 컴포넌트는 @set-data를 통해 이벤트를 감지하고, setUserData 메서드를 실행합니다.
name과 age를 setUserData의 매개변수로 받아 출력하거나 다른 동작을 수행합니다.


사용자가 입력 폼에 이름과 나이를 입력합니다.
버튼을 클릭하면 submitData 메서드가 실행됩니다.
this.$emit("set-data", this.enteredName, this.enteredAge)를 통해 이름과 나이를 부모 컴포넌트로 전달합니다.
부모 컴포넌트는 @set-data를 통해 이벤트를 수신하고 데이터를 처리합니다. -->
