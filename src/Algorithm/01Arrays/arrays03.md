---
order: 3
date: 2023-06-08
category: 
  - 算法
  - 数组
---

# 移除元素

双指针算法

## 相关题目推荐

- [27. 移除元素](https://leetcode.cn/problems/remove-element/)
- [26. 删除排序数组中的重复项](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/)  
- [283. 移动零](https://leetcode.cn/problems/move-zeroes/)  
- [844. 比较含退格的字符串](https://leetcode.cn/problems/backspace-string-compare/)  
- [977. 有序数组的平方](https://leetcode.cn/problems/squares-of-a-sorted-array/)

## 写法

```java
class Solution {
    public int removeElement(int[] nums, int val) {
        // 快慢指针
        int slowIndex = 0;
        for (int fastIndex = 0; fastIndex < nums.length; fastIndex++) {
            if (nums[fastIndex] != val) {
                nums[slowIndex] = nums[fastIndex];
                slowIndex++;
            }
        }
        return slowIndex;
    }
}
```

```java
//相向双指针法
class Solution {
    public int removeElement(int[] nums, int val) {
        int left = 0;
        int right = nums.length - 1;
        while(right >= 0 && nums[right] == val) right--; //将right移到从右数第一个值不为val的位置
        while(left <= right) {
            if(nums[left] == val) { //left位置的元素需要移除
                //将right位置的元素移到left（覆盖），right位置移除
                nums[left] = nums[right];
                right--;
            }
            left++;
            while(right >= 0 && nums[right] == val) right--;
        }
        return left;
    }
}
```
