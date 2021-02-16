## React Hooks + TypeScript + Koa + Mysql

> 一个及其简洁的个人博客系统、即插即用，如果你想使用这个博客、动动手改改配置即可使用！！

- 前后台分离式开发（项目中也包含博客的后台管理系统），为了方便记录后端开发过程，笔者将后端也一起放在同个项目文件夹中。
- 博客样式几乎借助于 `antd` 这个优秀的 UI 框架，主打简约风格，是笔者借鉴了 `antd` 官方的风格所设计。
- 具备了代码高亮、权限管理、第三方 `github` 登录、评论与通知、以及邮件通知功能的个人博客...
- 具备文件导入导出功能，假如你之前用 `hexo` 博客, 那么你可以直接通过导入 `md` 文件迁移你的文章。

* 我的博客地址: [闲情偶寄](https://lmsworld.cn/)

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)
[![996.icu](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu)

### 实现功能

- [x] 前台：主页 + 列表页 + 搜索页 + 分类页 + 标签页
- [x] 后台：文章管理 + 用户管理
- [x] 响应式、文章锚点导航、回到顶部、`markdown` 代码高亮
- [x] 用户：站内用户、`github` 第三方授权登录的用户
- [x] 用户可以评论与回复、以及**邮件通知**回复的状态
- [x] `md` 文件导入导出功能！可以直接上传 `md` 文件生成文章

### 技术栈

- 前端 （基于 `create-react-app eject` 后的配置）

  - react v16.9.0 `hooks` + `redux` + `react-router4` + `TypeScript`
  - `marked highlight.js`
  - `webpack` 打包优化
  - `axios` 封装

- 后端 （自构建后台项目）
  - `koa2` + `koa-router`
  - `sequelize` + `mysql`
  - `jwt` + `bcrypt`
  - `nodemailer`
  - `koa-send` `archiver`

## 博客预览

### pc 端

![](https://gitee.com/nonameche/myblog/raw/master/pic-bed/20210216192308.png)

### 移动端

![](https://gitee.com/nonameche/myblog/raw/master/pic-bed/20210216192425.png)

## 项目结构

### 目录结构

```js
.
│
├─config                // 构建配置
├─public                // html 入口
├─scripts               // 项目脚本
└─server                // 后端
    ├─config            // 项目配置 github、email、database、token-secret 等等
    ├─controllers       // 业务控制层
    ├─middlewares       // 中间件
    ├─models            // 数据库模型
    ├─router            // 路由
    ├─utils             // 工具包
    ├─  app.js          // 后端主入口文件
    ├─  initData.js     // 初始化基础数据脚本
    └─...
│
└─src                   // 前端项目源码
   ├─assets             // 静态文件
   ├─components         // 公用组件
   ├─layout             // 布局组件
   ├─redux              // redux 目录
   ├─routes             // 路由
   ├─styles             // 样式
   ├─utils              // 工具包
   ├─views              // 视图层
   ├─  App.tsx          // 前端主入口文件
   ├─  config.tsx       // 项目配置 github 个人主页、个人介绍等等
   ├─  index.js         // 主入口文件
   └─...

```

### 数据库模型

![](https://user-gold-cdn.xitu.io/2019/9/20/16d4e0f97411e6cb?w=660&h=655&f=png&s=340072)

role === 1: 博主用户
role === 2: 普通用户


关于 `github` 第三方授权和 `email` 授权，可以参考

- [GitHub 第三方登录](https://www.jianshu.com/p/78d186aeb526)
- [GitHub 第三方授权 demo](https://github.com/gershonv/oAuth2-github.git)
- [nodemailer](https://nodemailer.com/)

## 使用这个项目

```bash
git clone https://github.com/gershonv/react-blog.git

## 安装依赖以及开启开发模式
cd react-blog
yarn
yarn dev

## 安装依赖以及开启开发模式 注意必须先配置好数据库、个人github账户登录名，配置文件在 server/config/index.js
## 笔者采用的数据库字符集为 utf8mb4 排序规则 utf8mb4_general_ci
cd server
yarn
yarn dev


## 打包前端
cd react-blog
yarn build

## 后端笔者则是采用pm2
cd server
pm2 start app.js
```

### 导入功能说明

导入 `md` 文件是按照 hexo 生成的前缀去解析的， 比如

```bash
---
title: ES6 - Class
date: 2018-07-16 22:19:09
categories: Javascript
tags:
  - Javascript
  - ES6
---
```

对应会解析为

- 标题：`ES6 - Class`
- 创建日期：`2018-07-16 22:19:09`
- 分类：`Javascript`
- 标签：`Javascript` `ES6`

如果导入标题一样的文件，可以确认是否覆盖原来的文章！

PS : 觉得不错的伙伴可以给个 star ~~~ 或者 fork 下来看看哦。如果有什么建议，也可以提 issue 哦
