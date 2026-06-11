## **Q: What is Memcache unauthorised access, and how can it be exploited?**

**A:** Memcached is a popular key‑value caching system. Because it lacks any built‑in access control module, Memcached services exposed to the public internet are easily discovered by attackers. Attackers can interact directly with the service via command-line interfaces to read sensitive information stored in Memcached.

Exploitation method: execute `netstat -an | more` on the target machine to inspect open ports. If `0.0.0.0:11211` is displayed, the service is listening on all network interfaces, indicating a Memcached unauthorised access vulnerability. Subsequently, use `telnet <target> 11211` or `nc -vv <target> 11211`; a successful connection confirms the vulnerability.
