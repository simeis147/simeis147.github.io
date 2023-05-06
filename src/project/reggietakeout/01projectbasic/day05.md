---
order: 5
date: 2023-04-11
category: 
  - 瑞吉外卖
---

# 瑞吉外卖基础-Day05

## 1. 新增套餐

### 1.1 需求分析

套餐就是菜品的集合  

后台系统中可以管理套餐信息，通过新增套餐功能来添加一个新的套餐，在添加套餐时需要选择当前套餐所属的套餐分类和包含的菜品，并且需要上传套餐对应的图片，在移动端会按照套餐分类来展示对应的套餐  

![ ](./assets/day05/image-20210805232711418.png)

### 1.2 数据模型

新增套餐，其实就是将新增页面录入的套餐信息插入到setmeal表，还需要向setmeal_dish表插入套餐和菜品关联数据  
所以在新增套餐时，涉及到两个表

| 表           | 说明           | 备注                                               |
| ------------ | -------------- | -------------------------------------------------- |
| setmeal      | 套餐表         | 存储套餐的基本信息                                 |
| setmeal_dish | 套餐菜品关系表 | 存储套餐关联的菜品的信息(一个套餐可以关联多个菜品) |

1.**套餐表setmeal**

![ ](./assets/day05/image-20210805233615067.png)

在该表中，套餐名称name字段是不允许重复的，在建表时已经创建了唯一索引  

![ ](./assets/day05/image-20210805234059563.png)

2.**套餐菜品关系表setmeal_dish**

![ ](./assets/day05/image-20210805233807009.png)

在该表中，菜品的名称name，菜品的原价price 实际上都是冗余字段，因为在这张表中存储了菜品的ID(dish_id)，根据该ID就可以查询出name，price的数据信息，而这里又存储了name，price，这样的话，在后续的查询展示操作中，就不需要再去查询数据库获取菜品名称和原价了，这样可以简化操作  

### 1.3 准备工作

在开发业务功能前，先将需要用到的类和接口基本结构创建好，在做这一块儿的准备工作时，无需准备Setmeal的相关实体类、Mapper接口、Service接口及实现，因为之前在做分类管理的时候，已经引入了Setmeal的相关基础代码

1.**实体类 SetmealDish**

所属包： com.itheima.reggie.entity

```java
import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.TableField;
import lombok.Data;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * 套餐菜品关系
 */
@Data
public class SetmealDish implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;

    //套餐id
    private Long setmealId;

    //菜品id
    private Long dishId;

    //菜品名称 （冗余字段）
    private String name;
    
    //菜品原价
    private BigDecimal price;
    
    //份数
    private Integer copies;

    //排序
    private Integer sort;

    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;

    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updateTime;

    @TableField(fill = FieldFill.INSERT)
    private Long createUser;

    @TableField(fill = FieldFill.INSERT_UPDATE)
    private Long updateUser;

    //是否删除
    private Integer isDeleted;
}
```

2.**DTO SetmealDto**

该数据传输对象DTO，主要用于封装页面在新增套餐时传递过来的json格式的数据，其中包含套餐的基本信息，还包含套餐关联的菜品集合

所属包： com.itheima.reggie.dto

```java
import com.itheima.reggie.entity.Setmeal;
import com.itheima.reggie.entity.SetmealDish;
import lombok.Data;
import java.util.List;

@Data
public class SetmealDto extends Setmeal {

    private List<SetmealDish> setmealDishes;//套餐关联的菜品集合

    private String categoryName;//分类名称
}
```

3.**Mapper接口 SetmealDishMapper**

所属包： com.itheima.reggie.mapper

```java
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.itheima.reggie.entity.SetmealDish;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SetmealDishMapper extends BaseMapper<SetmealDish> {
}
```

4.**业务层接口 SetmealDishService**

所属包： com.itheima.reggie.service

```java
import com.baomidou.mybatisplus.extension.service.IService;
import com.itheima.reggie.entity.SetmealDish;

public interface SetmealDishService extends IService<SetmealDish> {
}
```

5.**业务层实现类 SetmealDishServiceImpl**

所属包： com.itheima.reggie.service.impl

```java
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.itheima.reggie.entity.SetmealDish;
import com.itheima.reggie.mapper.SetmealDishMapper;
import com.itheima.reggie.service.SetmealDishService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class SetmealDishServiceImpl extends ServiceImpl<SetmealDishMapper,SetmealDish> implements SetmealDishService {
}
```

6.**控制层 SetmealController**

套餐管理的相关业务，都统一在 SetmealController 中进行统一处理操作  

所属包： com.itheima.reggie.service.impl

```java
import com.itheima.reggie.service.SetmealDishService;
import com.itheima.reggie.service.SetmealService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * 套餐管理
 */
@RestController
@RequestMapping("/setmeal")
@Slf4j
public class SetmealController {
    @Autowired
    private SetmealService setmealService;
    @Autowired
    private SetmealDishService setmealDishService;
}    
```

### 1.4 前端页面分析

服务端的基础准备工作准备完毕之后，在进行代码开发之前，需要梳理一下新增套餐时前端页面和服务端的交互过程：

1. 点击新建套餐按钮，访问页面(backend/page/combo/add.html)，页面加载发送ajax请求，请求服务端获取**套餐分类**数据并展示到下拉框中(已实现)

    ![ ](./assets/day05/image-20210806002144537.png)

    获取套餐分类列表的功能不用开发，之前已经开发完成了，之前查询时type传递的是1，查询菜品分类; 本次查询时，传递的type为2，查询套餐分类列表  

2. 访问页面(backend/page/combo/add.html)，页面加载时发送ajax请求，请求服务端获取**菜品分类**数据并展示到添加菜品窗口中(已实现)

    ![ ](./assets/day05/image-20210806002730820.png)

    本次查询分类列表，传递的type为1，表示需要查询的是菜品的分类  
    查询菜品分类的目的，是添加套餐关联的菜品时，需要根据菜品分类，来过滤查询菜品信息  
    查询菜品分类列表的代码已经实现， 具体展示效果如下：

    ![ ](./assets/day05/image-20210806003318531.png)  

3. 当点击添加菜品窗口左侧菜单的某一个分类，页面发送ajax请求，请求服务端，根据菜品分类查询对应的**菜品**数据并展示到添加菜品窗口中

    ![ ](./assets/day05/image-20210806004116496.png)

4. 页面发送请求进行**图片上传**，请求服务端将图片保存到服务器(已实现)

5. 页面发送请求进行**图片下载**，将上传的图片进行回显(已实现)

    ![ ](./assets/day05/image-20210806004434277.png)

6. 点击保存按钮，发送ajax请求，将**套餐**相关数据以json形式提交到服务端

![ ](./assets/day05/image-20210806005028874.png)

经过上述的页面解析及流程分析，发送这里需要发送的请求有5个，分别是 ：

A. 根据传递的参数，查询套餐分类列表

B. 根据传递的参数，查询菜品分类列表

C. 图片上传

D. 图片下载展示

E. 根据菜品分类ID，查询菜品列表

F. 保存套餐信息

而对于以上的前4个功能都已经实现， 所以接下来需要开发的功能主要是最后两项， 具体的请求信息如下:

1.**根据分类ID查询菜品列表**

| 请求     | 说明                            |
| -------- | ------------------------------- |
| 请求方式 | GET                             |
| 请求路径 | /dish/list                      |
| 请求参数 | ?categoryId=1397844263642378242 |

2.**保存套餐信息**

| 请求     | 说明         |
| -------- | ------------ |
| 请求方式 | POST         |
| 请求路径 | /setmeal     |
| 请求参数 | json格式数据 |

传递的json格式数据如下:

```json
{
    "name":"营养超值工作餐",
    "categoryId":"1399923597874081794",
    "price":3800,
    "code":"",
    "image":"9cd7a80a-da54-4f46-bf33-af3576514cec.jpg",
    "description":"营养超值工作餐",
    "dishList":[],
    "status":1,
    "idType":"1399923597874081794",
    "setmealDishes":[
        {"copies":2,"dishId":"1423329009705463809","name":"米饭","price":200},
        {"copies":1,"dishId":"1423328152549109762","name":"可乐","price":500},
        {"copies":1,"dishId":"1397853890262118402","name":"鱼香肉丝","price":3800}
    ]
}
```

### 1.5 代码开发

上面已经分析了接下来需要实现的两个功能，接下来就需要根据上述的分析，来完成具体的功能实现  

#### 1.5.1 根据分类查询菜品

##### 1.5.1.1 功能实现

在当前的需求中，只需要根据页面传递的菜品分类的ID(categoryId)来查询菜品列表即可，可以直接定义一个DishController的方法，声明一个Long类型的categoryId，这样做是没问题的  但是考虑到该方法的拓展性，在这里定义方法时，通过Dish这个实体来接收参数  

在DishController中定义方法list，接收Dish类型的参数：

在查询时，需要根据菜品分类categoryId进行查询，并且还要限定菜品的状态为起售状态(status为1)，然后对查询的结果进行排序  

```java
/**
* 根据条件查询对应的菜品数据
* @param dish
* @return
*/
@GetMapping("/list")
public R<List<Dish>> list(Dish dish){
    //构造查询条件
    LambdaQueryWrapper<Dish> queryWrapper = new LambdaQueryWrapper<>();
    queryWrapper.eq(dish.getCategoryId() != null ,Dish::getCategoryId,dish.getCategoryId());
    //添加条件，查询状态为1（起售状态）的菜品
    queryWrapper.eq(Dish::getStatus,1);
    //添加排序条件
    queryWrapper.orderByAsc(Dish::getSort).orderByDesc(Dish::getUpdateTime);

    List<Dish> list = dishService.list(queryWrapper);

    return R.success(list);
}
```

##### 1.5.1.2 功能测试

代码编写完毕，重新启动服务器，进行测试，可以通过debug断点跟踪的形式查看页面传递的参数封装情况，及响应给页面的数据信息  

![ ](./assets/day05/image-20210806012153982.png)

#### 1.5.2 保存套餐

##### 1.5.2.1 功能实现

在进行套餐信息保存时，前端提交的数据，不仅包含套餐的基本信息，还包含套餐关联的菜品列表数据 setmealDishes  所以这个时候使用Setmeal就不能完成参数的封装了，需要在Setmeal的基本属性的基础上，再扩充一个属性 setmealDishes 来接收页面传递的套餐关联的菜品列表，而在准备工作中，导入进来的SetmealDto能够满足这个需求  

1.SetmealController中定义方法save，新增套餐

在该Controller的方法中，不仅需要保存套餐的基本信息，还需要保存套餐关联的菜品数据，所以需要再该方法中调用业务层方法，完成两块数据的保存  

页面传递的数据是json格式，需要在方法形参前面加上@RequestBody注解， 完成参数封装  

```java
@PostMapping
public R<String> save(@RequestBody SetmealDto setmealDto){
    log.info("套餐信息：{}",setmealDto);

    setmealService.saveWithDish(setmealDto);

    return R.success("新增套餐成功");
}
```

2.SetmealService中定义方法saveWithDish

```java
/**
 * 新增套餐，同时需要保存套餐和菜品的关联关系
 * @param setmealDto
 */
public void saveWithDish(SetmealDto setmealDto);
```

3.SetmealServiceImpl实现方法saveWithDish

具体逻辑:

A. 保存套餐基本信息

B. 获取套餐关联的菜品集合，并为集合中的每一个元素赋值套餐ID(setmealId)

C. 批量保存套餐关联的菜品集合

代码实现:

```java
/**
 * 新增套餐，同时需要保存套餐和菜品的关联关系
 * @param setmealDto
 */
@Transactional
public void saveWithDish(SetmealDto setmealDto) {
    //保存套餐的基本信息，操作setmeal，执行insert操作
    this.save(setmealDto);

    List<SetmealDish> setmealDishes = setmealDto.getSetmealDishes();
    setmealDishes.stream().map((item) -> {
        item.setSetmealId(setmealDto.getId());
        return item;
    }).collect(Collectors.toList());

    //保存套餐和菜品的关联信息，操作setmeal_dish，执行insert操作
    setmealDishService.saveBatch(setmealDishes);
}
```

##### 1.5.2.2 功能测试

代码编写完毕，重新启动服务器，进行测试，可以通过debug断点跟踪的形式查看页面传递的参数封装情况，及套餐相关数据的保存情况  

录入表单数据:

![ ](./assets/day05/image-20210806014328575.png)

debug跟踪数据封装:

![ ](./assets/day05/image-20210806014508310.png)

跟踪数据库保存的数据:

![ ](./assets/day05/image-20210806014807017.png)

## 2. 套餐分页查询

### 2.1 需求分析

系统中的套餐数据很多的时候，如果在一个页面中全部展示出来会显得比较乱，不便于查看，所以一般的系统中都会以分页的方式来展示列表数据  

![ ](./assets/day05/image-20210806073710653.png)

在进行套餐数据的分页查询时，除了传递分页参数以外，还可以传递一个可选的条件(套餐名称)  查询返回的字段中，包含套餐的基本信息之外，还有一个套餐的分类名称，在查询时，需要关联查询这个字段  

### 2.2 前端页面分析

在开发代码之前，需要梳理一下套餐分页查询时前端页面和服务端的交互过程：

1. 访问页面(backend/page/combo/list.html)，页面加载时，会自动发送ajax请求，将分页查询参数(page、pageSize、name)提交到服务端，获取分页数据

    ![ ](./assets/day05/image-20210806074846550.png)

2. 在列表渲染展示时，页面发送请求，请求服务端进行图片下载，用于页面图片展示(**已实现**)

    ![ ](./assets/day05/image-20210806075231072.png)

    而对于以上的流程中涉及到2个功能，文件下载功能已经实现，本小节主要实现列表分页查询功能， 具体的请求信息如下:

    | 请求     | 说明                         |
    | -------- | ---------------------------- |
    | 请求方式 | GET                          |
    | 请求路径 | /setmeal/page                |
    | 请求参数 | ?page=1&pageSize=10&name=xxx |

### 2.3 代码开发

#### 2.3.1 基本信息查询

该方法的逻辑如下：

1. 构建分页条件对象

2. 构建查询条件对象，如果传递了套餐名称，根据套餐名称模糊查询， 并对结果按修改时间降序排序

3. 执行分页查询

4. 组装数据并返回

代码实现 :

```java
/**
  * 套餐分页查询
  * @param page
  * @param pageSize
  * @param name
  * @return
  */
@GetMapping("/page")
public R<Page> page(int page,int pageSize,String name){
    //分页构造器对象
    Page<Setmeal> pageInfo = new Page<>(page,pageSize);

    LambdaQueryWrapper<Setmeal> queryWrapper = new LambdaQueryWrapper<>();
    //添加查询条件，根据name进行like模糊查询
    queryWrapper.like(name != null,Setmeal::getName,name);
    //添加排序条件，根据更新时间降序排列
    queryWrapper.orderByDesc(Setmeal::getUpdateTime);

    setmealService.page(pageInfo,queryWrapper);
    return R.success(pageInfo);
}
```

#### 2.3.2 问题分析

基本分页查询代码编写完毕后，重启服务，测试列表查询，发现， 列表页面的数据可以展示出来， 但是套餐分类名称没有展示出来  

![ ](./assets/day05/image-20210806082542473.png)

这是因为在服务端仅返回分类ID(categoryId)， 而页面展示需要的是categoryName属性  

#### 2.3.3 功能完善

在查询套餐信息时， 只包含套餐的基本信息， 并不包含套餐的分类名称， 所以在这里查询到套餐的基本信息后， 还需要根据分类ID(categoryId)， 查询套餐分类名称(categoryName)，并最终将套餐的基本信息及分类名称信息封装到SetmealDto(在第一小节已经导入)中  

```java
@Data
public class SetmealDto extends Setmeal {
    private List<SetmealDish> setmealDishes; //套餐关联菜品列表
    private String categoryName;//套餐分类名称
}
```

完善后代码:

```java
/**
* 套餐分页查询
* @param page
* @param pageSize
* @param name
* @return
*/
@GetMapping("/page")
public R<Page> page(int page,int pageSize,String name){
    //分页构造器对象
    Page<Setmeal> pageInfo = new Page<>(page,pageSize);
    Page<SetmealDto> dtoPage = new Page<>();

    LambdaQueryWrapper<Setmeal> queryWrapper = new LambdaQueryWrapper<>();
    //添加查询条件，根据name进行like模糊查询
    queryWrapper.like(name != null,Setmeal::getName,name);
    //添加排序条件，根据更新时间降序排列
    queryWrapper.orderByDesc(Setmeal::getUpdateTime);

    setmealService.page(pageInfo,queryWrapper);

    //对象拷贝
    BeanUtils.copyProperties(pageInfo,dtoPage,"records");
    List<Setmeal> records = pageInfo.getRecords();

    List<SetmealDto> list = records.stream().map((item) -> {
        SetmealDto setmealDto = new SetmealDto();
        //对象拷贝
        BeanUtils.copyProperties(item,setmealDto);
        //分类id
        Long categoryId = item.getCategoryId();
        //根据分类id查询分类对象
        Category category = categoryService.getById(categoryId);
        if(category != null){
            //分类名称
            String categoryName = category.getName();
            setmealDto.setCategoryName(categoryName);
        }
        return setmealDto;
    }).collect(Collectors.toList());

    dtoPage.setRecords(list);
    return R.success(dtoPage);
}
```

### 2.4 功能测试

代码完善后，重启服务，测试列表查询，发现， 抓取浏览器的请求响应数据，可以获取到套餐分类名称categoryName，也可以在列表页面展示出来  

![ ](./assets/day05/image-20210806083346578.png)

## 3. 删除套餐

### 3.1 需求分析

在套餐管理列表页面，点击删除按钮，可以删除对应的套餐信息，也可以通过复选框选择多个套餐，点击批量删除按钮一次删除多个套餐  
注意，对于状态为售卖中的套餐不能删除，需要先停售，然后才能删除  

![ ](./assets/day05/image-20210806214443507.png)

### 3.2 前端页面分析

在开发代码之前，需要梳理一下删除套餐时前端页面和服务端的交互过程：

1.点击删除， 删除单个套餐时，页面发送ajax请求，根据套餐id删除对应套餐

![ ](./assets/day05/image-20210806215911878.png)

2.删除多个套餐时，页面发送ajax请求，根据提交的多个套餐id删除对应套餐

![ ](./assets/day05/image-20210806220406587.png)

开发删除套餐功能，其实就是在服务端编写代码去处理前端页面发送的这2次请求即可，**一次请求为根据ID删除，一次请求为根据ID批量删除**  

观察删除单个套餐和批量删除套餐的请求信息可以发现，两种请求的**地址**和**请求方式**都是相同的，不同的则是传递的id个数，所以在服务端可以提供一个方法来统一处理  

具体的请求信息如下：

| 请求     | 说明                                         |
| -------- | -------------------------------------------- |
| 请求方式 | DELETE                                       |
| 请求路径 | /setmeal                                     |
| 请求参数 | ?ids=1423640210125656065,1423338765002256385 |

### 3.3 代码开发

在服务端的逻辑中，删除套餐时，不仅要删除套餐，还要删除套餐与菜品的关联关系  

1.**在SetmealController中创建delete方法**

可以先测试在delete方法中接收页面提交的参数，具体逻辑后续再完善：

```java
/**
 * 删除套餐
 * @param ids
 * @return
 */
@DeleteMapping
public R<String> delete(@RequestParam List<Long> ids){
    log.info("ids:{}",ids);
    return R.success("套餐数据删除成功");
}
```

编写完代码，重启服务之后，访问套餐列表页面，勾选复选框，然后点击"批量删除"，可以看到服务端可以接收到集合参数ids，并且在控制台也可以输出对应的数据  

![ ](./assets/day05/image-20210806221603303.png)

2.**SetmealService接口定义方法removeWithDish**

```java
/**
 * 删除套餐，同时需要删除套餐和菜品的关联数据
 * @param ids
 */
public void removeWithDish(List<Long> ids);
```

3.**SetmealServiceImpl中实现方法removeWithDish**

该业务层方法具体的逻辑为:

1. 查询该批次套餐中是否存在售卖中的套餐，如果存在，不允许删除
1. 删除套餐数据
1. 删除套餐关联的菜品数据

代码实现为:

```java
/**
* 删除套餐，同时需要删除套餐和菜品的关联数据
* @param ids
*/
@Transactional
public void removeWithDish(List<Long> ids) {
    //select count(*) from setmeal where id in (1，2，3) and status = 1
    //查询套餐状态，确定是否可用删除
    LambdaQueryWrapper<Setmeal> queryWrapper = new LambdaQueryWrapper();
    queryWrapper.in(Setmeal::getId,ids);
    queryWrapper.eq(Setmeal::getStatus,1);

    int count = this.count(queryWrapper);
    if(count > 0){
        //如果不能删除，抛出一个业务异常
        throw new CustomException("套餐正在售卖中，不能删除");
    }

    //如果可以删除，先删除套餐表中的数据---setmeal
    this.removeByIds(ids);

    //delete from setmeal_dish where setmeal_id in (1，2，3)
    LambdaQueryWrapper<SetmealDish> lambdaQueryWrapper = new LambdaQueryWrapper<>();
    lambdaQueryWrapper.in(SetmealDish::getSetmealId,ids);
    //删除关系表中的数据----setmeal_dish
    setmealDishService.remove(lambdaQueryWrapper);
}
```

由于当前的业务方法中存在多次数据库操作，为了保证事务的完整性，需要在方法上加注解 @Transactional 来控制事务  

4.**完善SetmealController代码**

```java
/**
 * 删除套餐
 * @param ids
 * @return
 */
@DeleteMapping
public R<String> delete(@RequestParam List<Long> ids){
    log.info("ids:{}",ids);
    setmealService.removeWithDish(ids);
    return R.success("套餐数据删除成功");
}
```

### 3.4 功能测试

代码完善后，重启服务，测试套餐的删除功能，主要测试以下几种情况  

1.删除正在启用的套餐

![ ](./assets/day05/image-20210806224121877.png)

2.执行批量操作， 删除两条记录， 一个启售的， 一个停售的

由于当前并未实现启售/停售功能，所以需要手动修改数据库表结构的status状态，将其中的一条记录status修改为0  

![ ](./assets/day05/image-20210806224603405.png)

3.删除已经停售的套餐信息，执行删除之后， 检查数据库表结构 setmeal ， setmeal_dish表中的数据

![ ](./assets/day05/image-20210806224807108.png)

## 4. 短信发送

![ ](./assets/day05/image-20210806225505074.png =600x)

### 4.1 短信服务介绍

在项目中，如果要实现短信发送功能，无需自己实现，也无需和运营商直接对接，只需要调用第三方提供的短信服务即可  
目前市面上有很多第三方提供短信服务，这些第三方短信服务会和各个运营商（移动、联通、电信）对接，只需要注册成为会员，并且按照提供的开发文档进行调用就可以发送短信

> 这些短信服务一般都是收费服务  

::: tip 常用短信服务

- 阿里云
- 华为云
- 腾讯云
- 京东
- 梦网
- 乐信

:::

### 4.2 阿里云短信服务介绍

阿里云短信服务（Short Message Service）是广大企业客户快速触达手机用户所优选使用的通信能力，调用API或用群发助手，即可发送验证码、通知类和营销类短信  

> 国内验证短信秒级触达，到达率最高可达99%  
> 国际/港澳台短信覆盖200多个国家和地区，安全稳定，广受出海企业选用  

应用场景

| 场景     | 案例                                                         |
| -------- | ------------------------------------------------------------ |
| 验证码   | APP、网站注册账号，向手机下发验证码； 登录账户、异地登录时的安全提醒； 找回密码时的安全验证； 支付认证、身份校验、手机绑定等   |
| 短信通知 | 向注册用户下发系统相关信息，包括： 升级或维护、服务开通、价格调整、 订单确认、物流动态、消费确认、 支付通知等普通通知短信   |
| 推广短信 | 向注册用户和潜在客户发送通知和推广信息，包括促销活动通知、业务推广等商品与活动的推广信息，增加企业产品曝光率、提高产品的知名度   |

![ ](./assets/day05/image-20210806231422923.png)

阿里云短信服务官方网站：  
[https://www.aliyun.com/product/sms?spm=5176.19720258.J_8058803260.52.5c432c4a11Dcwf](https://www.aliyun.com/product/sms?spm=5176.19720258.J_8058803260.52.5c432c4a11Dcwf)

![ ](./assets/day05/image-20210806231821334.png)  

### 4.3 阿里云短信服务准备

#### 4.3.1 注册账号

阿里云官网：[https://www.aliyun.com/](https://www.aliyun.com/)

![ ](./assets/day05/image-20210807074911618.png)

![ ](./assets/day05/image-20210807074934251.png)

#### 4.3.2 开通短信服务

登录后进入控制台，在左上角的菜单栏中搜索短信服务，第一次使用，需要点击并开通短信服务  

![ ](./assets/day05/image-20210807075321250.png)

![ ](./assets/day05/image-20210807075620990.png)

#### 4.3.3 设置短信签名

开通短信服务之后，进入短信服务管理页面，选择国内消息菜单，需要在这里添加短信签名  

![ ](./assets/day05/image-20210807080406104.png)

**什么是短信签名呢?**

短信签名是短信发送者的署名，表示发送方的身份，要调用阿里云短信服务发送短信，签名是比不可少的部分  

![ ](./assets/day05/image-20210807080659337.png)

接下来添加短信签名  

![ ](./assets/day05/image-20210807081839908.png)

> 注意：目前，阿里云短信服务申请签名主要针对企业开发，个人申请时有一定难度，审核时会审核资质，需要上传营业执照

#### 4.3.4 设置短信模板

切换到【模板管理】标签页

![ ](./assets/day05/image-20210807082453655.png)

**什么是模板呢?**

短信模板包含短信发送内容、场景、变量信息

![ ](./assets/day05/image-20210807082639900.png =600x)

将${code}占位符替换成对应的验证码数据即可

```md
【xxxxx】您好，您的验证码为173822，5分钟之内有效，不要泄露给他人!
```

可以点击右上角的按钮，添加模板，然后填写模板的基本信息及设置的模板内容

![ ](./assets/day05/image-20210807083306928.png)

添加的短信模板，也是需要进行审核的只有审核通过，才可以正常使用  

#### 4.3.5 设置AccessKey

AccessKey 是访问阿里云 API 的密钥，具有账户的完全权限，要想在后面通过API调用阿里云短信服务的接口发送短信，那么就必须要设置AccessKey  

点击右上角的用户头像，选择"AccessKey管理"

![ ](./assets/day05/image-20210807130218414.png)

进入到AccessKey的管理界面之后，提示两个选项 "继续使用AccessKey" 和 "开始使用子用户AccessKey"

1. **继续使用AccessKey**

    如果选择的是该选项，创建的是阿里云账号的AccessKey，是具有账户的完全权限，有了这个AccessKey以后，就可以通过API调用阿里云的服务，不仅是短信服务，其他服务(OSS，语音服务，内容安全服务，视频点播服务等...)也可以调用  
    相对来说，并不安全，当前的AccessKey泄露，会影响到当前账户的其他云服务  

2. **开始使用子用户AccessKey**

    可以创建一个子用户，这个子用户可以分配比较低的权限，比如仅分配短信发送的权限，不具备操作其他的服务的权限，即使这个AccessKey泄漏了，也不会影响其他的云服务， 相对安全  

如何创建子用户AccessKey  

![ ](./assets/day05/image-20210807131340003.png)

#### 4.3.6 配置权限

上述已经创建了子用户，但是这个子用户，目前没有任何权限，接下来，需要为创建的这个用户来分配权限  

![ ](./assets/day05/image-20210807183735533.png)

经过上述的权限配置之后，那么新创建的这个 reggie 用户，仅有短信服务操作的权限，不具备别的权限

#### 4.3.7 禁用 / 删除AccessKey

如果在使用的过程中 AccessKey 不小心泄漏了，可以在阿里云控制台中，禁用或者删除该AccessKey  

![ ](./assets/day05/image-20210807190005367.png)

然后再创建一个新的AccessKey，保存好AccessKeyId和AccessKeySecret  

![ ](./assets/day05/image-20210807190304136.png)

> 注意：创建好了AccessKey后，请及时保存AccessKeyId 和 AccessKeySecret ，弹窗关闭后将无法再次获取该信息，但您可以随时创建新的 AccessKey

### 4.4 代码开发

使用阿里云短信服务发送短信，可以参照官方提供的文档即可  

官方文档:  
[https://help.aliyun.com/product/44282.html?spm=5176.12212571.help.dexternal.57a91cbewHHjKq](https://help.aliyun.com/product/44282.html?spm=5176.12212571.help.dexternal.57a91cbewHHjKq)

![ ](./assets/day05/image-20210807193047220.png)

根据官方文档的提示，引入对应的依赖，然后再引入对应的java代码，就可以发送消息了  

![ ](./assets/day05/image-20210807193829131.png)

> SDK : Software Development Kit 的缩写，翻译过来——软件开发工具包，辅助开发某一类软件的相关文档、范例和工具的集合都可以叫做SDK  
> 在与第三方接口相互时， 一般都会提供对应的SDK，来简化的开发  

**具体实现：**

1.pom.xml

```xml
<dependency>
    <groupId>com.aliyun</groupId>
    <artifactId>aliyun-java-sdk-core</artifactId>
    <version>4.5.16</version>
</dependency>
<dependency>
    <groupId>com.aliyun</groupId>
    <artifactId>aliyun-java-sdk-dysmsapi</artifactId>
    <version>2.1.0</version>
</dependency>
```

2.将官方提供的main方法封装为一个工具类

```java
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.dysmsapi.model.v20170525.SendSmsRequest;
import com.aliyuncs.dysmsapi.model.v20170525.SendSmsResponse;
import com.aliyuncs.exceptions.ClientException;
import com.aliyuncs.profile.DefaultProfile;

/**
 * 短信发送工具类
 */
public class SMSUtils {
   /**
    * 发送短信
    * @param signName 签名
    * @param templateCode 模板
    * @param phoneNumbers 手机号
    * @param param 参数
    */
   public static void sendMessage(String signName, String templateCode,String phoneNumbers,String param){
      DefaultProfile profile = DefaultProfile.getProfile("cn-hangzhou", "xxxxxxxxxxxxxxxx", "xxxxxxxxxxxxxx");
      IAcsClient client = new DefaultAcsClient(profile);

      SendSmsRequest request = new SendSmsRequest();
      request.setSysRegionId("cn-hangzhou");
      request.setPhoneNumbers(phoneNumbers);
      request.setSignName(signName);
      request.setTemplateCode(templateCode);
      request.setTemplateParam("{\"code\":\""+param+"\"}");
      try {
         SendSmsResponse response = client.getAcsResponse(request);
         System.out.println("短信发送成功");
      }catch (ClientException e) {
         e.printStackTrace();
      }
   }

}
```

> 备注 : 由于个人目前无法申请阿里云短信服务，所以这里只需要把流程跑通，具体的短信发送可以实现  

## 5. 手机验证码登录

### 5.1 需求分析

::: tip 手机验证码登录有如下优点

1. 方便快捷，无需注册，直接登录
2. 使用短信验证码作为登录凭证，无需记忆密码
3. 安全

:::

![ ](./assets/day05/image-20210807232653592.png)

**登录流程：**

输入手机号 > 获取验证码 > 输入验证码 > 点击登录 > 登录成功

> 注意：通过手机验证码登录，手机号是区分不同用户的标识  

### 5.2 数据模型

通过手机验证码登录时，涉及的表为user表，即用户表

![ ](./assets/day05/image-20210807231948412.png)

### 5.3 前端页面分析

在开发代码之前，需要梳理一下登录时前端页面和服务端的交互过程：

1.在登录页面(front/page/login.html)输入手机号，点击【获取验证码】按钮，页面发送ajax请求，在服务端调用短信服务API给指定手机号发送验证码短信  

![ ](./assets/day05/image-20210807233018171.png)

2.在登录页面输入验证码，点击【登录】按钮，发送ajax请求，在服务端处理登录请求  

![ ](./assets/day05/image-20210807233336029.png)

> 如果服务端返回的登录成功，页面将会把当前登录用户的手机号存储在sessionStorage中，并跳转到移动的首页页面  

开发手机验证码登录功能，其实就是在服务端编写代码去处理前端页面发送的这2次请求即可，分别是 获取短信验证码 和 登录请求

1.获取短信验证码

| 请求     | 说明                    |
| -------- | ----------------------- |
| 请求方式 | POST                    |
| 请求路径 | /user/sendMsg           |
| 请求参数 | \{"phone":"13100001111"\} |

2.登录

| 请求     | 说明                                   |
| -------- | -------------------------------------- |
| 请求方式 | POST                                   |
| 请求路径 | /user/login                            |
| 请求参数 | \{"phone":"13100001111", "code":"1111"\} |

### 5.4 代码开发

#### 5.4.1 准备工作

在开发业务功能前，先将需要用到的类和接口基本结构创建好：

1.实体类 User

所属包： com.itheima.reggie.entity

```java
import lombok.Data;
import java.io.Serializable;
/**
 * 用户信息
 */
@Data
public class User implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;

    //姓名
    private String name;

    //手机号
    private String phone;

    //性别 0 女 1 男
    private String sex;

    //身份证号
    private String idNumber;

    //头像
    private String avatar;

    //状态 0:禁用，1:正常
    private Integer status;
}
```

2.Mapper接口 UserMapper

所属包： com.itheima.reggie.mapper

```java
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.itheima.reggie.entity.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper extends BaseMapper<User>{
}
```

3.业务层接口 UserService

所属包： com.itheima.reggie.service

```java
import com.baomidou.mybatisplus.extension.service.IService;
import com.itheima.reggie.entity.User;

public interface UserService extends IService<User> {
}
```

4.业务层实现类 UserServiceImpl

所属包： com.itheima.reggie.service.impl

```java
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.itheima.reggie.entity.User;
import com.itheima.reggie.mapper.UserMapper;
import com.itheima.reggie.service.UserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends ServiceImpl<UserMapper,User> implements UserService{
}
```

5.控制层 UserController

所属包： com.itheima.reggie.controller

```java
import com.itheima.reggie.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@Slf4j
public class UserController {
    @Autowired
    private UserService userService;
}
```

6.工具类SMSUtils、ValidateCodeUtils（直接从课程资料中导入即可）

所属包： com.itheima.reggie.utils

![ ](./assets/day05/image-20210807234828051.png)

> SMSUtils : 是上面改造的阿里云短信发送的工具类  
> ValidateCodeUtils : 是验证码生成的工具类

#### 5.4.2 功能实现

##### 5.4.2.1 修改LoginCheckFilter

在进行手机验证码登录时，发送的两个请求(获取验证码和登录)需要在此过滤器处理时直接放行  

![ ](./assets/day05/image-20210807235349089.png)

对于移动的端的页面，也是用户登录之后才可以访问，这个时候就需要在 LoginCheckFilter 中进行判定，如果移动端用户已登录，获取到用户登录信息，存入ThreadLocal中(在后续的业务处理中，如果需要获取当前登录用户ID，直接从ThreadLocal中获取)，然后放行 

```java
//4-2、判断登录状态，如果已登录，则直接放行
if(request.getSession().getAttribute("user") != null){
    log.info("用户已登录，用户id为：{}",request.getSession().getAttribute("user"));

    Long userId = (Long) request.getSession().getAttribute("user");
    BaseContext.setCurrentId(userId);

    filterChain.doFilter(request,response);
    return;
}
```

##### 5.4.2.2 发送短信验证码

在UserController中创建方法，处理登录页面的请求，为指定手机号发送短信验证码，同时需要将手机号对应的验证码保存到Session，方便后续登录时进行比对  

```java
/**
 * 发送手机短信验证码
 * @param user
 * @return
 */
@PostMapping("/sendMsg")
public R<String> sendMsg(@RequestBody User user, HttpSession session){
    //获取手机号
    String phone = user.getPhone();
    if(StringUtils.isNotEmpty(phone)){
        //生成随机的4位验证码
        String code = ValidateCodeUtils.generateValidateCode(4).toString();
        log.info("code={}",code);

        //调用阿里云提供的短信服务API完成发送短信
        //SMSUtils.sendMessage("瑞吉外卖","",phone,code);

        //需要将生成的验证码保存到Session
        session.setAttribute(phone,code);
        return R.success("手机验证码短信发送成功");
    }
    return R.error("短信发送失败");
}
```

> 备注:
>
> 这里发送短信只需要调用封装的工具类中的方法即可，这个功能流程跑通，在测试中不用真正的发送短信，只需要将验证码信息，通过日志输出，登录时，直接从控制台就可以看到生成的验证码(实际上也就是发送到手机上的验证码)

##### 5.4.2.3 验证码登录

在UserController中增加登录的方法 login，该方法的具体逻辑为：

1. 获取前端传递的手机号和验证码
2. 从Session中获取到手机号对应的正确的验证码
3. 进行验证码的比对，如果比对失败，直接返回错误信息
4. 如果比对成功， 需要根据手机号查询当前用户，如果用户不存在，则自动注册一个新用户
5. 将登录用户的ID存储Session中

具体代码实现:

```java
/**
 * 移动端用户登录
 * @param map
 * @param session
 * @return
 */
@PostMapping("/login")
public R<User> login(@RequestBody Map map, HttpSession session){
    log.info(map.toString());
    //获取手机号
    String phone = map.get("phone").toString();
    //获取验证码
    String code = map.get("code").toString();
    //从Session中获取保存的验证码
    Object codeInSession = session.getAttribute(phone);

    //进行验证码的比对（页面提交的验证码和Session中保存的验证码比对）
    if(codeInSession != null && codeInSession.equals(code)){
        //如果能够比对成功，说明登录成功

        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(User::getPhone,phone);

        User user = userService.getOne(queryWrapper);
        if(user == null){
            //判断当前手机号对应的用户是否为新用户，如果是新用户就自动完成注册
            user = new User();
            user.setPhone(phone);
            user.setStatus(1);
            userService.save(user);
        }
        session.setAttribute("user",user.getId());
        return R.success(user);
    }
    return R.error("登录失败");
}
```

### 5.5 功能测试

重启服务，测试短信验证码的发送及登录功能  

1.测试错误验证码的情况

![ ](./assets/day05/image-20210808001952043.png)

2.测试正确验证码的情况

![ ](./assets/day05/image-20210808002356092.png)

检查user表

![ ](./assets/day05/image-20210808002501618.png)
