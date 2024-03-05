---
order: 11
date: 2023-07-18
category: 
  - 苍穹外卖
---

# Day11 数据统计（图形报表）

## 1. 营业额统计

::: tabs

@tab Controller层

```java
package com.sky.controller.admin;
/**
 * 报表
 */
@RestController
@RequestMapping("/admin/report")
@Slf4j
@Api(tags = "统计报表相关接口")
public class ReportController {

    @Autowired
    private ReportService reportService;

    /**
     * 营业额数据统计
     *
     * @param begin
     * @param end
     * @return
     */
    @GetMapping("/turnoverStatistics")
    @ApiOperation("营业额数据统计")
    public Result<TurnoverReportVO> turnoverStatistics(
            @DateTimeFormat(pattern = "yyyy-MM-dd")  LocalDate begin,
            @DateTimeFormat(pattern = "yyyy-MM-dd")  LocalDate end) {

        return Result.success(reportService.getTurnover(begin, end));

    }

}
```

@tab Service层

```java
package com.sky.service;
public interface ReportService {

    /**
     * 根据时间区间统计营业额
     * @param beginTime
     * @param endTime
     * @return
     */
    TurnoverReportVO getTurnover(LocalDate beginTime, LocalDate endTime);
}
```

@tab ServiceImpl层

```java
package com.sky.service.impl;

@Service
@Slf4j
public class ReportServiceImpl implements ReportService {

    @Autowired
    private OrderMapper orderMapper;

    /**
     * 根据时间区间统计营业额
     * @param begin
     * @param end
     * @return
     */
    public TurnoverReportVO getTurnover(LocalDate begin, LocalDate end) {
        List<LocalDate> dateList = new ArrayList<>();
        dateList.add(begin);

        // 将每一天加入到集合中，组成x轴日期数据
        while (!begin.equals(end)){
            begin = begin.plusDays(1);//日期计算，获得指定日期后1天的日期
            dateList.add(begin);
        }

        // 接下来根据日期数据，获得对应的y轴数据
       List<Double> turnoverList = new ArrayList<>();

        for (LocalDate date : dateList) {
            LocalDateTime beginTime = LocalDateTime.of(date, LocalTime.MIN);
            LocalDateTime endTime = LocalDateTime.of(date, LocalTime.MAX);

            Map map = new HashMap();
            // 状态已完成
          map.put("status", Orders.COMPLETED);
          map.put("begin",beginTime);
          map.put("end", endTime);

            Double turnover = orderMapper.sumByMap(map); 
            // 如果查询的数据是null，则设置0.0
            turnover = turnover == null ? 0.0 : turnover;

            // 添加进入集合中，组成y轴数据
            turnoverList.add(turnover);
        }

        //数据封装：根据接口文档要求，使用逗号，隔开
        return TurnoverReportVO.builder()
                .dateList(StringUtils.join(dateList,","))
                .turnoverList(StringUtils.join(turnoverList,","))
                .build();
    }
}
```

@tab Mapper层

```java
  /**
     * 根据动态条件统计营业额
     * @param map
     */
    Double sumByMap(Map map);
```

```xml
<select id="sumByMap" resultType="java.lang.Double">
        select sum(amount) from orders
        <where>
            <if test="status != null">
                and status = #{status}
            </if>
            <if test="begin != null">
                and order_time &gt;= #{begin}
            </if>
            <if test="end != null">
                and order_time &lt;= #{end}
            </if>
        </where>
</select>
```

:::

## 2. 用户统计

::: tabs

@tab Controller层

```java
/**
     * 用户数据统计
     * @param begin
     * @param end
     * @return
     */
    @GetMapping("/userStatistics")
    @ApiOperation("用户数据统计")
    public Result<UserReportVO> userStatistics(
            @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate begin,
            @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate end){

        return Result.success(reportService.getUserStatistics(begin,end));            
}
```

@tab Service层

```java
  /**
     * 根据时间区间统计用户数量
     * @param begin
     * @param end
     * @return
     */
    UserReportVO getUserStatistics(LocalDate begin, LocalDate end);
```

@tab ServiceImpl层

```java
@Override
public UserReportVO getUserStatistics(LocalDate begin, LocalDate end) {
    // 创建日期集合，组装X轴数据
    List<LocalDate> dateList = new ArrayList<>();
    dateList.add(begin);

 // 将每一天加入到集合中，组成x轴日期数据
    while (!begin.equals(end)){
        begin = begin.plusDays(1);
        dateList.add(begin);
    }

     // 创建新增用户数、总用户数集合，组装Y轴数据
    List<Integer> newUserList = new ArrayList<>(); //新增用户数
    List<Integer> totalUserList = new ArrayList<>(); //总用户数

    for (LocalDate date : dateList) {
        LocalDateTime beginTime = LocalDateTime.of(date, LocalTime.MIN);
        LocalDateTime endTime = LocalDateTime.of(date, LocalTime.MAX);
        //新增用户数量 select count(id) from user where create_time > ? and create_time < ?
        Integer newUser = getUserCount(beginTime, endTime);
        //总用户数量 select count(id) from user where  create_time < ?
        Integer totalUser = getUserCount(null, endTime);

        // 添加进入集合中，组成y轴数据
        newUserList.add(newUser);
        totalUserList.add(totalUser);
    }

    return UserReportVO.builder()
            .dateList(StringUtils.join(dateList,","))
            .newUserList(StringUtils.join(newUserList,","))
            .totalUserList(StringUtils.join(totalUserList,","))
            .build();
}
```

```java
/**
    * 根据时间区间统计用户数量
    * @param beginTime
    * @param endTime
    * @return
    */
public Integer getUserCount(LocalDateTime beginTime, LocalDateTime endTime) {
    Map map = new HashMap();
    map.put("begin",beginTime);
    map.put("end", endTime);
    return userMapper.countByMap(map);
}
```

@tab Mapper层

```java
  /**
     * 根据动态条件统计用户数量
     * @param map
     * @return
     */
    Integer countByMap(Map map);
```

```xml
<select id="countByMap" resultType="java.lang.Integer">
        select count(id) from user
        <where>
            <if test="begin != null">
                and create_time &gt;= #{begin}
            </if>
            <if test="end != null">
                and create_time &lt;= #{end}
            </if>
        </where>
</select>
```

:::

## 3. 订单统计

::: tabs

@tab Controller层

```java
/**
    * 订单数据统计
    * @param begin
    * @param end
    * @return
    */
@GetMapping("/ordersStatistics")
@ApiOperation("用户数据统计")
public Result<OrderReportVO> orderStatistics(
        @DateTimeFormat(pattern = "yyyy-MM-dd")
                LocalDate begin,
        @DateTimeFormat(pattern = "yyyy-MM-dd")
                LocalDate end){

    return Result.success(reportService.getOrderStatistics(begin,end));
}
```

@tab Service层

```java
/**
* 根据时间区间统计订单数量
* @param begin 
* @param end
* @return 
*/
OrderReportVO getOrderStatistics(LocalDate begin, LocalDate end);
```

@tab ServiceImpl层

```java
/**
* 根据时间区间统计订单数量
* @param begin 
* @param end
* @return 
*/
public OrderReportVO getOrderStatistics(LocalDate begin, LocalDate end){
    // 创建日期数据集合，组装成x轴数据
    List<LocalDate> dateList = new ArrayList<>();
    dateList.add(begin);

    while (!begin.equals(end)){
          begin = begin.plusDays(1);
          dateList.add(begin);
     }

    //每天订单总数集合
     List<Integer> orderCountList = new ArrayList<>();
    //每天有效订单数集合
     List<Integer> validOrderCountList = new ArrayList<>();
     for (LocalDate date : dateList) {
         LocalDateTime beginTime = LocalDateTime.of(date, LocalTime.MIN);
         LocalDateTime endTime = LocalDateTime.of(date, LocalTime.MAX);
   //查询每天的总订单数 select count(id) from orders where order_time > ? and order_time < ?
         Integer orderCount = reportService.getOrderCount(beginTime, endTime, null);

  //查询每天的有效订单数 select count(id) from orders where order_time > ? and order_time < ? and status = ?
         Integer validOrderCount = reportService.getOrderCount(beginTime, endTime, Orders.COMPLETED);

         orderCountList.add(orderCount);
         validOrderCountList.add(validOrderCount);
        }

        //时间区间内的总订单数
        Integer totalOrderCount = orderCountList.stream().reduce(Integer::sum).get();
        //时间区间内的总有效订单数
        Integer validOrderCount = validOrderCountList.stream().reduce(Integer::sum).get();
        //订单完成率
        Double orderCompletionRate = 0.0;
        if(totalOrderCount != 0){
            orderCompletionRate = validOrderCount.doubleValue() / totalOrderCount;
        }


    return OrderReportVO.builder()
                .dateList(StringUtils.join(dateList, ","))
                .orderCountList(StringUtils.join(orderCountList, ","))
                .validOrderCountList(StringUtils.join(validOrderCountList, ","))
                .totalOrderCount(totalOrderCount)
                .validOrderCount(validOrderCount)
                .orderCompletionRate(orderCompletionRate)
                .build();
    
}
```

```java
/**
* 根据时间区间统计指定状态的订单数量
* @param beginTime
* @param endTime
* @param status
* @return
*/
private Integer getOrderCount(LocalDateTime beginTime, LocalDateTime endTime, Integer status) {
  Map map = new HashMap();
  map.put("status", status);
  map.put("begin",beginTime);
  map.put("end", endTime);
  return orderMapper.countByMap(map);
}
```

@tab Mapper层

```java
/**
*根据动态条件统计订单数量
* @param map
*/
Integer countByMap(Map map);
```

```xml
<select id="countByMap" resultType="java.lang.Integer">
        select count(id) from orders
        <where>
            <if test="status != null">
                and status = #{status}
            </if>
            <if test="begin != null">
                and order_time &gt;= #{begin}
            </if>
            <if test="end != null">
                and order_time &lt;= #{end}
            </if>
        </where>
</select>
```

:::

## 4. 销量排名TOP10

::: tabs

@tab Controller层

```java
/**
* 销量排名统计
* @param begin
* @param end
* @return
*/
@GetMapping("/top10")
@ApiOperation("销量排名统计")
public Result<SalesTop10ReportVO> top10(
    @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate begin,
    @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate end){
    return Result.success(reportService.getSalesTop10(begin,end));
}
```

@tab Service层

```java
/**
* 查询指定时间区间内的销量排名top10 
* @param begin
* @param end
* @return
*/
SalesTop10ReportVO getSalesTop10(LocalDate begin, LocalDate end);
```

@tab ServiceImpl层

```java
/**
* 查询指定时间区间内的销量排名top10
* @param begin
* @param end
* @return
* */
public SalesTop10ReportVO getSalesTop10(LocalDate begin, LocalDate end){
    LocalDateTime beginTime = LocalDateTime.of(begin, LocalTime.MIN);
    LocalDateTime endTime = LocalDateTime.of(end, LocalTime.MAX);
    List<GoodsSalesDTO> goodsSalesDTOList = orderMapper.getSalesTop10(beginTime, endTime);

    String nameList = StringUtils.join(goodsSalesDTOList.stream().map(GoodsSalesDTO::getName).collect(Collectors.toList()),",");
    String numberList = StringUtils.join(goodsSalesDTOList.stream().map(GoodsSalesDTO::getNumber).collect(Collectors.toList()),",");

    return SalesTop10ReportVO.builder()
            .nameList(nameList)
            .numberList(numberList)
            .build();
}
```

@tab Mapper层

```java
/**
* 查询商品销量排名
* @param begin
* @param end
*/
List<GoodsSalesDTO> getSalesTop10(LocalDateTime begin, LocalDateTime end);
```

```xml
<select id="getSalesTop10" resultType="com.sky.dto.GoodsSalesDTO">
        select od.name name,sum(od.number) number from order_detail od ,orders o
        where od.order_id = o.id
            and o.status = 5
            <if test="begin != null">
                and order_time &gt;= #{begin}
            </if>
            <if test="end != null">
                and order_time &lt;= #{end}
            </if>
        group by name
        order by number desc
        limit 0, 10
</select>
```

:::
