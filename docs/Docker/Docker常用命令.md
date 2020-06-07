---
title: 'Docker常用命令 '
categories: Docker
date: 2018-12-03
tags: 
  - docker
---
## 后台(_background_)运行

更多的时候，需要让 Docker在后台运行而不是直接把执行命令的结果输出在当前宿主机下。此时，可以通过添加 -d 参数来实现。

```
docker run -d nginx
```

注： 容器是否会长久运行，是和docker run指定的命令有关，和 -d 参数无关。

## 始终自动重启
```
docker run -d -restart=always -d nginx
```

## 终止容器

```
docker stop id
```

## 导出镜像

```bash
docker save -o ubuntu.tar.gz ubuntu:latest
```

## 导入镜像
```
sudo docker load --input centos7.tar
```

## 导出容器

```bash
sudo docker export 7691a814370e > ubuntu.tar
```

### 导入容器快照

```
cat ubuntu.tar | sudo docker import - test/ubuntu:v1.0
```

or

```
sudo docker import http://example.com/exampleimage.tgz example/imagerepo
```

### 删除容器

```
sudo docker rm trusting_newton
```

删除正在运行的容器可以加参数`-f`Docker 会发送 `SIGKILL` 信号给容器。

##停止container 
```
sudo docker stop $(sudo docker ps -a -q)
```

## 清理所有处于终止状态的容器

```
docker rm $(docker ps -a -q)
```

## 删除tag值为none的images(清理废弃镜像）
```
sudo docker rmi $(docker images -a| grep "^<none>" | awk "{print $3}")
```
或者
```
docker images -a |grep none|awk '{print $3 }'|xargs docker rmi
```
或者 
```
docker rmi $(docker images -a -q -f "dangling=true")
```
## 删除全部images
```
docker rmi $(docker images -q)
```
## 清理过期容器
```
docker rm $(docker ps -q -f status=exited)
```

## 进入容器看看, `php` 为容器的名称

```
docker exec -it php "/bin/bash"
```

## 打tag
```
# 给某一版本打上latest的tag
docker tag -f ubuntu:14.04 ubuntu

# 打默认tag，-f 意思是强制覆盖
docker tag -f ubuntu:14.04 ubuntu:latest
```