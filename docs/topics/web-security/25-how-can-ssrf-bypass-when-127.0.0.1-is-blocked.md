# 25. How can SSRF be bypassed when 127.0.0.1 is blocked? What protocols are supported?

## Bypass Techniques
1. Number base conversions
2. DNS resolution
3. Full‑width characters (e.g., `127。0。0。1`)
4. Using `[::]` (e.g., `http://[::]:80/`)
5. Using `@` (e.g., `http://example.com@127.0.0.1`)
6. Shortened URLs (e.g., `http://dwz.cn/11SMa`)
