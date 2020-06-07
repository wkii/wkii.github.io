---
title: php查询MongoDB遇到长整型的问题
url: 748.html
id: 748
categories: PHP
tags:
  - Mongo
  - php
date: 2012/09/24 22:12:29
---

困扰了我一天的问题。首先是Mongodb副本集。查php的Mongo扩展手册把副本集搞定。然后又是长整型时间的问题。 存进mongo的是java的长整型时间戳。而php是弱类型语言，且php的时间戳是11位。目前还是10位的阶段。转换成java的时间戳需要在后面补零。

// 生成java时间戳
```
$time = (string)$time.'000';
$time = (int)$time;
```
但是查询结果根本没有数据。把框架的Mongo用Debug打印出查询语句，没有问题。把查询语句直接在shell里查也没问题。但就是没数据。 后来打开Mongo的日志，调整级别为5，这样会记录查询语句。参照[这里](http://api.mongodb.org/wiki/current/setParameter%20Command.html "mongo")。 发现我所查询的时间都变成了负数：“_{ $gt: -154503944 }_” 然后万能的google找到了答案。php的长整型需要使用MongoInt64这个类来转换一下。虽然你在php中输出结果是一样的，但查询起来就不一样了。那么在上面的语句后面再加上一句就对了。

// 必须的一步，将长整形使用MongoInt64转换成64位整型
```
$time = new MongoInt64($time);
```
Mongo扩展的类参考在这里：[http://www.php.net/manual/en/mongoint64.construct.php](http://www.php.net/manual/en/mongoint64.construct.php "mongoint64")