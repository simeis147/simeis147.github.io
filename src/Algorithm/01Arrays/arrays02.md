---
order: 2
date: 2023-06-08
category: 
  - 算法
  - 数组
---

# 二分法

## 相关题目推荐

- [704. 二分查找](https://leetcode.cn/problems/binary-search/)  
- [35. 搜索插入位置](https://leetcode.cn/problems/search-insert-position/)  
- [34. 在排序数组中查找元素的第一个和最后一个位置](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)  
- [69. x 的平方根](https://leetcode.cn/problems/sqrtx/)  
- [367. 有效的完全平方数](https://leetcode.cn/problems/valid-perfect-square/)  

## 写法

### (版本一) 左闭右闭区间

```java
class Solution {
    public int search(int[] nums, int target) {
        // 避免当 target 小于nums[0] nums[nums.length - 1]时多次循环运算
        if (target < nums[0] || target > nums[nums.length - 1]) {
            return -1;
        }
        int left = 0, right = nums.length - 1;
        while (left <= right) {
            int mid = left + ((right - left) >> 1);
            if (nums[mid] == target)
                return mid;
            else if (nums[mid] < target)
                left = mid + 1;
            else if (nums[mid] > target)
                right = mid - 1;
        }
        return -1;
    }
}
```

### (版本二) 左闭右开区间

```java
class Solution {
    public int search(int[] nums, int target) {
        int left = 0, right = nums.length;
        while (left < right) {
            int mid = left + ((right - left) >> 1);
            if (nums[mid] == target)
                return mid;
            else if (nums[mid] < target)
                left = mid + 1;
            else if (nums[mid] > target)
                right = mid;
        }
        return -1;
    }
}
```
