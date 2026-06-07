# 34. When performing injection, is it possible to start directly with `ORDER BY` without using `AND`, `OR`, or `XOR`?

## Explanation
Steps using `and/or/xor` and `1=1`/`1=2` merely confirm the injection point. If the injection point is already confirmed, those steps can be omitted.
