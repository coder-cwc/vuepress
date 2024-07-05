import { NotesDataOptions } from 'vuepress-theme-plume';
// https://plume.pengzhanbo.cn/config/notes/#%E9%85%8D%E7%BD%AE

import typescript from './typescript';
import rust from './rust';

export default {
  dir: '/notes/',
  link: '/',
  notes: [typescript, rust],
} as NotesDataOptions;
