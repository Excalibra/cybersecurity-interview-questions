# Q: How is CSRF (Cross-Site Request Forgery) protected against?

**A:** The following measures are used to protect against CSRF attacks:

1.  **Unique Session Identifier (Token):** Generate and store a unique, unpredictable token in the user's session on the server.
2.  **Embed the Token:** Include this token as a hidden field in all forms that perform state-changing operations.
3.  **Verify the Token:** On the server, upon receiving a request, compare the submitted token with the one stored in the session.
4.  **One-Time Use:** Invalidate or regenerate the token after a successful validation to prevent replay attacks.
5.  **Action on Failure:** If the token is missing or invalid, reject the request and log the incident.
