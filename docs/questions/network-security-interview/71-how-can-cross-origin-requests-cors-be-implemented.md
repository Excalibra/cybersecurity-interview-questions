# Q: How can cross-origin requests (CORS) be implemented?

**A:** Cross-origin requests can be implemented using the following methods:

1.  **JSONP (JSON with Padding):** A technique that works by loading a script from a different domain, bypassing the same-origin policy.
2.  **CORS (Cross-Origin Resource Sharing):** A standard mechanism that allows servers to specify who can access their resources. It involves sending HTTP headers like `Access-Control-Allow-Origin`.
3.  **Nginx Proxy:** A server-side solution where a reverse proxy (like Nginx) forwards requests to the target server, effectively hiding the cross-origin nature of the request.
