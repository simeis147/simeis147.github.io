---
order: 1
date: 2023-04-11
category: 
  - 瑞吉外卖
---

# Linux-Day01

## 1. 前言

### 1.1 什么是Linux

Linux是一套免费使用和自由传播的操作系统

### 1.2 为什么要学Linux

1. 企业用人要求

    Linux操作系统提供了很多稳定的发行版本，广泛的应用在各种服务器操作系统领域，将来开发出来的项目，最终要上线运行，就需要将项目部署在Linux服务器中

2. 个人发展需要  

    作为javaEE开发工程师，将来在企业中开发时会涉及到很多的数据库、中间件等技术，比如MySQL、Redis、MQ等技术，而这些应用软件大多都是需要安装在Linux系统中使用的  

    做为开发人员，是需要通过远程工具连接Linux操作系统，然后来操作这些软件的

### 1.3 学完Linux能干什么

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230605132241.png)

1. 环境搭建

    系统安装：一般不会直接将Linux系统安装在本机电脑上，而会安装在公司的一台专门的服务器上  

    远程连接：要想使用服务器，一般都是通过远程连接工具连接Linux系统进行操作  

2. 常用命令

    A. 文件、目录的基本操作(查看,删除,创建等)

    B. 文件及文件夹的拷贝、移动、重命名

    C. 文件的打包、压缩、解压缩操作

    D. 文本的编辑

3. 安装软件

    比如： JDK、Tomcat、MySQL的安装及配置  

4. 项目部署

    把基础的软件及环境安装配置好之后，可以将开发的项目部署在服务器中进行运行并测试  

**对于Linux的常用指令的学习，最好的学习方法就是：<font color='red' size=7>多敲</font>**

## 2. Linux简介

### 2.1 主流操作系统

不同领域的主流操作系统，主要分为以下这么几类：  
桌面操作系统、服务器操作系统、移动设备操作系统、嵌入式操作系统

1. 桌面操作系统

    | 操作系统 | 特点                                   |
    | -------- | -------------------------------------- |
    | Windows  | 用户数量最多                           |
    | MacOS    | 操作体验好，办公人士首选               |
    | Linux    | 用户数量少(桌面操作系统,Linux使用较少) |

2. 服务器操作系统

    | 操作系统       | 特点                       |
    | -------------- | -------------------------- |
    | Unix           | 安全、稳定、付费           |
    | Linux          | 安全、稳定、免费、占有率高 |
    | Windows Server | 付费、占有率低             |

3. 移动设备操作系统

    | 操作系统 | 特点                                                         |
    | -------- | ------------------------------------------------------------ |
    | Android  | 基于 Linux 、开源，主要用于智能手机、平板电脑和智能电视      |
    | IOS      | 苹果公司开发、不开源，用于苹果公司的产品，例如：iPhone、 iPad |

4. 嵌入式操作系统

    | 操作系统 | 特点                   |
    | -------- | ---------------------- |
    | Linux    | 机顶盒、路由器、交换机 |

### 2.2 Linux发展历史

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230605132520.png)

- 时间：1991年

- 地点：芬兰赫尔辛基大学

- 人物：Linus Torvalds（21岁）

- 语言：C语言、汇编语言

- logo：企鹅

- 特点：免费、开源(源代码开放)、多用户(同时允许多个用户操作同一个Linux系统)、多任务(同时允许多个任务执行)

### 2.3 Linux系统版本

Linux系统的版本分为两种，分别是：**内核版** 和 **发行版**  

1. 内核版

      - 由Linus Torvalds及其团队开发、维护

      - 免费、开源

      - 负责控制硬件

2. 发行版

      - 基于Linux内核版进行扩展

      - 由各个Linux厂商开发、维护

      - 有收费版本和免费版本

| 发行版本  | Logo                                                         | 特点                             |
| --------- | ------------------------------------------------------------ | -------------------------------- |
| Ubuntu    |  ![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230605132843.png) | 以桌面应用为主                   |
| RedHat    |  ![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230605132959.png) | 应用最广泛、收费                 |
| CentOS    |  ![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230605133056.png) | RedHat的社区版、免费             |
| openSUSE  |  ![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230605133109.png) | 对个人完全免费、图形界面华丽     |
| Fedora    |  ![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230605133127.png) | 功能完备、快速更新、免费         |
| 红旗Linux |  ![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230605133138.png) | 北京中科红旗软件技术有限公司开发 |

## 3. Linux安装

### 3.1 安装方式介绍

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230605133257.png)
| 方式       | 概述                             | 场景                                                         |
| ---------- | -------------------------------- | ------------------------------------------------------------ |
| 物理机安装 | 直接将操作系统安装到服务器硬件上 | 企业开发中，服务器基本都是采用这种方式             |
| 虚拟机安装 | 通过虚拟机软件安装               | 没有自己服务器，学Linux，就可以安装在虚拟机上 |

**虚拟机**（Virtual Machine）指通过**软件**模拟的具有完整硬件系统功能、运行在完全隔离环境中的完整计算机系统  

::: tip 常用虚拟机软件

- VMWare
- VirtualBox
- VMLite WorkStation
- Qemu
- HopeddotVOS

:::

### 3.2 Linux目录结构

::: tip Linux系统中的目录有以下特点

/ 是所有目录的顶点

目录结构像一颗倒挂的树

:::

**Linux 和 Windows的目录结构对比:**

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230607171906.png)

Linux的目录结构，如下：

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230607171930.png)

根目录/ 下各个目录的作用及含义说明  

| 编号 | 目录  | 含义                                       |
| ---- | ----- | ------------------------------------------ |
| 1    | /bin  | 存放二进制可执行文件                       |
| 2    | /boot | 存放系统引导时使用的各种文件               |
| 3    | /dev  | 存放设备文件                               |
| 4    | /etc  | 存放系统配置文件                           |
| 5    | /home | 存放系统用户的文件                         |
| 6    | /lib  | 存放程序运行所需的共享库和内核模块         |
| 7    | /opt  | 额外安装的可选应用程序包所放置的位置       |
| 8    | /root | 超级用户目录                               |
| 9    | /sbin | 存放二进制可执行文件，只有root用户才能访问 |
| 10   | /tmp  | 存放临时文件                               |
| 11   | /usr  | 存放系统应用程序                           |
| 12   | /var  | 存放运行时需要改变数据的文件，例如日志文件 |

## 4. Linux常用命令

### 4.1 Linux命令初体验

#### 4.1.1 常用命令演示

| 序号 | 命令           | 对应英文             | 作用                    |
| ---- | -------------- | -------------------- | ----------------------- |
| 1    | ls [目录名]    | list                 | 查看当前目录下的内容    |
| 2    | pwd            | print work directory | 查看当前所在目录        |
| 3    | cd [目录名]    | change directory     | 切换目录                |
| 4    | touch [文件名] | touch                | 如果文件不存在,创建文件 |
| 5    | mkdir [目录名] | make directory       | 创建目录                |
| 6    | rm [文件名]    | remove               | 删除指定文件            |

#### 4.1.2 Linux命令使用技巧

1. Tab键自动补全

2. 连续两次Tab键，给出操作提示

3. 使用上下箭头快速调出曾经使用过的命令

4. 使用clear命令或者Ctrl+l快捷键实现清屏

#### 4.1.3 Linux命令格式

```md
command [-options] [parameter]

说明: 
    command:  命令名
    [-options]:  选项，可用来对命令进行控制，也可以省略
    [parameter]: 传给命令的参数，可以是零个、一个或者多个

注意: 
    [] 代表可选
    命令名、选项、参数之间有空格进行分隔
```

**操作示例:**

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230607172347.png)

### 4.2 文件目录操作命令

#### 4.2.1 ls

```md
作用: 显示指定目录下的内容
语法: ls [-al] [dir]
说明: 
    -a 显示所有文件及目录 (. 开头的隐藏文件也会列出)
    -l 除文件名称外，同时将文件型态(d表示目录，-表示文件)、权限、拥有者、文件大小等息详细列出

注意: 
    由于我们使用ls命令时经常需要加入-l选项，所以Linux为ls -l命令提供了一种简写方式，即ll

常见用法: 
    ls -al  查看当前目录的所有文件及目录详细信息
    ls -al /etc   查看/etc目录下所有文件及目录详细信息
    ll     查看当前目录文件及目录的详细信息 
```

#### 4.2.2 cd

```md
作用: 用于切换当前工作目录，即进入指定目录
语法: cd [dirName]

特殊说明: 
    ~   表示用户的home目录
    .   表示目前所在的目录
    ..  表示目前目录位置的上级目录
        
举例: 
    cd  ..      切换到当前目录的上级目录
    cd  ~       切换到用户的home目录
    cd  /usr/loca   切换到/usr/local目录
```

> 备注:
>
> ​root用户 /root
>
> ​其他用户 /home/xxx  

#### 4.2.3 cat

```md
作用: 用于显示文件内容
语法: cat [-n] fileName

说明:
    -n: 由1开始对所有输出的行数编号

举例:
    cat /etc/profile    查看/etc目录下的profile文件内容
```

cat 指令会一次性查看文件的所有内容，如果文件内容比较多，这个时候查看起来就不是很方便了，这个时候可以通过一个新的指令more  

#### 4.2.4 more

```md
作用: 以分页的形式显示文件内容
语法: more fileName

操作说明:
    回车键 向下滚动一行
    空格键 向下滚动一屏
    b 返回上一屏
    q或者Ctrl+C退出more

举例：
    more /etc/profile 以分页方式显示/etc目录下的profile文件内容
```

#### 4.2.5 tail

```md
作用: 查看文件末尾的内容
语法: tail [-f] fileName

说明:
    -f : 动态读取文件末尾内容并显示，通常用于日志文件的内容输出
        
举例: 
tail /etc/profile   显示/etc目录下的profile文件末尾10行的内容
tail -20 /etc/profile   显示/etc目录下的profile文件末尾20行的内容
tail -f /itcast/my.log  动态读取/itcast目录下的my.log文件末尾内容并显示
```

#### 4.2.6 mkdir

```md
作用: 创建目录
语法: mkdir [-p] dirName

说明: 
    -p: 确保目录名称存在，不存在的就创建一个  通过此选项，可以实现多层目录同时创建

举例: 
    mkdir itcast  在当前目录下，建立一个名为itcast的子目录
    mkdir -p itcast/test   在工作目录下的itcast目录中建立一个名为test的子目录，若itcast目录不存在，则建立一个
```

#### 4.2.7 rmdir

```md
作用: 删除空目录
语法: rmdir [-p] dirName

说明:
    -p: 当子目录被删除后使父目录为空目录的话，则一并删除

举例:
    rmdir itcast   删除名为itcast的空目录
    rmdir -p itcast/test   删除itcast目录中名为test的子目录，若test目录删除后itcast目录变为空目录，则也被删除
    rmdir itcast*   删除名称以itcast开始的空目录
```

> *: 是一个通配符，代表任意字符；
>
> rmdir  itcast* : 删除以itcast开头的目录
>
> rmdir  *itcast : 删除以itcast结尾的目录

#### 4.2.8 rm

```md
作用: 删除文件或者目录
语法: rm [-rf] name

说明: 
    -r: 将目录及目录中所有文件（目录）逐一删除，即递归删除
    -f: 无需确认，直接删除
        
举例: 
    rm -r itcast/     删除名为itcast的目录和目录中所有文件，删除前需确认
    rm -rf itcast/    无需确认，直接删除名为itcast的目录和目录中所有文件
    rm -f hello.txt   无需确认，直接删除hello.txt文件

```

==注意: 对于 rm -rf xxx 这样的指令，在执行的时候，一定要慎重，确认无误后再进行删除，避免误删==

### 4.3 拷贝移动命令

#### 4.3.1 cp

```md
作用: 用于复制文件或目录
语法: cp [-r] source dest

说明: 
    -r: 如果复制的是目录需要使用此选项，此时将复制该目录下所有的子目录和文件

举例: 
    cp hello.txt itcast/            将hello.txt复制到itcast目录中
    cp hello.txt ./hi.txt           将hello.txt复制到当前目录，并改名为hi.txt
    cp -r itcast/ ./itheima/        将itcast目录和目录下所有文件复制到itheima目录下
    cp -r itcast/* ./itheima/       将itcast目录下所有文件复制到itheima目录下
```

#### 4.3.2 mv

```md
作用: 为文件或目录改名、或将文件或目录移动到其它位置
语法: mv source dest

举例: 
    mv hello.txt hi.txt                 将hello.txt改名为hi.txt
    mv hi.txt itheima/                  将文件hi.txt移动到itheima目录中
    mv hi.txt itheima/hello.txt         将hi.txt移动到itheima目录中，并改名为hello.txt
    mv itcast/ itheima/                 如果itheima目录不存在，将itcast目录改名为itheima
    mv itcast/ itheima/                 如果itheima目录存在，将itcast目录移动到itheima目录中
```

### 4.4 打包压缩命令

```md
作用: 对文件进行打包、解包、压缩、解压
语法: tar  [-zcxvf]  fileName  [files]
    包文件后缀为.tar表示只是完成了打包，并没有压缩
    包文件后缀为.tar.gz表示打包的同时还进行了压缩

说明:
    -z: z代表的是gzip，通过gzip命令处理文件，gzip可以对文件压缩或者解压
    -c: c代表的是create，即创建新的包文件
    -x: x代表的是extract，实现从包文件中还原文件
    -v: v代表的是verbose，显示命令的执行过程
    -f: f代表的是file，用于指定包文件的名称

举例：
    打包
        tar -cvf hello.tar ./*          将当前目录下所有文件打包，打包后的文件名为hello.tar
        tar -zcvf hello.tar.gz ./*      将当前目录下所有文件打包并压缩，打包后的文件名为hello.tar.gz
              
    解包
        tar -xvf hello.tar              将hello.tar文件进行解包，并将解包后的文件放在当前目录
        tar -zxvf hello.tar.gz          将hello.tar.gz文件进行解压，并将解压后的文件放在当前目录
        tar -zxvf hello.tar.gz -C /usr/local     将hello.tar.gz文件进行解压，并将解压后的文件放在/usr/local目录

```

### 4.5 文本编辑命令

文本编辑的命令，主要包含两个: `vi` 和 `vim` ，两个命令的用法类似

#### 4.5.1 vi&vim介绍

作用: vi命令是Linux系统提供的一个文本编辑工具，可以对文件内容进行编辑，类似于Windows中的记事本

语法: vi fileName

说明:  
  1.vim是从vi发展来的一个功能更加强大的文本编辑工具，编辑文件时可以对文本内容进行着色，方便我们对文件进行编辑处理，所以实际工作中vim更加常用  
  2.要使用vim命令，安装：`yum install vim`

#### 4.5.2 vim安装

命令： yum install vim

#### 4.5.3 vim使用

作用: 对文件内容进行编辑，vim其实就是一个文本编辑器  
语法: vim fileName  
说明:  
    1. 在使用vim命令编辑文件时，如果指定的文件存在则直接打开此文件  如果指定的文件不   存在则新建文件  
    2. vim在进行文本编辑时共分为三种模式，分别是 命令模式（Command mode），插入模式（Insert mode）和底行模式（Last line mode）  这三种模式之间可以相互切换  我们在使用vim时一定要注意我们当前所处的是哪种模式  

三种模式:  
      A. 命令模式下可以查看文件内容、移动光标（上下左右箭头、gg、G）  
      B. 通过vim命令打开文件后，默认进入命令模式  
      C. 另外两种模式需要首先进入命令模式，才能进入彼此  

| 命令模式指令 | 含义                              |
| ------------ | --------------------------------- |
| gg           | 定位到文本内容的第一行            |
| G            | 定位到文本内容的最后一行          |
| dd           | 删除光标所在行的数据              |
| ndd          | 删除当前光标所在行及之后的n行数据 |
| u            | 撤销操作                          |
| shift+zz     | 保存并退出                        |
| i 或 a 或 o  | 进入插入模式                      |

- 插入模式
      A. 插入模式下可以对文件内容进行编辑
      B. 在命令模式下按下[i,a,o]任意一个，可以进入插入模式  进入插入模式后，下方会出现【insert】字样
      C. 在插入模式下按下ESC键，回到命令模式

- 底行模式
      A. 底行模式下可以通过命令对文件内容进行查找、显示行号、退出等操作
      B. 在命令模式下按下[:,/]任意一个，可以进入底行模式
      C. 通过/方式进入底行模式后，可以对文件内容进行查找
      D. 通过:方式进入底行模式后，可以输入wq（保存并退出）、q!（不保存退出）、set nu（显示行号）

| 底行模式命令 | 含义                                 |
| ------------ | ------------------------------------ |
| :wq          | 保存并退出                           |
| :q!          | 不保存退出                           |
| :set nu      | 显示行号                             |
| :set nonu    | 取消行号显示                         |
| :n           | 定位到第n行, 如 :10 就是定位到第10行 |

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230607172946.png)

操作示例:

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230607173006.png)

### 4.6 查找命令

#### 4.6.1 find

```md
作用: 在指定目录下查找文件
语法: find dirName -option fileName
举例:
    find  .  –name "*.java" 在当前目录及其子目录下查找.java结尾文件
    find  /itcast  -name "*.java" 在/itcast目录及其子目录下查找.java结尾的文件
```

**操作示例:**

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230607173041.png)

#### 4.6.2 grep

```md
作用: 从指定文件中查找指定的文本内容
语法: grep word fileName
举例: 
    grep Hello HelloWorld.java 查找HelloWorld.java文件中出现的Hello字符串的位置
    grep hello *.java       查找当前目录中所有.java结尾的文件中包含hello字符串的位置
```

**操作示例:**

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/03linux/20230607173104.png)
