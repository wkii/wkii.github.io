---
title: Php Aes加密类
url: 758.html
id: 758
categories: PHP
tags:
  - AES
date: 2013/09/16 23:11:52
---

今天写了一个php的AES加密类。适用于Yii的扩展。 如果不用在Yii框架中，把代码中
```
Yii::app()->params\['encryptKey'\]
```
 换成你对应的默认key就可以了。 
 代码见github: [https://github.com/wkii/utils/blob/master/Yii/extensions/PhpAes.php](https://github.com/wkii/utils/blob/master/Yii/extensions/PhpAes.php "Php Aes")