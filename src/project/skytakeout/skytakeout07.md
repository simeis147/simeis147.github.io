---
order: 7
date: 2023-07-18
category: 
  - 苍穹外卖
---

# Day07 缓存商品、购物车

## 1. 缓存商品

[缓存商品](http://www.yangeit.cn:21010/skytakeoutproject2023/day07.html#_1-%E7%BC%93%E5%AD%98%E8%8F%9C%E5%93%81)

[缓存套餐](http://www.yangeit.cn:21010/skytakeoutproject2023/day07.html#_2-%E7%BC%93%E5%AD%98%E5%A5%97%E9%A4%90)

## 2. 购物车

### 2.1 添加购物车

::: tabs

@tab DTO设计

在sky-pojo模块，ShoppingCartDTO.java已定义

```java
package com.sky.dto;

@Data
public class ShoppingCartDTO implements Serializable {

    private Long dishId;
    private Long setmealId;
    private String dishFlavor;

}
```

@tab Controller层

根据添加购物车接口创建ShoppingCartController：

```java
package com.sky.controller.user;

/**
 * 购物车
 */
@RestController
@RequestMapping("/user/shoppingCart")
@Slf4j
@Api(tags = "C端-购物车接口")
public class ShoppingCartController {

    @Autowired
    private ShoppingCartService shoppingCartService;

    /**
     * 添加购物车
     * @param shoppingCartDTO
     * @return
     */
    @PostMapping("/add")
    @ApiOperation("添加购物车")
    public Result<String> add(@RequestBody ShoppingCartDTO shoppingCartDTO){
        log.info("添加购物车：{}", shoppingCartDTO);
        shoppingCartService.addShoppingCart(shoppingCartDTO);//后绪步骤实现
        return Result.success();
    }
}
```

@tab Service层接口

创建ShoppingCartService接口：

```java
package com.sky.service;

import com.sky.dto.ShoppingCartDTO;
import com.sky.entity.ShoppingCart;
import java.util.List;

public interface ShoppingCartService {

    /**
     * 添加购物车
     * @param shoppingCartDTO
     */
    void addShoppingCart(ShoppingCartDTO shoppingCartDTO);
}
```

@tab Service层实现类

```java
package com.sky.service.impl;


@Service
public class ShoppingCartServiceImpl implements ShoppingCartService {

    @Autowired
    private ShoppingCartMapper shoppingCartMapper;
    @Autowired
    private DishMapper dishMapper;
    @Autowired
    private SetmealMapper setmealMapper;
    /**
     * 添加购物车
     *
     * @param shoppingCartDTO
     */
    public void addShoppingCart(ShoppingCartDTO shoppingCartDTO) {
        ShoppingCart shoppingCart = new ShoppingCart();
        BeanUtils.copyProperties(shoppingCartDTO, shoppingCart);
        //只能查询自己的购物车数据
        shoppingCart.setUserId(BaseContext.getCurrentId());

        //判断当前商品是否在购物车中
        List<ShoppingCart> shoppingCartList = shoppingCartMapper.list(shoppingCart);

        if (shoppingCartList != null && shoppingCartList.size() == 1) {
            //如果已经存在，就更新数量，数量加1
            shoppingCart = shoppingCartList.get(0);
            shoppingCart.setNumber(shoppingCart.getNumber() + 1);
            shoppingCartMapper.updateNumberById(shoppingCart);
        } else {
            //如果不存在，插入数据，数量就是1

            //判断当前添加到购物车的是菜品还是套餐
            Long dishId = shoppingCartDTO.getDishId();
            if (dishId != null) {
                //添加到购物车的是菜品
                Dish dish = dishMapper.getById(dishId);
                shoppingCart.setName(dish.getName());
                shoppingCart.setImage(dish.getImage());
                shoppingCart.setAmount(dish.getPrice());
            } else {
                //添加到购物车的是套餐
                Setmeal setmeal = setmealMapper.getById(shoppingCartDTO.getSetmealId());
                shoppingCart.setName(setmeal.getName());
                shoppingCart.setImage(setmeal.getImage());
                shoppingCart.setAmount(setmeal.getPrice());
            }
            shoppingCart.setNumber(1);
            shoppingCart.setCreateTime(LocalDateTime.now());
            shoppingCartMapper.insert(shoppingCart);
        }
    }
}
```

@tab Mapper层

创建ShoppingCartMapper接口:

```java
package com.sky.mapper;

@Mapper
public interface ShoppingCartMapper {
/**
    * 条件查询
    *
    * @param shoppingCart
    * @return
    */
List<ShoppingCart> list(ShoppingCart shoppingCart);

/**
    * 更新商品数量
    *
    * @param shoppingCart
    */
@Update("update shopping_cart set number = #{number} where id = #{id}")
void updateNumberById(ShoppingCart shoppingCart);

/**
    * 插入购物车数据
    *
    * @param shoppingCart
    */
@Insert("insert into shopping_cart (name, user_id, dish_id, setmeal_id, dish_flavor, number, amount, image, create_time) " +
        " values (#{name},#{userId},#{dishId},#{setmealId},#{dishFlavor},#{number},#{amount},#{image},#{createTime})")
void insert(ShoppingCart shoppingCart);

}
```

创建ShoppingCartMapper.xml：

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.sky.mapper.ShoppingCartMapper">

    <select id="list" parameterType="ShoppingCart" resultType="ShoppingCart">
        select * from shopping_cart
        <where>
            <if test="userId != null">
                and user_id = #{userId}
            </if>
            <if test="dishId != null">
                and dish_id = #{dishId}
            </if>
            <if test="setmealId != null">
                and setmeal_id = #{setmealId}
            </if>
            <if test="dishFlavor != null">
                and dish_flavor = #{dishFlavor}
            </if>
        </where>
        order by create_time desc
    </select>
</mapper>
```

:::

### 2.2 查看购物车

::: tabs

@tab Controller层

```java
/**
    * 查看购物车
    * @return
    */
@GetMapping("/list")
@ApiOperation("查看购物车")
public Result<List<ShoppingCart>> list(){

    return Result.success(shoppingCartService.showShoppingCart());

}
```

@tab Service层接口

在ShoppingCartService接口中声明查看购物车的方法：

```java
  /**
     * 查看购物车
     * @return
     */
    List<ShoppingCart> showShoppingCart();
```

@tab Service层实现类

在ShoppingCartServiceImpl中实现查看购物车的方法：

```java
/**
    * 查看购物车
    * @return
    */
public List<ShoppingCart> showShoppingCart() {

    return shoppingCartMapper.list(ShoppingCart.builder().userId(BaseContext.getCurrentId()).build());
}
```

:::

### 2.3 清空购物车

::: tabs

@tab Controller层

```java
/**
    * 清空购物车商品
    * @return
    */
@DeleteMapping("/clean")
@ApiOperation("清空购物车商品")
public Result<String> clean(){
    shoppingCartService.cleanShoppingCart();
    return Result.success();
}
```

@tab Service层接口

```java
/**
    * 清空购物车商品
    */
void cleanShoppingCart();
```

@tab Service层实现类

```java
/**
    * 清空购物车商品
    */
public void cleanShoppingCart() {
    shoppingCartMapper.deleteByUserId(BaseContext.getCurrentId());
}
```

@tab Mapper层

```java
/**
    * 根据用户id删除购物车数据
    *
    * @param userId
    */
@Delete("delete from shopping_cart where user_id = #{userId}")
void deleteByUserId(Long userId);
```

:::
