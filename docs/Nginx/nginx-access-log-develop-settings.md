---
title: nginx access_log 设置
url: 740.html
id: 740
categories:
  - Nginx
tags:
  - access_log
  - nginx
date: 2012/06/06 11:37:59
---

最近在配置本地nginx开发环境时，发现一个问题，当server段不指定access\_log时，并且http段中也未指定任何access\_log参数时，它会默认写到logs/access.log这个文件，也就是access\_log默认值就是"logs/access.log"，而且是所有server的访问日志。

但nginx网站上我并未找到此配置的默认值。 如果我们不需要，在http段中加一行access\_log off;然后在特定的server中配置自己想写入的日志。

开发环境我默认不写日志，即不配置任何access_log，需要时才打开。 nginx的http段中，设置access log：

```
log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

log_format  gzip  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $bytes_sent "$http_referer" '
                      '"$http_user_agent" "$gzip_ratio"';

log_format download  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $bytes_sent "$http_referer" "$http_user_agent" '
                      '"$http_range" "$sent_http_content_range"';

#access_log  logs/access.log  main;
access_log off;
```

