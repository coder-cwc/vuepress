import { defineUserConfig } from 'vuepress';
import { getDirname, path } from 'vuepress/utils';
import { viteBundler } from '@vuepress/bundler-vite';
import { plumeTheme } from 'vuepress-theme-plume';

import notes from './notes';

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  // 请不要忘记设置默认语言
  lang: 'zh-CN',
  theme: plumeTheme({
    profile: {
      name: '你的名字',
      description: '描述文字',
      avatar: '/guibook_doload_image.jpg',
      circle: true, // 是否为圆形头像
    },
    navbar: [
      { text: '首页', link: '/', icon: 'material-symbols:home-outline' },
      { text: '博客', link: '/blog/', icon: 'material-symbols:article-outline' },
      {
        text: '笔记',
        icon: 'material-symbols:book-2',
        items: [
          { text: 'TypeScript', link: '/typescript/', icon: 'logos:typescript' },
          {
            text: 'Rust',
            link: '/rust/',
            icon: 'logos:rust',
            items: [
              { text: '简介', link: '/rust/简介/' },
              { text: '快速上手', link: '/rust/快速上手/' },
            ],
          },
        ],
      },
    ],
    notes,
    plugins: {
      shiki: {
        languages: ['javascript', 'typescript', 'vue', 'jsx', 'tsx', 'bash', 'sh'],
        whitespace: true,
      },
    },
  }),
  // 指定客户端配置文件的路径: https://v2.vuepress.vuejs.org/zh/advanced/cookbook/usage-of-client-config.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE%E7%9A%84%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95
  clientConfigFile: path.resolve(__dirname, './client.ts'),
  bundler: viteBundler(),
});
