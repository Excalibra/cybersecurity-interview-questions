# 32. Are you familiar with parsing vulnerabilities? What are the different types?

## IIS
1. In directories named `*.asp` or `*.asa`, any extension may be parsed as ASP.
2. On IIS 6.0, content after a semicolon `;` is ignored.

## Nginx
1. Accessing `demo2.jpg/aaa.php` where `demo2.jpg` exists: Nginx passes to PHP because of `.php` suffix; PHP executes `demo2.jpg` if it exists, returning “Access denied.” if not a PHP file.
2. Null byte (`%00`) truncation.

## Apache
Apache parses a file from right to left until it encounters a recognised executable script extension.
