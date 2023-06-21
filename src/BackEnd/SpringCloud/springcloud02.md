---
order: 2
date: 2023-06-21
category: 
  - SpringCloud
  - Nacos
---

# Nacos

## 1 Nacos注册中心

国内公司一般都推崇阿里巴巴的技术，比如注册中心，SpringCloudAlibaba也推出了一个名为Nacos的注册中心

### 1.1 认识和安装Nacos

[Nacos](https://nacos.io/)是阿里巴巴的产品，现在是[SpringCloud](https://spring.io/projects/spring-cloud)中的一个组件。相比[Eureka](https://github.com/Netflix/eureka)功能更加丰富，在国内受欢迎程度较高

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230620201925.png)

安装方式可以参考课前资料《[Nacos安装指南.md](https://github.com/simeis147/SpringCloudLearning/blob/Nacos-Installation-Guide/Nacos%E5%AE%89%E8%A3%85%E6%8C%87%E5%8D%97.md)》

### 1.2 服务注册到nacos

Nacos是SpringCloudAlibaba的组件，而SpringCloudAlibaba也遵循SpringCloud中定义的服务注册、服务发现规范。因此使用Nacos和使用Eureka对于微服务来说，并没有太大区别。

主要差异在于：

- 依赖不同
- 服务地址不同

#### 1）引入依赖

在cloud-demo父工程的pom文件中的`<dependencyManagement>`中引入SpringCloudAlibaba的依赖：

```xml
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-alibaba-dependencies</artifactId>
    <version>2.2.6.RELEASE</version>
    <type>pom</type>
    <scope>import</scope>
</dependency>
```

然后在user-service和order-service中的pom文件中引入nacos-discovery依赖：

```xml
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
```

> **注意**：不要忘了注释掉eureka的依赖。

#### 2）配置nacos地址

在user-service和order-service的application.yml中添加nacos地址：

```yaml
spring:
  cloud:
    nacos:
      server-addr: localhost:8848
```

> **注意**：不要忘了注释掉eureka的地址

#### 3）重启

重启微服务后，登录nacos管理页面，可以看到微服务信息：

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230620201938.png)

### 1.3 服务分级存储模型

一个**服务**可以有多个**实例**，例如我们的user-service，可以有:

- 127.0.0.1:8081
- 127.0.0.1:8082
- 127.0.0.1:8083

假如这些实例分布于全国各地的不同机房，例如：

- 127.0.0.1:8081，在上海机房
- 127.0.0.1:8082，在上海机房
- 127.0.0.1:8083，在杭州机房

Nacos就将同一机房内的实例 划分为一个**集群**。

也就是说，user-service是服务，一个服务可以包含多个集群，如杭州、上海，每个集群下可以有多个实例，形成分级模型，如图：

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230620201945.png)

微服务互相访问时，应该尽可能访问同集群实例，因为本地访问速度更快。当本集群内不可用时，才访问其它集群。例如：

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230620201954.png)

杭州机房内的order-service应该优先访问同机房的user-service。

#### 1.3.1 给user-service配置集群

修改user-service的application.yml文件，添加集群配置：

```yaml
spring:
  cloud:
    nacos:
      server-addr: localhost:8848
      discovery:
        cluster-name: HZ # 集群名称
```

重启两个user-service实例后，我们可以在nacos控制台看到下面结果：

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230620202004.png)

我们再次复制一个user-service启动配置，添加属性：

```sh
-Dserver.port=8083 -Dspring.cloud.nacos.discovery.cluster-name=SH
```

配置如图所示：

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230620202011.png)

启动UserApplication3后再次查看nacos控制台：

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230620202020.png)

#### 1.3.2 同集群优先的负载均衡

默认的`ZoneAvoidanceRule`并不能实现根据同集群优先来实现负载均衡。

因此Nacos中提供了一个`NacosRule`的实现，可以优先从同集群中挑选实例。

1）给order-service配置集群信息

修改order-service的application.yml文件，添加集群配置：

```sh
spring:
  cloud:
    nacos:
      server-addr: localhost:8848
      discovery:
        cluster-name: HZ # 集群名称
```

2）修改负载均衡规则

修改order-service的application.yml文件，修改负载均衡规则：

```yaml
userservice:
  ribbon:
    NFLoadBalancerRuleClassName: com.alibaba.cloud.nacos.ribbon.NacosRule # 负载均衡规则 
```

### 1.4 权重配置

实际部署中会出现这样的场景：

服务器设备性能有差异，部分实例所在机器性能较好，另一些较差，我们希望性能好的机器承担更多的用户请求。

但默认情况下NacosRule是同集群内随机挑选，不会考虑机器的性能问题。

因此，Nacos提供了权重配置来控制访问频率，权重越大则访问频率越高。

在nacos控制台，找到user-service的实例列表，点击编辑，即可修改权重：

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230620202044.png)

在弹出的编辑窗口，修改权重：

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230620202054.png)

> **注意**：如果权重修改为0，则该实例永远不会被访问

### 1.5 环境隔离

Nacos提供了namespace来实现环境隔离功能。

- nacos中可以有多个namespace
- namespace下可以有group、service等
- 不同namespace之间相互隔离，例如不同namespace的服务互相不可见

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230620202107.png)

#### 1.5.1 创建namespace

默认情况下，所有service、data、group都在同一个namespace，名为public：

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230620202115.png)

我们可以点击页面新增按钮，添加一个namespace：

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230620202120.png)

然后，填写表单：

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230620202127.png)

就能在页面看到一个新的namespace：

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230620202134.png)

#### 1.5.2 给微服务配置namespace

给微服务配置namespace只能通过修改配置来实现。

例如，修改order-service的application.yml文件：

```yaml
spring:
  cloud:
    nacos:
      server-addr: localhost:8848
      discovery:
        cluster-name: HZ
        namespace: 492a7d5d-237b-46a1-a99a-fa8e98e4b0f9 # 命名空间，填ID
```

重启order-service后，访问控制台，可以看到下面的结果：

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230620202205.png)

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230620202209.png)

此时访问order-service，因为namespace不同，会导致找不到userservice，控制台会报错：

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230620202214.png)

### 1.6 Nacos与Eureka的区别

Nacos的服务实例分为两种l类型：

- 临时实例：如果实例宕机超过一定时间，会从服务列表剔除，默认的类型。

- 非临时实例：如果实例宕机，不会从服务列表剔除，也可以叫永久实例。

配置一个服务实例为永久实例：

```yaml
spring:
  cloud:
    nacos:
      discovery:
        ephemeral: false # 设置为非临时实例
```

Nacos和Eureka整体结构类似，服务注册、服务拉取、心跳等待，但是也存在一些差异：

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230620202219.png)

- Nacos与eureka的共同点
  - 都支持服务注册和服务拉取
  - 都支持服务提供者心跳方式做健康检测

- Nacos与Eureka的区别
  - Nacos支持服务端主动检测提供者状态：临时实例采用心跳模式，非临时实例采用主动检测模式
  - 临时实例心跳不正常会被剔除，非临时实例则不会被剔除
  - Nacos支持服务列表变更的消息推送模式，服务列表更新更及时
  - Nacos集群默认采用AP方式，当集群中存在非临时实例时，采用CP模式；Eureka采用AP方式
