---
title: '关于存储用户密码的思考，bcrypt 和 PBKDF2算法 '
url: 731.html
id: 731
categories: Tech
date: 2012/04/10 18:38:37
tags: 
  - password
  - bcrypt
  - PBKDF2
---

首先，像国内一些网站，比如sina这样的网站，zf要求要掌握用户密码，虽然也是加密的，但是是可逆加密。只要有需要，反解你的密码只是点一下鼠标的事儿。所以建议你的密码分级，对sina这种网站，不要使用高等级的密码。 但如果我们为了对用户负责，用户密码采用不可逆算法的时候，我们就要考虑一下如何对用户密码进行加密。那么仅仅是使用不可逆算法就行了吗？还不是，在硬件飞速发展的今天，尤其是GPU运算能力超CPU 10-20倍甚至更多，使得暴力破解的时间大大缩短。那么为了使得暴力破解变得几乎不可能，我们就要使用一些不支持GPU加速破解的算法。这里所说的算法，实际上也是各种加密的hash方式。 目前常见的**不可逆加密算法**有以下几种：

*   一次MD5（使用率很高）
*   将密码与一个随机串进行一次MD5
*   两次MD5，使用一个随机字符串与密码的md5值再进行一次md5，使用很广泛
*   [PBKDF2](http://en.wikipedia.org/wiki/PBKDF2)算法
*   [bcrypt](http://en.wikipedia.org/wiki/Bcrypt)
*   其它加密算法

现在，通常推荐使用 bcrypt 或 PBKDF2 这两种算法来对密码进行加密。下面对以上几种加密算法进行一下简单的分析。 第一种就不解释了，我们看下第二种加密算法（php代码）$salt是一个随机字符串，每个用户都不一样，并且要存储下来用于验证

md5($password.$salt)

第三种算法（php代码）

md5(md5($password).$salt)

第一种和第二种都是一次md5，尤其是第一种，假设原始字符串很短，当然，我们的密码通常都不会很长，所以暴力破解还是不会耗时太久的。尤其是采用GPU运算。 下面这个网址中，作者针对cpu、gup和各种单一的加密算法破解进行了一些描述，有兴趣的可以看看： [http://www.codinghorror.com/blog/2012/04/speed-hashing.html](http://www.codinghorror.com/blog/2012/04/speed-hashing.html) 下面的网址还介绍了我国山东大学的王晓云和余洪波关于md5碰撞的文章，可以生成两个一样的md5值的文件。http://www.mscs.dal.ca/~selinger/md5collision/ 上面链接的内容同样证明了一次MD5并不可靠。那么第二种和第三种是否可靠呢？第二种，要看你随机字符串有多长了，再加上原始密码，字符串越长，暴力破解的时间就越长，第三种就要暴力破解32位字符串的MD5，耗时嘛，以目前的硬件来看，估计单台机器普通人是等不到它破解出来了。不过如果涉及到国防级别，像美国使用超级计算机集群来破解的话，或许，用不了多长时间。 下面介绍第四种，是django 1.4默认采用的密码加密算法。点击上面PBKDF2的链接，在维基百科上已经有很详细的介绍，它使得暴力破解的希望更加渺茫。这也是django1.4安全性提升的一个亮点，在此之前它使用sha1来加密。PBKDF2实际上默认采用并推荐sha256，然后再配合10000次运算得出的结果。 参考标准：[rfc6070](https://www.ietf.org/rfc/rfc6070.txt)，[rfc2898](https://www.ietf.org/rfc/rfc2898.txt) 。
所以这里就不多介绍bcrypt了。字符串的长度，影响它生成hash值的时间。当然，这似乎在任何一种hash算法上都是成正比的。 实际上，无论是bcrypt还是PBKDF2都有各自的忠实拥护者。另外bcrypt不支持超过55个字符的密码短语。到底那一个好，没有标准答案，取决于你问那一方的粉丝。我个人偏向于使用PBKDF2，下面的参考资料中，或许也会给你答案。 其它参考资料： [password-encryption-pbkdf2-using-sha512-x-1000-vs-bcrypt](http://stackoverflow.com/questions/4433216/password-encryption-pbkdf2-using-sha512-x-1000-vs-bcrypt) [sha512-vs-blowfish-and-bcrypt](http://stackoverflow.com/questions/1561174/sha512-vs-blowfish-and-bcrypt)