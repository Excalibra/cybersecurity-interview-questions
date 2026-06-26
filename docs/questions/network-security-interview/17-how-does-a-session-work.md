# Q: How does a Session work?

**A:** The process is as follows:

1.  When a user accesses a page that requires authentication, the server creates a unique `Session ID`.
2.  The server sends this `Session ID` to the client's browser, typically by setting a `Set-Cookie` header.
3.  The browser stores the `Session ID` in a cookie and sends it back to the server with every subsequent request.
4.  The server uses this `Session ID` to retrieve the corresponding `Session` object, which contains the user's data.
5.  The session and its data are destroyed when the user closes the browser or after a period of inactivity (session timeout).
