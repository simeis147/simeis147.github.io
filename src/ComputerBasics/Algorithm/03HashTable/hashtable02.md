---
order: 2
date: 2024-03-01
category: 
  - 算法
  - 哈希表
---

# 有效的字母异位词

[242.有效的字母异位词](https://leetcode.cn/problems/valid-anagram/description/)

## 相关题目推荐

[383.赎金信](https://leetcode.cn/problems/ransom-note/description/)  
[49. 字母异位词分组](https://leetcode.cn/problems/group-anagrams/description/)  
[438.找到字符串中所有字母异位词](https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/)  

## 写法

```java
/**
 * 242. 有效的字母异位词 字典解法
 * 时间复杂度O(m+n) 空间复杂度O(1)
 */
class Solution {
    public boolean isAnagram(String s, String t) {
        int[] record = new int[26];

        for (int i = 0; i < s.length(); i++) {
            record[s.charAt(i) - 'a']++;  
            // 并不需要记住字符a的ASCII，只要求出一个相对数值就可以了
        }

        for (int i = 0; i < t.length(); i++) {
            record[t.charAt(i) - 'a']--;
        }
        
        for (int count: record) {
            if (count != 0) { 
                // record数组如果有的元素不为零0，说明字符串s和t 一定是谁多了字符或者谁少了字符。
                return false;
            }
        }
        return true; 
        // record数组所有元素都为零0，说明字符串s和t是字母异位词
    }
}
```
