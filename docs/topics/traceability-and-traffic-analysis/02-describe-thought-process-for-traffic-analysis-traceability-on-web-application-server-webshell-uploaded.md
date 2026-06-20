# 2. Suppose you discover an abnormal increase in files on a web application server and suspect a webshell has been uploaded. Describe the thought process for traffic analysis and traceability.

1. Search for keywords: `eval`, `z0`, `shell`, `whoami`; excessive occurrences may indicate webshell.
2. Use Wireshark to quickly locate suspicious traffic.
3. Identify abnormal IP and uploaded content to verify if it is a webshell.
