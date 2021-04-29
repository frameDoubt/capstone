const app = Vue.createApp({
  data() {
    return {
      placeholderText: 'Enter name in this field',
      userPrompt: "Please enter names below.",
      userText: '',
      userList: [
        { name: "Brandon", id: 1, status: true, }
      ],
      myGitHubRepo: "https://github.com/frameDoubt/table-maker"
    };
  },
  methods: {
      userInput() {
        // this.userList.push(this.userText);
        if(this.userText.length > 0) {
          let cellValue = {
            name: this.userText,
            id: this.userList.length + 1,
            status: false
          };
          this.userList.push(cellValue);
          return this.userText = '';
        }
      },
      randomSelection() {
        const mpdUserList = this.userList.filter((item) => {
          return item.status === false;
        })
        console.log(mpdUserList)
        console.log(Math.floor(Math.random() * mpdUserList.length));
      }
  }
});
app.mount("#app");