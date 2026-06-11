# 3. What should one do if, when attacking a WebLogic target, the first payload is blocked by a WAF and the IP is banned?

## Steps
1. First study the WebLogic request method.
2. Employ a proxy pool.
3. Use exclusion testing to determine the WAF’s blocking mechanism and bypass it:
   - Append multiple `/////////////`.
   - Add meaningless GET request parameters, e.g., `username=xxxxx` or `password=sdfewfwfeewffew`.
   - Use URL encoding obfuscation mixed with plaintext.
   - Insert junk data into request packets, for example within the `<wsa:RelatesTo>` tag.
   - Add junk data (e.g., `xxxxxxx`) in the request headers.
   - Use XML comment interspersion to bypass WAF device detection.
