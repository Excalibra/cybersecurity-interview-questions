# 15. In an internal network, you have permissions on a workgroup machine outside the domain, but you have no domain user. Lateral movement via vulnerabilities cannot grant you domain user permissions. However, you know for certain that a domain exists. How can you enter the domain and locate the domain controller?

Brute‑force enumerate user names to discover a valid one; then, by pinging the domain name, you can obtain the IP address of the domain controller.
