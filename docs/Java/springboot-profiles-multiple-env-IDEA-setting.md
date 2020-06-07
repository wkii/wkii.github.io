---
title: springboot profiles 多环境配置打包和 IDEA 启动环境设定
categories: Java
date: 2020/02/12 18:26:19
id: 784
tags: 
 - springboot
 - java
---

## 背景约定

我们的 spring boot 工程最常见的是有多个环境的配置设定。如开发环境`dev`，测试环境`test`，生产环境`prod`。

我们使用`yml`配置文件来配置Spring boot。为什么什么yaml呢？因为写起来规范，有利于阅读。

## 需求

1. 我们在不同环境打包时可以指定使用不同的环境配置。也可以指定默认的配置（当任何环境都不声明的时候），如默认为`dev`环境。

2. mvn 打包的时候，可以指定使用的环境配置名称，这样在启动jar包的时候，默认就使用打包时指定的环境配置。
3. 当第2点成立时，这时候我们不重新打包，还想用同一个包启动，并且指定一个环境配置用于测试环境等，此种情况可以实现“一包到底”，即从测试到发布可以始终是一个包，只是启动时声明的环境配置不同。
4. 有时候我们在开发的时候还想在本地电脑启动应用的时候选择不同的环境，比如模似测试环境。然后又不想去改配置代码以防止误提交，只想改一下IDEA的启动配置，甚至是最小化成本只改 `Spring Boot` 选项卡中的 `Active profiles` 的值。

以上就是我们的即想要，又想要，还想要的一系列需求。

## 实现方式

经过不断的尝试，终于实现了上述所有的需求。

这些需求在spring boot项目中，有几个地方配合才能完成。

1. pom文件（profiles设定和build设定）
2. application.yml 配置文件（支持多级继承，重点是支持激活的变量覆盖）
3. IDEA 配置

<!--more-->

### POM文件

只贴有用的部分，由于我的项目是多模块项目，所以我将profiles设定部分放在了父pom文件中，只要放在 `</project>` 标签里就行了

```xml
    <!-- 多环境定义 -->
    <profiles>
        <profile>
            <!-- 开发环境 -->
            <id>dev</id>
            <properties>
                <profiles.active>dev</profiles.active>
                <maven.test.skip>true</maven.test.skip>
            </properties>
            <activation>
                <activeByDefault>true</activeByDefault>
            </activation>
        </profile>
        <profile>
            <!-- 测试环境 -->
            <id>test</id>
            <properties>
                <profiles.active>test</profiles.active>
                <maven.test.skip>true</maven.test.skip>
            </properties>
        </profile>
        <profile>
            <!-- 生产环境 -->
            <id>prod</id>
            <properties>
                <profiles.active>prod</profiles.active>
                <maven.test.skip>true</maven.test.skip>
            </properties>
        </profile>
    </profiles>
```

然后在要打包的web工程的pom文件中，定义build的一些选项。最后不断尝试，去掉了一些个性化配置，干净的就是用的spring boot初始化时候的样子

```xml
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>

        </plugins>
    </build>
```

### application.yml 文件

我要打包的子module项目`src/main/resources`下的目录和文件结构为：

```
├── application.yml
├── config
│   ├── application-dev-database.yml
│   ├── application-dev.yml
│   ├── application-prod-database.yml
│   ├── application-prod.yml
│   ├── application-test-database.yml
│   └── application-test.yml
├── static
└── templates
```

之所以这样的目录布局，是因为spring boot 在启动的时候，会查找classpath目录下的配置文件和config目录下的配置文件。也会按命名约定查找application-${profile}.yml文件。

将通用配置放在application.yml中，文件内容如下，这里将几个环境的端口号写在这儿是为了好看，可以写在application-${profile}.yml中，重点就在第7行，不是写死某一个环境值，而是使用了一个可替换的变量：

```yml
#公共配置
spring:
  application:
    name: myapp
  profiles:
    # 如果active 的值 @profiles.active@ 不加引号时出现报错"Do not use @ for indentation"， 则先 mvn clean 一下就可以
    active: "@profiles.active@"

---
# 开发环境
#端口号配置
server:
  port: 8080
spring:
  profiles: dev

---
# 测试环境
#端口号配置
server:
  port: 8088
spring:
  profiles: test


---
# 生产环境
#端口号配置
server:
  port: 8086
spring:
  profiles: prod
```

Application-dev.yml内容举例，这里可以覆盖主application.yaml中的设定，比如端口号：

```yml
spring:
  profiles:
    # 包含数据库配置文件
    include: dev-database

```

### IDEA 设置

由于前面的配置已经配好了启动时接收的环境配置，我们定义了三个 `dev`, `test`, `prod`。所以我们在IDEA的build project配置中，针对`Spring Boot`的选项卡中，`Active profiles`项的值可以写成dev或test来使用不同的环境配置启动。 当然，默认是dev，这个在pom文件里设定好了，dev启用了`activeByDefault`。

### 打包

打包的时候最好还是指定一个环境，否则默认的就是dev了。打包的时候不指定，启动包的时候就要指定，宁可事先做，别留到后面给自己挖坑，打包时指定使用的环境配置，如测试环境：

```bash
 mvn clean package -P test
```

感兴趣的同学可以解开jar包，能看到application.yml中，`@profiles.active@`已经被替换成了`test`。

### 启动jar包

启动jar包时，可以重新指定环境配置，如果不指定，则使用打包时指定的环境配置，如果打包时也没指定，则使用默认的dev（因为它开启了activeByDefault）。

启动jar包时，指定环境配置：

```bash
java -jar xxx.jar --spring.profiles.active=test
```

IDEA如果要启动jar包再指定环境配置也非常简单，在jar包的启动项里`Program arguments：` 设置为如下配置即可。

```
--spring.profiles.active=test
```

好了，开发、测试，打包，启动都可以一气呵成，即想要，又想要，还想要都可以得到满足。

Enjoy coding...