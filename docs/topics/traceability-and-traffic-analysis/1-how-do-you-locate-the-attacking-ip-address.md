# 1. How do you locate the attacking IP address?

1. Statistics > Conversations in Wireshark to see traffic direction; identify suspicious IP.
2. Locate webshell: `ip.addr == <IP> && http matches "upload|eval|select|xp_cmdshell" && http.request.method == "POST"`
3. Trace vulnerability: `http.request.uri contains "webshell.php"` to find initial execution/upload.
4. Determine vulnerability type from initial upload packet or other signatures.
