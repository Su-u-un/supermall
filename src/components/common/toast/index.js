import Toast from "./Toast";

const obj = {}

//将对象安装到Vue上
obj.install = function (Vue){
  //1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  const toast = new toastConstructor();

  toast.$mount(document.createElement('div'))

  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast;
}

export default obj;