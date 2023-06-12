---
order: 2
date: 2023-04-11
category: 
  - 瑞吉外卖
  - Linux
---

# Linux-Day02

## 网络常识

桥接模式：使用你的真实网卡,相当于你的局域网中多了一台电脑

仅主机模式：通过虚拟网卡将消息转发给真机,真机再把消息发到外部局域网,虚拟机里面装的软件,外部机器访问不到

NAT模式：可以把虚拟机的端口映射到真机上,外部机器可以访问真机的ip和端口从而访问到虚拟机

## 1. 软件安装

[软件安装视频地址](https://www.bilibili.com/video/BV13a411q753?p=132&vd_source=8a1412d04d200fa33278d2b150f9b8df)

### 1.1 软件安装方式

在Linux系统中，安装软件的方式主要有四种，这四种安装方式的特点如下：

| 安装方式     | 特点                                                         |
| ------------ | ------------------------------------------------------------ |
| 二进制发布   | 软件已经针对具体平台编译打包发布，只要解压，修改配置即可     |
| rpm安装      | 软件已经按照redhat的包管理规范进行打包，使用rpm命令进行安装，==不能自行解决库依赖问题== |
| yum安装      | 一种在线软件安装方式，本质上还是rpm安装，自动下载安装包并安装，安装过程中自动解决库依赖问题(安装过程需要联网) |
| 源码编译安装 | 软件以源码工程的形式发布，需要自己编译打包                   |

### 1.2 安装JDK

### 1.3 安装Tomcat

#### 防火墙操作

| 操作                         | 指令                                                         | 备注                 |
| ---------------------------- | ------------------------------------------------------------ | -------------------- |
| 暂时关闭防火墙               | systemctl stop firewalld                                     |                      |
| 永久关闭防火墙(禁用开机自启) | systemctl disable firewalld                                  | ==下次启动,才生效==  |
| 暂时开启防火墙               | systemctl start firewalld                                    |                      |
| 永久开启防火墙(启用开机自启) | systemctl enable firewalld                                   | ==下次启动,才生效==  |
| 查看防火墙状态               | systemctl status firewalld / firewall-cmd --state            |                      |
| 开放指定端口                 | firewall-cmd --zone=public --add-port=8080/tcp --permanent   | ==需要重新加载生效== |
| 关闭指定端口                 | firewall-cmd --zone=public --remove-port=8080/tcp --permanent | ==需要重新加载生效== |
| 立即生效(重新加载)           | firewall-cmd --reload                                        |                      |
| 查看开放端口                 | firewall-cmd --zone=public --list-ports                      |                      |

> 注意：
>
> ​A. systemctl是管理Linux中服务的命令，可以对服务进行启动、停止、重启、查看状态等操作
>
> ​B. firewall-cmd是Linux中专门用于控制防火墙的命令
>
> ​C. 为了保证系统安全，服务器的防火墙不建议关闭

### 1.4 安装MySQL

### 1.5 安装lrzsz

## 2. 项目部署

[项目部署视频地址](https://www.bilibili.com/video/BV13a411q753?p=139&vd_source=8a1412d04d200fa33278d2b150f9b8df)

演示项目部署，分别是：手动部署项目 和 基于shell脚本自动部署

### 2.1 手动部署项目

### 2.2 基于Shell脚本自动部署
