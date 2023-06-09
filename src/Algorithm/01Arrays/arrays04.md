---
order: 4
date: 2023-06-09
category: 
  - 算法
  - 数组
---

# 滑动窗口

## 相关题目推荐

- [209. 长度最小的子数组](https://leetcode.cn/problems/minimum-size-subarray-sum/)
- [904. 水果成篮](https://leetcode.cn/problems/fruit-into-baskets/)
- [76. 最小覆盖子串](https://leetcode.cn/problems/minimum-window-substring/)

## 写法

```java
class Solution {

    // 滑动窗口
    public int minSubArrayLen(int s, int[] nums) {
        int left = 0;
        int sum = 0;
        int result = Integer.MAX_VALUE;
        for (int right = 0; right < nums.length; right++) {
            sum += nums[right];
            while (sum >= s) {
                result = Math.min(result, right - left + 1);
                sum -= nums[left++];
            }
        }
        return result == Integer.MAX_VALUE ? 0 : result;
    }
}
```
