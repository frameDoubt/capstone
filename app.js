const app = Vue.createApp({
  data() {
    return {
      placeholderText: 'Enter name in this field',
      userPrompt: "Please input names below. Press enter to submit name.",
      userText: '',
      userList: [],
      myGitHubRepo: "https://github.com/frameDoubt/table-maker",
      listComplete: false
    };
  },
  computed: {
  },
  methods: {
      userInput() {
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
        if(filteredUserList.length > 0) {
          this.userList[filteredUserList[selection].id - 1].status = true;
        };
        if(filteredUserList.length === 2 && this.userList.length > 1) {
          this.listComplete = true;
        }
      },
      resetList() {
        this.userList.forEach(element => {
          element.status = false;
        });
        this.listComplete = false;
      }
  }
});
app.mount("#app");

if ('serviceWorker' in navigator) {
  navigator
    .serviceWorker
    .register(
      // path to the service worker file
      'sw.js'
    )
    // the registration is async and it returns a promise
    .then(function (reg) {
      console.log('Registration Successful');
    });
}