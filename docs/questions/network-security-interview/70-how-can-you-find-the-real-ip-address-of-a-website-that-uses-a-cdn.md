# Q: How can you find the real IP address of a website that uses a CDN?

**A:** Several methods can be used to find the real IP address of a website behind a CDN:

1.  **Check HTTP Headers:** Look for headers like `X-Forwarded-For` or `X-Real-IP`.
2.  **Use CDN APIs:** Some CDN providers offer APIs to query for the origin server IP.
3.  **Check DNS History:** Use services to view historical DNS records, which may reveal the origin IP.
4.  **Use Public APIs:** Leverage public APIs for IP location and lookups.
5.  **Use Third-Party IP Lookup APIs:** There are many services that can provide detailed IP information.
6.  **Inspect HTTP Requests:** Capture and analyse HTTP requests to see the source IP.
7.  **Use IPv6 Address Detection:** The target's IPv6 address may not be behind the same CDN.
8.  **Check Firewall Logs:** If you have access, firewall logs can show the source IP of connections.
9.  **Check Server Logs:** If you have access, server logs will record the source IP.
10. **Use Commercial Services:** Some commercial APIs specialise in origin IP discovery.
