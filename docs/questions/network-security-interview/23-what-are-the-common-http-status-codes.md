# Q: What are the common HTTP status codes?

**A:** 

**1xx (Informational):** The request has been received and is being processed.
- **100 Continue:** The initial part of the request has been received, and the client should continue.
- **101 Switching Protocols:** The server is switching to a different protocol as requested.

**2xx (Success):** The request was successfully received, understood, and accepted.
- **200 OK:** The request was successful.
- **201 Created:** The request succeeded, and a new resource was created.
- **202 Accepted:** The request has been accepted but not yet processed.
- **204 No Content:** The server successfully processed the request but is not returning any content.

**3xx (Redirection):** The client must take additional action to complete the request.
- **301 Moved Permanently:** The requested resource has been permanently moved to a new URL.
- **302 Found:** The requested resource has been temporarily moved to a different URL.
- **304 Not Modified:** The resource has not been modified since the last request, and the client can use its cached version.

**4xx (Client Error):** The request contains bad syntax or cannot be fulfilled.
- **400 Bad Request:** The server cannot process the request due to a client error.
- **401 Unauthorized:** The request requires user authentication.
- **403 Forbidden:** The server understood the request but refuses to authorise it.
- **404 Not Found:** The server cannot find the requested resource.

**5xx (Server Error):** The server failed to fulfil a valid request.
- **500 Internal Server Error:** The server encountered an unexpected condition.
- **503 Service Unavailable:** The server is currently unable to handle the request, usually due to being overloaded or down for maintenance.
