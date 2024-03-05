---
order: 1
date: 2023-04-30
category: 
  - Git
---

# Git-Day01

> 掌握 Git 本地仓库操作命令  
> 掌握 Git 远程仓库操作命令  
> 掌握 Git 分支操作命令  
> 了解 Git 标签操作命令  
> 掌握 IDEA 中使用 Git 的方法  

## 1. 前言

### 1.1 什么是Git

Git是一个分布式版本控制工具，主要用于管理开发过程中的源代码文件（Java类、xml文件、html页面等），在软件开发过程中被广泛使用。

::: tip 其他的版本控制工具

- SVN
- CVS
- VSS

:::

### 1.2 使用Git能做什么

- 代码回溯：Git在管理文件过程中会记录日志，方便回退到历史版本
- 版本切换：Git存在分支的概念，一个项目可以有多个分支（版本），可以任意切换
- 多人协作：Git支持多人协作，即一个团队共同开发一个项目，每个团队成员负责一部分代码，通过Git就可以管理和协调
- 远程备份：Git通过仓库管理文件，在Git中存在远程仓库，如果本地文件丢失还可以从远程仓库获取

## 2. Git概述

Git 是一个分布式版本控制工具，通常用来对软件开发过程中的源代码文件进行管理。通过Git 仓库来存储和管理这些文件，Git 仓库分为两种：

- 本地仓库：开发人员自己电脑上的 Git 仓库
- 远程仓库：远程服务器上的 Git 仓库

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/02git/20230605110616.png)

解释说明：

> commit：提交,将本地文件和版本信息保存到本地仓库
>
> push：推送,将本地仓库文件和版本信息上传到远程仓库
>
> pull：拉取,将远程仓库文件和版本信息下载到本地仓库

## 3. Git代码托管服务

### 3.1 常用的Git代码托管服务

Git中存在两种类型的仓库，即**本地仓库**和**远程仓库**。那么我们如何搭建Git**远程仓库**呢？

我们可以借助互联网上提供的一些代码托管服务来实现，其中比较常用的有GitHub、码云、GitLab等。

| 名称      | 网址                               | 说明                                                         |
| --------- | ------------------------- | ------------------------------------------------------------ |
| gitHub    | [https://github.com/](https://github.com/)       | 一个面向开源及私有软件项目的托管平台，因为只支持Git 作为唯一的版本库格式进行托管，故名gitHub |
| 码云      | [https://gitee.com/](https://gitee.com/)       | 国内的一个代码托管平台，由于服务器在国内，所以相比于GitHub，码云速度会更快 |
| GitLab    | [https://about.gitlab.com/](https://about.gitlab.com/) | 一个用于仓库管理系统的开源项目，使用Git作为代码管理工具，并在此基础上搭建起来的web服务 |
| BitBucket | [https://bitbucket.org/](https://bitbucket.org/)   | 一家源代码托管网站，采用Mercurial和Git作为分布式版本控制系统，同时提供商业计划和免费账户 |

## 4. Git常用命令

### 4.1 Git全局设置

当安装Git后首先要做的事情是设置用户名称和email地址。这是非常重要的，因为每次Git提交都会使用该用户信息。在Git 命令行中执行下面命令：

**设置用户信息**:

  git config --global user.name

  git config --global user.email

**查看配置信息**:

  git config --list

### 4.2 获取Git仓库

git clone

### 4.3 工作区、暂存区、版本库

**版本库**：前面看到的.git隐藏文件夹就是版本库，版本库中存储了很多配置信息、日志信息和文件版本信息等

**工作区**：包含.git文件夹的目录就是工作区，也称为工作目录，主要用于存放开发的代码

**暂存区**：.git文件夹中有很多文件，其中有一个index文件就是暂存区，也可以叫做stage。暂存区是一个临时保存修改文件的地方

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/02git/20230605122913.png)

### 4.4 Git工作区中文件的状态

Git工作区中的文件存在两种状态：

- untracked 未跟踪（未被纳入版本控制）

- tracked 已跟踪（被纳入版本控制）

  ​     1）Unmodified 未修改状态

  ​     2）Modified 已修改状态

  ​     3）Staged 已暂存状态

**注意**：文件的状态会随着我们执行Git的命令发生变化

### 4.5 本地仓库操作

本地仓库常用命令如下：

- git status 查看文件状态
- git add 将文件的修改加入暂存区
- git reset 将暂存区的文件取消暂存或者是切换到指定版本
- git commit 将暂存区的文件修改提交到版本库
- git log  查看日志

### 4.6 远程仓库操作

- git remote  查看远程仓库
- git remote add 添加远程仓库
- git clone 从远程仓库克隆
- git pull 从远程仓库拉取
- git push 推送到远程仓库

#### 4.6.1 git remote

如果要查看已经配置的远程仓库服务器，可以执行 git remote 命令，它会列出每一个远程服务器的简称。

如果已经克隆了远程仓库，那么至少应该能看到 origin ，这是 Git 克隆的仓库服务器的默认名字。

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/02git/20230605123343.png)

#### 4.6.2 git remote add

添加远程仓库命令格式：git remote add 简称 远程仓库地址

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/02git/20230605123418.png)

> 注意：一个本地仓库可以关联多个远程仓库

#### 4.6.3 git clone

如果你想获得一份已经存在了的 Git 远程仓库的拷贝，这时就要用到 git clone 命令。 Git 克隆的是该 Git 仓库服务器上的几乎所有数据（包括日志信息、历史记录等）。

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/02git/20230605123545.png)

#### 4.6.4 git push

将本地仓库内容推送到远程仓库，命令格式：git push 远程仓库简称 分支名称

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/02git/20230605123555.png)

#### 4.6.5 git pull

**git pull** 命令的作用是从远程仓库获取最新版本并合并到本地仓库

命令格式：git pull 远程仓库简称 分支名称

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/02git/20230605123608.png)

### 4.7 分支操作

分支是Git 使用过程中非常重要的概念。使用分支意味着你可以把你的工作从开发主线上分离开来，以免影响开发主线。

本地仓库和远程仓库中都有分支，同一个仓库可以有多个分支，各个分支相互独立，互不干扰。

通过git init 命令创建本地仓库时默认会创建一个master分支。

具体命令如下：

- git branch 查看分支
- git branch [name] 创建分支
- git checkout [name] 切换分支
- git push [shortName] [name] 推送至远程仓库分支
- git merge [name] 合并分支

#### 4.7.1 查看分支

查看分支命令：git branch

git branch 列出所有本地分支

git branch -r 列出所有远程分支

git branch -a 列出所有本地分支和远程分支

#### 4.7.2 创建分支

创建分支命令格式：git branch 分支名称

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/02git/20230605123758.png)

#### 4.7.3 切换分支

一个仓库中可以有多个分支，切换分支命令格式：git checkout 分支名称

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/02git/20230605123806.png)
注意：在命令行中会显示出当前所在分支，如上图所示。

#### 4.7.4 推送至远程仓库分支

推送至远程仓库分支命令格式：git push 远程仓库简称 分支命令

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/02git/20230605123813.png)

#### 4.7.5 合并分支

合并分支就是将两个分支的文件进行合并处理，命令格式：git merge 分支命令

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/02git/20230605123846.png)

> 注意：分支合并时需注意合并的方向，如上图所示，在Master分支执行操作，结果就是将b3分支合并到Master分支。

### 4.8 标签操作

Git 中的标签，指的是某个分支某个特定时间点的状态。通过标签，可以很方便的切换到标记时的状态。

比较有代表性的是人们会使用这个功能来标记发布结点（v1.0 、v1.2等）。

相关的命令：

- git tag                                                查看标签
- git tag [name]                                  创建标签
- git push [shortName] [name]       将标签推送至远程仓库
- git checkout -b [branch] [name]   检出标签

#### 4.8.1 查看标签

查看标签命令：git tag

#### 4.8.2 创建标签

创建标签命令：git tag 标签名

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/02git/20230605124047.png)

#### 4.8.3 将标签推送至远程仓库

将标签推送至远程仓库命令：git push 远程仓库简称 标签名

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/02git/20230605124126.png)

推送完成后可以在远程仓库中查看标签。

#### 4.8.4 检出标签

检出标签时需要新建一个分支来指向某个标签，检出标签的命令格式：git checkout -b 分支名 标签名

![ ](https://simeis147-github-io.oss-cn-shenzhen.aliyuncs.com/project/reggietakeout/02git/20230605124220.png)
