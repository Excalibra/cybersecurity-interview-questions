# Q: What are some attack methods against JWT (JSON Web Tokens) (headers, payload, signature)?

**A:** Common JWT attack methods include:

1.  **JWT Overwriting:** Replacing a valid JWT with another valid JWT to maintain a session.
2.  **Cryptanalysis:** Brute-forcing or exploiting weaknesses in the JWT's encryption.
3.  **Tampering:** Modifying the payload or header to change the token's meaning or permissions.
4.  **Payload Modification:** Adding claims to escalate privileges.
5.  **Signature Spoofing:** Using a malicious signature to make a fake token appear valid.
6.  **Brute Force:** Trying to guess the secret key used to sign the JWT.
7.  **Lifetime Extension:** Creating a token with a longer expiry time than intended.
8.  **Cache Exploitation:** Stealing a valid JWT from a proxy or browser cache.
9.  **Replay Attack:** Reusing a previously captured valid JWT.
10. **Path Traversal:** Using absolute paths in the JWT to access restricted resources.
