# Q: You are given only a login page. What are some testing approaches?

**A:** When only a login page is available, consider the following testing approaches:

1.  **Vulnerability Scanning:** Test for client-side and server-side vulnerabilities like XSS and SQL injection.
2.  **Username Enumeration:** Attempt to enumerate valid usernames and test common passwords.
3.  **HTTP Header Analysis:** Examine HTTP headers for information disclosure or misconfigurations.
4.  **Brute Force:** Attempt a brute-force attack to guess valid credentials.
5.  **Payload Injection:** Try injecting payloads into login forms to bypass authentication.
6.  **API Testing:** Check for available APIs and test them for vulnerabilities.
7.  **SSL/TLS Certificate Check:** Verify the validity of the SSL/TLS certificate.
8.  **Directory/Path Traversal:** Attempt to access restricted folders or files.
9.  **Credential Storage:** Check for credentials stored in plaintext.
10. **State Manipulation:** Test the impact of clearing or modifying cookies and headers.
