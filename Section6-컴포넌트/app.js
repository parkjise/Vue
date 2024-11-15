const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "monories@naver.com",
        },
        {
          id: "manuel2",
          name: "Manuel Lorenz2",
          phone: "01234 5678 9291",
          email: "monorswies@naver.com",
        },
      ],
    };
  },
  methods: {
    toggleDetails(id) {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.component("friend-contact", {
  template: `
    <ul>
        <li>
          <h2>{{friend.id}}</h2>
          <button @click="toggleDetails(friend.id)">
            {{detailsAreVisible ? 'Hide' : 'Show'}} Details
          </button>
          <ul>
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>
      </ul>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "monories@naver.com",
      },
    };
  },
  methods: {
    toggleDetails(id) {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
app.mount("#app");
