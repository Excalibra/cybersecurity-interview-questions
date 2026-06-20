# 28. In internal network lateral movement, do you directly obtain a machine’s permissions and then start scanning, or are there other methods?

1. **Utilise captured credentials:** Attackers may first need to obtain the password or hash of a domain user, and then use those credentials for lateral movement. For example, through pass‑the‑hash attacks, pass‑the‑ticket, or by using Golden Tickets for persistence.
2. **Establish persistent backdoors:** Once an attacker has gained access to a target system, they typically establish a backdoor to maintain continuous control, even if the vulnerability is later patched.
3. **Use specific tools:** Attackers may use tools such as `pwdump7` to extract user password hashes from the system, and then tools like `ophcrack` to crack the plaintext passwords, which greatly aids further penetration.
4. **Internal network reconnaissance:** After gaining initial access, attackers perform internal network reconnaissance to understand the network structure, identify valuable targets, and discover potential security weaknesses.
5. **Privilege escalation techniques:** Attackers may use escalation techniques to increase their privileges within the system, thereby accessing more sensitive data or system resources.
6. **Exploit trust relationships:** In a domain environment, attackers may exploit trust relationships between users and computers by impersonating legitimate users to access other systems.
7. **Social engineering:** In some cases, attackers may use social engineering to trick employees into providing sensitive information or executing malicious programmes.
