# 42. What are the methods for XSS protection? How can the HttpOnly flag be bypassed?

## Protection Methods
- Input filtering
- Pure client‑side rendering
- HTML entity encoding

## HttpOnly Bypass Techniques
- CVE-2012-0053
- `PHPINFO` page: `XMLHttpRequest` can retrieve cookies from `$_SERVER['HTTP_COOKIE']` even with HttpOnly.
- Iframe phishing: cover the original page with a remote domain.
- Redirect phishing: buy a similar domain, construct a phishing page.
- Historical passwords: use JavaScript to forge a login form and trigger browser auto‑fill.
