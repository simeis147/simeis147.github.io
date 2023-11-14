---
order: 3
date: 2023-04-06
category: 
  - SQL基础
  - DQL
---

# DQL
<!-- more -->
> Data Query Language

```sql
SELECT 
    字段列表
FROM 
    表名列表 
WHERE 
    条件列表
GROUP BY
    分组字段
HAVING
    分组后条件
ORDER BY
    排序字段
LIMIT
    分页限定
```

准备表及一些数据：

```sql
-- 删除stu表
drop table if exists stu;


-- 创建stu表
CREATE TABLE stu (
    id int, -- 编号
    name varchar(20), -- 姓名
    age int, -- 年龄
    sex varchar(5), -- 性别
    address varchar(100), -- 地址
    math double(5,2), -- 数学成绩
    english double(5,2), -- 英语成绩
    hire_date date -- 入学时间
);

-- 添加数据
INSERT INTO stu(id,NAME,age,sex,address,math,english,hire_date) 
VALUES 
(1,'马运',55,'男','杭州',66,78,'1995-09-01'),
(2,'马花疼',45,'女','深圳',98,87,'1998-09-01'),
(3,'马斯克',55,'男','香港',56,77,'1999-09-02'),
(4,'柳白',20,'女','湖南',76,65,'1997-09-05'),
(5,'柳青',20,'男','湖南',86,NULL,'1998-09-01'),
(6,'刘德花',57,'男','香港',99,99,'1998-09-01'),
(7,'张学右',22,'女','香港',99,99,'1998-09-01'),
(8,'德玛西亚',18,'男','南京',56,65,'1994-09-02');
```

## 1. 基础查询

### 1.1 语法

**查询多个字段**

```sql
SELECT 字段列表 FROM 表名;

SELECT * FROM 表名; -- 查询所有数据
```

**去除重复记录**

```sql
SELECT DISTINCT 字段列表 FROM 表名;
```

**起别名**

```sql
AS: AS 也可以省略
```

练习

* 查询name、age两列

  ```sql
  select name,age from stu;
  ```

* 查询所有列的数据

  ```sql
  select * from stu;
  ```

* 查询地址信息

  ```sql
  select address from stu;
  ```

* 去除重复记录

  ```sql
  select distinct address from stu;
  ```

* 查询姓名、数学成绩、英语成绩。并通过as给math和english起别名

  ```sql
  select name,math as 数学成绩,english as 英文成绩 from stu;
  select name,math 数学成绩,english 英文成绩 from stu;
  ```

### 1.2 条件查询

```sql
SELECT 字段列表 FROM 表名 WHERE 条件列表;
```

**条件**

条件列表运算符

![ ](./assets/image-20210722190508272.png)

练习

* 查询年龄大于20岁的学员信息

  ```sql
  select * from stu where age > 20;
  ```

* 查询年龄 大于等于20岁 并且年龄 小于等于30岁 的学员信息

  ```sql
  select * from stu where age >= 20 and  age <= 30;

  select * from stu where age BETWEEN 20 and 30;
  ```

* 查询入学日期在 '1998-09-01' 到 '1999-09-01'  之间的学员信息

  ```sql
  select * 
  from stu 
  where hire_date BETWEEN '1998-09-01' and '1999-09-01';
  ```

* 查询年龄不等于18岁的学员信息

  ```sql
  select * from stu where age != 18;
  select * from stu where age <> 18;
  ```

* 查询年龄等于18岁 或者 年龄等于20岁 或者 年龄等于22岁的学员信息

  ```sql
  select * from stu where age = 18 or age = 20 or age = 22;
  select * from stu where age in (18,20 ,22);
  ```

* 查询英语成绩为 null 的学员信息

  值得注意的是：null值的比较不能使用 =  or !=，需要使用 is  或者 is not

  ```sql
  select * from stu where english is null;
  select * from stu where english is not null;

  select * from stu where english = null; -- 这个语句是不行的
  ```

### 1.3 模糊查询

::: note 使用like关键字, 可以使用通配符进行占位:

（1）_ : 代表单个任意字符  
（2）% : 代表任意个数字符

:::


* 查询姓'马'的学员信息

  ```sql
  select * from stu where name like '马%';
  ```

* 查询第二个字是'花'的学员信息  

  ```sql
  select * from stu where name like '_花%';
  ```

* 查询名字中包含 '德' 的学员信息

  ```sql
  select * from stu where name like '%德%';
  ```

### 1.4 排序查询

```sql
SELECT 字段列表 
FROM 表名 
ORDER BY 排序字段名1 [排序方式1],排序字段名2 [排序方式2] …;
```

::: note 排序方式有两种
ASC ： 升序排列 **（默认值）**  
DESC ： 降序排列
:::

练习

* 查询学生信息，按照年龄升序排列

  ```sql
  select * from stu order by age ;
  ```

* 查询学生信息，按照数学成绩降序排列

  ```sql
  select * from stu order by math desc ;
  ```

* 查询学生信息，按照数学成绩降序排列，如果数学成绩一样，再按照英语成绩升序排列

  ```sql
  select * from stu order by math desc, english asc ;
  ```

### 1.5 聚合函数

**将一列数据作为一个整体，进行纵向计算。**

| 函数名      | 功能                             |
| ----------- | -------------------------------- |
| count(列名) | 统计数量（一般选用不为null的列） |
| max(列名)   | 最大值                           |
| min(列名)   | 最小值                           |
| sum(列名)   | 求和                             |
| avg(列名)   | 平均值                           |

**语法**:

```sql
SELECT 聚合函数名(列名) FROM 表;

值得注意的是：null 值不参与所有聚合函数运算
```

练习

* 统计班级一共有多少个学生

  ```sql
  select count(*) from stu;
  ```

* 查询数学成绩的最高分

  ```sql
  select max(math) from stu;
  ```

* 查询数学成绩的最低分

  ```sql
  select min(math) from stu;
  ```

* 查询数学成绩的总分

  ```sql
  select sum(math) from stu;
  ```

* 查询数学成绩的平均分

  ```sql
  select avg(math) from stu;
  ```

* 查询英语成绩的最低分

  ```sql
  select min(english) from stu;
  ```

### 1.6 分组查询

```sql
SELECT 字段列表 
FROM 表名 
[WHERE 分组前条件限定] 
GROUP BY 分组字段名 
[HAVING 分组后条件过滤];
```

练习

* 查询男同学和女同学各自的数学平均分

  ```sql
  select sex, avg(math) 
  from stu 
  group by sex;
  ```

  > 注意：分组之后，查询的字段为聚合函数和分组字段，查询其他字段无任何意义

  ```sql
  select name, sex, avg(math) 
  from stu 
  group by sex;  -- 这里查询name字段就没有任何意义
  ```

* 查询男同学和女同学各自的数学平均分，以及各自人数

  ```sql
  select sex, avg(math), count(*) 
  from stu 
  group by sex;
  ```

* 查询男同学和女同学各自的数学平均分，以及各自人数，要求：分数低于70分的不参与分组

  ```sql
  select sex, avg(math), count(*) 
  from stu 
  where math > 70 
  group by sex;
  ```

* 查询男同学和女同学各自的数学平均分，以及各自人数，要求：分数低于70分的不参与分组，分组之后人数大于2个的

  ```sql
  select sex, avg(math), count(*) 
  from stu 
  where math > 70 
  group by sex 
  having count(*)  > 2;
  ```

::: warning where 和 having 区别

执行时机不一样：where 是分组之前进行限定，不满足where条件，则不参与分组，而having是分组之后对结果进行过滤。

可判断的条件不一样：where 不能对聚合函数进行判断，having 可以。

:::

### 1.7 分页查询

```sql
SELECT 字段列表 
FROM 表名 
LIMIT  起始索引 , 查询条目数;
```

> 注意： 起始索引从0开始

练习

* 从0开始查询，查询3条数据

  ```sql
  select * from stu limit 0 , 3;
  ```

* 每页显示3条数据，查询第1页数据

  ```sql
  select * from stu limit 0 , 3;
  ```

* 每页显示3条数据，查询第2页数据

  ```sql
  select * from stu limit 3 , 3;
  ```

* 每页显示3条数据，查询第3页数据

  ```sql
  select * from stu limit 6 , 3;
  ```

推导出起始索引计算公式：

```sql
起始索引 = (当前页码 - 1) * 每页显示的条数
```
