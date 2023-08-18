import { useIntersectionObserver } from '@vueuse/core'

// 定义懒加载
export const lazyPlugin = {
  install (app) {
    // 懒加载指令逻辑
    // 定义全局指令
    app.directive('img-lazy', {
      mounted (el, binding) {
        // el: 指令绑定的那个元素 img
        // binding: binding.value 指令等于号后面绑定的表达式的值
        // console.log(el, binding.value)
        // 懒加载指令逻辑
        const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            if(isIntersecting) {
              // 进入视口区域
              el.src = binding.value
              stop()
              console.log(isIntersecting)
            }
          }
        )
      }
    })
  }
}