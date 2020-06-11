---
title: '使用 Microsoft azure 部署 Vuepress到Github Pages'
categories: DevOps
date: 2020-06-12 00:15:12
tags: 
  - vuepress
  - azure
---

## 发布原理
无论使用什么CI工具发布vuepress到Github Pages，一共就三步：
* yarn install
* build
* deploy

### CI发布工具

发布的CI工具常见的有以下几个：

* `Travis-ci`：它一共有两个服务，分别是Travis-ci.org 和 Travis-ci.com，其中org只支持开源仓库，.com可以支持私有仓库。并且Travis-ci在规划将所有的服务并到travis-com中。 所以如果使用Travis-ci，那就直接使用Travis-ci.com这个服务吧。而且用com的服务还能授权部分仓库，也不必配置Webhooks，强迫症福音。
  * 优点：
    * 方案成熟，满大街都有教程
  * 缺点：
    * 如果要再发布到自己的服务器上，无法通过变量添加know_hosts 以避免交互输入，可参见我的[Travis-ci配置](https://github.com/wkii/wkii.github.io/blob/develop/.travis.yml)。
    * 电信网络访问慢，甚至 Status badge 图标都加载不出来（当然不能怪人家）
* `Github workflow Actions`：目前不推荐，还不够成熟。应用市场里只有三方应用功能全一点，例如`GitHub Pages action`和`vuepress-deploy`。
  * 缺点：创建任务只能在线修改和编辑yml文件，本地编辑完了推送不生效。还好本地删除再推送还好用，否则想删都删不了。
  * 优点：Status badge 图标好看
* `Microsoft Azure pipelines`：本文主角
  * 优点：
    * 可以高度自定义，可参见我后面的配置文件
    * 安全，完全自主控制，不依赖任何三方应用
    * Status badge 图标好看（又颜控了）
    * 网络连通性较好，放上个`Install B` 的 `Status badge` 图标能显示出来
    * 支持Windows环境构建（虽然我用不到）
  * 缺点：
    * 触发器trigger不支持变量（You cannot use [variables](https://docs.microsoft.com/zh-cn/azure/devops/pipelines/process/variables?view=azure-devops) in paths, as variables are evaluated at runtime (after the trigger has fired).
    * 官方task缺乏，唯一一个叫"Publish to Github Pages"的Task，还只支持windows 😂😂😂

当然，除了发布到github pages(github.io)，你还可以发布到 Azure Static Web Apps。参考：[Tutorial: Publish a VuePress site to Azure Static Web Apps Preview](https://docs.microsoft.com/en-us/azure/static-web-apps/publish-vuepress)，当然，这是另一个话题，不再展开。

本文主要说的是使用Azure Pipelines 来发布Vuepress 到 Github Pages.

## Azure Pipelines

### 开始步骤

1. 从Github应用市场找到Azure Pipelines安装，可以参考：[这里](https://www.azuredevopslabs.com/labs/azuredevops/github-integration/)

2. 注意第Task 1 第12步，如果只想选定特定的仓库，可以只授权部分仓库（Only select repositories）

3. 到Task 2第4步的时候，可以使用我写的配置，代码有点多，看注释就能看懂了

4. Task 3，4，5就不用看了。如果想给自己的README.md添加一个 status badge 图标，看Task 6。

> 注意：
>
> 如果要给README.md添加图标，但Vuepress仍然需要使用一个markdown承载首页的[Frontmatter](https://vuepress.vuejs.org/zh/guide/frontmatter.html)，你可以创建一个index.md用来写Frontmatter，否则如果写在README.md中，会在Vuepress渲染首页时加载到页面里。

当然，也可以从[Azure](https://azure.microsoft.com/en-us/services/devops/?nav=min) 开始，选择[Start free with GitHub ](https://go.microsoft.com/fwlink/?LinkId=2014676&provider=github.com) 或者用你的微软帐户登录Azure，选择Pipelines，然后创建组织，创建项目，关联Github. 入口多种多样。

> 配置说明：
>
> 配置项的几个变量，要去Azure Pipelines的编辑界面，点右侧的Variables铵钮设置，然后要点保存
> **GITHUB_TOKEN**： 是必须的，并且一定要选加密，谁也不希望自己Github的密钥泄漏出去吧。
> **BUILD_SCRIPT**：默认是`yarn docs:build`，如果你的package.json中还配置了其它的，可以设置它
> **CNAME**：用于你配置了Github Pages的独立域名时，在根目录生成一个写着域名的CNAME文件，当然你把它放在`.vuepress/public`目录下效果也是一样的。
> **TARGET_BRANCH**：要发布的分支，如果是 username.github.io，要选`master`分支，如果是https://<USERNAME>.github.io/<REPO>，则是`gh-pages`分支，默认是`gh-pages`分支
>
> 代码不用动，只需要配置1到2个变量就行了。
>
> **GITHUB_TOKEN一定要选加密！**
> **GITHUB_TOKEN一定要选加密！**
> **GITHUB_TOKEN一定要选加密！**

```bash
# Node.js with Vue
# Build a Node.js project that uses Vue.
# Add steps that analyze code, save build artifacts, deploy, and more:
# https://docs.microsoft.com/azure/devops/pipelines/languages/javascript
#
# You can set Variables on pipelines web console.
# @see https://docs.microsoft.com/zh-cn/azure/devops/pipelines/process/variables?view=azure-devops&tabs=yaml%2Cbatch#secret-variables
#
# Variables list:
# variables name      Required        Keep secret        Default value         Example
# GITHUB_TOKEN           yes              yes
# BUILD_SCRIPT           no               no             yarn docs:build
# CNAME                  no               no                                   www.youdomain.com
# TARGET_BRANCH          no               no             gh-pages              master
#
# GITHUB_TOKEN generate from: https://github.com/settings/tokens


# @see https://docs.microsoft.com/zh-cn/azure/devops/pipelines/repos/github?view=azure-devops&tabs=yaml#ci-triggers
trigger:
  branches:
    include:
    - '*'  # must quote since "*" is a YAML reserved character; we want a string, you can use: {master} or {your branch name}

pool:
  vmImage: 'ubuntu-latest'

steps:
- task: NodeTool@0
  inputs:
    versionSpec: '10.x'
  displayName: 'Install Node.js'

- bash: |
    yarn install --registry https://registry.yarnpkg.com --no-lockfile
    mkdir -p /tmp/dist
    # For not secret variables,use $variablesname or ${variablesname}
    # For secret variables, use $(variablesname)

    if [[ -z "${BUILD_SCRIPT}" ]]; then
      script="yarn docs:build -d /tmp/dist"
    else
      script="${BUILD_SCRIPT} -d /tmp/dist"
    fi
    echo "Start building:"$script
    eval $script

    # set variable: build_dir 
    # @see https://docs.microsoft.com/en-us/azure/devops/pipelines/process/variables?view=azure-devops
    echo "##vso[task.setvariable variable=build_path]/tmp/dist"
  displayName: 'yarn install and build'

- bash: |
    if [ "$CNAME" ]; then
      echo "Generating a CNAME file..."
      echo $CNAME > CNAME
    fi
  workingDirectory: $(build_path)
  displayName: 'Generate a CNAME file'

- script: |
    # use $(Build.Repository.ID) or ${BUILD_REPOSITORY_ID}
    DEPLOY_REPO="https://$(GITHUB_TOKEN)@github.com/$(Build.Repository.ID).git"
    
    if [[ -z "$TARGET_BRANCH" ]]; then
      DEPLOY_BRANCH="gh-pages"
    else
      DEPLOY_BRANCH="$TARGET_BRANCH"
    fi

    if [[ -z "$(GITHUB_TOKEN)" ]]; then
      echo "ERROR: github token is not valid"
      exit 0
    else
      echo "github token is valid"
    fi

    git init
    git config user.name "Azure pipelines"
    git config user.email "pipelines@users.noreply.github.com"
    git add --all;
    git commit -m"Pipelines-Bot: Auto deploy via $(Build.SourceVersion)";
    git push --force $DEPLOY_REPO master:$DEPLOY_BRANCH
  workingDirectory: $(build_path)
  displayName: '[Git] Commit and push to Github Pages branch'
```

### 查看任务过程和结果

点击项目左侧的Pipelines菜单，右侧的 Recently run pipelines 是Pipelines配置文件维度。再点进去才是历次的执行结果。看每一步的执行情况，多点几次就进去了。

## 调试工具
参考azure-cli工具的 az [pipelines](https://docs.microsoft.com/zh-cn/cli/azure/pipelines?view=azure-cli-latest) 先挖个坑，还没用明白，对于没有使用付费服务的来说，看样子用处不大。

