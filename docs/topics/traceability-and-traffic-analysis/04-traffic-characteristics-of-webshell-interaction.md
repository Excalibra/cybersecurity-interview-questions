# 4. What are the traffic characteristics of webshell interaction?

1. Keywords such as `eval`, `z0` (Chinese chopper), `shell`; identify the requesting page.
2. Base64 encoding with high correlation to `eval` calls.
3. Strings like `ini_set("display_errors","0")`.
4. Commands like `ifconfig`, `whoami`, `ipconfig`.
