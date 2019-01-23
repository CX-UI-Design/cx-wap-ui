/**
 * Build npm src
 */
const shell = require('shelljs');
const signale = require('signale');

const {Signale} = signale;
const tasks = [
  'bootstrap',
  'lint',
  'build:entry',//生成总入口文件
  'build:components-entry',//生成各个组件的入口文件
  'build:components',//生成 lib es 文件夹目录及其文件
  'del:components-entry',//删除各个组件的入口文件
  'build:style',
  'build:style-entry',
  'build:vant',
  'build:copy'
];

tasks.forEach(task => {
  signale.start(task);

  const interactive = new Signale({interactive: true});
  interactive.pending(task);
  shell.exec(`npm run ${task} --silent`);
  interactive.success(task);
});
