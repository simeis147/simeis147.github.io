---
order: 1
date: 2023-04-08
category: 
  - SpringBoot
---

# SpringBoot请求响应

![ ](./assets/springboot01/image-20220826161735076.png)

SpringBoot进行web程序开发时，内置了一个核心的Servlet程序 DispatcherServlet，称之为`核心控制器`  
DispatcherServlet 负责接收页面发送的请求，然后根据执行的规则，将请求再转发给后面的请求处理器Controller，请求处理器处理完请求之后，最终再由DispatcherServlet给浏览器响应数据。

![ ](./assets/springboot01/image-20220826165340157.png)

请求到达Tomcat之后，Tomcat会负责解析这些请求数据，解析后的请求数据会传递给Servlet程序的 HttpServletRequest 对象，也意味着 HttpServletRequest 对象就可以获取到请求数据。 而Tomcat，还给Servlet程序传递了一个参数 HttpServletResponse，通过这个对象，可以给浏览器设置响应数据 。

![ ](./assets/springboot01/image-20220826171407354.png)

![ ](./assets/springboot01/image-20220826171454775.png)

• BS架构：Browser/Server，浏览器/服务器架构模式。客户端只需要浏览器，应用程序的逻辑和数据都存储在服务端。

## 1. 请求

### 1.1 Postman

一款功能强大的网页调试与发送网页HTTP请求的Chrome插件。

  > Postman原是Chrome浏览器的插件，可以模拟浏览器向后端服务器发起任何形式(如:get、post)的HTTP请求
  >
  > 使用Postman还可以在发起请求时，携带一些请求参数、请求头等信息

**作用**：常用于进行接口测试

**特征**：简单、实用、美观、大方

### 1.2 简单参数

![ ](./assets/springboot01/image-20220826180550583.png)

::: info 如何接收传递过来的普通参数数据呢？

1. 原始方式
2. SpringBoot方式

:::

#### 1.2.1 原始方式

在原始的Web程序当中，需要通过Servlet中提供的API：HttpServletRequest（请求对象），获取请求的相关信息。

> Tomcat接收到http请求时：把请求的相关信息封装到HttpServletRequest对象中

Controller获取Request对象，直接在方法的形参中声明 HttpServletRequest 对象

```json
//根据指定的参数名获取请求参数的数据值
String  request.getParameter("参数名")
```

```java
@RestController
public class RequestController {
    //原始方式
    @RequestMapping("/simpleParam")
    public String simpleParam(HttpServletRequest request){
        // http://localhost:8080/simpleParam?name=Tom&age=10
        // 请求参数： name=Tom&age=10   （有2个请求参数）
        // 第1个请求参数： name=Tom   参数名:name，参数值:Tom
        // 第2个请求参数： age=10     参数名:age , 参数值:10

        String name = request.getParameter("name");//name就是请求参数名
        String ageStr = request.getParameter("age");//age就是请求参数名

        int age = Integer.parseInt(ageStr);//需要手动进行类型转换
        System.out.println(name+"  :  "+age);
        return "OK";
    }
}
```

> 仅做了解

#### 1.2.2 SpringBoot方式

在Springboot的环境中，对原始的API进行了封装，接收参数的形式更加简单。  
如果是简单参数，参数名与形参变量名相同，定义同名的形参即可接收参数。

```java
@RestController
public class RequestController {
    // http://localhost:8080/simpleParam?name=Tom&age=10
    // 第1个请求参数： name=Tom   参数名:name，参数值:Tom
    // 第2个请求参数： age=10     参数名:age , 参数值:10

    @RequestMapping("/simpleParam")
    public String simpleParam(String name , Integer age ){//形参名和请求参数名保持一致
        System.out.println(name+"  :  "+age);
        return "OK";
    }
}
```

**postman测试( GET 请求)：**

![ ](./assets/springboot01/image-20221203122405075.png)

**postman测试( POST请求 )：**

![ ](./assets/springboot01/image-20220826181117898.png)

> 结论：不论是GET请求还是POST请求，对于简单参数来讲，只要保证**请求参数名和Controller方法中的形参名保持一致**，就可以获取到请求参数中的数据值。

#### 1.2.3 参数名不一致

```java
@RestController
public class RequestController {
    // http://localhost:8080/simpleParam?name=Tom&age=20
    // 请求参数名：name

    //springboot方式
    @RequestMapping("/simpleParam")
    public String simpleParam(String username , Integer age ){//请求参数名和形参名不相同
        System.out.println(username+"  :  "+age);
        return "OK";
    }
}
```

运行后controller方法中的username值为null，age值为20

::: tip 结论

请求参数名和controller方法中的形参名不一致时，无法接收到请求数据

:::

解决方案：在方法形参前面加上 @RequestParam 注解然后通过value属性执行请求参数名，从而完成映射

```java
@RestController
public class RequestController {
    // http://localhost:8080/simpleParam?name=Tom&age=20
    // 请求参数名：name

    @RequestMapping("/simpleParam")
    public String simpleParam(@RequestParam("name") String username , Integer age ){
        System.out.println(username+"  :  "+age);
        return "OK";
    }
}
```

> **注意事项：**
>
> @RequestParam中的required属性默认为true，代表该请求参数必须传递，如果不传递将报错
>
> ![ ](./assets/springboot01/image-20221203130726310.png)
>
> 如果该参数是可选的，可以将required属性设置为false
>
> ```java
> @RequestMapping("/simpleParam")
> public String simpleParam(@RequestParam(name = "name", required = false) String username, Integer age){
>  System.out.println(username+ ":" + age);
>  return "OK";
> }
> ```

### 1.3 实体参数

将请求参数封装到一个实体类对象中，完成数据封装需要**请求参数名与实体类的属性名相同**

![ ](./assets/springboot01/image-20221203131954932.png)

#### 1.3.1 简单实体对象

定义POJO实体类：

```java
public class User {
    private String name;
    private Integer age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}

```

Controller方法：

```java
@RestController
public class RequestController {
    //实体参数：简单实体对象
    @RequestMapping("/simplePojo")
    public String simplePojo(User user){
        System.out.println(user);
        return "OK";
    }
}
```

Postman测试：

- 参数名和实体类属性名一致时

![ ](./assets/springboot01/image-20221203161246168.png)

- 参数名和实体类属性名不一致时

![ ](./assets/springboot01/image-20221203161004349.png)

#### 1.3.2 复杂实体对象

在实体类中有一个或多个属性，也是实体对象类型的

- User类中有一个Address类型的属性（Address是一个实体类）

![ ](./assets/springboot01/image-20221203160447953.png)

复杂实体对象的封装，需要遵守如下规则：

**请求参数名与形参对象属性名相同，按照对象层次结构关系即可接收嵌套实体类属性参数。**

定义POJO实体类：

- Address实体类

```java
public class Address {
    private String province;
    private String city;

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    @Override
    public String toString() {
        return "Address{" +
                "province='" + province + '\'' +
                ", city='" + city + '\'' +
                '}';
    }
}
```

- User实体类

```java
public class User {
    private String name;
    private Integer age;
    private Address address; //地址对象

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", address=" + address +
                '}';
    }
}
```

Controller方法：

```java
@RestController
public class RequestController {
    //实体参数：复杂实体对象
    @RequestMapping("/complexPojo")
    public String complexPojo(User user){
        System.out.println(user);
        return "OK";
    }
}
```

Postman测试：

![ ](./assets/springboot01/image-20221203162706175.png)

### 1.4 数组集合参数

使用场景：在HTML的表单中，有一个表单项是支持多选的(复选框)，可以提交选择的多个值

![ ](./assets/springboot01/image-20221203164114083.png)

多个值是怎么提交的呢？多个值也是一个一个的提交

![ ](./assets/springboot01/image-20221203164944144.png)

后端程序接收上述多个值的方式有两种：

1. 数组
2. 集合

#### 1.4.1 数组

数组参数：**请求参数名与形参数组名称相同且请求参数为多个，定义数组类型形参即可接收参数**

![ ](./assets/springboot01/image-20221203190218468.png)

Controller方法：

```java
@RestController
public class RequestController {
    //数组集合参数
    @RequestMapping("/arrayParam")
    public String arrayParam(String[] hobby){
        System.out.println(Arrays.toString(hobby));
        return "OK";
    }
}
```

Postman测试：

在前端请求时，有两种传递形式：

方式一： xxxxxxxxxx?hobby=game&hobby=java

![ ](./assets/springboot01/image-20221203191732601.png)

方式二：xxxxxxxxxxxxx?hobby=game,java

![ ](./assets/springboot01/image-20221203191822996.png)

#### 1.4.2 集合

集合参数：**请求参数名与形参集合对象名相同且请求参数为多个，@RequestParam 绑定参数关系**

> 默认情况下，请求中参数名相同的多个值，是封装到数组。如果要封装到集合，要使用@RequestParam绑定参数关系

![ ](./assets/springboot01/image-20221203211640646.png)

Controller方法：

```java
@RestController
public class RequestController {
    //数组集合参数
    @RequestMapping("/listParam")
    public String listParam(@RequestParam List<String> hobby){
        System.out.println(hobby);
        return "OK";
    }
}
```

Postman测试：

方式一： xxxxxxxxxx?hobby=game&hobby=java

![ ](./assets/springboot01/image-20221203212221939.png)

方式二：xxxxxxxxxxxxx?hobby=game,java

![ ](./assets/springboot01/image-20221203212024679.png)

### 1.5 日期参数

![ ](./assets/springboot01/image-20220826194159343.png)

日期的格式多种多样（如：2022-12-12 10:05:45 、2022/12/12 10:05:45），对于日期类型的参数在进行封装的时候，需要通过 @DateTimeFormat 注解，以及其pattern属性来设置日期的格式。

![ ](./assets/springboot01/image-20221203213120692.png)

- @DateTimeFormat注解的pattern属性中指定了哪种日期格式，前端的日期参数就必须按照指定的格式传递
- 后端controller方法中，需要使用Date类型或LocalDateTime类型，来封装传递的参数

Controller方法：

```java
@RestController
public class RequestController {
    //日期时间参数
   @RequestMapping("/dateParam")
    public String dateParam(@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss") LocalDateTime updateTime){
        System.out.println(updateTime);
        return "OK";
    }
}
```

Postman测试：

![ ](./assets/springboot01/image-20221203214600716.png)

### 1.6 JSON参数

1. Postman在发送请求时，如何传递json格式的请求参数
2. 在服务端的controller方法中，如何接收json格式的请求参数

Postman发送JSON格式数据：

![ ](./assets/springboot01/image-20221203225623337.png)

服务端Controller方法接收JSON格式数据：

- 传递json格式的参数，在Controller中会使用实体类进行封装。
- 封装规则：**JSON数据键名与形参对象属性名相同，定义POJO类型形参即可接收参数。需要使用 @RequestBody 标识**

![ ](./assets/springboot01/image-20221203230457901.png)

> @RequestBody注解：将JSON数据映射到形参的实体类对象中（JSON中的key和实体类中的属性名保持一致）

实体类：Address

```java
public class Address {
    private String province;
    private String city;
    
    //省略GET , SET 方法
}
```

实体类：User

```java
public class User {
    private String name;
    private Integer age;
    private Address address;
    
    //省略GET , SET 方法
}    
```

Controller方法：

```java
@RestController
public class RequestController {
    //JSON参数
    @RequestMapping("/jsonParam")
    public String jsonParam(@RequestBody User user){
        System.out.println(user);
        return "OK";
    }
}
```

Postman测试：

![ ](./assets/springboot01/image-20221203231803000.png)

### 1.7 路径参数

传统的开发中请求参数是放在请求体(POST请求)传递 或 跟在URL后面通过?key=value的形式传递(GET请求)。

![ ](./assets/springboot01/image-20221203235715804.png)

现在的开发中经常还会直接在请求的URL中传递参数

```md
http://localhost:8080/user/1
http://localhost:880/user/1/0
```

路径参数：

- 前端：通过请求URL直接传递参数
- 后端：使用\{…\}来标识该路径参数，需要使用 @PathVariable 获取路径参数

![ ](./assets/springboot01/image-20221204001520756.png)

Controller方法：

```java
@RestController
public class RequestController {
    //路径参数
    @RequestMapping("/path/{id}")
    public String pathParam(@PathVariable Integer id){
        System.out.println(id);
        return "OK";
    }
}
```

Postman测试：

![ ](./assets/springboot01/image-20221204002040184.png)

**传递多个路径参数：**

Postman测试：

![ ](./assets/springboot01/image-20221204002306288.png)

Controller方法：

```java
@RestController
public class RequestController {
    //路径参数
    @RequestMapping("/path/{id}/{name}")
    public String pathParam2(@PathVariable Integer id, @PathVariable String name){
        System.out.println(id+ " : " +name);
        return "OK";
    }
}
```

## 2. 响应

HTTL协议的交互方式：**请求响应模式（有请求就有响应）**

### 2.1 @ResponseBody

controller方法中的return的结果，怎么就可以响应给浏览器呢？

答案：使用@ResponseBody注解

::: tip @ResponseBody注解

类型：方法注解、类注解  

位置：书写在Controller方法上或类上  

作用：将方法返回值直接响应给浏览器  

- 如果返回值类型是实体对象/集合，将会转换为JSON格式后再响应给浏览器

:::

在所书写的Controller中，只在类上添加了@RestController注解、方法添加了@RequestMapping注解，并没有使用@ResponseBody注解，怎么给浏览器响应呢？

```java
@RestController
public class HelloController {
    @RequestMapping("/hello")
    public String hello(){
        System.out.println("Hello World ~");
        return "Hello World ~";
    }
}
```

原因：在类上添加的@RestController注解，是一个组合注解。

- @RestController = @Controller + @ResponseBody

@RestController源码：

```java
@Target({ElementType.TYPE})   //元注解（修饰注解的注解）
@Retention(RetentionPolicy.RUNTIME)  //元注解
@Documented    //元注解
@Controller   
@ResponseBody 
public @interface RestController {
    @AliasFor(
        annotation = Controller.class
    )
    String value() default "";
}
```

**结论**：在类上添加@RestController就相当于添加了@ResponseBody注解。

```java
@RestController
public class ResponseController {
    //响应字符串
    @RequestMapping("/hello")
    public String hello(){
        System.out.println("Hello World ~");
        return "Hello World ~";
    }
    //响应实体对象
    @RequestMapping("/getAddr")
    public Address getAddr(){
        Address addr = new Address();//创建实体类对象
        addr.setProvince("广东");
        addr.setCity("深圳");
        return addr;
    }
    //响应集合数据
    @RequestMapping("/listAddr")
    public List<Address> listAddr(){
        List<Address> list = new ArrayList<>();//集合对象
        
        Address addr = new Address();
        addr.setProvince("广东");
        addr.setCity("深圳");

        Address addr2 = new Address();
        addr2.setProvince("陕西");
        addr2.setCity("西安");

        list.add(addr);
        list.add(addr2);
        return list;
    }
}
```

测试效果如下：

![ ](./assets/springboot01/image-20221204172339375.png)

![ ](./assets/springboot01/image-20221204172705426.png)

### 2.2 统一响应结果

![ ](./assets/springboot01/image-20221204174052622.png)

真实的项目开发中，无论是哪种方法，都会定义一个统一的返回结果

![ ](./assets/springboot01/image-20221204174537686.png)

> 前端：只需要按照统一格式的返回结果进行解析(仅一种解析方案)，就可以拿到数据。

统一的返回结果使用类来描述，在这个结果中包含：

- 响应状态码：当前请求是成功，还是失败

- 状态码信息：给页面的提示信息

- 返回的数据：给前端响应的数据（字符串、对象、集合）

定义在一个实体类Result来包含以上信息，代码如下：

```java
public class Result {
    private Integer code;//响应码，1 代表成功; 0 代表失败
    private String msg;  //响应码 描述字符串
    private Object data; //返回的数据

    public Result() { }
    public Result(Integer code, String msg, Object data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    //增删改 成功响应(不需要给前端返回数据)
    public static Result success(){
        return new Result(1,"success",null);
    }
    //查询 成功响应(把查询结果做为返回数据响应给前端)
    public static Result success(Object data){
        return new Result(1,"success",data);
    }
    //失败响应
    public static Result error(String msg){
        return new Result(0,msg,null);
    }
}
```

改造Controller：

```java
@RestController
public class ResponseController { 
    //响应统一格式的结果
    @RequestMapping("/hello")
    public Result hello(){
        System.out.println("Hello World ~");
        //return new Result(1,"success","Hello World ~");
        return Result.success("Hello World ~");
    }

    //响应统一格式的结果
    @RequestMapping("/getAddr")
    public Result getAddr(){
        Address addr = new Address();
        addr.setProvince("广东");
        addr.setCity("深圳");
        return Result.success(addr);
    }

    //响应统一格式的结果
    @RequestMapping("/listAddr")
    public Result listAddr(){
        List<Address> list = new ArrayList<>();

        Address addr = new Address();
        addr.setProvince("广东");
        addr.setCity("深圳");

        Address addr2 = new Address();
        addr2.setProvince("陕西");
        addr2.setCity("西安");

        list.add(addr);
        list.add(addr2);
        return Result.success(list);
    }
}
```

使用Postman测试：

![ ](./assets/springboot01/image-20221204180946963.png)

![ ](./assets/springboot01/image-20221204180744084.png)

### 2.3 案例

#### 2.3.1 需求说明

需求：加载并解析xml文件中的数据，完成数据处理，并在页面展示

![ ](./assets/springboot01/image-20221204185928260.png)

#### 2.3.2 准备工作

1. XML文件
2. 工具类
3. 前端页面资源

> 在SpringBoot项目中，静态资源(html，css，js等前端资源)默认可以存放的目录：
>
> - classpath:/static/
> - classpath:/public/
> - classpath:/resources/
> - classpath:/META-INF/resources/
>
> classpath：
>
> - 代表的是类路径，在maven的项目中，其实指的就是 src/main/resources 或者 src/main/java，但是java目录是存放java代码的，所以相关的配置文件及静态资源文档，就放在 src/main/resources下。

#### 2.3.3 实现步骤

1. 在pom.xml文件中引入dom4j的依赖，用于解析XML文件

   ```xml
   <dependency>
       <groupId>org.dom4j</groupId>
       <artifactId>dom4j</artifactId>
       <version>2.1.3</version>
   </dependency>
   ```

2. 解析XML的工具类XMLParserUtils、实体类Emp、XML文件emp.xml

   ![ ](./assets/springboot01/image-20221204182828547.png)

3. 引入资料中提供的静态页面文件，放在resources下的static目录下

   ![ ](./assets/springboot01/image-20221204183044848.png)

4. 创建EmpController类，编写Controller程序，处理请求，响应数据

   ![ ](./assets/springboot01/image-20221204184313822.png)

#### 2.3.4 代码实现

Contriller代码：

```java
@RestController
public class EmpController {
    @RequestMapping("/listEmp")
    public Result list(){
        //1. 加载并解析emp.xml
        String file = this.getClass().getClassLoader().getResource("emp.xml").getFile();
        //System.out.println(file);
        List<Emp> empList = XmlParserUtils.parse(file, Emp.class);

        //2. 对数据进行转换处理 - gender, job
        empList.stream().forEach(emp -> {
            //处理 gender 1: 男, 2: 女
            String gender = emp.getGender();
            if("1".equals(gender)){
                emp.setGender("男");
            }else if("2".equals(gender)){
                emp.setGender("女");
            }

            //处理job - 1: 讲师, 2: 班主任 , 3: 就业指导
            String job = emp.getJob();
            if("1".equals(job)){
                emp.setJob("讲师");
            }else if("2".equals(job)){
                emp.setJob("班主任");
            }else if("3".equals(job)){
                emp.setJob("就业指导");
            }
        });
        //3. 响应数据
        return Result.success(empList);
    }
}
```

统一返回结果实体类：

```java
public class Result {
    private Integer code ;//1 成功 , 0 失败
    private String msg; //提示信息
    private Object data; //数据 date

    public Result() {
    }
    public Result(Integer code, String msg, Object data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }
    public Integer getCode() {
        return code;
    }
    public void setCode(Integer code) {
        this.code = code;
    }
    public String getMsg() {
        return msg;
    }
    public void setMsg(String msg) {
        this.msg = msg;
    }
    public Object getData() {
        return data;
    }
    public void setData(Object data) {
        this.data = data;
    }
    public static Result success(Object data){
        return new Result(1, "success", data);
    }
    public static Result success(){
        return new Result(1, "success", null);
    }
    public static Result error(String msg){
        return new Result(0, msg, null);
    }
}
```

#### 2.3.5 测试

![ ](./assets/springboot01/image-20221204190341389.png)

打开浏览器，在浏览器地址栏输入： [http://localhost:8080/emp.html](http://localhost:8080/emp.html)

![ ](./assets/springboot01/image-20221204185455556.png)

#### 2.3.6 问题分析

案例中：解析XML数据，获取数据的代码，处理数据的逻辑的代码，给页面响应的代码全部都堆积在一起了，全部都写在controller方法中了

![ ](./assets/springboot01/image-20221204190712411.png)

- 当我们要修改操作数据部分的代码，需要改动Controller

- 当我们要完善逻辑处理部分的代码，需要改动Controller

- 当我们需要修改数据响应的代码，还是需要改动Controller

## 3. 分层解耦

### 3.1 三层架构

#### 3.1.1 介绍

> 单一职责原则：一个类或一个方法，就只做一件事情，只管一块功能。
>
> 这样就可以让类、接口、方法的复杂度更低，可读性更强，扩展性更好，也更利用后期的维护。

![ ](./assets/springboot01/image-20221204191650390.png)

- 数据访问：负责业务数据的维护操作，包括增、删、改、查等操作  
- 逻辑处理：负责业务逻辑处理的代码  
- 请求处理、响应数据：负责，接收页面的请求，给页面响应数据  

![ ](./assets/springboot01/image-20221204193837678.png)

- Controller：控制层。接收前端发送的请求，对请求进行处理，并响应数据。
- Service：业务逻辑层。处理具体的业务逻辑。
- Dao：数据访问层(Data Access Object)，也称为持久层。负责数据访问操作，包括数据的增、删、改、查。

基于三层架构的程序执行流程：

![ ](./assets/springboot01/image-20221204194207812.png)

- 前端发起的请求，由Controller层接收（Controller响应数据给前端）
- Controller层调用Service层来进行逻辑处理（Service层处理完后，把处理结果返回给Controller层）
- Serivce层调用Dao层（逻辑处理过程中需要用到的一些数据要从Dao层获取）
- Dao层操作文件中的数据（Dao拿到的数据会返回给Service层）

#### 3.1.2 代码拆分

- 控制层包名：xxxx.controller
- 业务逻辑层包名：xxxx.service
- 数据访问层包名：xxxx.dao

![ ](./assets/springboot01/image-20221204195812200.png)

**控制层：** 接收前端发送的请求，对请求进行处理，并响应数据

```java
@RestController
public class EmpController {
    //业务层对象
    private EmpService empService = new EmpServiceA();

    @RequestMapping("/listEmp")
    public Result list(){
        //1. 调用service层, 获取数据
        List<Emp> empList = empService.listEmp();

        //3. 响应数据
        return Result.success(empList);
    }
}
```

**业务逻辑层：** 处理具体的业务逻辑

- 业务接口

```java
//业务逻辑接口（制定业务标准）
public interface EmpService {
    //获取员工列表
    public List<Emp> listEmp();
}
```

- 业务实现类

```java
//业务逻辑实现类（按照业务标准实现）
public class EmpServiceA implements EmpService {
    //dao层对象
    private EmpDao empDao = new EmpDaoA();

    @Override
    public List<Emp> listEmp() {
        //1. 调用dao, 获取数据
        List<Emp> empList = empDao.listEmp();

        //2. 对数据进行转换处理 - gender, job
        empList.stream().forEach(emp -> {
            //处理 gender 1: 男, 2: 女
            String gender = emp.getGender();
            if("1".equals(gender)){
                emp.setGender("男");
            }else if("2".equals(gender)){
                emp.setGender("女");
            }

            //处理job - 1: 讲师, 2: 班主任 , 3: 就业指导
            String job = emp.getJob();
            if("1".equals(job)){
                emp.setJob("讲师");
            }else if("2".equals(job)){
                emp.setJob("班主任");
            }else if("3".equals(job)){
                emp.setJob("就业指导");
            }
        });
        return empList;
    }
}
```

**数据访问层：** 负责数据的访问操作，包含数据的增、删、改、查

- 数据访问接口

```java
//数据访问层接口（制定标准）
public interface EmpDao {
    //获取员工列表数据
    public List<Emp> listEmp();
}
```

- 数据访问实现类

```java
//数据访问实现类
public class EmpDaoA implements EmpDao {
    @Override
    public List<Emp> listEmp() {
        //1. 加载并解析emp.xml
        String file = this.getClass().getClassLoader().getResource("emp.xml").getFile();
        System.out.println(file);
        List<Emp> empList = XmlParserUtils.parse(file, Emp.class);
        return empList;
    }
}
```

![ ](./assets/springboot01/image-20221204201342490.png)

::: tip 三层架构的好处

1. 复用性强
2. 便于维护
3. 利用扩展

:::

### 3.2 分层解耦

#### 3.2.1 耦合问题

::: info 软件开发涉及到的两个概念：内聚和耦合

- 内聚：软件中各个功能模块内部的功能联系。

- 耦合：衡量软件中各个层/模块之间的依赖、关联的程度。

:::

**软件设计原则：高内聚低耦合。**

> 高内聚指的是：一个模块中各个元素之间的联系的紧密程度，如果各个元素(语句、程序段)之间的联系程度越高，则内聚性越高，即 "高内聚"。
>
> 低耦合指的是：软件中各个层、模块之间的依赖关联程序越低越好。

程序中高内聚的体现：

- EmpServiceA类中只编写了和员工相关的逻辑处理代码

![ ](./assets/springboot01/image-20221204202531571.png)

程序中耦合代码的体现：

- 把业务类变为EmpServiceB时，需要修改controller层中的代码

![ ](./assets/springboot01/image-20221204203904900.png)

高内聚、低耦合的目的是使程序模块的可重用性、移植性大大增强。

![ ](./assets/springboot01/image-20220828215549593.png)

#### 3.2.2  解耦思路

![ ](./assets/springboot01/image-20221204204916033.png)

怎么解耦呢？

- 首先不能在EmpController中使用new对象。代码如下：

![ ](./assets/springboot01/image-20221204205328069.png)

- 不能new，就意味着没有业务层对象（程序运行就报错），怎么办呢？

::: tip 解决思路

- 提供一个容器，容器中存储一些对象(例：EmpService对象)

- controller程序从容器中获取EmpService类型的对象

:::

想要实现上述解耦操作，涉及Spring中的两个核心概念：

- **控制反转：** Inversion Of Control，简称IOC。对象的创建控制权由程序自身转移到外部（容器），这种思想称为控制反转。

  > 对象的创建权由程序员主动创建转移到容器(由容器创建、管理对象)。这个容器称为：IOC容器或Spring容器

- **依赖注入：** Dependency Injection，简称DI。容器为应用程序提供运行时，所依赖的资源，称之为依赖注入。

  > 程序运行时需要某个资源，此时容器就为其提供这个资源。
  >
  > 例：EmpController程序运行时需要EmpService对象，Spring容器就为其提供并注入EmpService对象

IOC容器中创建、管理的对象，称之为：bean对象

### 3.3 IOC&DI

#### 3.3.1 IOC&DI入门

完成Controller层、Service层、Dao层的代码解耦

::: tip 思路

1. 删除Controller层、Service层中new对象的代码
2. Service层及Dao层的实现类，交给IOC容器管理
3. 为Controller及Service注入运行时依赖的对象
   - Controller程序中注入依赖的Service层对象
   - Service程序中注入依赖的Dao层对象

:::

第1步：删除Controller层、Service层中new对象的代码

![ ](./assets/springboot01/image-20221204212807207.png)

第2步：Service层及Dao层的实现类，交给IOC容器管理

- 使用Spring提供的注解：@Component ，就可以实现类交给IOC容器管理

![ ](./assets/springboot01/image-20221204213328034.png)

第3步：为Controller及Service注入运行时依赖的对象

- 使用Spring提供的注解：@Autowired ，就可以实现程序运行时IOC容器自动注入需要的依赖对象

![ ](./assets/springboot01/image-20221204213859112.png)

完整的三层代码：

- **Controller层：**

```java
@RestController
public class EmpController {

    @Autowired //运行时,从IOC容器中获取该类型对象,赋值给该变量
    private EmpService empService ;

    @RequestMapping("/listEmp")
    public Result list(){
        //1. 调用service, 获取数据
        List<Emp> empList = empService.listEmp();

        //3. 响应数据
        return Result.success(empList);
    }
}
```

- **Service层：**

```java
@Component //将当前对象交给IOC容器管理,成为IOC容器的bean
public class EmpServiceA implements EmpService {

    @Autowired //运行时,从IOC容器中获取该类型对象,赋值给该变量
    private EmpDao empDao ;

    @Override
    public List<Emp> listEmp() {
        //1. 调用dao, 获取数据
        List<Emp> empList = empDao.listEmp();

        //2. 对数据进行转换处理 - gender, job
        empList.stream().forEach(emp -> {
            //处理 gender 1: 男, 2: 女
            String gender = emp.getGender();
            if("1".equals(gender)){
                emp.setGender("男");
            }else if("2".equals(gender)){
                emp.setGender("女");
            }

            //处理job - 1: 讲师, 2: 班主任 , 3: 就业指导
            String job = emp.getJob();
            if("1".equals(job)){
                emp.setJob("讲师");
            }else if("2".equals(job)){
                emp.setJob("班主任");
            }else if("3".equals(job)){
                emp.setJob("就业指导");
            }
        });
        return empList;
    }
}
```

**Dao层：**

```java
@Component //将当前对象交给IOC容器管理,成为IOC容器的bean
public class EmpDaoA implements EmpDao {
    @Override
    public List<Emp> listEmp() {
        //1. 加载并解析emp.xml
        String file = this.getClass().getClassLoader().getResource("emp.xml").getFile();
        System.out.println(file);
        List<Emp> empList = XmlParserUtils.parse(file, Emp.class);
        return empList;
    }
}
```

运行测试：

- 启动SpringBoot引导类，打开浏览器，输入：[http://localhost:8080/emp.html](http://localhost:8080/emp.html)

![ ](./assets/springboot01/image-20221204185455556.png)

#### 3.3.2 IOC详解

::: tip IOC控制反转

就是将对象的控制权交给Spring的IOC容器，由IOC容器创建及管理对象  

IOC容器创建的对象称为bean对象

:::

要把某个对象交给IOC容器管理，需要在类上添加一个注解：@Component

而Spring框架为了更好的标识web应用程序开发当中，bean对象到底归属于哪一层，又提供了@Component的衍生注解：

- @Controller    （标注在控制层类上）
- @Service          （标注在业务层类上）
- @Repository    （标注在数据访问层类上）

修改入门案例代码：

- **Controller层：**

```java
@RestController  //@RestController = @Controller + @ResponseBody
public class EmpController {

    @Autowired //运行时,从IOC容器中获取该类型对象,赋值给该变量
    private EmpService empService ;

    @RequestMapping("/listEmp")
    public Result list(){
        //1. 调用service, 获取数据
        List<Emp> empList = empService.listEmp();

        //3. 响应数据
        return Result.success(empList);
    }
}
```

- **Service层：**

```java
@Service
public class EmpServiceA implements EmpService {

    @Autowired //运行时,从IOC容器中获取该类型对象,赋值给该变量
    private EmpDao empDao ;

    @Override
    public List<Emp> listEmp() {
        //1. 调用dao, 获取数据
        List<Emp> empList = empDao.listEmp();

        //2. 对数据进行转换处理 - gender, job
        empList.stream().forEach(emp -> {
            //处理 gender 1: 男, 2: 女
            String gender = emp.getGender();
            if("1".equals(gender)){
                emp.setGender("男");
            }else if("2".equals(gender)){
                emp.setGender("女");
            }

            //处理job - 1: 讲师, 2: 班主任 , 3: 就业指导
            String job = emp.getJob();
            if("1".equals(job)){
                emp.setJob("讲师");
            }else if("2".equals(job)){
                emp.setJob("班主任");
            }else if("3".equals(job)){
                emp.setJob("就业指导");
            }
        });
        return empList;
    }
}
```

**Dao层：**

```java
@Repository
public class EmpDaoA implements EmpDao {
    @Override
    public List<Emp> listEmp() {
        //1. 加载并解析emp.xml
        String file = this.getClass().getClassLoader().getResource("emp.xml").getFile();
        System.out.println(file);
        List<Emp> empList = XmlParserUtils.parse(file, Emp.class);
        return empList;
    }
}
```

要把某个对象交给IOC容器管理，需要在对应的类上加上如下注解之一：

| 注解        | 说明                 | 位置                                            |
| :---------- | -------------------- | ----------------------------------------------- |
| @Controller | @Component的衍生注解 | 标注在控制器类上                                |
| @Service    | @Component的衍生注解 | 标注在业务类上                                  |
| @Repository | @Component的衍生注解 | 标注在数据访问类上（由于与mybatis整合，用的少） |
| @Component  | 声明bean的基础注解   | 不属于以上三类时，用此注解                      |

> 查看源码：![ ](./assets/springboot01/image-20221204221320230.png)

在IOC容器中，每一个Bean都有一个属于自己的名字，可以通过注解的value属性指定bean的名字。如果没有指定，默认为类名首字母小写。

![ ](./assets/springboot01/image-20221204222650873.png)

> 注意事项:
>
> - 声明bean的时候，可以通过value属性指定bean的名字，如果没有指定，默认为类名首字母小写。
> - 使用以上四个注解都可以声明bean，但是在springboot集成web开发中，声明控制器bean只能用@Controller。

组件扫描:

问题：使用前面的四个注解声明的bean，一定会生效吗？

答案：不一定。（原因：bean想要生效，还需要被组件扫描）

 下面通过修改项目工程的目录结构，来测试bean对象是否生效：

![ ](./assets/springboot01/image-20221204223602694.png)

运行程序后，报错：

![ ](./assets/springboot01/image-20221204223815554.png)

为什么没有找到bean对象呢？

- 使用四大注解声明的bean，要想生效，还需要被组件扫描注解@ComponentScan扫描

> @ComponentScan注解虽然没有显式配置，但是实际上已经包含在了引导类声明注解 @SpringBootApplication 中，**默认扫描的范围是SpringBoot启动类所在包及其子包**。
>
> ![ ](./assets/springboot01/image-20221204224643683.png)

解决方案：手动添加@ComponentScan注解，指定要扫描的包（仅做了解，不推荐）

![ ](./assets/springboot01/image-20221204225437297.png)

推荐做法：

- 将定义的controller，service，dao这些包都放在引导类所在包com.itheima的子包下，定义的bean就会被自动的扫描到

![ ](./assets/springboot01/image-20221204225815624.png)

#### 3.3.3 DI详解

依赖注入，是指IOC容器要为应用程序去提供运行时所依赖的资源，而资源指的就是对象。

Autowired翻译过来叫：自动装配。

@Autowired注解，默认是按照**类型**进行自动装配的（去IOC容器中找某个类型的对象，然后完成注入操作）

> 入门程序举例：在EmpController运行的时候，就要到IOC容器当中去查找EmpService这个类型的对象，而IOC容器中刚好有一个EmpService这个类型的对象，所以就找到了这个类型的对象完成注入操作。

那如果在IOC容器中，存在多个相同类型的bean对象，会出现什么情况呢？

![ ](./assets/springboot01/image-20221204232154445.png)

- 程序运行会报错

![ ](./assets/springboot01/image-20221204231616724.png)

如何解决上述问题呢？Spring提供了以下几种解决方案：

- @Primary

- @Qualifier

- @Resource

使用@Primary注解：当存在多个相同类型的Bean注入时，加上@Primary注解，来确定默认的实现。

![ ](./assets/springboot01/image-20221204232501679.png)

使用@Qualifier注解：指定当前要注入的bean对象。 在@Qualifier的value属性中，指定注入的bean的名称。

- @Qualifier注解不能单独使用，必须配合@Autowired使用

![ ](./assets/springboot01/image-20221204233333606.png)

使用@Resource注解：是按照bean的名称进行注入。通过name属性指定要注入的bean的名称。

![ ](./assets/springboot01/image-20221204233637735.png)

> 面试题 ： @Autowird 与 @Resource的区别
>
> - @Autowired 是spring框架提供的注解，而@Resource是JDK提供的注解
> - @Autowired 默认是按照类型注入，而@Resource是按照名称注入
