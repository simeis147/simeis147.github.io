---
order: 5
date: 2023-06-09
category: 
  - 算法
  - 数组
---

# 模拟行为

本题不涉及到什么算法，就是模拟过程，但却十分考察对代码的掌控能力

## 相关题目推荐

- [59. 螺旋矩阵 II](https://leetcode.cn/problems/spiral-matrix-ii/)
- [54. 螺旋矩阵](https://leetcode.cn/problems/spiral-matrix/)
- [剑指Offer 29.顺时针打印矩阵](https://leetcode.cn/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/)

## 写法

```java
class Solution {
    public int[][] generateMatrix(int n) {
        int l = 0, r = n - 1, t = 0, b = n - 1;
        int[][] mat = new int[n][n];
        
        int num = 1, tar = n * n;

        while( num <= tar ){
            for(int i = l; i <= r; i++) mat[t][i] = num++;
            t++;
            for(int i = t; i <= b; i++) mat[i][r] = num++;
            r--;
            for(int i = r; i >= l; i--) mat[b][i] = num++;
            b--;
            for(int i = b; i >= t; i--) mat[i][l] = num++;
            l++;
        }

        return mat;
    }
}
```

```java
class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> result = new ArrayList<>();
        int top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;

        while( true ){
            for(int i = left; i <= right; i++) result.add(matrix[top][i]);
            top++;
            if(top > bottom) break;
            for(int i = top; i <= bottom; i++) result.add(matrix[i][right]);
            right--;
            if(right < left) break;
            for(int i = right; i >= left; i--) result.add(matrix[bottom][i]);
            bottom--;
            if(bottom < top) break;
            for(int i = bottom; i >= top; i--) result.add(matrix[i][left]);
            left++;
            if(left > right) break;
        }

        return result;
    }
}
```

```java
class Solution {
    public int[][] generateMatrix(int n) {
        int loop = 0;  // 控制循环次数
        int[][] res = new int[n][n];
        int start = 0;  // 每次循环的开始点(start, start)
        int count = 1;  // 定义填充数字
        int i, j;

        while (loop++ < n / 2) { // 判断边界后，loop从1开始
            // 模拟上侧从左到右
            for (j = start; j < n - loop; j++) {
                res[start][j] = count++;
            }

            // 模拟右侧从上到下
            for (i = start; i < n - loop; i++) {
                res[i][j] = count++;
            }

            // 模拟下侧从右到左
            for (; j >= loop; j--) {
                res[i][j] = count++;
            }

            // 模拟左侧从下到上
            for (; i >= loop; i--) {
                res[i][j] = count++;
            }
            start++;
        }

        if (n % 2 == 1) {
            res[start][start] = count;
        }

        return res;
    }
}
```
