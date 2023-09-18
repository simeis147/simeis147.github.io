---
index: true
order: number
date: 2023-09-14
category: 
  - 项目
  - 汇客CRM
---

# 汇客CRM DAY01

## 1 项目模块结构

> 注意: 继承 / 依赖 是两个东西

### 1.1 继承结构

```xml
爷爷: spring-boot

父工程:huike-parent

子工程
    <module>huike-admin</module>
    <module>huike-framework</module>
    <module>huike-system</module>
    <module>huike-common</module>
    <module>huike-clues</module>
    <module>huike-business</module>
    <module>huike-mybatis-review</module>
    <module>huike-contract</module>
    <module>huike-report</module>
    <module>huike-task</module>
```

补充

```xml
maven 父工程
方式1: 可以通过 parent 标签继承父工程, 缺点,只能有一个父工程
方式2: 认干爹: 在 dependencyManagement 中声明父工程 type=pom
     <!-- 依赖声明 -->
    <dependencyManagement>
        <dependencies>
            <!-- SpringBoot的依赖配置-->
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-dependencies</artifactId>
                <version>2.2.13.RELEASE</version>
                <!--                声明这是一个父工程: 干爹-->
                <type>pom</type> 
                <scope>import</scope>
            </dependency>
         </dependencies>   
   </dependencyManagement>    
```

```xml
 <dependencyManagement> 的作用:
     约定版本, 不会下载jar
```

### 1.2 依赖关系

![ ](https://sky-take-out-dcp.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230914154652.png)

项目结构

![ ](https://sky-take-out-dcp.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230914154705.png)

## 2 表结构

![ ](https://sky-take-out-dcp.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230914154722.png)

![ ](https://sky-take-out-dcp.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230914154734.png)

## 3 线索状态

> TbClue.java 实体类中,定义了一个枚举 描述状态  (适用于线索/商机)

```java
public enum StatusType{
    UNFOLLOWED("待跟进","1"),
    FOLLOWING("跟进中","2"),
    RECOVERY("回收","3"),
    FALSE("伪线索/踢回公海","4"),
    DELETED("删除","5"),
    TOBUSINESS("转换商机","6"),
    TOCUSTOMER("转换客户","7");
}
```

## 4 任务4-2

::: tip

1. 项目的异常怎么处理的  
2. 项目的数据是如何返回的: 如果让你返回数据应该怎么做,对象是那个  
3. 验证码:  怎么实现的 (redis 中的 key 和 value是啥)  
4. 日志: 登录日志如何写入系统的  
        其他功能日志咋实现的
        提示: @Log 注解 ---> AOP

:::

### 4.1  结果返回

#### 4.1.1 分页数据返回

```java
package com.huike.common.core.page;

分页数据 返回的是: TableDataInfo 对象
/** 总记录数 */
private long total;

/** 列表数据 */
private List<?> rows;

/** 消息状态码 */
private int code;

/** 消息内容 */
private String msg;
```

#### 4.1.2 简单数据数据返回

```java

package com.huike.common.core.domain;
public class AjaxResult extends HashMap<String, Object>
{
    private static final long serialVersionUID = 1L;

    /** 状态码 */
    public static final String CODE_TAG = "code";

    /** 返回内容 */
    public static final String MSG_TAG = "msg";

    /** 数据对象 */
    public static final String DATA_TAG = "data";
}
```

#### 4.1.3 简单数据数据返回-- 图片

```java
    AjaxResult ajax = AjaxResult.success();
    ajax.put("uuid", uuid);
    ajax.put("img", Base64.encode(os.toByteArray()));
```

Base64.encode() 把图片的而进行文件转成String 方式(Base64 算法)  
前端只需要按照 Base64 解码就可以得到 图片二进制文件,显示  

### 4.2 路径问题

![ ](https://sky-take-out-dcp.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230914170417.png)

### 4.3 验证码

![ ](https://sky-take-out-dcp.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230914170425.png)

::: tip 请求路径 captchaImage

1. 生成uuid
2. 调用工具类生成 公式和结果
   captchaProducerMath.createText();-----> KaptchaTextCreator  (com.huike.framework.config)
   2 * 3 =  ? @ 6
3. 按照 @ 切割
  取出 2*3=? 放入图片
  取出 6 放入redis

:::

### 4.4 项目中的一些工具

:::tip SpringUtils

1. 位置com.huike.common.utils.spring.SpringUtils;
2. 作用,可以不使用@Autowired 就可以获取spring容器中的对象
  SpringUtils.getBean("scheduledExecutorService");

:::

::: tip MessageUtils

1. 是一个工具类,是封装了 spring 的MessageSource
2. 从配置文件中 读取信息  resources/i18n/messages.properties
3. 用于项目的国际化 internationalization (i18n)

:::

### 4.5 多线程

```java
// 传统方式
new Thread(new Runnable() {
                @Override
                public void run() {
                    // 记录日志
                }
});
// 开启多线程,每访问一次 就开启一个线程,有可能会同时访问的人过多,线程过多,系统宕机
```

::: tip 线程池
  1 项目启动时 创建 ( 初始化线程池
  2 从线程池获取线程执行任务
:::

![ ](https://sky-take-out-dcp.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230914170433.png)

项目中 com.huike.framework.config.ThreadPoolConfig;

```java
@Bean(name = "threadPoolTaskExecutor")
public ThreadPoolTaskExecutor threadPoolTaskExecutor()
{
    ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
    executor.setMaxPoolSize(maxPoolSize);
    executor.setCorePoolSize(corePoolSize);
    executor.setQueueCapacity(queueCapacity);
    executor.setKeepAliveSeconds(keepAliveSeconds);
    // 线程池对拒绝任务(无线程可用)的处理策略
    executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
    return executor;
}
```

### 4.6 日志

登录

![ ](https://sky-take-out-dcp.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230914170442.png)

### 4.7 注解方式的日志

::: tip 注解的作用

1 注解的本质: 就是一个标记,标识?  一个方法上有注解 只能证明有标记
2 注解必须配合工具类使用
  
:::

aop 切面

com.huike.framework.aspectj.LogAspect

![ ](https://sky-take-out-dcp.oss-cn-shenzhen.aliyuncs.com/BackEnd/SpringCloud/20230914170448.png)

统一异常处理

```java
package com.huike.framework.web.exception;

/**
 * 全局异常处理器
 */
@RestControllerAdvice
public class GlobalExceptionHandler {
    private static final Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);
    ....
}

```
