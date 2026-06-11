# 1. How to bypass WAF for Shiro

## Bypass Techniques
- Use unknown HTTP request methods.
- Bind the real IP to a specific Host header.
- Insert a carriage return in the Host header.
- Exploit Base64 decoding peculiarities by injecting payload string interference.
- Utilise junk data to bypass inspection.
