---
order: 2
date: 2023-04-06
category: 
  - SQL基础
  - DML
---

# DML
<!-- more -->
> Data Manipulation Language

DML主要是对**数据**进行 增（insert）删（delete）改（update）操作。

## 1 添加数据

* **给指定列添加数据**

```sql
INSERT INTO 表名(列名1,列名2,…) VALUES(值1,值2,…);
```

* **给全部列添加数据**

```sql
INSERT INTO 表名 VALUES(值1,值2,…);
```

* **批量添加数据**

```sql
INSERT INTO 表名(列名1,列名2,…) VALUES(值1,值2,…),(值1,值2,…),(值1,值2,…)…;

INSERT INTO 表名 VALUES(值1,值2,…),(值1,值2,…),(值1,值2,…)…;
```

练习:

```sql
select * from stu;

-- 给指定列添加数据
INSERT INTO stu (id, NAME) 
VALUES (1, '张三');

-- 给所有列添加数据，列名的列表可以省略的
INSERT INTO stu (id,NAME,sex,birthday,score,email,tel,STATUS) 
VALUES (2,'李四','男','1999-11-11',88.88,'lisi@itcast.cn','13888888888',1);

INSERT INTO stu 
VALUES (2,'李四','男','1999-11-11',88.88,'lisi@itcast.cn','13888888888',1);

-- 批量添加数据
INSERT INTO stu VALUES 
    (2,'李四','男','1999-11-11',88.88,'lisi@itcast.cn','13888888888',1),
    (2,'李四','男','1999-11-11',88.88,'lisi@itcast.cn','13888888888',1),
    (2,'李四','男','1999-11-11',88.88,'lisi@itcast.cn','13888888888',1);
```

## 2 删除数据

```sql
DELETE FROM 表名 
[WHERE 条件] ;
```

练习:

```sql
-- 删除张三记录
delete from stu 
where name = '张三';

-- 删除stu表中所有的数据
delete from stu;
```

## 3 修改数据

```sql
UPDATE 表名 
SET 列名1=值1,列名2=值2,… 
[WHERE 条件] ;
```

练习:

将张三的性别改为女

  ```sql
  update stu 
  set sex = '女' 
  where name = '张三';
  ```

将张三的生日改为 1999-12-12 分数改为99.99

  ```sql
  update stu 
  set birthday = '1999-12-12', score = 99.99 
  where name = '张三';
  ```

注意：如果update语句没有加where条件，则会将表中所有数据全部修改！

  ```sql
  update stu 
  set sex = '女';
  ```

  ![ ](./assets/image-20210722204233305.png)
