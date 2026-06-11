# 4. How should an internal network alert be handled, and what is the general process?

1. Identify the specific machine and vulnerability type; apply patch.
2. Use webshell/antivirus tools to check and clean the system; inspect `/tmp` for obfuscated trojans.
3. On full‑traffic analysis device, verify if other machines were traversed.
4. Obtain attacker IP and check threat intelligence (360, ThreatBook) to see if it is a VPS, compromised host, or personal cloud server.
5. For personal servers, use WHOIS to find domain, email, then social engineering to find mobile number and possibly full identity through credential stuffing.
