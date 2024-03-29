---
order: 2
date: 2023-05-12
category: 
  - 计算机网络
---

# 计算机网络02

## 1 snmp协议的概念

SNMP（Simple Network Management Protocol）是一种用于网络管理的应用层协议，它可以在网络中的设备之间进行通信和信息交换，从而实现对网络设备的监控、配置和管理。SNMP协议定义了一组标准的消息格式和协议操作，可以实现对网络设备的远程管理和监控。

**SNMP协议主要包括以下几个部分**：

1. 管理站：指执行网络管理任务的计算机或者设备，使用SNMP协议向网络设备发送请求，获取设备的状态信息。

1. 管理代理：指网络设备上的软件模块，用于响应管理站的请求，提供设备的状态信息和配置数据。

1. 管理信息库：指保存在管理代理中的设备状态信息和配置数据，可以由管理站查询和修改。

1. 管理对象：指网络设备中的各种资源，例如接口、路由表、系统信息等，可以由管理站查询和配置。

**SNMP协议通常使用UDP协议进行通信，它支持三种主要的操作**：

1. Get：指获取一个或多个管理对象的值，管理站向管理代理发送Get请求，管理代理返回管理对象的值。

1. Set：指设置一个或多个管理对象的值，管理站向管理代理发送Set请求，管理代理设置管理对象的值。

1. Trap：指在管理代理发生重要事件时主动向管理站发送通知，例如设备出现故障或者网络流量超过阈值等。

SNMP协议是一个重要的网络管理协议，它可以帮助网络管理员实现对网络设备的远程监控和管理，提高网络的可靠性和性能。同时，SNMP协议也具有一定的安全风险，因此在使用SNMP协议时需要采取适当的安全措施，例如使用安全版本的SNMP协议和加密传输等。

## 2 交换机阻断和iptables防火墙阻断的原理和实现

### 2.1 交换机阻断原理

交换机阻断（Port Security）是一种网络安全措施，可以限制接入网络的设备数量，并防止未经授权的设备接入网络。

交换机阻断通常可以通过以下两种方式来实现：

1. 静态MAC地址绑定：在交换机上配置一个静态MAC地址表，将每个接口绑定到特定的MAC地址上。当网络设备连接到交换机的接口上时，交换机会检查设备的MAC地址是否在该接口的绑定列表中，如果不在，则该接口被阻断，设备无法连接到网络。

2. 动态MAC地址学习：交换机可以动态学习每个接口连接的设备的MAC地址，并将其记录在MAC地址表中。当新设备连接到交换机的接口上时，交换机会将其MAC地址添加到MAC地址表中，并检查该MAC地址是否超过了预定义的阈值（通常是1或2个设备），如果超过了阈值，则该接口被阻断，设备无法连接到网络。

### 2.2 交换机阻断的实现

### 2.3 iptables防火墙阻断的原理

iptables是Linux系统中的一个防火墙软件，用于过滤和管理网络数据包。它的阻断原理可以简单概括为以下三个步骤：

1. 匹配规则：iptables会按照事先定义好的规则对接收到的每个网络数据包进行匹配。规则可以根据IP地址、端口号、协议类型等多个条件来匹配。

1. 判断动作：如果匹配成功，iptables会根据规则中定义的动作来判断是否阻断该数据包。常见的动作包括DROP（丢弃该数据包）、REJECT（拒绝该数据包并向发送端发送一个错误消息）和ACCEPT（接受该数据包）。

1. 执行动作：如果匹配成功且判断动作为DROP或REJECT，则iptables会阻断该数据包；否则，iptables会允许该数据包通过防火墙并传递到下一层网络设备。

### 2.4 iptables防火墙阻断的实现

## 3 主动扫描和被动扫描的区别

主动扫描和被动扫描是网络安全中两种常见的扫描方式，它们的区别如下：

1. 主动扫描：是指通过专门的扫描工具，对网络中的目标进行主动扫描，以便发现目标的漏洞和弱点。主动扫描通常需要事先对目标进行信息收集，例如获取目标的IP地址、端口和服务信息等，然后使用专门的扫描工具对目标进行扫描。主动扫描具有主动性、准确性和高效性等特点，但也容易引起目标系统的警觉和防御。

1. 被动扫描：是指通过对网络流量进行监听和分析，发现网络中的目标漏洞和弱点。被动扫描通常不需要对目标进行主动扫描，而是通过对目标系统的网络流量进行分析，发现其中的异常或者恶意行为。被动扫描具有隐蔽性和针对性等特点，但需要对网络流量进行实时监控和分析，并且可能会误报或漏报目标的漏洞和弱点。

## 4 写一个多线程的Java实例

> 不要完全照搬网上，结合自己的一些想法，写一个带点业务性质的实例

```java
public class BankAccount {
    private double balance; // 银行账户余额

    public BankAccount(double balance) {
        this.balance = balance;
    }

    // 取款操作
    public synchronized void withdraw(double amount) {
        if (balance >= amount) {
            System.out.println(Thread.currentThread().getName() + "正在取款：" + amount);
            balance -= amount;
            System.out.println(Thread.currentThread().getName() + "取款成功，余额为：" + balance);
        } else {
            System.out.println(Thread.currentThread().getName() + "取款失败，余额不足！");
        }
    }

    public static void main(String[] args) {
        BankAccount account = new BankAccount(1000); // 初始化银行账户余额为1000元

        // 创建多个线程模拟多个客户进行取款操作
        Thread t1 = new Thread(() -> account.withdraw(500), "客户A");
        Thread t2 = new Thread(() -> account.withdraw(300), "客户B");
        Thread t3 = new Thread(() -> account.withdraw(200), "客户C");

        // 启动多个线程，进行取款操作
        t1.start();
        t2.start();
        t3.start();
    }
}
```

## 5 建两张表，主、从表，然后关联查询出对应的信息

> 如：ipv4信息表，ipv4端口表，需要关联两张表查询出对应的IP信息和端口信息

假设有两张表ipv4和ipv4_port，ipv4表中包含ipv4地址的信息，ipv4_port表中包含ipv4地址的端口信息，可以通过以下SQL语句实现关联查询：

```sql
SELECT ipv4.ip, ipv4_port.port, ipv4_port.service
FROM ipv4
LEFT JOIN ipv4_port ON ipv4.ip = ipv4_port.ip
```

在上述SQL语句中，使用LEFT JOIN关键字将ipv4和ipv4_port表进行关联，关联条件为ipv4表中的ip字段和ipv4_port表中的ip字段相等。SELECT语句中选择ipv4表中的ip字段，ipv4_port表中的port字段和service字段。

LEFT JOIN关键字表示左连接，即返回左表（ipv4表）中所有记录，以及匹配右表（ipv4_port表）中的记录。如果没有匹配的记录，则返回NULL。如果需要返回右表中所有记录，则可以使用RIGHT JOIN关键字。如果需要返回两个表中都存在的记录，则可以使用INNER JOIN关键字。
