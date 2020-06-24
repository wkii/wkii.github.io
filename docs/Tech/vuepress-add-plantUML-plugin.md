---
title: Vuepress 增加 PlantUML 支持
categories: Tech
date: 2020-06-24 19:24:01
tags: 
 - vuepress
 - PlantUML
publish: true
---

## PlantUML
最近一直在使用 PlantUML 画时序图，简直是太方便了。并且语雀也已经支持 PlantUML。
官方中文教程：https://plantuml.com/zh/sequence-diagram
IntelliJ 系列IDE都可以安装 [PlantUML integration](https://plugins.jetbrains.com/plugin/7017-plantuml-integration) 这个插件，来编写puml文件。支持即时预览。

## 插件安装

```ba
yarn add -D markdown-it-plantuml
```

然后编辑Vuepress的配置文件`.config.js`，增加插件的配置：

```js
module.exports = {
  ...
  extendMarkdown: md => {
    md.set({ breaks: true })
    md.use(require('markdown-it-plantuml'))
  },
  ...
}
```
参考资料：Vuepress的[文档](https://v1.vuepress.vuejs.org/zh/plugin/option-api.html#extendmarkdown)

## 测试

写一段代码：

```mark
@startuml
用户 -> 认证中心: 登录操作
认证中心 -> 缓存: 存放(key=token+ip,value=token)token

用户 <- 认证中心 : 认证成功返回token
用户 -> 认证中心: 下次访问头部携带token认证
认证中心 <- 缓存: key=token+ip获取token
其他服务 <- 认证中心: 存在且校验成功则跳转到用户请求的其他服务
其他服务 -> 用户: 信息
@enduml
```



效果如下：

@startuml
用户 -> 认证中心: 登录操作
认证中心 -> 缓存: 存放(key=token+ip,value=token)token
用户 <- 认证中心 : 认证成功返回token
用户 -> 认证中心: 下次访问头部携带token认证
认证中心 <- 缓存: key=token+ip获取token

其他服务 <- 认证中心: 存在且校验成功则跳转到用户请求的其他服务
其他服务 -> 用户: 信息
@enduml