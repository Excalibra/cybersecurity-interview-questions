# Q: What is a CSRF (Cross-Site Request Forgery) attack?

**A:** This attack occurs when an application does not validate a unique `token` or the `Referer` header for sensitive pages. This oversight allows an attacker to craft a malicious URL that tricks an authenticated user into clicking it, unintentionally submitting a request that the application treats as legitimate.
