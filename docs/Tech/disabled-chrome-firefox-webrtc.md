---
title: 禁用chrome firefox 的 WebRTC功能防止真实IP泄漏
url: 774.html
id: 774
categories: Tech
date: 2015/02/01 16:06:04
tags:
 - WebRTC
 - chrome
---

无论是使用VPN还是其它代理方式，很多时候我们不希望暴露自己的真实IP，且一直以来我们认为VPN是安全的，所有流量都会走VPN。 但最近暴露出一个WebRTC特性，会暴露我们的真实IP。适用浏览器：chrome,firefox. safari则没有问题。 只需要一段js代码就可以获取我们的真实IP。一旦被想时时监控别人的人知道并使用此方法钓鱼，便可直接获得原始IP。这简直太恐怖了。 看来以后如果重装系统，第一件事儿把cnnic证书删除后，第二件事儿就是禁用WebRTC. 有一个插件可以方便的禁用WebRTC, [插件下载](https://chrome.google.com/webstore/detail/webrtc-block/nphkkbaidamjmhfanlpblblcadhfbkdm) Firefox可在浏览器上输入：about:config。之后搜索：media.peerconnection.enabled。找到它后双击，将其改成 false 即可。 原理可以参考一下这里：[https://github.com/diafygi/webrtc-ips](https://github.com/diafygi/webrtc-ips) 