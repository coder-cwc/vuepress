import { provide, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { defineClientConfig } from 'vuepress/client';
import { defineVuePlaygroundConfig } from 'vuepress-plugin-md-enhance/client';

defineVuePlaygroundConfig({
  // 在此设置 @vue/repl 选项
});

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    router.beforeEach((to) => {
      // 1、怎么继承我们的统一登录，而不是他自己的登录；
      console.log('🚀 ~ 全局前置守卫运行 ~');
    });
  },
  setup() {
    // 获取当前的路由位置
    const route = useRoute();
    // 或者 vue-router 实例
    const router = useRouter();
    // 供给一个值，可以被布局、页面和其他组件注入
    const count = ref(0);
    provide('count', count);
    console.log('🚀 ~ setup ~ :', route, router);
  },
  rootComponents: [],
});

// 2、我们需要嵌入Vue的 SFC Playground，可以支持组件的在线运行；
// https://blog.csdn.net/hongkid/article/details/136206563
