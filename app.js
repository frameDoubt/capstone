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
  computed: {
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
        const filteredUserList = this.userList.filter((item) => {
          return item.status === false;
        });
        const selection = Math.floor(Math.random() * filteredUserList.length);
        console.log(filteredUserList[selection].id - 1);
        this.userList[filteredUserList[selection].id - 1].status = true;
      }
  }
});
app.mount("#app");