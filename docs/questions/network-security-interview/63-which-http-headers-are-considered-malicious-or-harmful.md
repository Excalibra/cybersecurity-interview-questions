# Q: Which HTTP headers are considered malicious or harmful?

**A:** The following HTTP headers can be used for malicious purposes:

1.  **X-Forwarded-For:** Used to spoof the client's real IP address, potentially bypassing IP-based restrictions.
2.  **Cookie:** If not properly secured, cookies can be manipulated to impersonate users or gain unauthorised access.
3.  **User-Agent:** Can be modified to hide the attacker's real operating system or browser, making fingerprinting harder.
4.  **Referer:** Can be spoofed to launch phishing attacks or bypass CSRF protection that relies on referer checks.
