---
order: 4
date: 2024-03-01
category: 
  - 算法
  - 哈希表
---

# 快乐数

[第202题. 快乐数](https://leetcode.cn/problems/happy-number/description/)

```java
class Solution {
    public boolean isHappy(int n) {
        Set<Integer> record = new HashSet<>();
        while (n != 1 && !record.contains(n)) {
            record.add(n);
            n = getNextNumber(n);
        }
        return n == 1;
    }

    private int getNextNumber(int n) {
        int res = 0;
        while (n > 0) {
            int temp = n % 10;
            res += temp * temp;
            n = n / 10;
        }
        return res;
    }
}
```
