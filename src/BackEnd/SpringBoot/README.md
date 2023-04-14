---
index: true
order: number
date: 2023-04-04
category: 
  - SpringBoot
---

# SpringBoot
<!-- more -->

## 1 起步依赖

![ ](./assets/springboot00/image-20221202202305118.png)

在SpringBoot项目中，起步依赖有一个共同的特征：都是以`spring-boot-starter-`作为开头

::: tip 起步依赖特殊之处

spring-boot-starter-web：包含了web应用开发所需要的常见依赖  

spring-boot-starter-test：包含了单元测试所需要的常见依赖

:::

**spring-boot-starter-web**内部把关于Web开发所有的依赖都已经导入并且**指定了版本**，只需引入 `spring-boot-starter-web` 依赖就可以实现Web开发的需要的功能

![ ](./assets/springboot00/image-20221202204013113.png)

[Spring官方](https://docs.spring.io/spring-boot/docs/2.7.2/reference/htmlsingle/#using.build-systems.starters)提供了很多现成的starter(起步依赖)，开发相关应用时，只需要引入对应的starter即可。

![ ](./assets/springboot00/image-20221202204536647.png)

每一个起步依赖，都用于开发一个特定的功能。

> 举例：  
> 开发中需要使用redis数据库时，只需要在SpringBoot项目中，引入：spring-boot-starter-redis ，即可导入redis开发所需要的依赖。

## 2 SpringBoot父工程

SpringBoot通过maven引入的依赖，是没有指定具体的依赖版本号的。

![ ](./assets/springboot00/image-20221202205103486.png)

为什么没有指定\<version>版本号，可以正常使用呢？

- 因为每一个SpringBoot工程，都有一个父工程。依赖的版本号，在父工程中统一管理。

![ ](./assets/springboot00/image-20221202205318778.png)
