---
title: k8s系列之一 Macos安装kubernetes和docker
date: 2020-05-08 00:17:40
tags: 
  - k8s
  - kubernetes
  - docker
id: 785
categories: Kubernetes
---

## 前情提要

先说Docker，就下载[docker-desktop](https://www.docker.com/products/docker-desktop)安装就好了。

这里就有一个问题了，docker-desktop也自带了一个kubernetes。但是，建议玩家还是根据k8s的安装文档来安装一下kubernetes。为什么呢？因为docker-desktop自带的kubernetes因各种版本问题，配置运行起来非常麻烦，还不自带dashboard，还是minikube可玩儿性比较高。 根据k8s的官方文档搭建学习环境，就是[使用 Minikube 安装 Kubernetes](https://kubernetes.io/zh/docs/setup/learning-environment/minikube/)。


在安装Minikube的说明文档里，其实还要安装一个kubernetes 的 cli工具`kubectl`。当然如果使用`brew`来安装Minikube的时候，`kubectl`是`minikube`的依赖，因此可以直接安装`minikube`，`brew`会自动安装依赖`kubectl`。

> 另外，部分资源的下载，如果不翻墙的话可能会非常慢甚至下载不下来。

## 安装kubectl 和 Minikube

```bash
brew install kubectl # 或者 brew install kubernetes-cli
brew install minikube
```

<!--more-->
> 如果之前启用过docker-desktop里的k8s，使用以下命令能查看，如果发现软链指向的是docker应用目录，删除软链就好了。
>
> ```bash
> ls -l /usr/local/bin/kubectl
> ```

## 启动minikube

安装完成之后，可以启动一下minikube试试:

```
minikube start
```

会发现它会自动选择一个驱动。虽然我docker-desktop已安装并且运行，virtualbox和VMware都安装了，但是它仍然自动选择了`hyperkit`。然后自己下载`hyperkit`的驱动了。试验发现，当安装了docker-desktop或者使用brew安装了hyperkit后，如是不指定驱动，它会默认使用 hyperkit 驱动。更多的驱动，可以看官方文档：[Drivers](https://minikube.sigs.k8s.io/docs/drivers/)

```
$ minikube start
😄  Darwin 10.15.4 上的 minikube v1.9.2
✨  Automatically selected the hyperkit driver. Other choices: docker, virtualbox, vmwarefusion
💾  正在下载驱动 docker-machine-driver-hyperkit:
    > docker-machine-driver-hyperkit.sha256: 65 B / 65 B [---] 100.00% ? p/s 0s
    > docker-machine-driver-hyperkit: 10.90 MiB / 10.90 MiB  100.00% 3.80 MiB p
🔑  The 'hyperkit' driver requires elevated permissions. The following commands will be executed:
```

然后要一次密码，输入后继续，因为我嫌下载驱动太慢，命令行使用了代理，导致启动失败，提示正在使用代理，但是未将 192.168.64.* ip段加入NO_PROXY列表。所以新开一个窗口继续（命令行就没代理了）

```
$ minikube start
  Darwin 10.15.4 上的 minikube v1.9.2
✨  根据现有的配置文件使用 hyperkit 驱动程序
👍  Starting control plane node m01 in cluster minikube
🏃  Updating the running hyperkit "minikube" VM ...
🐳  正在 Docker 19.03.8 中准备 Kubernetes v1.18.0…
❗  This VM is having trouble accessing https://k8s.gcr.io
💡  To pull new external images, you may need to configure a proxy: https://minikube.sigs.k8s.io/docs/reference/networking/proxy/
🌟  Enabling addons: default-storageclass, storage-provisioner
🏄  完成！kubectl 已经配置至 "minikube"
```

可以发现它自动创建了kubectl的配置文件，在`~/.kube/`目录下生成了一个`config`文件。同时`minikube`的配置文件位置在`~/.minikube`。

然后检查一下状态

```bash
$ minikube status
m01
host: Running
kubelet: Running
apiserver: Running
kubeconfig: Configured
```

如果要看一下dashboard，命令行执行

```bash
minikube dashboard
```

它会开启一个dashboard服务，同时自动调用浏览器打开一个窗口，可以看到kubernetes的一些情况。

到这里，一个最基本的minikube安装过程就完成了。 非常easy吧。

这时候再看docker-desktop的菜单，会出现“Kubernetes”，里面会增加选项"minikube"。

## 小技巧

如果使用zsh（MacOs catalina已经默认使用zsh了），并且同时使用了[Oh-My-Zsh](http://ohmyz.sh/)，可以直接在`~/.zshrc`中编辑plugins=来增加kubectl的命令行快速补全插件，例如我的plugins内容（多个插件以空格隔开)：

```ini
plugins=(git git-flow brew mvn z jenv kubectl)
```

更多内容参考 [安装并设置 kubectl](https://kubernetes.io/zh/docs/tasks/tools/install-kubectl/)。

后面再介绍一些配置相关的内容。今天先到这里啦。