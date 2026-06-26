# Q: What is the difference between a forward proxy and a reverse proxy?

**A:** 

**Forward proxy:** When a client cannot access external resources directly (e.g., Google, YouTube), it can access them indirectly via a forward proxy.

*Analogy:* A wishes to borrow money from C but cannot do so directly. A devises a plan: A asks B to borrow money from C. B acts on A’s behalf; A receives the money, and C remains unaware of A’s existence. B acts as A’s proxy.

**Reverse proxy:** The client is unaware of the proxy’s existence. The proxy server receives incoming connections from the Internet, forwards the requests to internal network servers, and returns the results obtained from the internal servers to the requesting clients.

*Analogy:* A borrows money from B. B does not use his own money but quietly borrows from C and then hands the money to A. A believes the money came from B and is unaware of C’s existence.

**In the context of internal network penetration:**

- **Forward proxy:** The controlled server listens on a port, forming a forward tunnel, and the proxy machine acts on behalf of the host to access internal network targets. However, the internal network ingress is typically located in a DMZ area with firewall restrictions, preventing direct entry.

- **Reverse proxy:** The internal network host actively surrenders its permissions to the proxy machine, which then connects locally to form a reverse proxy. For example, a VPS listens on a local port, and the compromised internal server connects to this port, establishing a tunnel. If the internal network device cannot initiate outbound connections, an alternative method must be devised.
