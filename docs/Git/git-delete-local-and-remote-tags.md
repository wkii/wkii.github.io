---
title: git删除本地和远程tags
url: 736.html
id: 736
categories: Git
date: 2012/05/15 10:41:46
tags:
 - git
---

又用到了删除git仓库的tags， 删除本地tag:
```
git tag -d v0.1
```
只删除本地的没有用，下次fetch的时候还会拉下来，再删除远程仓库中的tag，跟删除远程分支的语法类似
```
git push origin :refs/tags/v0.1
```