---
order: 11
date: 2023-03-01
category: 
  - JavaSE
---

# 网络编程
<!-- more -->

## 33. 网络编程

### 33.1 计算机网络

是指将地理位置不同的具有独立功能的多台计算机及其外部设备，通过通线路连接起来，在网络操作系统，网络管理软件及网络通信协议的管理和调下，实现资源共享和信息传递的计算机系统

* 网络编程

  在网络通信协议下，不同计算机上运行的程序，可以进行数据传输

### 32.2 网络编程三要素

* IP地址

  要想让网络中的计算机能够互相通信，必须为每台计算机指定一个标识号，通过这个标识号来指定要接收数据的计算机和识别发送的计算机，而IP地址就是这个标识号。也就是设备的标识

* 端口

  网络的通信，本质上是两个应用程序的通信。每台计算机都有很多的应用程序，那么在网络通信时，如何区分这些应用程序呢？如果说IP地址可以唯一标识网络中的设备，那么端口号就可以唯一标识设备中的应用程序了。也就是应用程序的标识

* 协议

  通过计算机网络可以使多台计算机实现连接，位于同一个网络中的计算机在进行连接和通信时需要遵守一定的规则，这就好比在道路中行驶的汽车一定要遵守交通规则一样。在计算机网络中，这些连接和通信的规则被称为网络通信协议，它对数据的传输格式、传输速率、传输步骤等做了统一规定，通信双方必须同时遵守才能完成数据交换。常见的协议有UDP协议和TCP协议
