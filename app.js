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
        let cellValue = {};
          cellValue.name = this.userText;
          cellValue.id = this.userList + 1;
          cellValue.drawn = false;
          this.userList.push(cellValue);
        console.log("the array of objects: " + cellValue);
        return this.userText = '';
      }
  }
});
app.mount("#app");