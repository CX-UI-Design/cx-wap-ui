export default {
  directiveTest: {
    bind: (el, binding, vnode, oldVnode) => {
      console.log('bind')
      console.log(el);
      console.log(binding);
      console.log(vnode);
      console.log(oldVnode);
    },
    inserted: (el, binding, vnode, oldVnode) => {
      console.log('inserted')
      console.log(el);
      console.log(binding);
      console.log(vnode);
      console.log(oldVnode);
    },
    update: (el, binding, vnode, oldVnode) => {
      console.log('update')
      console.log(el);
      console.log(binding);
      console.log(vnode);
      console.log(oldVnode);
    },
    componentUpdated: (el, binding, vnode, oldVnode) => {
      console.log('componentUpdated')
      console.log(el);
      console.log(binding);
      console.log(vnode);
      console.log(oldVnode);
    },
    unbind: (el, binding, vnode, oldVnode) => {
      console.log('unbind')
      console.log(el);
      console.log(binding);
      console.log(vnode);
      console.log(oldVnode);
    }
  },
  test: {
    bind: (el, binding, vnode, oldVnode) => {
      console.log('bind')
      console.log(el);
      console.log(binding);
      console.log(vnode);
      console.log(oldVnode);
    },
    inserted: (el, binding, vnode, oldVnode) => {
      console.log('inserted')
      console.log(el);
      console.log(binding);
      console.log(vnode);
      console.log(oldVnode);
    },
    update: (el, binding, vnode, oldVnode) => {
      console.log('update')
      console.log(el);
      console.log(binding);
      console.log(vnode);
      console.log(oldVnode);
    },
    componentUpdated: (el, binding, vnode, oldVnode) => {
      console.log('componentUpdated')
      console.log(el);
      console.log(binding);
      console.log(vnode);
      console.log(oldVnode);
    },
    unbind: (el, binding, vnode, oldVnode) => {
      console.log('unbind')
      console.log(el);
      console.log(binding);
      console.log(vnode);
      console.log(oldVnode);
    }
  },
}
