---
order: 3
date: 2024-03-02
category: 
  - 算法
  - 字符串
---

# 替换数字

[替换数字](https://kamacoder.com/problempage.php?pid=1064)

```java
import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String s = in.nextLine();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < s.length(); i++) {
            if (Character.isDigit(s.charAt(i))) {
                sb.append("number");
            }else sb.append(s.charAt(i));
        }
        System.out.println(sb);
    }
}
```
