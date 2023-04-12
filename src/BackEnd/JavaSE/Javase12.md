---
order: 12
date: 2023-03-01
category: 
  - JavaSE
---

# Java基础加强
<!-- more -->

## 34. 反射

**专业的解释（了解一下）：**

是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；

对于任意一个对象，都能够调用它的任意属性和方法；

这种动态获取信息以及动态调用对象方法的功能称为Java语言的反射机制。

**通俗的理解**：

* 利用**反射**创建的对象**可以无视修饰符**调用类里面的内容

* 可以跟**配置文件结合起来使用**，把要创建的对象信息和方法写在配置文件中。

  读取到什么类，就创建什么类的对象

  读取到什么方法，就调用什么方法

  此时当需求变更的时候不需要修改代码，只要修改配置文件即可。

### 34.1 字节码文件和字节码文件对象

java文件：就是我们自己编写的java代码。

字节码文件：就是通过java文件编译之后的class文件（是在硬盘上真实存在的，用眼睛能看到的）

字节码文件对象：当class文件加载到内存之后，虚拟机自动创建出来的对象。

这个对象里面至少包含了：构造方法，成员变量，成员方法。

而我们的反射获取的是什么？字节码文件对象，这个对象在内存中是唯一的。

## 35. 动态代理

无侵入式的给方法增强功能

### 35.1 动态代理三要素

1，真正干活的对象

2，代理对象

3，利用代理调用方法

切记一点：代理可以增强或者拦截的方法都在接口中，接口需要写在newProxyInstance的第二个参数里。

**代码实现**：

```java
public class Test {
    public static void main(String[] args) {
    /*
        需求：
            外面的人想要大明星唱一首歌
             1. 获取代理的对象
                代理对象 = ProxyUtil.createProxy(大明星的对象);
             2. 再调用代理的唱歌方法
                代理对象.唱歌的方法("只因你太美");
     */
        //1. 获取代理的对象
        BigStar bigStar = new BigStar("鸡哥");
        Star proxy = ProxyUtil.createProxy(bigStar);

        //2. 调用唱歌的方法
        String result = proxy.sing("只因你太美");
        System.out.println(result);
    }
}
```

```java
/*
*
* 类的作用：
*       创建一个代理
*
* */
public class ProxyUtil {
    /*
    *
    * 方法的作用：
    *       给一个明星的对象，创建一个代理
    *
    *  形参：
    *       被代理的明星对象
    *
    *  返回值：
    *       给明星创建的代理
    *
    *
    *
    * 需求：
    *   外面的人想要大明星唱一首歌
    *   1. 获取代理的对象
    *      代理对象 = ProxyUtil.createProxy(大明星的对象);
    *   2. 再调用代理的唱歌方法
    *      代理对象.唱歌的方法("只因你太美");
    * */
    public static Star createProxy(BigStar bigStar){
       /* java.lang.reflect.Proxy类：提供了为对象产生代理对象的方法：

        public static Object newProxyInstance(ClassLoader loader, Class<?>[] interfaces, InvocationHandler h)
        参数一：用于指定用哪个类加载器，去加载生成的代理类
        参数二：指定接口，这些接口用于指定生成的代理长什么，也就是有哪些方法
        参数三：用来指定生成的代理对象要干什么事情*/
        Star star = (Star) Proxy.newProxyInstance(
                ProxyUtil.class.getClassLoader(),//参数一：用于指定用哪个类加载器，去加载生成的代理类
                new Class[]{Star.class},//参数二：指定接口，这些接口用于指定生成的代理长什么，也就是有哪些方法
                //参数三：用来指定生成的代理对象要干什么事情
                new InvocationHandler() {
                    @Override
                    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
                        /*
                        * 参数一：代理的对象
                        * 参数二：要运行的方法 sing
                        * 参数三：调用sing方法时，传递的实参
                        * */
                        if("sing".equals(method.getName())){
                            System.out.println("准备话筒，收钱");
                        }else if("dance".equals(method.getName())){
                            System.out.println("准备场地，收钱");
                        }
                        //去找大明星开始唱歌或者跳舞
                        //代码的表现形式：调用大明星里面唱歌或者跳舞的方法
                        return method.invoke(bigStar,args);
                    }
                }
        );
        return star;
    }
}
```

```java
public interface Star {
    //我们可以把所有想要被代理的方法定义在接口当中
    //唱歌
    public abstract String sing(String name);
    //跳舞
    public abstract void dance();
}
```

```java
public class BigStar implements Star {
    private String name;


    public BigStar() {
    }

    public BigStar(String name) {
        this.name = name;
    }

    //唱歌
    @Override
    public String sing(String name){
        System.out.println(this.name + "正在唱" + name);
        return "谢谢";
    }

    //跳舞
    @Override
    public void dance(){
        System.out.println(this.name + "正在跳舞");
    }

    /**
     * 获取
     * @return name
     */
    public String getName() {
        return name;
    }

    /**
     * 设置
     * @param name
     */
    public void setName(String name) {
        this.name = name;
    }

    public String toString() {
        return "BigStar{name = " + name + "}";
    }
}

```

**额外扩展**：

动态代理，还可以拦截方法

比如：

在这个故事中，经济人作为代理，如果别人让邀请大明星去唱歌，打篮球，经纪人就增强功能。

但是如果别人让大明星去扫厕所，经纪人就要拦截，不会去调用大明星的方法。

```java
/*
* 类的作用：
*       创建一个代理
* */
public class ProxyUtil {
    public static Star createProxy(BigStar bigStar){
        public static Object newProxyInstance(ClassLoader loader, Class<?>[] interfaces, InvocationHandler h)
        Star star = (Star) Proxy.newProxyInstance(
                ProxyUtil.class.getClassLoader(),
                new Class[]{Star.class},
                new InvocationHandler() {
                    @Override
                    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
                        if("cleanWC".equals(method.getName())){
                            System.out.println("拦截，不调用大明星的方法");
                            return null;
                        }
                        //如果是其他方法，正常执行
                        return method.invoke(bigStar,args);
                    }
                }
        );
        return star;
    }
}
```

### 35.2 动态代理的练习

对add方法进行增强，对remove方法进行拦截，对其他方法不拦截也不增强

```java
public class MyProxyDemo1 {
    public static void main(String[] args) {
        //动态代码可以增强也可以拦截
        //1.创建真正干活的人
        ArrayList<String> list = new ArrayList<>();

        //2.创建代理对象
        //参数一：类加载器。当前类名.class.getClassLoader()
        //                 找到是谁，把当前的类，加载到内存中了，我再麻烦他帮我干一件事情，把后面的代理类，也加载到内存

        //参数二：是一个数组，在数组里面写接口的字节码文件对象。
        //                  如果写了List，那么表示代理，可以代理List接口里面所有的方法，对这些方法可以增强或者拦截
        //                  但是，一定要写ArrayList真实实现的接口
        //                  假设在第二个参数中，写了MyInter接口，那么是错误的。
        //                  因为ArrayList并没有实现这个接口，那么就无法对这个接口里面的方法，进行增强或拦截
        //参数三：用来创建代理对象的匿名内部类
        List proxyList = (List) Proxy.newProxyInstance(
                //参数一：类加载器
                MyProxyDemo1.class.getClassLoader(),
                //参数二：是一个数组，表示代理对象能代理的方法范围
                new Class[]{List.class},
                //参数三：本质就是代理对象
                new InvocationHandler() {
                    @Override
                    //invoke方法参数的意义
                    //参数一：表示代理对象，一般不用（了解）
                    //参数二：就是方法名，我们可以对方法名进行判断，是增强还是拦截
                    //参数三：就是下面第三步调用方法时，传递的参数。
                    //举例1：
                    //list.add("阿玮好帅");
                    //此时参数二就是add这个方法名
                    //此时参数三 args[0] 就是 阿玮好帅
                    //举例2：
                    //list.set(1, "aaa");
                    //此时参数二就是set这个方法名
                    //此时参数三  args[0] 就是 1  args[1]"aaa"
                    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
                        //对add方法做一个增强，统计耗时时间
                        if (method.getName().equals("add")) {
                            long start = System.currentTimeMillis();
                            //调用集合的方法，真正的添加数据
                            method.invoke(list, args);
                            long end = System.currentTimeMillis();
                            System.out.println("耗时时间：" + (end - start));
                            //需要进行返回，返回值要跟真正增强或者拦截的方法保持一致
                            return true;
                        }else if(method.getName().equals("remove") && args[0] instanceof Integer){
                            System.out.println("拦截了按照索引删除的方法");
                            return null;
                        }else if(method.getName().equals("remove")){
                            System.out.println("拦截了按照对象删除的方法");
                            return false;
                        }else{
                            //如果当前调用的是其他方法,我们既不增强，也不拦截
                            method.invoke(list,args);
                            return null;
                        }
                    }
                }
        );

        //3.调用方法
        //如果调用者是list，就好比绕过了第二步的代码，直接添加元素
        //如果调用者是代理对象，此时代理才能帮我们增强或者拦截

        //每次调用方法的时候，都不会直接操作集合
        //而是先调用代理里面的invoke，在invoke方法中进行判断，可以增强或者拦截
        proxyList.add("aaa");
        proxyList.add("bbb");
        proxyList.add("ccc");
        proxyList.add("ddd");

        proxyList.remove(0);
        proxyList.remove("aaa");


        //打印集合
        System.out.println(list);
    }
}
```

## 36. 日志

跟输出语句一样，可以把程序在运行过程中的详细信息都打印在控制台上。

利用log日志还可以把这些详细信息保存到文件和数据库中。

### 36.1 使用步骤

不是java的，也不是自己写的，是第三方提供的代码，所以我们要导入jar包。

* 把第三方的代码导入到当前的项目当中

  新建lib文件夹，把jar粘贴到lib文件夹当中，全选后右键点击选择add as a ....

  检测导入成功：导入成功后jar包可以展开。在项目重构界面可以看到导入的内容

* 把配置文件粘贴到src文件夹下

* 在代码中获取日志对象

* 调用方法打印日志

### 36.2 日志级别

    TRACE, DEBUG, INFO, WARN, ERROR

还有两个特殊的：

ALL：输出所有日志

OFF：关闭所有日志

日志级别从小到大的关系：

TRACE < DEBUG < INFO < WARN < ERR

### 36.2 配置文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <!--
        CONSOLE ：表示当前的日志信息是可以输出到控制台的。
    -->
    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <!--输出流对象 默认 System.out 改为 System.err-->
        <target>System.out</target>
        <encoder>
            <!--格式化输出：%d表示日期，%thread表示线程名，%-5level：级别从左显示5个字符宽度
                %msg：日志消息，%n是换行符-->
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%-5level]  %c [%thread] : %msg%n</pattern>
        </encoder>
    </appender>

    <!-- File是输出的方向通向文件的 -->
    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
            <charset>utf-8</charset>
        </encoder>
        <!--日志输出路径-->
        <file>C:/code/itheima-data.log</file>
        <!--指定日志文件拆分和压缩规则-->
        <rollingPolicy
                       class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
            <!--通过指定压缩文件名称，来确定分割文件方式-->
            <fileNamePattern>C:/code/itheima-data2-%d{yyyy-MMdd}.log%i.gz</fileNamePattern>
            <!--文件拆分大小-->
            <maxFileSize>1MB</maxFileSize>
        </rollingPolicy>
    </appender>

    <!--

    level:用来设置打印级别，大小写无关：TRACE, DEBUG, INFO, WARN, ERROR, ALL 和 OFF
   ， 默认debug
    <root>可以包含零个或多个<appender-ref>元素，标识这个输出位置将会被本日志级别控制。
    -->
    <root level="info">
        <appender-ref ref="CONSOLE"/>
        <appender-ref ref="FILE" />
    </root>
</configuration>
```

## 37. 类加载器

> 基础加强包含了：
>
> 反射，动态代理，类加载器，xml，注解，日志，单元测试等知识点
>
> 其中最难的是反射和动态代理，其他知识点都非常简单

略

## 38. xml

略

## 39. 单元测试

对部分代码进行测试。

### 39.1 Junit的特点？

* 是一个第三方的工具。（把别人写的代码导入项目中）（专业叫法：导jar包）

* 如果运行结果显示绿色，表示运行结果是正确的。

  如果运行结果显示红色，表示运行结果是错误的

### 39.2 运行测试代码

* 只能直接运行无参无返回值的非静态方法
* 想要运行谁，就右键点击哪个方法。如果想要运行一个类里面所有的测试方法，选择类名，有点点击即可。

### 39.3 正确使用方式

1，新建测试类

2，新建测试方法（要测试的方法名 + Test） methodTest

3，在这个方法中直接调用要测试的方法

4，在测试方法的上面写@Test

代码示例：

```java
    //真正用来测试的类
    //测试用例（测试类）
    public class JunitTest {

        //在这个类里面再写无参无返回值的非静态方法
        //在方法中调用想要测试的方法

        @Test
        public void method2Test(){
            //调用要测试的方法
            JunitDemo1 jd = new JunitDemo1();
            jd.method2(10);
        }
    }
```

### 39.4 实际开发中单元测试的使用方式

需求：测试File中的delete方法，写的是否正确（掌握）

开发中的测试原则：

不污染原数据。

代码示例：

```java
public class JunitDemo3 {
    //在实际开发中，真正完整的单元测试该怎么写？
    //前提：
    //以后在工作的时候，测试代码不能污染原数据。（修改，篡改）
    //1.利用Before去对数据做一个初始化的动作
    //2.利用Test真正的去测试方法
    //3.利用After去还原数据
    
    //需求：测试File类中的delete方法是否书写正确？？？
    @Before
    public void beforemethod() throws IOException {
        //先备份
        File src = new File("C:\\Users\\moon\\Desktop\\a.txt");
        File dest = new File("C:\\Users\\moon\\Desktop\\copy.txt");

        FileInputStream fis = new FileInputStream(src);
        FileOutputStream fos = new FileOutputStream(dest);
        int b;
        while((b = fis.read()) != -1){
            fos.write(b);
        }
        fos.close();
        fis.close();
    }

    //作为一个标准的测试人员，运行完单元测试之后，不能污染原数据
    //需要达到下面两个要求：
    //1.得到结果
    //2.a.txt还在而且其他的备份文件消失
    @Test
    public void method(){
        File file = new File("C:\\Users\\moon\\Desktop\\a.txt");
        boolean delete = file.delete();

        //检查a.txt是否存在
        boolean exists = file.exists();

        //只有同时满足了下面所有的断言，才表示delete方法编写正确
        Assert.assertEquals("delete方法出错了",delete,true);
        Assert.assertEquals("delete方法出错了",exists,false);
    }


    @After
    public void aftermethod() throws IOException {
        //还要对a.txt做一个还原
        File src = new File("C:\\Users\\moon\\Desktop\\copy.txt");
        File dest = new File("C:\\Users\\moon\\Desktop\\a.txt");

        FileInputStream fis = new FileInputStream(src);
        FileOutputStream fos = new FileOutputStream(dest);
        int b;
        while((b = fis.read()) != -1){
            fos.write(b);
        }
        fos.close();
        fis.close();

        //备份数据要删除
        src.delete();

    }
}
```

## 40. 注解

### 40.1 注释和注解的区别？

共同点：都可以对程序进行解释说明。

不同点：注释，是给程序员看的。只在Java中有效。在class文件中不存在注释的。

当编译之后，会进行注释擦除。

注解，是给虚拟机看的。当虚拟机看到注解之后，就知道要做什么事情了。

### 40.2 Java中已经存在的注解

@Override：表示方法的重写

@Deprecated：表示修饰的方法已过时

@SuppressWarnings("all")：压制警告

除此之外，还需要掌握第三方框架中提供的注解：

比如：Junit

@Test 表示运行测试方法

@Before 表示在Test之前运行，进行数据的初始化

@After 表示在Test之后运行，进行数据的还原

### 40.3 特殊属性

value：当注解中只有"一个属性",并且属性名是"value",使用注解时,可以省略value属性名

代码示例：

```java
//注解的定义
public @interface Anno2 {
    public String value();

    public int age() default 23;
}

//注解的使用
@Anno2("123")
public class AnnoDemo2 {

    @Anno2("123")
    public void method(){

    }
}
```

### 40.4 元注解

可以写在注解上面的注解

@Target ：指定注解能在哪里使用

@Retention ：可以理解为保留时间(生命周期)

**Target**：

作用：用来标识注解使用的位置，如果没有使用该注解标识，则自定义的注解可以使用在任意位置。

可使用的值定义在ElementType枚举类中，常用值如下

* TYPE，类，接口
* FIELD, 成员变量
* METHOD, 成员方法
* PARAMETER, 方法参数
* CONSTRUCTOR, 构造方法
* LOCAL_VARIABLE, 局部变量

**Retention**：

作用：用来标识注解的生命周期(有效范围)

可使用的值定义在RetentionPolicy枚举类中，常用值如下

* SOURCE：注解只作用在源码阶段，生成的字节码文件中不存在
* CLASS：注解作用在源码阶段，字节码文件阶段，运行阶段不存在，默认值
* RUNTIME：注解作用在源码阶段，字节码文件阶段，运行阶段