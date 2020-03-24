import TostComponent from './vue-toast.vue'
let Toast = {}
Toast.install = function (Vue, options) {
    var opt = {
        duration: 3000,
    }
    Vue.prototype.$toast = function (message, options) {
        if (typeof options == 'object') {
            opt = {
                ...options
            }
        }
        const ToastController = Vue.extend(TostComponent)
        let instance = new ToastController().$mount(document.createElement('div'))
        document.body.appendChild(instance.$el)
        instance.message = message
        instance.visible = true
        var timer;
        clearTimeout(timer)
        timer = setTimeout(() => {
            instance.visible = false
            setTimeout(() => {
                document.body.removeChild(instance.$el)
            }, 300)
        }, opt.duration)
    }
    Vue.prototype.$toast['show'] = function (message, options) {
        Vue.prototype.$toast(message, options)
    }
}
if (window.Vue) {
    Vue.use(Toast)
}
export default Toast