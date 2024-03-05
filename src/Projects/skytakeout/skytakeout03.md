---
order: 3
date: 2023-07-18
category: 
  - 苍穹外卖
---

# Day03 菜品管理

## 1. 公共字段自动填充🍐 ✏️ 🚩

::: tabs

@tab 步骤一

**自定义注解 AutoFill**  
进入到sky-server模块，创建com.sky.annotation包。

```java
package com.sky.annotation;

/**
 * 自定义注解，用于标识某个方法需要进行功能字段自动填充处理
 */
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface AutoFill {
    //数据库操作类型：UPDATE INSERT
    OperationType value();
}
```

其中OperationType已在sky-common模块中定义

```java
package com.sky.enumeration;

/**
 * 数据库操作类型
 */
public enum OperationType {
    /** 更新操作*/
    UPDATE,
    /** 插入操作*/
    INSERT
}
```

@tab 步骤二

**自定义切面 AutoFillAspect**  
在sky-server模块，创建com.sky.aspect包。

**自定义切面 AutoFillAspect 的 autoFill 方法**:

```java {14,20,25-27}
package com.sky.aspect;

/**
 * 自定义切面，实现公共字段自动填充处理逻辑
 */
@Aspect
@Component
@Slf4j
public class AutoFillAspect {

    /**
     * 切入点
     */
    @Pointcut("execution(* com.sky.mapper.*.*(..)) && @annotation(com.sky.annotation.AutoFill)")
    public void autoFillPointCut(){}

    /**
     * 前置通知，在通知中进行公共字段的赋值
     */
    @Before("autoFillPointCut()")
    public void autoFill(JoinPoint joinPoint){
        log.info("开始进行公共字段自动填充...");

        //获取到当前被拦截的方法上的数据库操作类型
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();//方法签名对象
        AutoFill autoFill = signature.getMethod().getAnnotation(AutoFill.class);//获得方法上的注解对象
        OperationType operationType = autoFill.value();//获得数据库操作类型

        //获取到当前被拦截的方法的参数--实体对象
        Object[] args = joinPoint.getArgs();
        if(args == null || args.length == 0){
            return;
        }

        Object entity = args[0];

        //准备赋值的数据
        LocalDateTime now = LocalDateTime.now();
        Long currentId = BaseContext.getCurrentId();

        //根据当前不同的操作类型，为对应的属性通过反射来赋值
        if(operationType == OperationType.INSERT){
            //为4个公共字段赋值
            try {
                Method setCreateTime = entity.getClass().getDeclaredMethod(AutoFillConstant.SET_CREATE_TIME, LocalDateTime.class);
                Method setCreateUser = entity.getClass().getDeclaredMethod(AutoFillConstant.SET_CREATE_USER, Long.class);
                Method setUpdateTime = entity.getClass().getDeclaredMethod(AutoFillConstant.SET_UPDATE_TIME, LocalDateTime.class);
                Method setUpdateUser = entity.getClass().getDeclaredMethod(AutoFillConstant.SET_UPDATE_USER, Long.class);

                //通过反射为对象属性赋值
                setCreateTime.invoke(entity,now);
                setCreateUser.invoke(entity,currentId);
                setUpdateTime.invoke(entity,now);
                setUpdateUser.invoke(entity,currentId);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }else if(operationType == OperationType.UPDATE){
            //为2个公共字段赋值
            try {
                Method setUpdateTime = entity.getClass().getDeclaredMethod(AutoFillConstant.SET_UPDATE_TIME, LocalDateTime.class);
                Method setUpdateUser = entity.getClass().getDeclaredMethod(AutoFillConstant.SET_UPDATE_USER, Long.class);

                //通过反射为对象属性赋值
                setUpdateTime.invoke(entity,now);
                setUpdateUser.invoke(entity,currentId);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
}
```

@tab 步骤三

**在Mapper接口的方法上加入 AutoFill 注解**:

以CategoryMapper为例，分别在新增和修改方法添加@AutoFill()注解，也需要EmployeeMapper做相同操作

```java
package com.sky.mapper;

@Mapper
public interface CategoryMapper {
    /**
     * 插入数据
     * @param category
     */
    @Insert("insert into category(type, name, sort, status, create_time, update_time, create_user, update_user)" +
            " VALUES" +
            " (#{type}, #{name}, #{sort}, #{status}, #{createTime}, #{updateTime}, #{createUser}, #{updateUser})")
    @AutoFill(value = OperationType.INSERT)
    void insert(Category category);
    /**
     * 根据id修改分类
     * @param category
     */
    @AutoFill(value = OperationType.UPDATE)
    void update(Category category);

}
```

**同时**，将业务层为公共字段赋值的代码`注释`掉。

* 将员工管理的新增和编辑方法中的公共字段赋值的代码注释。
* 将菜品分类管理的新增和修改方法中的公共字段赋值的代码注释。

:::

## 2. 新增菜品 🚩

:::tabs

@tab 设计DTO类

在sky-pojo模块中

```java
package com.sky.dto;

@Data
public class DishDTO implements Serializable {
    private Long id;
    //菜品名称
    private String name;
    //菜品分类id
    private Long categoryId;
    //菜品价格
    private BigDecimal price;
    //图片
    private String image;
    //描述信息
    private String description;
    //0 停售 1 起售
    private Integer status;
    //口味
    private List<DishFlavor> flavors = new ArrayList<>();
}
```

@tab Controller层

进入到sky-server模块

```java
package com.sky.controller.admin;

/**
 * 菜品管理
 */
@RestController
@RequestMapping("/admin/dish")
@Api(tags = "菜品相关接口")
@Slf4j
public class DishController {

    @Autowired
    private DishService dishService;

    /**
     * 新增菜品
     *
     * @param dishDTO
     * @return
     */
    @PostMapping
    @ApiOperation("新增菜品")
    public Result save(@RequestBody DishDTO dishDTO) {
        log.info("新增菜品：{}", dishDTO);
        dishService.saveWithFlavor(dishDTO);//后绪步骤开发
        return Result.success();
    }
}
```

@tab Service层接口

```java
package com.sky.service;
public interface DishService {
    /**
     * 新增菜品和对应的口味
     * @param dishDTO
     */
    public void saveWithFlavor(DishDTO dishDTO);

}
```

@tab Service层实现类

```java
package com.sky.service.impl;
@Service
@Slf4j
public class DishServiceImpl implements DishService {

    @Autowired
    private DishMapper dishMapper;
    @Autowired
    private DishFlavorMapper dishFlavorMapper;

    /**
     * 新增菜品和对应的口味
     *
     * @param dishDTO
     */
    @Transactional
    public void saveWithFlavor(DishDTO dishDTO) {

        Dish dish = new Dish();

        BeanUtils.copyProperties(dishDTO, dish);

        //向菜品表插入1条数据
        dishMapper.insert(dish);//后绪步骤实现

        //获取insert语句生成的主键值
        Long dishId = dish.getId();

        List<DishFlavor> flavors = dishDTO.getFlavors();
        if (flavors != null && flavors.size() > 0) {
            flavors.forEach(dishFlavor -> {
                dishFlavor.setDishId(dishId);
            });
            //向口味表插入n条数据
            dishFlavorMapper.insertBatch(flavors);//后绪步骤实现
        }
    }

}
```

@tab Mapper层

DishMapper.java中添加

```java
  /**
     * 插入菜品数据
     * @param dish
     */
    @AutoFill(value = OperationType.INSERT)
    void insert(Dish dish);

```

在/resources/mapper中创建DishMapper.xml

```java
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.sky.mapper.DishMapper">

    <insert id="insert" useGeneratedKeys="true" keyProperty="id">
        insert into dish (name, category_id, price, image, description, create_time, update_time, create_user,update_user, status)
        values (#{name}, #{categoryId}, #{price}, #{image}, #{description}, #{createTime}, #{updateTime}, #{createUser},#{updateUser}, #{status})
    </insert>
</mapper>

```

DishFlavorMapper.java

```java
package com.sky.mapper;
@Mapper
public interface DishFlavorMapper {
    /**
     * 批量插入口味数据
     * @param flavors
     */
    void insertBatch(List<DishFlavor> flavors);

}
```

在/resources/mapper中创建DishFlavorMapper.xml

```java
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.sky.mapper.DishFlavorMapper">

    <insert id="insertBatch">
        insert into dish_flavor (dish_id, name, value) VALUES

        <foreach collection="flavors" item="df" separator=",">
            (#{df.dishId},#{df.name},#{df.value})
        </foreach>

    </insert>
</mapper>
```

:::

## 3. 菜品分页查询 🚩

::: tabs

@tab 设计DTO类

在sky-pojo模块中，已定义

```java
package com.sky.dto;

@Data
public class DishPageQueryDTO implements Serializable {
    private int page;
    private int pageSize;
    private String name;
    //分类id
    private Integer categoryId;
    //状态 0表示禁用 1表示启用
    private Integer status;

}
```

@tab 设计VO类

根据菜品分页查询接口定义设计对应的VO：

在sky-pojo模块中，已定义

```java
package com.sky.vo;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DishVO implements Serializable {
    private Long id;
    //菜品名称
    private String name;
    //菜品分类id
    private Long categoryId;
    //菜品价格
    private BigDecimal price;
    //图片
    private String image;
    //描述信息
    private String description;
    //0 停售 1 起售
    private Integer status;
    //更新时间
    private LocalDateTime updateTime;
    //分类名称
    private String categoryName;
    //菜品关联的口味
    private List<DishFlavor> flavors = new ArrayList<>();
}
```

@tab Controller层

根据接口定义创建DishController的page分页查询方法：

```java
  /**
     * 菜品分页查询
     *
     * @param dishPageQueryDTO
     * @return
     */
    @GetMapping("/page")
    @ApiOperation("菜品分页查询")
    public Result<PageResult> page(DishPageQueryDTO dishPageQueryDTO) {
        log.info("菜品分页查询:{}", dishPageQueryDTO);
        PageResult pageResult = dishService.pageQuery(dishPageQueryDTO);//后绪步骤定义
        return Result.success(pageResult);
    }
```

@tab Service层接口

在 DishService 中扩展分页查询方法：

```java
  /**
     * 菜品分页查询
     * @param dishPageQueryDTO
     * @return
     */
    PageResult pageQuery(DishPageQueryDTO dishPageQueryDTO);
```

@tab Service层实现类

在 DishServiceImpl 中实现分页查询方法：

```java
  /**
     * 菜品分页查询
     *
     * @param dishPageQueryDTO
     * @return
     */
    public PageResult pageQuery(DishPageQueryDTO dishPageQueryDTO) {

        PageHelper.startPage(dishPageQueryDTO.getPage(), dishPageQueryDTO.getPageSize());
        
        Page<DishVO> page = dishMapper.pageQuery(dishPageQueryDTO);//后绪步骤实现

        return new PageResult(page.getTotal(), page.getResult());
    }
```

@tab Mapper层

在 DishMapper 接口中声明 pageQuery 方法：

```java
  /**
     * 菜品分页查询
     *
     * @param dishPageQueryDTO
     * @return
     */
    Page<DishVO> pageQuery(DishPageQueryDTO dishPageQueryDTO);
```

在 DishMapper.xml 中编写SQL：

```java
<select id="pageQuery" resultType="com.sky.vo.DishVO">
        select d.* , c.name as categoryName from dish d 
        left outer join category c on d.category_id = c.id
        <where>
            <if test="name != null">
                and d.name like concat('%',#{name},'%')
            </if>
            <if test="categoryId != null">
                and d.category_id = #{categoryId}
            </if>
            <if test="status != null">
                and d.status = #{status}
            </if>
        </where>
        order by d.create_time desc
</select>
```

:::

## 4. 删除菜品 🚩

::: tabs

@tab Controller层

根据删除菜品的接口定义在DishController中创建方法：

```java
  /**
     * 菜品批量删除
     *
     * @param ids
     * @return
     */
    @DeleteMapping
    @ApiOperation("菜品批量删除")
    public Result delete(@RequestParam List<Long> ids) {
        log.info("菜品批量删除：{}", ids);
        dishService.deleteBatch(ids);//后绪步骤实现
        return Result.success();
    }
```

@tab Service层

在DishService接口中声明deleteBatch方法：

```java
  /**
     * 菜品批量删除
     *
     * @param ids
     */
    void deleteBatch(List<Long> ids);
```

@tab Service层实现类

在DishServiceImpl中实现deleteBatch方法：

```java

    @Autowired
    private SetmealDishMapper setmealDishMapper;
  /**
     * 菜品批量删除
     *
     * @param ids
     */
    @Transactional//事务
    public void deleteBatch(List<Long> ids) {
        //判断当前菜品是否能够删除---是否存在起售中的菜品？？
        for (Long id : ids) {
            Dish dish = dishMapper.getById(id);//后绪步骤实现
            if (dish.getStatus() == StatusConstant.ENABLE) {
                //当前菜品处于起售中，不能删除
                throw new DeletionNotAllowedException(MessageConstant.DISH_ON_SALE);
            }
        }

        //判断当前菜品是否能够删除---是否被套餐关联了？？
        List<Long> setmealIds = setmealDishMapper.getSetmealIdsByDishIds(ids);
        if (setmealIds != null && setmealIds.size() > 0) {
            //当前菜品被套餐关联了，不能删除
            throw new DeletionNotAllowedException(MessageConstant.DISH_BE_RELATED_BY_SETMEAL);
        }

        //删除菜品表中的菜品数据
        for (Long id : ids) {
            dishMapper.deleteById(id);//后绪步骤实现
            //删除菜品关联的口味数据
            dishFlavorMapper.deleteByDishId(id);//后绪步骤实现
        }
    }
```

@tab Mapper层

在DishMapper中声明getById方法，并配置SQL：

```java
  /**
     * 根据主键查询菜品
     *
     * @param id
     * @return
     */
    @Select("select * from dish where id = #{id}")
    Dish getById(Long id);
```

创建SetmealDishMapper，声明getSetmealIdsByDishIds方法，并在xml文件中编写SQL：

```java
package com.sky.mapper;

@Mapper
public interface SetmealDishMapper {
    /**
     * 根据菜品id查询对应的套餐id
     *
     * @param dishIds
     * @return
     */
    //select setmeal_id from setmeal_dish where dish_id in (1,2,3,4)
    List<Long> getSetmealIdsByDishIds(List<Long> dishIds);
}
```

SetmealDishMapper.xml

```java
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.sky.mapper.SetmealDishMapper">

<select id="getSetmealIdsByDishIds" resultType="java.lang.Long">

    select setmeal_id from setmal_dish where dish_id in

    <foreach collection="dishIds" item="dishId" separator="," open="(" close=")">
    
        #{dishId}

    </foreach>
</select>
</mapper>
```

在DishMapper.java中声明deleteById方法并配置SQL：

```java
  /**
     * 根据主键删除菜品数据
     *
     * @param id
     */
    @Delete("delete from dish where id = #{id}")
    void deleteById(Long id);
```

在DishFlavorMapper中声明deleteByDishId方法并配置SQL：

```java
    /**
     * 根据菜品id删除对应的口味数据
     * @param dishId
     */
    @Delete("delete from dish_flavor where dish_id = #{dishId}")
    void deleteByDishId(Long dishId);
```

:::

## 5. 修改菜品 🚩

### 5.1 根据id查询菜品实现

::: tabs

@tab Controller层

根据id查询菜品的接口定义在DishController中创建方法：

```java
    /**
     * 根据id查询菜品
     *
     * @param id
     * @return
     */
    @GetMapping("/{id}")
    @ApiOperation("根据id查询菜品")
    public Result<DishVO> getById(@PathVariable Long id) {
        log.info("根据id查询菜品：{}", id);
        DishVO dishVO = dishService.getByIdWithFlavor(id);//后绪步骤实现
        return Result.success(dishVO);
    }
```

@tab Service层接口

在DishService接口中声明getByIdWithFlavor方法：

```java
  /**
     * 根据id查询菜品和对应的口味数据
     *
     * @param id
     * @return
     */
    DishVO getByIdWithFlavor(Long id);
```

@tab Service层实现类

在DishServiceImpl中实现getByIdWithFlavor方法：

```java
  /**
     * 根据id查询菜品和对应的口味数据
     *
     * @param id
     * @return
     */
    public DishVO getByIdWithFlavor(Long id) {
        //根据id查询菜品数据
        Dish dish = dishMapper.getById(id);

        //根据菜品id查询口味数据
        List<DishFlavor> dishFlavors = dishFlavorMapper.getByDishId(id);//后绪步骤实现

        //将查询到的数据封装到VO
        DishVO dishVO = new DishVO();
        BeanUtils.copyProperties(dish, dishVO);
        dishVO.setFlavors(dishFlavors);

        return dishVO;
    }
```

@tab Mapper层

在DishFlavorMapper中声明getByDishId方法，并配置SQL：

```java
    /**
     * 根据菜品id查询对应的口味数据
     * @param dishId
     * @return
     */
    @Select("select * from dish_flavor where dish_id = #{dishId}")
    List<DishFlavor> getByDishId(Long dishId);
```

:::

### 5.2 修改菜品实现

::: tabs

@tab Controller层

根据修改菜品的接口定义在DishController中创建方法：

```java
  /**
     * 修改菜品
     *
     * @param dishDTO
     * @return
     */
    @PutMapping
    @ApiOperation("修改菜品")
    public Result update(@RequestBody DishDTO dishDTO) {
        log.info("修改菜品：{}", dishDTO);
        dishService.updateWithFlavor(dishDTO);
        return Result.success();
    }
```

@tab Service层

在DishService接口中声明updateWithFlavor方法：

```java
  /**
     * 根据id修改菜品基本信息和对应的口味信息
     *
     * @param dishDTO
     */
    void updateWithFlavor(DishDTO dishDTO);
```

@tab Service层实现类

在DishServiceImpl中实现updateWithFlavor方法：

```java
  /**
     * 根据id修改菜品基本信息和对应的口味信息
     *
     * @param dishDTO
     */
    public void updateWithFlavor(DishDTO dishDTO) {
        Dish dish = new Dish();
        BeanUtils.copyProperties(dishDTO, dish);

        //修改菜品表基本信息
        dishMapper.update(dish);

        //删除原有的口味数据
        dishFlavorMapper.deleteByDishId(dishDTO.getId());

        //重新插入口味数据
        List<DishFlavor> flavors = dishDTO.getFlavors();

        if (flavors != null && flavors.size() > 0) {

            flavors.forEach(dishFlavor -> {
                dishFlavor.setDishId(dishDTO.getId());
            });

            //向口味表插入n条数据
            dishFlavorMapper.insertBatch(flavors);
        }
    }
```

@tab Mapper层

在DishMapper中，声明update方法：

```java
/**
    * 根据id动态修改菜品数据
    *
    * @param dish
    */
@AutoFill(value = OperationType.UPDATE)
void update(Dish dish);
```

并在DishMapper.xml文件中编写SQL:

```java
<update id="update">
update dish
<set>
    <if test="name != null">name = #{name},</if>
    <if test="categoryId != null">category_id = #{categoryId},</if>
    <if test="price != null">price = #{price},</if>
    <if test="image != null">image = #{image},</if>
    <if test="description != null">description = #{description},</if>
    <if test="status != null">status = #{status},</if>
    <if test="updateTime != null">update_time = #{updateTime},</if>
    <if test="updateUser != null">update_user = #{updateUser},</if>
</set>
where id = #{id}
</update>
```

:::
