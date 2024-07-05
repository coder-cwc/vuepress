import { NotesItemOptions } from 'vuepress-theme-plume';

export default {
  dir: 'typescript',
  link: '/typescript/',
  sidebar: [
    // 配置侧边栏
    {
      text: '简介',
      icon: 'mdi:language-typescript', // 侧边栏图标
      items: ['foo'], // 简化写法，主题会自动补全为 `foo.md`
    },
  ],
} as NotesItemOptions;
