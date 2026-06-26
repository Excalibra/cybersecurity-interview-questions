# Q: How can a blind XSS attack be used against an internal network server?

**A:** In a blind XSS attack, the attacker does not perform prior vulnerability detection but instead tries to exploit a known XSS vulnerability directly. The injected payload is not immediately visible and is designed to execute when an internal user, such as an administrator, views a specific page (e.g., a log or admin panel). When the payload executes, it can send a request from the internal server to the attacker's controlled server, exfiltrating sensitive information from the internal network.
