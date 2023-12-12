import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as u,c as i,f as o,w as a,d as n,e as s}from"./app-angsg6Zy.js";const k={},r=n("h1",{id:"day10-订单状态定时处理、来单提醒和客户催单",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#day10-订单状态定时处理、来单提醒和客户催单","aria-hidden":"true"},"#"),s(" Day10 订单状态定时处理、来单提醒和客户催单")],-1),d=n("h2",{id:"_1-订单状态定时处理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-订单状态定时处理","aria-hidden":"true"},"#"),s(" 1. 订单状态定时处理")],-1),m=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(),n("span",{class:"token namespace"},[s("com"),n("span",{class:"token punctuation"},"."),s("sky"),n("span",{class:"token punctuation"},"."),s("task")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * 自定义定时任务，实现订单状态定时处理
 */`),s(`
`),n("span",{class:"token annotation punctuation"},"@Component"),s(`
`),n("span",{class:"token annotation punctuation"},"@Slf4j"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"OrderTask"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token annotation punctuation"},"@Autowired"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"OrderMapper"),s(" orderMapper"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     * 处理支付超时订单
     */`),s(`
    `),n("span",{class:"token annotation punctuation"},"@Scheduled"),n("span",{class:"token punctuation"},"("),s("cron "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"0 * * * * ?"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"processTimeoutOrder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
        log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"处理支付超时订单：{}"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     * 处理“派送中”状态的订单
     */`),s(`
    `),n("span",{class:"token annotation punctuation"},"@Scheduled"),n("span",{class:"token punctuation"},"("),s("cron "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"0 0 1 * * ?"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"processDeliveryOrder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
        log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"处理派送中订单：{}"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[s("  "),n("span",{class:"token doc-comment comment"},`/**
     * 处理支付超时订单
     */`),s(`
    `),n("span",{class:"token annotation punctuation"},"@Scheduled"),n("span",{class:"token punctuation"},"("),s("cron "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"0 * * * * ?"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"processTimeoutOrder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
        log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"处理支付超时订单：{}"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"//当前时间减去15分钟"),s(`
        `),n("span",{class:"token class-name"},"LocalDateTime"),s(" time "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"LocalDateTime"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"now"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"plusMinutes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"15"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"// select * from orders where status = 1 and order_time < 当前时间-15分钟"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Orders"),n("span",{class:"token punctuation"},">")]),s(" ordersList "),n("span",{class:"token operator"},"="),s(" orderMapper"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getByStatusAndOrdertimeLT"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Orders"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PENDING_PAYMENT"),n("span",{class:"token punctuation"},","),s(" time"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("ordersList "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" ordersList"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
            ordersList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),s("order "),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token punctuation"},"{"),s(`
                order`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setStatus"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Orders"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"CANCELLED"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                order`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setCancelReason"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"支付超时，自动取消"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                order`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setCancelTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"LocalDateTime"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"now"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                orderMapper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),s("order"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    
    `),n("span",{class:"token doc-comment comment"},`/**
     * 处理“派送中”状态的订单
     */`),s(`
    `),n("span",{class:"token annotation punctuation"},"@Scheduled"),n("span",{class:"token punctuation"},"("),s("cron "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"0 0 1 * * ?"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"processDeliveryOrder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
        log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"处理派送中订单：{}"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"// select * from orders where status = 4 and order_time < 当前时间-1小时"),s(`
         `),n("span",{class:"token comment"},"//当前时间减去60分钟"),s(`
        `),n("span",{class:"token class-name"},"LocalDateTime"),s(" time "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"LocalDateTime"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"now"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"plusMinutes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"60"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Orders"),n("span",{class:"token punctuation"},">")]),s(" ordersList "),n("span",{class:"token operator"},"="),s(" orderMapper"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getByStatusAndOrdertimeLT"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Orders"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"DELIVERY_IN_PROGRESS"),n("span",{class:"token punctuation"},","),s(" time"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("ordersList "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" ordersList"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`

            ordersList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),s("order "),n("span",{class:"token operator"},"->"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token comment"},"// 设置状态为：已完成并修改"),s(`
                order`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setStatus"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Orders"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"COMPLETED"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                orderMapper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),s("order"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[s("  "),n("span",{class:"token doc-comment comment"},[s(`/**
     * 根据状态和下单时间查询订单
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"status"),s(`
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"orderTime"),s(`
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@Select"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"select * from orders where status = #{status} and order_time < #{orderTime}"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"Orders"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"getByStatusAndOrdertimeLT"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Integer"),s(" status"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token class-name"},"LocalDateTime"),s(" orderTime"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("h2",{id:"_2-来单提醒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-来单提醒","aria-hidden":"true"},"#"),s(" 2. 来单提醒")],-1),g=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[s("    "),n("span",{class:"token annotation punctuation"},"@Autowired"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"WebSocketServer"),s(" webSocketServer"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 支付成功，修改订单状态
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"outTradeNo"),s(`
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"paySuccess"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" outTradeNo"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 当前登录用户id"),s(`
        `),n("span",{class:"token class-name"},"Long"),s(" userId "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"BaseContext"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getCurrentId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"// 根据订单号查询当前用户的订单"),s(`
        `),n("span",{class:"token class-name"},"Orders"),s(" ordersDB "),n("span",{class:"token operator"},"="),s(" orderMapper"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getByNumberAndUserId"),n("span",{class:"token punctuation"},"("),s("outTradeNo"),n("span",{class:"token punctuation"},","),s(" userId"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"// 根据订单id更新订单的状态、支付方式、支付状态、结账时间"),s(`
        `),n("span",{class:"token class-name"},"Orders"),s(" orders "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"Orders"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"builder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"id"),n("span",{class:"token punctuation"},"("),s("ordersDB"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"status"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Orders"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"TO_BE_CONFIRMED"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"payStatus"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Orders"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PAID"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"checkoutTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"LocalDateTime"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"now"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"build"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        orderMapper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),s("orders"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"//////////////////////////////////////////////"),s(`
        `),n("span",{class:"token class-name"},"Map"),s(" map "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"HashMap"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        map`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"put"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"type"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//消息类型，1表示来单提醒"),s(`
        map`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"put"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"orderId"'),n("span",{class:"token punctuation"},","),s(" orders"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        map`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"put"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"content"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"订单号："'),s(),n("span",{class:"token operator"},"+"),s(" outTradeNo"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"//通过WebSocket实现来单提醒，向客户端浏览器推送消息"),s(`
        webSocketServer`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sendToAllClient"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toJSONString"),n("span",{class:"token punctuation"},"("),s("map"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"///////////////////////////////////////////////////"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("h2",{id:"_3-客户催单",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-客户催单","aria-hidden":"true"},"#"),s(" 3. 客户催单")],-1),y=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[s("  "),n("span",{class:"token doc-comment comment"},[s(`/**
     * 用户催单
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"id"),s(`
     * `),n("span",{class:"token keyword"},"@return"),s(`
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@GetMapping"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/reminder/{id}"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token annotation punctuation"},"@ApiOperation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"用户催单"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"Result"),s(),n("span",{class:"token function"},"reminder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token annotation punctuation"},"@PathVariable"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"id"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token class-name"},"Long"),s(" id"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        orderService`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reminder"),n("span",{class:"token punctuation"},"("),s("id"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token class-name"},"Result"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[s("  "),n("span",{class:"token doc-comment comment"},[s(`/**
     * 用户催单
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"id"),s(`
     */`)]),s(`
    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"reminder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Long"),s(" id"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[s("  "),n("span",{class:"token doc-comment comment"},[s(`/**
     * 用户催单
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"id"),s(`
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"reminder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Long"),s(" id"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// 查询订单是否存在"),s(`
        `),n("span",{class:"token class-name"},"Orders"),s(" orders "),n("span",{class:"token operator"},"="),s(" orderMapper"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getById"),n("span",{class:"token punctuation"},"("),s("id"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("orders "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"OrderBusinessException"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"MessageConstant"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"ORDER_NOT_FOUND"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token comment"},"//基于WebSocket实现催单"),s(`
        `),n("span",{class:"token class-name"},"Map"),s(" map "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"HashMap"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        map`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"put"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"type"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),n("span",{class:"token comment"},"//2代表用户催单"),s(`
        map`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"put"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"orderId"'),n("span",{class:"token punctuation"},","),s(" id"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        map`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"put"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"content"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"订单号："'),s(),n("span",{class:"token operator"},"+"),s(" orders"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getNumber"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        webSocketServer`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sendToAllClient"),n("span",{class:"token punctuation"},"("),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toJSONString"),n("span",{class:"token punctuation"},"("),s("map"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[s("  "),n("span",{class:"token doc-comment comment"},[s(`/**
     * 根据id查询订单
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"id"),s(`
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@Select"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"select * from orders where id=#{id}"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token class-name"},"Orders"),s(),n("span",{class:"token function"},"getById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Long"),s(" id"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function O(T,L){const c=p("Tabs");return u(),i("div",null,[r,d,o(c,{id:"6",data:[{id:"Controller层"},{id:"ServiceImpl层"},{id:"Mapper层"}]},{title0:a(({value:t,isActive:e})=>[s("Controller层")]),title1:a(({value:t,isActive:e})=>[s("ServiceImpl层")]),title2:a(({value:t,isActive:e})=>[s("Mapper层")]),tab0:a(({value:t,isActive:e})=>[m]),tab1:a(({value:t,isActive:e})=>[v]),tab2:a(({value:t,isActive:e})=>[b]),_:1}),f,o(c,{id:"20",data:[{id:"注入WebSocketServer对象"}]},{title0:a(({value:t,isActive:e})=>[s("注入WebSocketServer对象")]),tab0:a(({value:t,isActive:e})=>[g]),_:1}),w,o(c,{id:"28",data:[{id:"Controller层"},{id:"Service层"},{id:"ServiceImpl层"},{id:"Mapper层"}]},{title0:a(({value:t,isActive:e})=>[s("Controller层")]),title1:a(({value:t,isActive:e})=>[s("Service层")]),title2:a(({value:t,isActive:e})=>[s("ServiceImpl层")]),title3:a(({value:t,isActive:e})=>[s("Mapper层")]),tab0:a(({value:t,isActive:e})=>[y]),tab1:a(({value:t,isActive:e})=>[h]),tab2:a(({value:t,isActive:e})=>[_]),tab3:a(({value:t,isActive:e})=>[S]),_:1})])}const D=l(k,[["render",O],["__file","skytakeout10.html.vue"]]);export{D as default};