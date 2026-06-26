# Q: What cookie attributes would you test?

**A:** When testing cookies, you should examine the following:

1.  **Value:** Check if the cookie value matches the expected data.
2.  **Expiration:** Test if the cookie is properly deleted after its set expiry time.
3.  **Security:** Check for vulnerabilities like missing `Secure` or `HttpOnly` flags.
4.  **Storage:** Ensure the cookie is stored securely on the client side.
5.  **Cross-Site Tracking:** Check if the cookie is being used for cross-site tracking.
6.  **Browser Compatibility:** Test cookie functionality across different browsers.
7.  **Encoding:** Verify that the cookie value is properly encoded to prevent injection attacks.
8.  **Path:** Ensure the `Path` attribute is set correctly to prevent the cookie from being sent to unintended endpoints.
9.  **SameSite:** Check the `SameSite` attribute to ensure it's configured for the appropriate level of cross-site request protection.
10. **Data Security:** Verify that sensitive data sent to the cookie is encoded, compressed, or encrypted.
