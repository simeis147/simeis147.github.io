---
order: 4
date: 2023-07-18
category: 
  - 苍穹外卖
---

# Day04 项目实战（套餐管理）

::: tabs

@tab Controller层

```java
package com.sky.controller.admin;

import com.sky.dto.SetmealDTO;
import com.sky.dto.SetmealPageQueryDTO;
import com.sky.result.PageResult;
import com.sky.result.Result;
import com.sky.service.SetmealService;
import com.sky.vo.SetmealVO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/setmeal")
@Slf4j
@Api(tags = "套餐相关接口")
public class SetmealController {
    @Autowired
    private SetmealService setmealService;

    @PostMapping
    @ApiOperation("新增套餐")
    public Result save(@RequestBody SetmealDTO setmealDTO){
        log.info("新增套餐：{}",setmealDTO);
        setmealService.save(setmealDTO);
        return Result.success();
    }

    @GetMapping("/page")
    @ApiOperation("套餐分页查询")
    public Result<PageResult> page(SetmealPageQueryDTO setmealPageQueryDTO){
        log.info("套餐分页查询:{}",setmealPageQueryDTO);
        PageResult pageResult = setmealService.pageQuery(setmealPageQueryDTO);
        return Result.success(pageResult);
    }

    @DeleteMapping
    @ApiOperation("批量删除套餐")
    public Result deleteSetmeal(@RequestParam List<Long> ids){
        log.info("批量删除套餐:{}",ids);
        setmealService.deleteWithSetmealDish(ids);
        return Result.success();
    }

    @GetMapping("/{id}")
    @ApiOperation("根据ID查询套餐")
    public Result<SetmealVO> getById(@PathVariable Long id){
        log.info("根据ID查询套餐:{}",id);
        SetmealVO setmealVO = setmealService.getById(id);
        return Result.success(setmealVO);
    }


    @PutMapping
    @ApiOperation("修改套餐")
    public Result update(@RequestBody SetmealDTO setmealDTO){
        log.info("修改套餐:{}",setmealDTO);
        setmealService.updateWithDish(setmealDTO);
        return Result.success();
    }

    @PostMapping("/status/{status}")
    @ApiOperation("套餐起售、停售")
    public Result stopOrStartSetmeal(@PathVariable Integer status, Long id){
        log.info("套餐起售、停售:{},{}",status,id);
        setmealService.stopOrStartSetmeal(status,id);
        return Result.success();
    }
}
```

@tab Service接口层

```java
package com.sky.service;

import com.sky.dto.SetmealDTO;
import com.sky.dto.SetmealPageQueryDTO;
import com.sky.result.PageResult;
import com.sky.vo.SetmealVO;

import java.util.List;

public interface SetmealService {
    /**
     * 新增套餐
     * @param setmealDTO
     */
    void save(SetmealDTO setmealDTO);

    /**
     * 套餐分页查询
     * @param setmealPageQueryDTO
     * @return
     */
    PageResult pageQuery(SetmealPageQueryDTO setmealPageQueryDTO);

    /**
     * 批量删除套餐
     * @param ids
     */
    void deleteWithSetmealDish(List<Long> ids);

    /**
     * 根据ID查询套餐
     * @param id
     * @return
     */
    SetmealVO getById(Long id);

    /**
     * 修改套餐
     * @param setmealDTO
     */
    void updateWithDish(SetmealDTO setmealDTO);

    /**
     * 套餐起售、停售
     * @param status
     */
    void stopOrStartSetmeal(Integer status, Long id);
}
```

@tab Service实现层

```java
package com.sky.service.impl;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.sky.constant.MessageConstant;
import com.sky.constant.StatusConstant;
import com.sky.dto.DishPageQueryDTO;
import com.sky.dto.SetmealDTO;
import com.sky.dto.SetmealPageQueryDTO;
import com.sky.entity.Setmeal;
import com.sky.entity.SetmealDish;
import com.sky.exception.DeletionNotAllowedException;
import com.sky.exception.SetmealEnableFailedException;
import com.sky.mapper.SetmealDishMapper;
import com.sky.mapper.SetmealMapper;
import com.sky.result.PageResult;
import com.sky.service.SetmealService;
import com.sky.vo.SetmealVO;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SetmealServiceImpl implements SetmealService {
    @Autowired
    private SetmealMapper setmealMapper;

    @Autowired
    private SetmealDishMapper setmealDishMapper;

    /**
     * 新增套餐
     * @param setmealDTO
     */
    public void save(SetmealDTO setmealDTO) {
        Setmeal setmeal = new Setmeal();
        BeanUtils.copyProperties(setmealDTO,setmeal);

        setmealMapper.insertWithDish(setmeal);

        Long setmealId = setmeal.getId();

        List<SetmealDish> setmealDishes = setmealDTO.getSetmealDishes();
        if (setmealDishes != null && setmealDishes.size() > 0){
            for (SetmealDish setmealDish : setmealDishes) {
                setmealDish.setSetmealId(setmealId);
            }
            // 向套餐菜品表插入n条数据
            setmealDishMapper.insertBatch(setmealDishes);
        }


    }

    /**
     * 套餐分页查询
     * @param setmealPageQueryDTO
     * @return
     */
    public PageResult pageQuery(SetmealPageQueryDTO setmealPageQueryDTO) {
        PageHelper.startPage(setmealPageQueryDTO.getPage(), setmealPageQueryDTO.getPageSize());
        Page<SetmealVO> page = setmealMapper.pageQuery(setmealPageQueryDTO);
        return new PageResult(page.getTotal(),page.getResult());
    }

    /**
     * 批量删除套餐
     * @param ids
     */
    public void deleteWithSetmealDish(List<Long> ids) {
        Setmeal setmeal = new Setmeal();

        // 是否存在起售中的套餐
        if (ids != null && ids.size() > 0) {
            for (Long id : ids) {
                setmeal = setmealMapper.getById(id);
                if(setmeal.getStatus() == StatusConstant.ENABLE){
                    throw new DeletionNotAllowedException(MessageConstant.SETMEAL_ON_SALE);
                }
            }
        }

        // 是否被菜品关联了
/*        List<Long> DishIds = setmealDishMapper.getDishIdsBySetmealIds(ids);
        if ( DishIds != null && DishIds.size() > 0 ){
            //当前套餐里面含有菜品， 不能删除
            throw new DeletionNotAllowedException(MessageConstant.SETMEAL_ENABLE_FAILED);
        }*/

        //删除菜品表中的菜品数据
        for (Long id : ids) {
            setmealMapper.deleteById(id);
            setmealDishMapper.deleteBySetmealId(id);
        }

    }

    /**
     * 根据ID查询套餐
     * @param id
     * @return
     */
    public SetmealVO getById(Long id) {
        // 根据ID查询套餐数据
        Setmeal setmeal = setmealMapper.getById(id);

        // 根据ID查询套餐菜品数据
        List<SetmealDish> setmealDishes = setmealDishMapper.getBySetmealId(id);

        // 将查询到的数据封装到VO
        SetmealVO setmealVO = new SetmealVO();
        BeanUtils.copyProperties(setmeal, setmealVO);
        setmealVO.setSetmealDishes(setmealDishes);

        return setmealVO;
    }

    /**
     * 修改套餐
     * @param setmealDTO
     */
    public void updateWithDish(SetmealDTO setmealDTO) {
        Setmeal setmeal = new Setmeal();
        BeanUtils.copyProperties(setmealDTO,setmeal);

        // 修改套餐的基本信息
        setmealMapper.update(setmeal);

        // 删除套餐菜品数据
        setmealDishMapper.deleteBySetmealId(setmeal.getId());

        // 重新插入套餐菜品数据
        List<SetmealDish> setmealDishes = setmealDTO.getSetmealDishes();

        if(setmealDishes != null && setmealDishes.size() > 0){
            for (SetmealDish setmealDish : setmealDishes) {
                setmealDish.setSetmealId(setmealDTO.getId());
            }

            // 向套餐菜品表插入数据
            setmealDishMapper.insertBatch(setmealDishes);

        }



    }

    /**
     * 套餐起售、停售
     * @param status
     */
    public void stopOrStartSetmeal(Integer status, Long id) {

        Setmeal setmealMapperById = setmealMapper.getById(id);

        // 套餐内包含未启售菜品，无法启售
        if ( setmealMapperById.getStatus() == StatusConstant.DISABLE ){
            List<Integer> getStatus = setmealMapper.selectDishStatus(id);
            if (getStatus != null && getStatus.size() > 0){
                for (Integer s : getStatus) {
                    if (s == StatusConstant.DISABLE){
                        throw new SetmealEnableFailedException(MessageConstant.SETMEAL_ENABLE_FAILED);
                    }
                }
            }
        }

        Setmeal setmeal = Setmeal.builder()
                .status(status)
                .id(id)
                .build();

        setmealMapper.update(setmeal);
    }
}
```

@tab Mapper层

SetmealMapper.java

```java
package com.sky.mapper;

import com.github.pagehelper.Page;
import com.sky.annotation.AutoFill;
import com.sky.dto.SetmealPageQueryDTO;
import com.sky.entity.Setmeal;
import com.sky.enumeration.OperationType;
import com.sky.vo.SetmealVO;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface SetmealMapper {
    /**
     * 根据分类id查询套餐的数量
     * @param CategoryId
     * @return
     */
    @Select("select count(id) from setmeal where category_id = #{categoryId}")
    Integer countByCategoryId(Long CategoryId);

    /**
     * 插入套餐
     * @param setmeal
     */
    @AutoFill(value = OperationType.INSERT)
    void insertWithDish(Setmeal setmeal);

    /**
     * 套餐分页查询
     * @param setmealPageQueryDTO
     * @return
     */
    Page<SetmealVO> pageQuery(SetmealPageQueryDTO setmealPageQueryDTO);

    /**
     * 根据id删除套餐
     * @param id
     */
    @Delete("delete from setmeal where id = #{id}")
    void deleteById(Long id);

    /**
     * 根据id查询套餐
     * @param id
     * @return
     */
    @Select("select * from setmeal where id = #{id}")
    Setmeal getById(Long id);

    /**
     * 更新套餐
     * @param setmeal
     */
    @AutoFill(value = OperationType.UPDATE)
    void update(Setmeal setmeal);

    List<Integer> selectDishStatus(Long id);
}
```

SetmealMapper.xml

```java
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.sky.mapper.SetmealMapper">

    <insert id="insertWithDish" useGeneratedKeys="true" keyProperty="id">
        insert into setmeal(category_id, name, price, description, image, create_time, update_time, create_user, update_user)
        VALUES
        (#{categoryId}, #{name}, #{price}, #{description},#{image}, #{createTime}, #{updateTime}, #{createUser}, #{updateUser})
    </insert>

    <select id="pageQuery" resultType="com.sky.vo.SetmealVO">
        select s.*, c.name as categoryName
        from setmeal s
            left join category c on s.category_id = c.id
        <where>
            <if test="name != null">
                and s.name like concat('%',#{name},'%')
            </if>
            <if test="categoryId != null">
                and s.category_id = #{categoryId}
            </if>
            <if test="status != null">
                and s.status = #{status}
            </if>
        </where>
        order by s.create_time desc
    </select>


    <update id="update">
        update setmeal
        <set>
            <if test="categoryId != null">category_id = #{categoryId},</if>
            <if test="name != null">name = #{name},</if>
            <if test="price != null">price = #{price},</if>
            <if test="status != null">status = #{status},</if>
            <if test="description != null">description = #{description},</if>
            <if test="image != null">image = #{image},</if>
            <if test="updateTime != null">update_time = #{updateTime},</if>
            <if test="updateUser != null">update_user = #{updateUser},</if>
        </set>
        where id = #{id}
    </update>


    <select id="selectDishStatus" resultType="java.lang.Integer">
        SELECT d.status
        FROM setmeal s
                 join setmeal_dish sd on s.id = sd.setmeal_id
                 join dish d on sd.dish_id = d.id
        where s.id = #{id}
    </select>
</mapper>
```

@tab SetmealDishMapper层

SetmealDishMapper.java

```java
package com.sky.mapper;

import com.sky.annotation.AutoFill;
import com.sky.entity.SetmealDish;
import com.sky.enumeration.OperationType;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface SetmealDishMapper {

    /**
     * 根据菜品id查询对应的套餐id
     * @param dishIds
     * @return
     */
    List<Long> getSetmealIdsByDishIds(List<Long> dishIds);

    /**
     * 插入套餐菜品表
     * @param setmealDishes
     */
    void insertBatch(List<SetmealDish> setmealDishes);

    /**
     * 通过套餐查询是否关联菜品
     * @param setmealIds
     * @return
     */
    List<Long> getDishIdsBySetmealIds(List<Long> setmealIds);

    /**
     * 通过套餐id删除套餐菜品
     * @param setmelId
     */
    @Delete("delete from setmeal_dish where setmeal_id = #{setmelId}")
    void deleteBySetmealId(Long setmelId);

    @Select("select * from setmeal_dish where setmeal_id = #{stmealId}")
    @AutoFill(OperationType.UPDATE)
    List<SetmealDish> getBySetmealId(Long id);
}
```

SetmealDishMapper.xml

```java
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.sky.mapper.SetmealDishMapper">


    <select id="getSetmealIdsByDishIds" resultType="java.lang.Long">
        select setmeal_id from setmeal_dish
        where dish_id in
        <foreach collection="dishIds" item="dishId" separator="," open="(" close=")">
            #{dishId}
        </foreach>
    </select>

    <insert id="insertBatch">
        insert into setmeal_dish (setmeal_id, dish_id, name, price, copies)
        values
        <foreach collection="setmealDishes" item="sd" separator=",">
            (#{sd.setmealId},#{sd.dishId},#{sd.name},#{sd.price},#{sd.copies})
        </foreach>
    </insert>

    <select id="getDishIdsBySetmealIds" resultType="java.lang.Long">
        select dish_id from setmeal_dish
        where setmeal_id in
        <foreach collection="setmealIds" item="setmealId" separator="," open="(" close=")">
            #{setmealId}
        </foreach>
    </select>
</mapper>
```

:::
