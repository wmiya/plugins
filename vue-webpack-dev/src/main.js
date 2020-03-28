import Vue from 'vue'
import App from './App.vue'
let name = 'miya'
console.log(name)
new Vue({
    render: (h) => h(App)
}).$mount('#app')