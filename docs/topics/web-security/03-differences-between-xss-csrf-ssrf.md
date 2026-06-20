# 3. What are the differences between XSS, CSRF, and SSRF? (Very frequently asked)

## Definitions
- **XSS:** Cross-Site Scripting
- **CSRF:** Cross-Site Request Forgery
- **SSRF:** Server-Side Request Forgery

## Differences
- **XSS** occurs when the server fails to sufficiently filter user-supplied data, causing the client browser to execute unexpected script statements when rendering the HTML page returned by the server.
- **CSRF** occurs when the server does not validate a random token (anti-CSRF token) for user-submitted data and loosely checks the `Referer` field within HTTP request packets, allowing an attacker to forge requests using the victim’s cookie information and send them to the server.
- **SSRF** occurs when the server places excessive trust in a user-controlled URL, failing to apply address restrictions and adequate detection to the URL provided by the attacker. This enables the attacker to use the vulnerable server as a springboard to attack internal networks or other servers.
