# 24. What is the principle of buffer overflow?

## Principle
C/C++ languages lack array bounds checking. When data written to a local array buffer exceeds its allocated size, a buffer overflow occurs. An attacker can corrupt the process’s runtime stack, altering the normal program flow. For example, of an extra 500 bytes, 100 may contain a JMP instruction redirecting to the remaining 400 bytes of shellcode, which then establishes a reverse connection.
