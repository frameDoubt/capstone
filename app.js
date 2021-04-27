const app = Vue.createApp({
  data() {
    return {
      userPrompt: "Please enter names below.",
      userText: '',
      userList: [],
      myGitHubRepo: "https://github.com/frameDoubt/table-maker"
    };
  },
  methods: {
      userInput() {
        // this.userList.push(this.userText);
        const cellValue = {
          
        }
        return this.userText = '';
      }
  }
});
app.mount("#app");