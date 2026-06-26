# Q: What is the difference between HTTP persistent (long) and non-persistent (short) connections?

**A:** 

An HTTP **non-persistent (short) connection** is closed after the server sends the response for a single request. This method saves server resources but adds the overhead of establishing a new TCP connection for each request, which can increase latency.

An HTTP **persistent (long) connection** keeps the TCP connection open for multiple requests and responses. This reduces the overhead of connection setup and improves performance, but it consumes more server resources, as connections are kept open for longer. The connection will automatically close after a period of inactivity.
