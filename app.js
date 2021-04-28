const app = Vue.createApp({
  data() {
    return {
      placeholderText: 'Enter name in this field',
      userPrompt: "Please enter names below.",
      userText: '',
      userList: [],
      myGitHubRepo: "https://github.com/frameDoubt/table-maker"
    };
  },
  methods: {
      userInput() {
        // this.userList.push(this.userText);
        if(this.userText.length > 0) {
          let cellValue = {};
          cellValue.name = this.userText;
          cellValue.id = this.userList.length + 1;
          cellValue.drawn = false;
          this.userList.push(cellValue);
          return this.userText = '';
        }
      },
      randomSelection() {
        const mpdUserList = this.userList.map((item) => {
          if(!item.drawn) {
            return item.id;
          }
        });
        console.log(this.userList[0].drawn);
        this.userList[mpdUserList[0] - 1].drawn = true;
        console.log(this.userList[0].drawn, this.userList[1].drawn);
      }
  }
});
app.mount("#app");