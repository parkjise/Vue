<template>
	<section>
		<header>
			<h2>My Friends</h2>
		</header>
		<new-friend @add-contact="addContact"></new-friend>
		<ul>
			<friend-contact
				v-for="friend in friends"
				:key="friend.id"
				:id="friend.id"
				:name="friend.name"
				:phone-number="friend.phone"
				:email-address="friend.email"
				:is-favorite="friend.isFavorite"
				@toggle-Favorite="toggleFavoriteStatus"
				@delete="deleteContact"
			></friend-contact>
		</ul>
	</section>

	<main></main>
</template>
<script>
export default {
	data() {
		return {
			friends: [
				{
					id: "manuel",
					name: "manuel Lorenz",
					phone: "0123 45678 90",
					email: "manuel@gmail.com",
					isFavorite: true,
				},
				{
					id: "julie",
					name: "julie Lorenz",
					phone: "0123 45678 90",
					email: "julie@gmail.com",
					isFavorite: false,
				},
				{
					id: "JS",
					name: "JiSe Park",
					phone: "0123 45678 90",
					email: "JS@gmail.com",
					isFavorite: true,
				},
			],
		};
	},
	methods: {
		toggleFavoriteStatus(friendId) {
			const identifiedFriend = this.friends.find(
				(friend) => friend.id === friendId
			);
			identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
		},
		addContact(name, phone, email) {
			const newFriendContact = {
				id: new Date().toISOString(),
				name: name,
				phone: phone,
				email: email,
				isFavorite: false,
			};
			this.friends.push(newFriendContact);
		},
		deleteContact(friendId) {
			this.friends = this.friends.filter((friend) => friend.id !== friendId);
		},
	},
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
* {
	box-sizing: border-box;
}

html {
	font-family: "Jost", sans-serif;
}

body {
	margin: 0;
}

header {
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	margin: 3rem auto;
	border-radius: 10px;
	padding: 1rem;
	background-color: #58004d;
	color: white;
	text-align: center;
	width: 90%;
	max-width: 40rem;
}

header h2 {
	color: #fff;
}

#app ul {
	margin: 0;
	padding: 0;
	list-style: none;
}

#app form,
#app li {
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	margin: 1rem auto;
	border-radius: 10px;
	padding: 1rem;
	text-align: center;
	width: 90%;
	max-width: 40rem;
}

#app h2 {
	font-size: 2rem;
	border-bottom: 4px solid #ccc;
	margin: 0 0 1rem 0;
}

#app button {
	font: inherit;
	cursor: pointer;
	border: 1px solid #ff0077;
	background-color: #ff0077;
	color: white;
	padding: 0.05rem 1rem;
	box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
	background-color: #ec3169;
	border-color: #ec3169;
	box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
