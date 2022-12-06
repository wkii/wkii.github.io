(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{429:function(s,t,a){"use strict";a.r(t);var e=a(3),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"发布原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布原理"}},[s._v("#")]),s._v(" 发布原理")]),s._v(" "),t("p",[s._v("无论使用什么CI工具发布vuepress到Github Pages，一共就三步：")]),s._v(" "),t("ul",[t("li",[s._v("yarn install")]),s._v(" "),t("li",[s._v("build")]),s._v(" "),t("li",[s._v("deploy")])]),s._v(" "),t("h3",{attrs:{id:"ci发布工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ci发布工具"}},[s._v("#")]),s._v(" CI发布工具")]),s._v(" "),t("p",[s._v("发布的CI工具常见的有以下几个：")]),s._v(" "),t("h4",{attrs:{id:"travis-ci"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#travis-ci"}},[s._v("#")]),s._v(" Travis-ci")]),s._v(" "),t("p",[s._v("它一共有两个服务，分别是Travis-ci.org 和 Travis-ci.com，其中org只支持开源仓库，.com可以支持私有仓库。并且Travis-ci在规划将所有的服务并到travis-com中。 所以如果使用Travis-ci，那就直接使用Travis-ci.com这个服务吧。而且用com的服务还能授权部分仓库，也不必配置Webhooks，强迫症福音。")]),s._v(" "),t("ul",[t("li",[s._v("优点：\n"),t("ul",[t("li",[s._v("方案成熟，满大街都有教程")])])]),s._v(" "),t("li",[s._v("缺点：\n"),t("ul",[t("li",[s._v("如果要再发布到自己的服务器上，无法通过变量添加know_hosts 以避免交互输入，可参见我的"),t("a",{attrs:{href:"https://github.com/wkii/wkii.github.io/blob/develop/.travis.yml",target:"_blank",rel:"noopener noreferrer"}},[s._v("Travis-ci配置"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("li",[s._v("电信网络访问慢，甚至 Status badge 图标都加载不出来（当然不能怪人家）")])])])]),s._v(" "),t("h4",{attrs:{id:"github-workflow-actions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github-workflow-actions"}},[s._v("#")]),s._v(" Github workflow Actions")]),s._v(" "),t("p",[s._v("目前不推荐，还不够成熟。应用市场里只有三方应用功能全一点，例如"),t("code",[s._v("GitHub Pages action")]),s._v("和"),t("code",[s._v("vuepress-deploy")]),s._v("。")]),s._v(" "),t("ul",[t("li",[s._v("缺点：创建任务只能在线修改和编辑yml文件，本地编辑完了推送不生效。还好本地删除再推送还好用，否则想删都删不了。")]),s._v(" "),t("li",[s._v("优点：Status badge 图标好看")])]),s._v(" "),t("h4",{attrs:{id:"microsoft-azure-pipelines"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#microsoft-azure-pipelines"}},[s._v("#")]),s._v(" Microsoft Azure pipelines")]),s._v(" "),t("p",[s._v("本文主角")]),s._v(" "),t("ul",[t("li",[s._v("优点：\n"),t("ul",[t("li",[s._v("可以高度自定义，可参见我后面的配置文件")]),s._v(" "),t("li",[s._v("安全，完全自主控制，不依赖任何三方应用")]),s._v(" "),t("li",[s._v("Status badge 图标好看（又颜控了）")]),s._v(" "),t("li",[s._v("网络连通性较好，放上个"),t("code",[s._v("Install B")]),s._v(" 的 "),t("code",[s._v("Status badge")]),s._v(" 图标能显示出来")]),s._v(" "),t("li",[s._v("支持Windows环境构建（虽然我用不到）")])])]),s._v(" "),t("li",[s._v("缺点：\n"),t("ul",[t("li",[s._v("触发器trigger不支持变量（You cannot use "),t("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/azure/devops/pipelines/process/variables?view=azure-devops",target:"_blank",rel:"noopener noreferrer"}},[s._v("variables"),t("OutboundLink")],1),s._v(" in paths, as variables are evaluated at runtime (after the trigger has fired).")]),s._v(" "),t("li",[s._v('官方task缺乏，唯一一个叫"Publish to Github Pages"的Task，还只支持windows 😂😂😂')])])])]),s._v(" "),t("p",[s._v("当然，除了发布到github pages(github.io)，你还可以发布到 Azure Static Web Apps。参考："),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/static-web-apps/publish-vuepress",target:"_blank",rel:"noopener noreferrer"}},[s._v("Tutorial: Publish a VuePress site to Azure Static Web Apps Preview"),t("OutboundLink")],1),s._v("，当然，这是另一个话题，不再展开。")]),s._v(" "),t("p",[s._v("本文主要说的是使用Azure Pipelines 来发布Vuepress 到 Github Pages.")]),s._v(" "),t("h2",{attrs:{id:"azure-pipelines"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#azure-pipelines"}},[s._v("#")]),s._v(" Azure Pipelines")]),s._v(" "),t("h3",{attrs:{id:"开始步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开始步骤"}},[s._v("#")]),s._v(" 开始步骤")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("从Github应用市场找到Azure Pipelines安装，可以参考："),t("a",{attrs:{href:"https://www.azuredevopslabs.com/labs/azuredevops/github-integration/",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),t("OutboundLink")],1)])]),s._v(" "),t("li",[t("p",[s._v("注意第Task 1 第12步，如果只想选定特定的仓库，可以只授权部分仓库（Only select repositories）")])]),s._v(" "),t("li",[t("p",[s._v("到Task 2第4步的时候，可以使用我写的配置，代码有点多，看注释就能看懂了")])]),s._v(" "),t("li",[t("p",[s._v("Task 3，4，5就不用看了。如果想给自己的README.md添加一个 status badge 图标，看Task 6。")])])]),s._v(" "),t("blockquote",[t("p",[s._v("注意：")]),s._v(" "),t("p",[s._v("如果要给README.md添加图标，但Vuepress仍然需要使用一个markdown承载首页的"),t("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/frontmatter.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Frontmatter"),t("OutboundLink")],1),s._v("，你可以创建一个index.md用来写Frontmatter，否则如果写在README.md中，会在Vuepress渲染首页时加载到页面里。")])]),s._v(" "),t("p",[s._v("当然，也可以从"),t("a",{attrs:{href:"https://azure.microsoft.com/en-us/services/devops/?nav=min",target:"_blank",rel:"noopener noreferrer"}},[s._v("Azure"),t("OutboundLink")],1),s._v(" 开始，选择"),t("a",{attrs:{href:"https://go.microsoft.com/fwlink/?LinkId=2014676&provider=github.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("Start free with GitHub "),t("OutboundLink")],1),s._v(" 或者用你的微软帐户登录Azure，选择Pipelines，然后创建组织，创建项目，关联Github. 入口多种多样。")]),s._v(" "),t("h3",{attrs:{id:"配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[s._v("#")]),s._v(" 配置文件")]),s._v(" "),t("p",[s._v("配置文件说明：")]),s._v(" "),t("p",[s._v("文件名和路径：放在项目根目录下，命名为"),t("code",[s._v("azure-pipelines.yml")])]),s._v(" "),t("p",[s._v("配置项的几个变量，要去"),t("strong",[s._v("Azure Pipelines的编辑界面")]),s._v("，点右侧的Variables铵钮设置添加，然后要点保存。")]),s._v(" "),t("p",[t("strong",[s._v("GITHUB_TOKEN")]),s._v("： 是必须的，并且一定要选加密，谁也不希望自己Github的密钥泄漏出去吧。"),t("br"),s._v(" "),t("strong",[s._v("BUILD_SCRIPT")]),s._v("：默认是"),t("code",[s._v("yarn docs:build")]),s._v("，如果你的package.json中还配置了其它的，可以设置它"),t("br"),s._v(" "),t("strong",[s._v("CNAME")]),s._v("：用于你配置了Github Pages的独立域名时，在根目录生成一个写着域名的CNAME文件，当然你把它放在"),t("code",[s._v(".vuepress/public")]),s._v("目录下效果也是一样的。"),t("br"),s._v(" "),t("strong",[s._v("TARGET_BRANCH")]),s._v("：要发布的分支，如果是 username.github.io，要选"),t("code",[s._v("master")]),s._v("分支，如果是"),t("code",[s._v("https://<USERNAME>.github.io/<REPO>")]),s._v("，则是"),t("code",[s._v("gh-pages")]),s._v("分支，默认是"),t("code",[s._v("gh-pages")]),s._v("分支")]),s._v(" "),t("p",[s._v("代码不用动，只需要配置1到2个变量就行了。然后再次提交并推送你的主分支，就会触发Azure Pipelines 的 build和deploy。")]),s._v(" "),t("p",[t("strong",[s._v("GITHUB_TOKEN一定要选加密！")]),s._v(" "),t("strong",[s._v("GITHUB_TOKEN一定要选加密！")]),s._v(" "),t("strong",[s._v("GITHUB_TOKEN一定要选加密！")])]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Node.js with Vue")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Build a Node.js project that uses Vue.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Add steps that analyze code, save build artifacts, deploy, and more:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https://docs.microsoft.com/azure/devops/pipelines/languages/javascript")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# You can set Variables on pipelines web console.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @see https://docs.microsoft.com/zh-cn/azure/devops/pipelines/process/variables?view=azure-devops&tabs=yaml%2Cbatch#secret-variables")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Variables list:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# variables name      Required        Keep secret        Default value         Example")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# GITHUB_TOKEN           yes              yes")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# BUILD_SCRIPT           no               no             yarn docs:build")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CNAME                  no               no                                   www.youdomain.com")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# TARGET_BRANCH          no               no             gh-pages              master")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# GITHUB_TOKEN generate from: https://github.com/settings/tokens")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @see https://docs.microsoft.com/zh-cn/azure/devops/pipelines/repos/github?view=azure-devops&tabs=yaml#ci-triggers")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("trigger")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("branches")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("include")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# must quote since "*" is a YAML reserved character; we want a string, you can use: {master} or {your branch name}')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("pool")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("vmImage")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ubuntu-latest'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("steps")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("task")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" NodeTool@0\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("inputs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意设置版本号，选12.x，默认是10.x，非常坑")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("versionSpec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'12.x'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("displayName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Install Node.js'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("bash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n    yarn install --registry https://registry.yarnpkg.com --no-lockfile\n    mkdir -p /tmp/dist\n    # For not secret variables,use $variablesname or ${variablesname}\n    # For secret variables, use $(variablesname)")]),s._v("\n\n    if "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('z "$'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("BUILD_SCRIPT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v('" '),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v('; then\n      script="yarn docs'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("build "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('d /tmp/dist"\n    else\n      script="$'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("BUILD_SCRIPT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('d /tmp/dist"\n    fi\n    echo "Start building'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v('"$script\n    eval $script\n\n    '),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# set variable: build_dir ")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @see https://docs.microsoft.com/en-us/azure/devops/pipelines/process/variables?view=azure-devops")]),s._v('\n    echo "'),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('##vso[task.setvariable variable=build_path]/tmp/dist"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("displayName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'yarn install and build'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("bash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v('\n    if [ "$CNAME" ]; then\n      echo "Generating a CNAME file..."\n      echo $CNAME > CNAME\n    fi')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("workingDirectory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $(build_path)\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("displayName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Generate a CNAME file'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v('\n    # use $(Build.Repository.ID) or ${BUILD_REPOSITORY_ID}\n    DEPLOY_REPO="https://$(GITHUB_TOKEN)@github.com/$(Build.Repository.ID).git"')]),s._v("\n    \n    if "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('z "$TARGET_BRANCH" '),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v('; then\n      DEPLOY_BRANCH="gh'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('pages"\n    else\n      DEPLOY_BRANCH="$TARGET_BRANCH"\n    fi\n\n    if '),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v('z "$(GITHUB_TOKEN)" '),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("; then\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v('echo "ERROR')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(' github token is not valid"\n      exit 0\n    else\n      echo "github token is valid"\n    fi\n\n    git init\n    git config user.name "Azure pipelines"\n    git config user.email "pipelines@users.noreply.github.com"\n    git add '),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("all;\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v('git commit -m"Pipelines-Bot')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(' Auto deploy via $(Build.SourceVersion)";\n    git push '),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("force $DEPLOY_REPO master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("$DEPLOY_BRANCH\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("workingDirectory")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" $(build_path)\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("displayName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[Git] Commit and push to Github Pages branch'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br"),t("span",{staticClass:"line-number"},[s._v("80")]),t("br"),t("span",{staticClass:"line-number"},[s._v("81")]),t("br"),t("span",{staticClass:"line-number"},[s._v("82")]),t("br"),t("span",{staticClass:"line-number"},[s._v("83")]),t("br"),t("span",{staticClass:"line-number"},[s._v("84")]),t("br"),t("span",{staticClass:"line-number"},[s._v("85")]),t("br"),t("span",{staticClass:"line-number"},[s._v("86")]),t("br")])]),t("h3",{attrs:{id:"查看任务过程和结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看任务过程和结果"}},[s._v("#")]),s._v(" 查看任务过程和结果")]),s._v(" "),t("p",[s._v("点击项目左侧的Pipelines菜单，右侧的 Recently run pipelines 是Pipelines配置文件维度。再点进去才是历次的执行结果。看每一步的执行情况，多点几次就进去了。")]),s._v(" "),t("h3",{attrs:{id:"发布到自己的服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布到自己的服务器"}},[s._v("#")]),s._v(" 发布到自己的服务器")]),s._v(" "),t("p",[s._v("如果要发布到自己的服务器，可以使用rsync、ssh scp等几种方式。我这里偷懒不配rsync，就简单使用scp了。")]),s._v(" "),t("h4",{attrs:{id:"上传私钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传私钥"}},[s._v("#")]),s._v(" 上传私钥")]),s._v(" "),t("p",[s._v("需要将ssh的rsa私钥上传到Pipelines管理界面的Library里，参考 "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/library/secure-files?view=azure-devops",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),t("OutboundLink")],1),s._v("。所以最好给发布站点单独建一套用户和公私钥，不要用root的私钥。")]),s._v(" "),t("blockquote",[t("ol",[t("li",[s._v("In "),t("strong",[s._v("Azure Pipelines")]),s._v(", select the "),t("strong",[s._v("Library")]),s._v(" tab.")]),s._v(" "),t("li",[s._v("Select the "),t("strong",[s._v("Secure files")]),s._v(" tab at the top.")]),s._v(" "),t("li",[s._v("Select the secure file you want to authorize.")]),s._v(" "),t("li",[s._v("In the details view under "),t("strong",[s._v("Properties")]),s._v(", select "),t("strong",[s._v("Authorize for use in all pipelines")]),s._v(", and then select "),t("strong",[s._v("Save")]),s._v(".")])])]),s._v(" "),t("h4",{attrs:{id:"增加配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#增加配置"}},[s._v("#")]),s._v(" 增加配置")]),s._v(" "),t("p",[s._v("然后增加azure-pipelines.yml配置如下：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装私钥任务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("task")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" InstallSSHKey@0\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("inputs")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# Set "HOST_ADDR" Viriables on pipelines edit web interface')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("knownHostsEntry")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$(HOST_ADDR)'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @see https://docs.microsoft.com/en-us/azure/devops/pipelines/library/secure-files?view=azure-devops")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# upload your ssh private key on pipelines "Labrary"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("sshKeySecureFile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy_rsa'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上传的文件名")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("displayName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'install ssh key.'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发布站点脚本")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("bash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token scalar string"}},[s._v("\n    # Set HOST_PORT,HOST_USER,HOST_ADDR and HOST_DEPLOY_PATH Viriables on the pipelines edit web interface\n    scp -P $(HOST_PORT) -o StrictHostKeyChecking=no -r $(build_path)/* $(HOST_USER)@$(HOST_ADDR):$(HOST_DEPLOY_PATH)")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("displayName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Push to Hosts server.'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h4",{attrs:{id:"授予权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#授予权限"}},[s._v("#")]),s._v(" 授予权限")]),s._v(" "),t("p",[s._v("在Pipelines的Recent 标签页中，进入Runs列表，点击查看状态会有授权的提示，授权Pipelines访问你的 "),t("strong",[s._v("Secure files")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"调试工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调试工具"}},[s._v("#")]),s._v(" 调试工具")]),s._v(" "),t("p",[s._v("参考azure-cli工具的 az "),t("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/cli/azure/pipelines?view=azure-cli-latest",target:"_blank",rel:"noopener noreferrer"}},[s._v("pipelines"),t("OutboundLink")],1),s._v(" 先挖个坑，还没用明白，对于没有使用付费服务的来说，看样子用处不大。")])])}),[],!1,null,null,null);t.default=n.exports}}]);