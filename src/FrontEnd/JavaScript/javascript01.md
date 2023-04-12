---
order: 1
date: 2023-03-10
category: 
  - JavaScript
---

# 基础语法
<!-- more -->

## 书写语法

| api              | 描述             |
| ---------------- | ---------------- |
| window.alert()   | 警告框           |
| document.write() | 在HTML 输出内容  |
| console.log()    | 写入浏览器控制台 |

## 变量

| 关键字 | 解释                                                         |
| ------------------- | ------------------------------------------------------------ |
|  var      | 早期 ECMAScript5 中用于变量声明的关键字                        |
|  let     | ECMAScript6 中新增的用于变量声明的关键字，相比较var，let只在代码块内生效 |
|  const&nbsp;&nbsp;&nbsp;&nbsp;   | 声明常量的，常量一旦声明，不能修改                           |

- JavaScript 是一门弱类型语言，变量可以存放不同类型的值 。

## 数据类型和运算符

虽然js是弱数据类型的语言，但是js中也存在数据类型  
js中的数据类型分为 ：**原始类型** 和 **引用类型**

| 数据类型  | 描述                                               |
| --------- | -------------------------------------------------- |
| number    | 数字（整数、小数、NaN(Not a Number)）              |
| string    | 字符串，单双引皆可                                 |
| boolean   | 布尔。true，false                                  |
| null      | 对象为空                                           |
| undefined | 当声明的变量未初始化时，该变量的默认值是 undefined |

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS-数据类型</title>
</head>
<body>

</body>
<script>

    //原始数据类型
    alert(typeof 3); //number
    alert(typeof 3.14); //number

    alert(typeof "A"); //string
    alert(typeof 'Hello');//string

    alert(typeof true); //boolean
    alert(typeof false);//boolean

    alert(typeof null); //object 

    var a ;
    alert(typeof a); //undefined
    
</script>
</html>
```

**JavaScript和Java不一致的地方**

- \==：只比较值是否相等，不区分数据类型，哪怕类型不一致，也会自动转换类型进行值得比较
- ===：不光比较值，还要比较类型，如果类型不一致，直接返回false

**0 , null , undefined , "" , NaN 理解成false,反之理解成true**。

```js
 if(0){ //false
    alert("0 转换为false");
 }
```

## 函数

通过关键字function来定义。

### 第一种定义格式

```js
function 函数名(参数1,参数2..){
    要执行的代码
}
```

```js
function add(a, b){
    return a + b;
}
```

### 第二种定义格式

```js
var functionName = function (参数1,参数2..){   
    //要执行的代码
}
```

```html
<script>
    //定义函数-1
    // function add(a,b){
    //    return  a + b;
    // }

    //定义函数-2
    var add = function(a,b){
        return  a + b;
    }

    var result = add(10,20);
    alert(result);
</script>
```

在JavaScript中，**函数的调用只需要名称正确即可，参数列表不管的。**
