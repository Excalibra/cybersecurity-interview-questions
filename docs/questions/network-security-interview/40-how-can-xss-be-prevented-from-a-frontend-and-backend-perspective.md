# Q: How can XSS be prevented from a frontend and backend perspective?

**A:** 

**Frontend:**
1.  Use HTTPS to protect data in transit.
2.  Escape or sanitise user input before rendering it in the DOM.
3.  Prevent users from uploading executable files.
4.  Implement a Content Security Policy (CSP) to restrict script sources.
5.  Use the `HttpOnly` flag on cookies to prevent JavaScript access.

**Backend:**
1.  Validate and sanitise all user input on the server side.
2.  Use parameterised queries (prepared statements) to prevent SQL injection.
3.  Use secure encryption algorithms for stored data.
4.  Use secure HTTP headers like `X-XSS-Protection` and `Content-Security-Policy`.
