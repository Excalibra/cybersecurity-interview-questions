## **Q: What is the principle of PHP null byte (%00) truncation?**

**A:** In the C language, the null byte (%00) serves as a string terminator. Since PHP is written in C, it inherits this behaviour: the null byte is interpreted as an end-of-string marker, causing the parser to ignore any subsequent characters. This vulnerability exists under the conditions PHP version < 5.3.29 and GPC (magic_quotes_gpc) disabled.
