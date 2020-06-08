---
title: 使用vuepress发布博客，附踩坑记录
categories: Tech
date: 2020-05-16 18:38:00
tags: 
 - vuepress
 - blog
publish: true
---

## 初入门庭

安装 `vuepress`是非常简单的事儿。建议全局安装vuepress，然后再本地安装其它部分。官方文档就写的很清楚了，不再赘述。

但是安装完了之后，惊叹一下，这是什么鬼。整个官方文档都在写怎么安装，根本没写怎么写，对编写的markdown有什么要求？对于用过hexo的人来说，我知道应该差不多，但是就愣没人写该怎么玩儿，我也是醉了。

好吧，看了诸多资料以后，可以确定，如果要用vuepress来发布静态博客，需要安装对应的blog主题，比如官方的blog主题 [@vuepress/theme-blog](https://vuepress.vuejs.org/zh/theme/blog-theme.html)，或者另一个较为完善的主题 [vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)。

使用`vuepress-theme-reco`后，跟使用`hexo`的习惯就差不多了。每个markdown前面要放一个`toc`头来标记 标题、分类、tag、日期时间。然后目录结构呢，可以在`docs`下随便放，建多级目录也可以，会根据markdown中的分类来更新nav菜单。

> 你看，关于blog 的 [frontmatter](https://vuepress-theme-blog.ulivz.com/config/front-matter) 这么点事儿非要写在主题文档中。说明vuepress的初衷只是软件文档，并非blog。
>
> 另外，官方也并没有 cli 工具可以 new post 来帮你快速创建一个文件模板。差评。有人写了一个 [vuepress-article-cli](https://github.com/vxhly/vuepress-article-cli)，感兴趣的同学可以用一下。

## 踩坑记录

### 时间格式问题：

vuepress没有时区设置，用到时间的地方都是拿一个时间对象在转来转去。当同时使用 `@vuepress/last-updated`  和  `vuepress-plugin-sitemap` 一起使用时会在build时报错：

```
 SITEMAP  Generating sitemap...
error vuepress-plugin-sitemap apply generated failed.
RangeError: Invalid time value
    at Date.toISOString (<anonymous>)
```



因为如果按照官方文档的示例，把`@vuepress/last-updated`配置成下面这个样子的话：

```json
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require("moment")
          moment.locale(lang)
          return moment(timestamp).fromNow()
        }
      }
    ]
```

那么显示的最后修改时间就会显示成诸如”2天前“，”2小时前“这样。但是，问题就来了，`vuepress-plugin-sitemap`就解析不了这种时间格式了，所以，有两个方案，一个是修改`config.js`，将`vuepress-plugin-sitemap`的时间属性`dateFormatter`定义成当前时间，代码如下：

```json
    [
      'sitemap', 
      {
        hostname: 'https://www.wkii.org',
        dateFormatter: val => {
          return new Date().toISOString()
        }
      }
    ],
```

但这个方法带来的问题是sitemap中，每个文章的更新时间都成了最后你发布的时间。显然有点假，这不是我想要的，还有另一种办法，把`@vuepress/last-updated`的时间格式修改成能被js的date(time).toISOString方法识别的格式，且视觉上也能接受的格式，如`Sat May 16 2020 23:21:50 GMT+0800`这样的格式，即可解决last-updated和sitemap里时间的格式问题，build也能正常了，配置代码如下：

```json
    [
      '@vuepress/last-updated', 
      {
        transformer: (timestamp, lang) => {
          //return (new Date(timestamp)).toUTCString() 或者用下面这段
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).toString()
        }
      }
    ],
```

### nav菜单设置RSS的bug

现象：设置菜单

```json
{ text: 'RSS', link: 'rss.xml'}
```

解析出来的菜单会变成 `rss.xml.html`，画蛇添足的加上一个`.html`后缀。
这个目前已经有人提了issues，等着修复吧。

### 部署到Github Pages和持续集成

这里需要一点背景知识，Github Pages有两种类型：

* 个人或组织站点，访问地址为 `https://<name>.github.io`
* 项目站点，访问地址为 `https://<name>.giothub.io/<repo>`

如果是个人站点，发布html的分支必须是 `master` ，而项目站点则没有这个要求。原文是

> User pages must be built from the `master` branch.

而根据以往经验，项目站点的发布分支可以是 `gh_pages` 分支（最早的约定）， 可以是`master`分支，也可以是 `master` 分支下的 `docs` 文件夹。

站点类型这个站点类型决定了部署时的一些设置，影响范围有以下文件：

* `docs/vuepress/.config.js`
* `deploy.sh`
* `.travis.yml`

看具体配置：

1. 在 `docs/vuepress/.config.js` 中配置 `base` 时请按照以下规则：

```markdown
1. 如果使用github 个人站点或组织站点，访问域名为 https://<username>.github.io 或 https://<organization>.github.io 时，base 设置为: /
2. 如果使用github 项目站点，访问域名为 https://<username>.github.io/<repo>/ 时，base 设置为项目仓库名，如: blog_page
3. 如果使用github 项目站点，但是绑定了域名时， base 设置为: /
参考：https://help.github.com/cn/github/working-with-github-pages/creating-a-github-pages-site
```

2. `deploy.sh` 手动部署脚本

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io  (这是个人或组织类站点)
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  （这是项目类站点）
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f git@github.com:wkii/blog_page.git master:gh-pages

cd -
```

   

3. 使用Travis-ci 自动化部署配置，配置文件需要在项目根目录创建一个文件`.travis.yml`

    有没有人跟我一样，比对了半天文件名，却没注意前面缺了个点，试了半天都不好使😂
```yaml
language: node_js
node_js:
  - lts/*
cache:
  directories:
    - node_modules
  yarn: true
before_install:
  - export TZ='Asia/Shanghai' # 设置时区
install:
  - yarn install
script:
  - yarn docs:build
deploy:
  provider: pages
  skip-cleanup: true
  local_dir: docs/.vuepress/dist
  github-token: $GITHUB_TOKEN # 在 GitHub 中生成，用于允许 Travis 向你的仓库推送代码。在 Travis 的项目设置页面进行配置，设置为 secure variable
  target-branch: gh-pages # 要部署的分支
  verbose: true
  keep-history: true
  name: wkii
  email: digihero@gmail.com
  on:
    branch: master # 源文件所在的分支

```

然后如何使用travis-ci，可参考vhxly写的[自动化部署](https://vxhly.github.io/views/nodejs/vuepress-blog-on-github.html#%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2)部分。

   


## 下一步计划

- [x] 使用Travis CI 持续集成部署
- [x] 把主题色系换成蓝色。我还是喜欢ant.design的蓝色系。