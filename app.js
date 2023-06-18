const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
     // this.message = this.currentUserInput;
     //this.message = data.message;
     this.message = this.$refs.userText.value;
     console.log(this.$refs.userText.value)
    },
  },
  beforeCreate() {
    console.log('beforeCreate()')
  },
  created() {
    console.log("created")
  },
  beforeMount() {
    console.log("beforeMounted")
  },
  mounted() {
    console.log("mounted")
  },
  beforeUpdate() {
    console.log("beforeUpdate")
  },
  updated() {
    console.log("updated")
  },
  beforeUnmount() {
    console.log("beforeUnmounted")
  },
  unmounted() {
    console.log("Unmounted")
  },
});

app.mount('#app');

const app2 = Vue.createApp({
  template: `<p>{{ favoriteMeal }}</p>`,
  data(){
    return{
      favoriteMeal: "Pizza"
    }
  },
  methods:{}
});
app2.mount("#app2")

let message = "Hello";

let longMessage = message + "World"
console.log(longMessage)
const data = {
  message: "hello, Adios, Good bye",
  longMessage: "hello, World!"
}

const handler = {
  set(target, key, value){
    if(key === "message" ){
      target.longMessage = value + "world"
    }
    target.message = value;
  }
}

const proxy = new Proxy(data,handler);
proxy.message = "Hello!!!!!!"
