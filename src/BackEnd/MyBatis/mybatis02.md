---
order: 2
date: 2023-04-07
category: 
  - MyBatis
---

# JDBC vs Mybatis

::: warning JDBC 缺点

硬编码

* 注册驱动、获取连接 ①
* SQL语句 ②

操作繁琐

* 手动设置参数 ③
* 手动封装结果集 ④

:::

![ ](./assets/image-20210726203656847.png =500x)

::: tip Mybatis 优化

* 硬编码可以配置到 **配置文件**
* 操作繁琐的地方mybatis都 **自动完成**

:::

![ ](./assets/image-20210726204849309.png)
