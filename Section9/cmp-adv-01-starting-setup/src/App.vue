<template>
	<div>
		<the-header></the-header>
		<!-- <TheHeader/> -->
		<badge-list></badge-list>
		<user-info
			:full-name="activeUser.name"
			:info-text="activeUser.description"
			:role="activeUser.role"
		></user-info>
		<course-goals #default="slotProps">
			<h2>{{ slotProps.item }}</h2>
			<p>{{ slotProps["another-prop"] }}</p>
		</course-goals>
		<button @click="setSelectedComponent('active-goals')">Active Goals</button>
		<button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
		<!-- <active-goals v-if="selsectedComponent === 'active-goals'"></active-goals>
		<manage-goals v-if="selsectedComponent === 'manage-goals'"></manage-goals> -->
		<keep-alive>
			<component :is="selsectedComponent"></component>
		</keep-alive>
	</div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue"
export default {
	components: {
		TheHeader,
		BadgeList,
		UserInfo,
		CourseGoals,
		ManageGoals,
		ActiveGoals
	},
	data() {
		return {
			activeUser: {
				name: "Maximilian Schwarzmüller",
				description: "Site owner and admin",
				role: "admin",
			},
			selsectedComponent:"active-goals"
		};
	},
	methods:{
		setSelectedComponent(cmp){
			this.selsectedComponent = cmp
		}
	}
};
</script>

<style>
html {
	font-family: sans-serif;
}

body {
	margin: 0;
}
</style>
