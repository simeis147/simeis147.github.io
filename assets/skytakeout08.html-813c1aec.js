import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as i,c as k,f as o,w as a,d as n,e as s}from"./app-e17536e7.js";const r={},d=n("h1",{id:"day08-用户下单、订单支付",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#day08-用户下单、订单支付","aria-hidden":"true"},"#"),s(" Day08 用户下单、订单支付")],-1),m=n("h2",{id:"_1-地址簿功能代码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-地址簿功能代码","aria-hidden":"true"},"#"),s(" 1. 地址簿功能代码")],-1),v=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(),n("span",{class:"token namespace"},[s("com"),n("span",{class:"token punctuation"},"."),s("sky"),n("span",{class:"token punctuation"},"."),s("controller"),n("span",{class:"token punctuation"},"."),s("user")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token annotation punctuation"},"@RestController"),s(`
`),n("span",{class:"token annotation punctuation"},"@RequestMapping"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/user/addressBook"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token annotation punctuation"},"@Api"),n("span",{class:"token punctuation"},"("),s("tags "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"C端地址簿接口"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"AddressBookController"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token annotation punctuation"},"@Autowired"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"AddressBookService"),s(" addressBookService"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 查询当前登录用户的所有地址信息
     *
     * `),n("span",{class:"token keyword"},"@return"),s(`
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@GetMapping"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/list"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token annotation punctuation"},"@ApiOperation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"查询当前登录用户的所有地址信息"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"Result"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"List"),n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AddressBook"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"list"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"AddressBook"),s(" addressBook "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"AddressBook"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        addressBook`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setUserId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"BaseContext"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getCurrentId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AddressBook"),n("span",{class:"token punctuation"},">")]),s(" list "),n("span",{class:"token operator"},"="),s(" addressBookService"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"list"),n("span",{class:"token punctuation"},"("),s("addressBook"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token class-name"},"Result"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("list"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 新增地址
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"addressBook"),s(`
     * `),n("span",{class:"token keyword"},"@return"),s(`
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@PostMapping"),s(`
    `),n("span",{class:"token annotation punctuation"},"@ApiOperation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"新增地址"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"Result"),s(),n("span",{class:"token function"},"save"),n("span",{class:"token punctuation"},"("),n("span",{class:"token annotation punctuation"},"@RequestBody"),s(),n("span",{class:"token class-name"},"AddressBook"),s(" addressBook"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        addressBookService`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"save"),n("span",{class:"token punctuation"},"("),s("addressBook"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token class-name"},"Result"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token annotation punctuation"},"@GetMapping"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/{id}"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token annotation punctuation"},"@ApiOperation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"根据id查询地址"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"Result"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AddressBook"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"getById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token annotation punctuation"},"@PathVariable"),s(),n("span",{class:"token class-name"},"Long"),s(" id"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"AddressBook"),s(" addressBook "),n("span",{class:"token operator"},"="),s(" addressBookService"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getById"),n("span",{class:"token punctuation"},"("),s("id"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token class-name"},"Result"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("addressBook"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 根据id修改地址
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"addressBook"),s(`
     * `),n("span",{class:"token keyword"},"@return"),s(`
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@PutMapping"),s(`
    `),n("span",{class:"token annotation punctuation"},"@ApiOperation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"根据id修改地址"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"Result"),s(),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),n("span",{class:"token annotation punctuation"},"@RequestBody"),s(),n("span",{class:"token class-name"},"AddressBook"),s(" addressBook"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        addressBookService`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),s("addressBook"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token class-name"},"Result"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 设置默认地址
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"addressBook"),s(`
     * `),n("span",{class:"token keyword"},"@return"),s(`
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@PutMapping"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/default"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token annotation punctuation"},"@ApiOperation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"设置默认地址"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"Result"),s(),n("span",{class:"token function"},"setDefault"),n("span",{class:"token punctuation"},"("),n("span",{class:"token annotation punctuation"},"@RequestBody"),s(),n("span",{class:"token class-name"},"AddressBook"),s(" addressBook"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        addressBookService`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setDefault"),n("span",{class:"token punctuation"},"("),s("addressBook"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token class-name"},"Result"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 根据id删除地址
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"id"),s(`
     * `),n("span",{class:"token keyword"},"@return"),s(`
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@DeleteMapping"),s(`
    `),n("span",{class:"token annotation punctuation"},"@ApiOperation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"根据id删除地址"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"Result"),s(),n("span",{class:"token function"},"deleteById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Long"),s(" id"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        addressBookService`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"deleteById"),n("span",{class:"token punctuation"},"("),s("id"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token class-name"},"Result"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     * 查询默认地址
     */`),s(`
    `),n("span",{class:"token annotation punctuation"},"@GetMapping"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"default"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token annotation punctuation"},"@ApiOperation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"查询默认地址"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"Result"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AddressBook"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"getDefault"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"//SQL:select * from address_book where user_id = ? and is_default = 1"),s(`
        `),n("span",{class:"token class-name"},"AddressBook"),s(" addressBook "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"AddressBook"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        addressBook`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setIsDefault"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        addressBook`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setUserId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"BaseContext"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getCurrentId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AddressBook"),n("span",{class:"token punctuation"},">")]),s(" list "),n("span",{class:"token operator"},"="),s(" addressBookService"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"list"),n("span",{class:"token punctuation"},"("),s("addressBook"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("list "),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"&&"),s(" list"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token class-name"},"Result"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("list"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token class-name"},"Result"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"没有查询到默认地址"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("p",null,"创建AddressBookService.java",-1),g=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(),n("span",{class:"token namespace"},[s("com"),n("span",{class:"token punctuation"},"."),s("sky"),n("span",{class:"token punctuation"},"."),s("service")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("com"),n("span",{class:"token punctuation"},"."),s("sky"),n("span",{class:"token punctuation"},"."),s("entity"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"AddressBook")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("java"),n("span",{class:"token punctuation"},"."),s("util"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"List")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"AddressBookService"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AddressBook"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"list"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"AddressBook"),s(" addressBook"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"save"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"AddressBook"),s(" addressBook"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token class-name"},"AddressBook"),s(),n("span",{class:"token function"},"getById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Long"),s(" id"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"AddressBook"),s(" addressBook"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"setDefault"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"AddressBook"),s(" addressBook"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"deleteById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Long"),s(" id"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("p",null,"创建AddressBookServiceImpl.java",-1),f=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(),n("span",{class:"token namespace"},[s("com"),n("span",{class:"token punctuation"},"."),s("sky"),n("span",{class:"token punctuation"},"."),s("service"),n("span",{class:"token punctuation"},"."),s("impl")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token annotation punctuation"},"@Service"),s(`
`),n("span",{class:"token annotation punctuation"},"@Slf4j"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"AddressBookServiceImpl"),s(),n("span",{class:"token keyword"},"implements"),s(),n("span",{class:"token class-name"},"AddressBookService"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token annotation punctuation"},"@Autowired"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"AddressBookMapper"),s(" addressBookMapper"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 条件查询
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"addressBook"),s(`
     * `),n("span",{class:"token keyword"},"@return"),s(`
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AddressBook"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"list"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"AddressBook"),s(" addressBook"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" addressBookMapper"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"list"),n("span",{class:"token punctuation"},"("),s("addressBook"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 新增地址
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"addressBook"),s(`
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"save"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"AddressBook"),s(" addressBook"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        addressBook`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setUserId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"BaseContext"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getCurrentId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        addressBook`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setIsDefault"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        addressBookMapper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),s("addressBook"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 根据id查询
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"id"),s(`
     * `),n("span",{class:"token keyword"},"@return"),s(`
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"AddressBook"),s(),n("span",{class:"token function"},"getById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Long"),s(" id"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token class-name"},"AddressBook"),s(" addressBook "),n("span",{class:"token operator"},"="),s(" addressBookMapper"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getById"),n("span",{class:"token punctuation"},"("),s("id"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" addressBook"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 根据id修改地址
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"addressBook"),s(`
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"AddressBook"),s(" addressBook"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        addressBookMapper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),s("addressBook"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 设置默认地址
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"addressBook"),s(`
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@Transactional"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"setDefault"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"AddressBook"),s(" addressBook"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"//1、将当前用户的所有地址修改为非默认地址 update address_book set is_default = ? where user_id = ?"),s(`
        addressBook`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setIsDefault"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        addressBook`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setUserId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"BaseContext"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getCurrentId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        addressBookMapper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"updateIsDefaultByUserId"),n("span",{class:"token punctuation"},"("),s("addressBook"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"//2、将当前地址改为默认地址 update address_book set is_default = ? where id = ?"),s(`
        addressBook`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setIsDefault"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        addressBookMapper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),s("addressBook"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 根据id删除地址
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"id"),s(`
     */`)]),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"deleteById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Long"),s(" id"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        addressBookMapper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"deleteById"),n("span",{class:"token punctuation"},"("),s("id"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("p",null,"创建AddressBookMapper.java",-1),w=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(),n("span",{class:"token namespace"},[s("com"),n("span",{class:"token punctuation"},"."),s("sky"),n("span",{class:"token punctuation"},"."),s("mapper")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token annotation punctuation"},"@Mapper"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"AddressBookMapper"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 条件查询
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"addressBook"),s(`
     * `),n("span",{class:"token keyword"},"@return"),s(`
     */`)]),s(`
    `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"AddressBook"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"list"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"AddressBook"),s(" addressBook"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 新增
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"addressBook"),s(`
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@Insert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"insert into adress_book"'),s(),n("span",{class:"token operator"},"+"),s(`
            `),n("span",{class:"token string"},'"        (user_id, consignee, phone, sex, province_code, province_name, city_code, city_name, district_code,"'),s(),n("span",{class:"token operator"},"+"),s(`
            `),n("span",{class:"token string"},'"         district_name, detail, label, is_default)"'),s(),n("span",{class:"token operator"},"+"),s(`
            `),n("span",{class:"token string"},'"        values (#{userId}, #{consignee}, #{phone}, #{sex}, #{provinceCode}, #{provinceName}, #{cityCode}, #{cityName},"'),s(),n("span",{class:"token operator"},"+"),s(`
            `),n("span",{class:"token string"},'"                #{districtCode}, #{districtName}, #{detail}, #{label}, #{isDefault})"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"AddressBook"),s(" addressBook"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 根据id查询
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"id"),s(`
     * `),n("span",{class:"token keyword"},"@return"),s(`
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@Select"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"select * from address_book where id = #{id}"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token class-name"},"AddressBook"),s(),n("span",{class:"token function"},"getById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Long"),s(" id"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 根据id修改
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"addressBook"),s(`
     */`)]),s(`
    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"update"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"AddressBook"),s(" addressBook"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 根据 用户id修改 是否默认地址
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"addressBook"),s(`
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@Update"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"update address_book set is_default = #{isDefault} where user_id = #{userId}"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"updateIsDefaultByUserId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"AddressBook"),s(" addressBook"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 根据id删除地址
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"id"),s(`
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@Delete"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"delete from address_book where id = #{id}"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"deleteById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Long"),s(" id"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("p",null,"创建AddressBookMapper.xml",-1),h=n("div",{class:"language-xml line-numbers-mode","data-ext":"xml"},[n("pre",{class:"language-xml"},[n("code",null,[n("span",{class:"token prolog"},'<?xml version="1.0" encoding="UTF-8" ?>'),s(`
`),n("span",{class:"token doctype"},[n("span",{class:"token punctuation"},"<!"),n("span",{class:"token doctype-tag"},"DOCTYPE"),s(),n("span",{class:"token name"},"mapper"),s(),n("span",{class:"token name"},"PUBLIC"),s(),n("span",{class:"token string"},'"-//mybatis.org//DTD Mapper 3.0//EN"'),s(),n("span",{class:"token string"},'"http://mybatis.org/dtd/mybatis-3-mapper.dtd"'),s(),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("mapper")]),s(),n("span",{class:"token attr-name"},"namespace"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("com.sky.mapper.AddressBookMapper"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("select")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("list"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"parameterType"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("AddressBook"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"resultType"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("AddressBook"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        select * from address_book
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("where")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("if")]),s(),n("span",{class:"token attr-name"},"test"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("userId != null"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
                and user_id = #{userId}
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("if")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("if")]),s(),n("span",{class:"token attr-name"},"test"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("phone != null"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
                and phone = #{phone}
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("if")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("if")]),s(),n("span",{class:"token attr-name"},"test"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("isDefault != null"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
                and is_default = #{isDefault}
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("if")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("where")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("select")]),n("span",{class:"token punctuation"},">")]),s(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("update")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("update"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"parameterType"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("addressBook"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        update address_book
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("set")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("if")]),s(),n("span",{class:"token attr-name"},"test"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("consignee != null"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
                consignee = #{consignee},
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("if")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("if")]),s(),n("span",{class:"token attr-name"},"test"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("sex != null"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
                se = #{sex},
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("if")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("if")]),s(),n("span",{class:"token attr-name"},"test"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("phone != null"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
                phone = #{phone},
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("if")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("if")]),s(),n("span",{class:"token attr-name"},"test"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("detail != null"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
                detail = #{detail},
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("if")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("if")]),s(),n("span",{class:"token attr-name"},"test"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("label != null"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
                label = #{label},
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("if")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("if")]),s(),n("span",{class:"token attr-name"},"test"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("isDefault != null"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
                is_default = #{isDefault},
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("if")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("set")]),n("span",{class:"token punctuation"},">")]),s(`
        where id = #{id}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("update")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("mapper")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("h2",{id:"_2-用户下单",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-用户下单","aria-hidden":"true"},"#"),s(" 2. 用户下单")],-1),O=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{java:"",class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(),n("span",{class:"token namespace"},[s("com"),n("span",{class:"token punctuation"},"."),s("sky"),n("span",{class:"token punctuation"},"."),s("controller"),n("span",{class:"token punctuation"},"."),s("user")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * 订单
 */`),s(`
`),n("span",{class:"token annotation punctuation"},"@RestController"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"userOrderController"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token annotation punctuation"},"@RequestMapping"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/user/order"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token annotation punctuation"},"@Slf4j"),s(`
`),n("span",{class:"token annotation punctuation"},"@Api"),n("span",{class:"token punctuation"},"("),s("tags "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"C端-订单接口"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"OrderController"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token annotation punctuation"},"@Autowired"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"OrderService"),s(" orderService"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 用户下单
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"ordersSubmitDTO"),s(`
     * `),n("span",{class:"token keyword"},"@return"),s(`
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@PostMapping"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/submit"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token annotation punctuation"},"@ApiOperation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"用户下单"'),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"Result"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"OrderSubmitVO"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token function"},"submit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token annotation punctuation"},"@RequestBody"),s(),n("span",{class:"token class-name"},"OrdersSubmitDTO"),s(" ordersSubmitDTO"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        log`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"用户下单：{}"'),n("span",{class:"token punctuation"},","),s(" ordersSubmitDTO"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"OrderSubmitVO"),s(" orderSubmitVO "),n("span",{class:"token operator"},"="),s(" orderService"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"submitOrder"),n("span",{class:"token punctuation"},"("),s("ordersSubmitDTO"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token class-name"},"Result"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("orderSubmitVO"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(` 

`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("p",null,"创建OrderService接口，并声明用户下单方法：",-1),D=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(),n("span",{class:"token namespace"},[s("com"),n("span",{class:"token punctuation"},"."),s("sky"),n("span",{class:"token punctuation"},"."),s("service")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"OrderService"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 用户下单
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"ordersSubmitDTO"),s(`
     * `),n("span",{class:"token keyword"},"@return"),s(`
     */`)]),s(`
    `),n("span",{class:"token class-name"},"OrderSubmitVO"),s(),n("span",{class:"token function"},"submitOrder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"OrdersSubmitDTO"),s(" ordersSubmitDTO"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("p",null,"创建OrderServiceImpl实现OrderService接口：",-1),M=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(),n("span",{class:"token namespace"},[s("com"),n("span",{class:"token punctuation"},"."),s("sky"),n("span",{class:"token punctuation"},"."),s("service"),n("span",{class:"token punctuation"},"."),s("impl")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * 订单
 */`),s(`
`),n("span",{class:"token annotation punctuation"},"@Service"),s(`
`),n("span",{class:"token annotation punctuation"},"@Slf4j"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"OrderServiceImpl"),s(),n("span",{class:"token keyword"},"implements"),s(),n("span",{class:"token class-name"},"OrderService"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token annotation punctuation"},"@Autowired"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"OrderMapper"),s(" orderMapper"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token annotation punctuation"},"@Autowired"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"OrderDetailMapper"),s(" orderDetailMapper"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token annotation punctuation"},"@Autowired"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"ShoppingCartMapper"),s(" shoppingCartMapper"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token annotation punctuation"},"@Autowired"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"AddressBookMapper"),s(" addressBookMapper"),n("span",{class:"token punctuation"},";"),s(`


    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 用户下单
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"ordersSubmitDTO"),s(`
     * `),n("span",{class:"token keyword"},"@return"),s(`
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@Transactional"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"OrderSubmitVO"),s(),n("span",{class:"token function"},"submitOrder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"OrdersSubmitDTO"),s(" ordersSubmitDTO"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"//异常情况的处理（收货地址为空、超出配送范围、购物车为空）"),s(`
        `),n("span",{class:"token class-name"},"AddressBook"),s(" addressBook "),n("span",{class:"token operator"},"="),s(" addressBookMapper"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getById"),n("span",{class:"token punctuation"},"("),s("ordersSubmitDTO"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getAddressBookId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("addressBook "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"AddressBookBusinessException"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"MessageConstant"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"ADDRESS_BOOK_IS_NULL"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token class-name"},"Long"),s(" userId "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"BaseContext"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getCurrentId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"ShoppingCart"),s(" shoppingCart "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ShoppingCart"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        shoppingCart`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setUserId"),n("span",{class:"token punctuation"},"("),s("userId"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"//查询当前用户的购物车数据"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"ShoppingCart"),n("span",{class:"token punctuation"},">")]),s(" shoppingCartList "),n("span",{class:"token operator"},"="),s(" shoppingCartMapper"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"list"),n("span",{class:"token punctuation"},"("),s("shoppingCart"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("shoppingCartList "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"||"),s(" shoppingCartList"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"size"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ShoppingCartBusinessException"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"MessageConstant"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"SHOPPING_CART_IS_NULL"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token comment"},"//构造订单数据"),s(`
        `),n("span",{class:"token class-name"},"Orders"),s(" order "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Orders"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token class-name"},"BeanUtils"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"copyProperties"),n("span",{class:"token punctuation"},"("),s("ordersSubmitDTO"),n("span",{class:"token punctuation"},","),s("order"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        order`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setPhone"),n("span",{class:"token punctuation"},"("),s("addressBook"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getPhone"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        order`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setAddress"),n("span",{class:"token punctuation"},"("),s("addressBook"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getDetail"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        order`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setConsignee"),n("span",{class:"token punctuation"},"("),s("addressBook"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getConsignee"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        order`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setNumber"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"valueOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"System"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"currentTimeMillis"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        order`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setUserId"),n("span",{class:"token punctuation"},"("),s("userId"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        order`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setStatus"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Orders"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PENDING_PAYMENT"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        order`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setPayStatus"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Orders"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"UN_PAID"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        order`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setOrderTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"LocalDateTime"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"now"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"//向订单表插入1条数据"),s(`
        orderMapper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),s("order"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"//订单明细数据"),s(`
        `),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"OrderDetail"),n("span",{class:"token punctuation"},">")]),s(" orderDetailList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ArrayList"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ShoppingCart"),s(" cart "),n("span",{class:"token operator"},":"),s(" shoppingCartList"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token class-name"},"OrderDetail"),s(" orderDetail "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"OrderDetail"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token class-name"},"BeanUtils"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"copyProperties"),n("span",{class:"token punctuation"},"("),s("cart"),n("span",{class:"token punctuation"},","),s(" orderDetail"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            orderDetail`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setOrderId"),n("span",{class:"token punctuation"},"("),s("order"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            orderDetailList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("orderDetail"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token comment"},"//向明细表插入n条数据"),s(`
        orderDetailMapper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insertBatch"),n("span",{class:"token punctuation"},"("),s("orderDetailList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"//清理购物车中的数据"),s(`
        shoppingCartMapper`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"deleteByUserId"),n("span",{class:"token punctuation"},"("),s("userId"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token comment"},"//封装返回结果"),s(`
        `),n("span",{class:"token class-name"},"OrderSubmitVO"),s(" orderSubmitVO "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token class-name"},"OrderSubmitVO"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"builder"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"id"),n("span",{class:"token punctuation"},"("),s("order"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getId"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"orderNumber"),n("span",{class:"token punctuation"},"("),s("order"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getNumber"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"orderAmount"),n("span",{class:"token punctuation"},"("),s("order"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getAmount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"orderTime"),n("span",{class:"token punctuation"},"("),s("order"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getOrderTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
                `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"build"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"return"),s(" orderSubmitVO"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("p",null,"OrderMapper.java",-1),x=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(),n("span",{class:"token namespace"},[s("com"),n("span",{class:"token punctuation"},"."),s("sky"),n("span",{class:"token punctuation"},"."),s("mapper")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token annotation punctuation"},"@Mapper"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"OrderMapper"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 插入订单数据
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"order"),s(`
     */`)]),s(`
    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Orders"),s(" order"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("p",null,"OrderMapper.xml",-1),j=n("div",{class:"language-xml line-numbers-mode","data-ext":"xml"},[n("pre",{class:"language-xml"},[n("code",null,[n("span",{class:"token prolog"},'<?xml version="1.0" encoding="UTF-8" ?>'),s(`
`),n("span",{class:"token doctype"},[n("span",{class:"token punctuation"},"<!"),n("span",{class:"token doctype-tag"},"DOCTYPE"),s(),n("span",{class:"token name"},"mapper"),s(),n("span",{class:"token name"},"PUBLIC"),s(),n("span",{class:"token string"},'"-//mybatis.org//DTD Mapper 3.0//EN"'),s(),n("span",{class:"token string"},'"http://mybatis.org/dtd/mybatis-3-mapper.dtd"'),s(),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("mapper")]),s(),n("span",{class:"token attr-name"},"namespace"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("com.sky.mapper.OrderMapper"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("insert")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("insert"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"parameterType"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Orders"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"useGeneratedKeys"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"keyProperty"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("id"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        insert into orders
        (number, status, user_id, address_book_id, order_time, 
         checkout_time, pay_method, pay_status, amount, remark,
         phone, address, consigee, estimated_delivery_time,
         delivery_status, pack_amount, tablewae_number,tableware_status)
        values (
        #{number}, #{status}, #{userId}, #{addressBookId}, #{orderTime},
        #{checkoutTime}, #{payMethod},#{payStatus}, #{amount}, #{remark}, 
        #{phone}, #{address}, #{consignee},#{estimatedDeliveryTime}, #{deliveryStatus},
        #{packAmount}, #{tablewareNumber}, #{tablewareStatus})
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("insert")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("mapper")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("p",null,"创建OrderDetailMapper接口和对应的xml映射文件：",-1),q=n("p",null,"OrderDetailMapper.java",-1),R=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(),n("span",{class:"token namespace"},[s("com"),n("span",{class:"token punctuation"},"."),s("sky"),n("span",{class:"token punctuation"},"."),s("mapper")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("com"),n("span",{class:"token punctuation"},"."),s("sky"),n("span",{class:"token punctuation"},"."),s("entity"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"OrderDetail")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token import"},[n("span",{class:"token namespace"},[s("java"),n("span",{class:"token punctuation"},"."),s("util"),n("span",{class:"token punctuation"},".")]),n("span",{class:"token class-name"},"List")]),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token annotation punctuation"},"@Mapper"),s(`
`),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"OrderDetailMapper"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * 批量插入订单明细数据
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"orderDetails"),s(`
     */`)]),s(`
    `),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"insertBatch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"List"),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"OrderDetail"),n("span",{class:"token punctuation"},">")]),s(" orderDetails"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("p",null,"OrderDetailMapper.xml",-1),U=n("div",{class:"language-xml line-numbers-mode","data-ext":"xml"},[n("pre",{class:"language-xml"},[n("code",null,[n("span",{class:"token prolog"},'<?xml version="1.0" encoding="UTF-8" ?>'),s(`
`),n("span",{class:"token doctype"},[n("span",{class:"token punctuation"},"<!"),n("span",{class:"token doctype-tag"},"DOCTYPE"),s(),n("span",{class:"token name"},"mapper"),s(),n("span",{class:"token name"},"PUBLIC"),s(),n("span",{class:"token string"},'"-//mybatis.org//DTD Mapper 3.0//EN"'),s(),n("span",{class:"token string"},'"http://mybatis.org/dtd/mybatis-3-mapper.dtd"'),s(),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("mapper")]),s(),n("span",{class:"token attr-name"},"namespace"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("com.sky.mapper.OrderDetailMapper"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("insert")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("insertBatch"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"parameterType"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("list"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        insert into order_detail
        (name, order_id,
         dish_id, setmeal_id, 
         dish_flavor, number, 
         amount, image)
        values
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("foreach")]),s(),n("span",{class:"token attr-name"},"collection"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("orderDetails"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"item"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("od"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"separator"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s(","),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
            (#{od.nam},#{od.orderId},
            #{od.disId},#{od.setmealId},
            #{od.dishFlavor},#{od.number},
            #{od.amount},#{od.image})
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("foreach")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("insert")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("mapper")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("h2",{id:"_3-订单支付",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-订单支付","aria-hidden":"true"},"#"),s(" 3. 订单支付")],-1),E={href:"http://www.yangeit.cn:21010/skytakeoutproject2023/day08.html#_3-%E8%AE%A2%E5%8D%95%E6%94%AF%E4%BB%98",target:"_blank",rel:"noopener noreferrer"};function V(G,F){const c=l("Tabs"),p=l("ExternalLinkIcon");return i(),k("div",null,[d,m,o(c,{id:"6",data:[{id:"Controller层"},{id:"Service层"},{id:"Mapper层"}]},{title0:a(({value:t,isActive:e})=>[s("Controller层")]),title1:a(({value:t,isActive:e})=>[s("Service层")]),title2:a(({value:t,isActive:e})=>[s("Mapper层")]),tab0:a(({value:t,isActive:e})=>[v]),tab1:a(({value:t,isActive:e})=>[b,g,y,f]),tab2:a(({value:t,isActive:e})=>[B,w,_,h]),_:1}),A,o(c,{id:"34",data:[{id:"Controller层"},{id:"Service层"},{id:"Mapper层"}]},{title0:a(({value:t,isActive:e})=>[s("Controller层")]),title1:a(({value:t,isActive:e})=>[s("Service层")]),title2:a(({value:t,isActive:e})=>[s("Mapper层")]),tab0:a(({value:t,isActive:e})=>[O]),tab1:a(({value:t,isActive:e})=>[S,D,I,M]),tab2:a(({value:t,isActive:e})=>[C,x,T,j,L,q,R,P,U]),_:1}),N,n("p",null,[n("a",E,[s("订单支付"),o(p)])])])}const K=u(r,[["render",V],["__file","skytakeout08.html.vue"]]);export{K as default};
