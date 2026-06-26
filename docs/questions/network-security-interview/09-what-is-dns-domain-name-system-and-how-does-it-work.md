# Q: What is DNS (Domain Name System) and how does it work?

**A:** DNS is a distributed naming system that maps human-friendly domain names to computer-readable IP addresses. It routes user requests to the correct servers.

**How DNS works:**
1.  The user enters a domain name (e.g., www.example.com) into their browser.
2.  The operating system queries its local DNS server.
3.  If the local DNS server has the IP address in its cache, it returns it.
4.  If not, the local DNS server queries a root DNS server.
5.  The root server directs the local server to the top-level domain (TLD) server responsible for the `.com` domain.
6.  The local server then queries the `.com` TLD server.
7.  The `.com` TLD server directs the local server to the authoritative DNS server for `example.com`.
8.  The local server queries the authoritative DNS server for `www.example.com`'s IP address.
9.  The authoritative server returns the IP address, which the local server caches and returns to the operating system.
10. The operating system uses the IP address to connect to the server and fetch the requested resource.
