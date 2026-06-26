# Q: What is a CRLF injection attack?

**A:** CRLF (Carriage Return Line Feed) injection is a web application vulnerability that allows an attacker to inject malicious HTTP headers into an HTTP response. By inserting `%0d%0a` (CRLF) characters into user-supplied input, an attacker can terminate the HTTP header and inject arbitrary headers. This can lead to security issues like session fixation, cross-site scripting, or redirecting users to malicious sites.
