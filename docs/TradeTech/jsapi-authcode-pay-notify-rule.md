---
title: 常见支付通道条码付和扫码付异步通知策略
categories: TradeTech
date: 2020-06-24 20:21:01
id: 784
tags: 
 - 支付宝
 - 微信
 - 乐刷
publish: true
---

## 背景

今天在整理各个通道异步通知逻辑的时候，有一些记的不太清楚了，所以顺便再确认一轮儿，记录下来。

## 什么是条码付和扫码付

* 条码付：即用户被扫，商家使用扫码设备扫描用户的二维码发起的付款。
* 扫码付：即用户主扫，由用户扫描商户的二维码发起的付款。

## 常见支付通道异步通知逻辑

### 1. 支付宝

- 扫码付会有异步通知，触发条件：支付成功。
- 条码付没有异步通知，如果是支付中，如果主动轮询去查（跟技术支持确认过逻辑）

文档地址：[https://opendocs.alipay.com/open/194/103296](https://opendocs.alipay.com/open/194/103296)

### 2. 微信

- 扫码付有异步通知。
- 条码付没有异步通知。

针对条码付的支付中状态，文档描述：“**验密支付流程：**场景交互与免密模式相同，不同的是在商户调用【[付款码支付API](https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=9_10&index=1)】发起支付请求之后，微信支付后台提示用户输入密码确认支付，接口同步返回USERPAYING状态，商户系统再轮询调用查询订单接口来确认当前用户是否已经支付成功。”

微信文档地址：[https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=5_4](https://pay.weixin.qq.com/wiki/doc/api/micropay.php?chapter=5_4)

### 3. 乐刷

- 条码付和扫码付都有异步通知，在成功后通知，触发条件：支付成功。

文档地址：[https://www.yuque.com/leshuazf/doc/zhifujiaoyi#93D6z](https://www.yuque.com/leshuazf/doc/zhifujiaoyi#93D6z)

## 推荐操作

建议不管是条码付还是扫码付，都应该增加主动轮询逻辑，以防止异步通知延迟而带来的不必要麻烦。

另外注意一点：**有时候异步通知甚至比同步返回还要先到达，需做好逻辑处理。**

