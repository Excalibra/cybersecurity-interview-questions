# Q: What is DDoS? What are its types? What is a CC attack, and what are the differences?

**A:** 

**DDoS (Distributed Denial of Service)** is an attack where an attacker uses multiple compromised computers or devices to send a massive number of requests to a target server or network, overwhelming it and making it unavailable to legitimate users.

**Common DDoS attack types:**
- **SYN Flood:** Exploits the TCP three-way handshake by sending a flood of `SYN` requests without completing the connection, exhausting server resources.
- **ICMP Flood:** Overwhelms the target with a high volume of ICMP (ping) requests.
- **UDP Flood:** Sends a large number of UDP packets, consuming bandwidth and CPU resources.

**CC Attack (HTTP Flood):** This is a specific type of DDoS attack that targets web servers by sending a large number of HTTP requests, simulating legitimate user traffic and overwhelming the server.

**Key Differences:**

| Feature | DDoS | CC Attack (HTTP Flood) |
| :--- | :--- | :--- |
| **Attack Target** | Targets an IP address. | Targets a web application/page. |
| **Impact** | Can be catastrophic and harder to defend against. | Can be persistent and long-lasting, though not always destructive. |
| **Complexity** | High; requires control of a botnet. | Low; can be performed by a single attacker with proxy tools. |
| **Traffic Volume** | Typically uses large traffic volumes. | Can be effective with relatively low traffic volume. |
