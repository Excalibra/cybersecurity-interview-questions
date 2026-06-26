# Q: What is the process of a complete HTTP request?

**A:** A complete HTTP request involves these steps:

1.  **DNS Resolution:** The browser resolves the domain name in the URL to an IP address.
2.  **TCP Connection:** A TCP connection is established with the server using the three-way handshake.
3.  **HTTP Request:** The browser sends an HTTP request (method, URL, headers, body) to the server.
4.  **Server Response:** The server processes the request and sends an HTTP response (status code, headers, body) back to the browser.
5.  **Content Rendering:** The browser renders the response content according to its `Content-Type` header.
6.  **Connection Closure:** The TCP connection is closed, and resources are released.
