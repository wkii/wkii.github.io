---
title: 使用 Github workflow 部署 Vuepress到Github Pages
categories: DevOps
date: 2020-06-09 01:06:11
tags: 
  - vuepress
  - github workflow
---

## 前言
目前Github workflow（也叫Actions）还不够成熟。表现为yml配置文件手动创建和修改再推送到仓库无效，需要在线创建、在线编辑。所以还是使用Travis-ci.com 或者是 Azure Pipelines吧。
## 操作步骤
不过对应的发布vuepress到 Github Pages 的工具已经有了，并且在GitHub 的Marketplace里发布了。下面记录一下使用步骤：

> 注意：
> 在仓库里直接写配置文件推送上去无效。 至少目前我测试是不行的。

1. 项目首页点顶部 `Actions` 菜单，进入Workflow配置界面。
2. 点击`New workflow` 再点击第一个示例 `Simple workflow` 下面的 `Set up this workflow`按钮。
3. 然后给配置文件起个名（上方输入框），右侧Marketplace搜索框中输入`vuepress`，选 `Vuepress deploy`。
4. 点击 [View full Marketplace listing](https://github.com/marketplace/actions/vuepress-deploy) 查看更多针对这个工具的配置文件说明（是国人开发的工具，通过Docker来完成build）；
5. 左侧写好配置文件，保存（Start Commit）；
6. 看效果。如果有不对，再去修改这个workflow的配置文件（在线编辑）。

以下是我测试成功的配置文件，请注意注释部分的配置项：
```yaml
name: Build and Deploy
on: [push]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@master

    - name: vuepress-deploy
      uses: jenkey2011/vuepress-deploy@master
      env:
        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        # TARGET_REPO: username/repo
        TARGET_BRANCH: master
        # 请注意是否在package.json中添加了script别名，工具官方默认值还不是这个
        BUILD_SCRIPT: yarn docs:build
        BUILD_DIR: docs/.vuepress/dist/
```

针对上面的配置文件中`BUILD_SCRIPT`的命令，配置package.json文件中需要添加
```json
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs",
    "docs:deploy": "bash deploy.sh"
  }
```

## 删除方法
在线配置目前没法删除，可以通过pull下来之后，在本地仓库删除workflows下的文件，再推送回去即可删除 workflow。
