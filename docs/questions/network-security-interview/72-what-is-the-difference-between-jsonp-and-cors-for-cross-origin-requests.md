# Q: What is the difference between JSONP and CORS for cross-origin requests?

**A:** The key differences are:

1.  **Compatibility:** JSONP works with older browsers that do not support CORS, whereas CORS is a standardised mechanism supported by modern browsers.
2.  **Request Type:** JSONP is not a traditional AJAX request; it uses a `<script>` tag. CORS is a mechanism built into the standard HTTP request-response model.
3.  **Initiator:** JSONP requests are initiated by the client's browser. CORS requests are initiated by the server's response headers.
4.  **Mechanism:** JSONP works by specifying a callback function in the request URL. CORS works by setting HTTP headers on the server response.
5.  **HTTP Method Support:** JSONP only supports `GET` requests, while CORS supports all HTTP methods (GET, POST, PUT, DELETE, etc.).
