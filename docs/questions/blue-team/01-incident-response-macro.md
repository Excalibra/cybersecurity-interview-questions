# Incident Response – Macro Questions

## Q: What is the basic incident response process?

**A:** The process typically follows these steps:

1. **Information Gathering:** Collect customer information and host details, including samples.
2. **Type Determination:** Determine whether a security incident has occurred and what type – ransomware, crypto-mining, network outage, DoS, etc.
3. **Containment:** Isolate the affected systems to prevent the impact from spreading.
4. **In-Depth Analysis:** Analyse logs, processes, startup items, and samples to facilitate later traceability.
5. **Clean-up and Disposal:** Kill malicious processes, delete malicious files, apply patches, remove abnormal system services and backdoor accounts to prevent further escalation. Restore production after remediation.
6. **Report Generation:** Compile and produce a comprehensive security incident report.

---

## Q: What is the approach for Windows intrusion investigation?

**A:**

1. **Check System Account Security:**
- Check for weak passwords and whether remote management ports are exposed to the internet (using `netstat -ano` or by asking the server administrator).
- Use `lusrmgr.msc` to check for suspicious or newly created accounts. Disable or delete any new accounts in the `Administrators` group.
- Use tools like D-Shield or the Registry to check for hidden or cloned accounts.
- Analyse logs (Event Viewer → Windows Logs → Security) to identify anomalous login times or usernames.

2. **Check Ports and Processes:**
- Use `netstat -ano` to check for remote or suspicious connections.
- Review processes in Task Manager.

3. **Check Startup Items, Scheduled Tasks, and Services.**

4. **Check System Information:**
- Review system version and patch information.
- Search for suspicious directories and files.

5. **Log Analysis.**

---

## Q: What is the approach for Linux intrusion investigation?

**A:**

1. **Account Security:**
- `who` – view currently logged-in users (tty for local, pts for remote).
- `w` – view system information and user behaviour.
- `uptime` – view how long the system has been running, number of users, and load.
- Examine `/etc/passwd` (user information) and `/etc/shadow` (password information) for anomalies.
- Check for accounts that have no password or are allowed to log in remotely without proper restrictions.

2. **Command History:**
- Check root history via `history`.
- Check histories in `/home/*/.bash_history` for each user.

3. **Check Ports:**
- `netstat -antlp | more` – list all connections and listening ports.
- Use `ls -l /proc/$PID/exe` or `file /proc/$PID/exe` to find the process file path.

4. **Check Processes:**
- `ps aux | grep <pid>`.

5. **Check Startup Items:**
- Check `/etc/rc.local`, `/etc/rc.d/rc[0~6].d`.

6. **Check Scheduled Tasks (Cron):**
- `crontab -l` – list cron jobs.
- `crontab -r` – remove all cron jobs (use with caution).
- `crontab -e` – edit cron jobs.
- Check key locations: `/var/spool/cron/*`, `/etc/crontab`, `/etc/cron.d/*`, `/etc/cron.daily/*`, `/etc/cron.hourly/*`, `/etc/cron.monthly/*`, `/etc/cron.weekly/*`, `/etc/anacrontab`, `/var/spool/anacron/*`.

7. **Check Services:**
- `chkconfig --list`.

8. **Check Anomalous Files.**

9. **Check System Logs:**
- Default log location: `/var/log/`.
- Check login logs: `lastlog` (all users), `last` (recent logins), `who` (current sessions).
- `/var/log/wtmp` – successful logins, `/var/log/btmp` – failed logins, `/var/log/utmp` – current sessions.

---

## Q: What are common Linux baseline security standards?

**A:** Baseline security standards typically cover five areas:

1. **Account Management and Authorisation:**
- Check for special accounts, empty passwords, and root-privileged accounts.
- Disable or delete unused accounts.
- Enforce password policies (`/etc/login.defs`): set password expiration, minimum length (8 characters), and max age (30 days).
- Disable root remote login.
- Restrict `su` privilege escalation (e.g., to `wheel` group).

2. **Services:**
- Disable unnecessary services.
- Secure SSH: `PermitRootLogin no`, use protocol version 2, set `MaxAuthTries 3`.

3. **File System:**
- Set `umask 027` in `/etc/profile`.
- Set idle session timeout: `TMOUT=180`.

4. **Logging:**
- Enable `syslogd`, configure log directory permissions and server.
- Log all user logins and operations.

5. **IP Protocol Security:**
- Use SSH over Telnet.
- Configure `/etc/hosts.allow` and `/etc/hosts.deny`.
- Disable ICMP redirects and source routing.
- Use `iptables` and `denyhost` to prevent SSH brute-forcing.

---

## Q: What are Windows baseline security standards?

**A:** Windows baseline security standards cover five areas:

1. **Identity Authentication:**
- Change default accounts.
- Disable the Guest account.
- Enforce password complexity and minimum length (8 characters).

2. **Access Control:**
- Check for shared accounts.
- Control remote and local shutdown authorisation.

3. **Security Auditing:**
- Log user logins.
- Ensure log completeness.
- Enforce session timeouts.

4. **Resource Control:**
- Session timeouts.
- Remote session timeouts.

5. **Residual Information Protection:**
- Do not display the last username.
- Clear virtual memory before shutdown.
- Do not store passwords using reversible encryption.

---

## Q: What are the baseline standards for middleware (e.g., Apache)?

**A:** Middleware baseline standards include:

- **Configuration:** Account management, authorisation, logging, session timeout (to prevent DoS), and binding IP addresses.
- **Prohibitions:** Restrict directory permissions, access to external files, CGI, and dangerous HTTP methods (PUT, DELETE).
- **Hiding:** Hide server version numbers and redirect error pages.
- **Deletion:** Remove default configuration files and unnecessary installation files.

---

## Q: What are common middleware vulnerabilities?

**A:** Common middleware vulnerabilities include:

**IIS:**
- PUT vulnerability
- Short filename disclosure
- Remote code execution
- Parsing vulnerability

**Apache:**
- Parsing vulnerability
- Directory traversal

**Nginx:**
- File parsing vulnerability
- Directory traversal
- CRLF injection
- Directory traversal

**Tomcat:**
- Remote code execution
- WAR backdoor deployment

**JBoss:**
- Deserialisation vulnerability
- WAR backdoor deployment

**WebLogic:**
- Deserialisation vulnerability
- SSRF
- Arbitrary file upload
- WAR backdoor deployment

**Others:**
- FastCGI unauthorised access and command execution
- PHPCGI remote code execution

---

## Q: What are the key considerations for securing IIS and Linux servers?

**A:**

**IIS Server Protection:**
- Keep Windows updated.
- Use IIS protection tools.
- Remove the default website.
- Uninstall FTP and SMTP if not needed.
- Regularly check administrator groups and services.
- Control server write access.
- Set strong passwords.
- Disable NetBIOS over TCP/IP.
- Block TCP ports.
- Monitor `.bat` and `.exe` files weekly.
- Manage IIS directory security.
- Use NTFS security.
- Manage user accounts.
- Audit the web server.

**Linux System Hardening:**
- Close unnecessary services.
- Change the default SSH port.
- Disable root SSH login.
- Restrict `su` command usage.
- Enforce password complexity.
- Restrict password reuse.
- Check for empty password accounts.
- Disable Ctrl+Alt+Del reboot.
- Disable Telnet service.

---

## Q: What are some common framework and command injection vulnerabilities?

**A:** Common vulnerabilities include:

- **Struts2:** OGNL injection.
- **WebLogic:** Deserialisation vulnerabilities.
- **Fastjson:** Deserialisation vulnerabilities.
- **ThinkPHP5:** Remote code execution.
- **Laravel:** Debug mode remote code execution (CVE-2021-3129).
- **Spring:** SPEL expression injection, Spring Security Oauth2 remote code execution.

---

## Q: What are common security tools and devices?

**A:**

**Tools:**
- **Port & Vulnerability Scanning:** Nmap, Masscan.
- **Packet Capture:** Wireshark, Burp Suite, Fiddler, HttpCanary.
- **Web Automated Security Scanning:** Nessus, AWVS, AppScan, Xray.
- **Information Gathering:** Oneforall, Hole.
- **Exploitation:** Metasploit, Cobalt Strike.
- **Webshell Management:** China Chopper, AntSword, Behinder, Godzilla.

**Devices:**
- **NGAF/NGFW:** Next-Generation Web Application Firewall.
- **IDS:** Host-based (HIDS) and Network-based (NIDS) Intrusion Detection Systems.
- **IPS:** Intrusion Prevention System.
- **AV:** Antivirus.
- **EDR:** Endpoint Detection and Response.
- **SAS:** Bastion host / jump server.
- **DAS:** Database Security Audit Platform.
- **LAS:** Log Audit Security Platform.
- **AC:** Access Control / Web Filtering.
- **Honeypot / Deception System.**
- **SIP:** Security Information Platform (Situational Awareness).

**Cloud Security Components:**
- Cloud host security.
- Cloud firewall.
- Cloud bastion host.
- Cloud honeypot.
- Cloud DDoS protection.

---

## Q: What is your experience with vulnerability databases?

**A:** As a security service engineer, my work has included:

- Conducting penetration testing, local services, and security exercises.
- Performing detailed penetration tests on client assets.
- Reporting vulnerabilities immediately upon discovery so clients can remediate promptly.

---

## Q: What are the typical groups and process flow for large-scale security exercises?

**A:** The groups are typically structured with:

- **Protection/Detection Group**
- **Comprehensive Analysis and Judgement Group**
- **Emergency Traceability Group**

The process flow has three phases:

1. **Preparation Phase:**
- Reduce the attack surface (asset inventory, reducing exposure).
- Identify risks (vulnerability scanning, penetration testing, weak password checks).

2. **Pre-War Phase:**
- Conduct internal drills to find and fix gaps.
- Consider adding security devices (WAF, IPS, IDS, SOC, bastion host, etc.).

3. **Combat Phase:**
- Monitor, report, and escalate issues.
- Follow instructions, optimise defence, and continuously remediate.

---

## Q: Can you describe your experience in a Blue Team role during a security exercise?

**A:** I participated as a Blue Team member, primarily responsible for incident analysis using IPS and IDS for traffic monitoring and log analysis to determine whether security events were false positives.

**Key tasks included:**
- Monitoring, analysis, response, and traceability.
- Investigating and responding to situational awareness alerts.
- Processing block/unblock requests.
- Providing regular status updates and device health reports.

---

## Q: What is the approach for Blue Team analysis and judgement?

**A:** The analysis and judgement process involves:

1. **Leveraging Existing Security Devices:** Understanding the customer's network topology and deployed equipment.
2. **Analysing Recent Alerts:** Filtering logs (source IP, destination IP, port, event name, time, rule ID, occurrence count) based on judgement criteria.
3. **Filtering Events:** Excluding likely non-malicious events (e.g., crypto-mining, worms, viruses, DoS).
4. **Checking Threat Intelligence:** Using platforms like ThreatBook, VirusTotal, or other threat intelligence feeds to analyse source IP addresses.
5. **Validating Internal Assets:** Checking if the IP belongs to the customer's internal network.
6. **Checking for Duplicate Reports:** Verifying if others have already reported the event.
7. **Analysing Traffic:** Examining request and response packets for false positives (paying attention to `X-Forwarded-For` and `x-real-ip` headers).
8. **Submitting Reports:** Providing complete screenshots (source IP, destination IP, request packets, response packets) for traceability.

> **Note:** Do not ignore internal network alerts; extend the investigation time window if necessary.

---

## Q: What is the detection and response approach for SQL injection?

**A:** SQL injection attack detection can be performed before or after an incident:

- **Pre-Attack:** Detect and block malicious payloads before they reach the database.
- **Post-Attack:** Examine database, application, and web server logs (e.g., IIS logs).

Traditional detection methods use rule-based signature matching. More modern approaches use machine learning to detect SQL injection patterns.

---

## Q: What is the response and prevention approach for DDoS and CC attacks?

**A:**

**DDoS Mitigation (Layer 3/4):**
- Drop the first SYN packet.
- Deploy traffic scrubbing devices.
- Use a WAF to block offending IP addresses.

**CC Attack Mitigation (Layer 7):**
- Optimise resource-intensive code.
- Add hardware capacity.
- Move to the cloud.
- Purchase professional DDoS protection services.
- Hide the real server IP, use cloud WAF, CDN, or load balancing.
- Temporarily redirect DNS to a safe site (e.g., law enforcement).

**Preventative Measures:**
- Patch system vulnerabilities.
- Optimise system resources.
- Filter unnecessary services and ports.
- Restrict specific traffic based on source.

---

## Q: How do you detect, investigate, and remove crypto-mining malware?

**A:**

**Symptoms:**
- Slow system response.
- High CPU/GPU usage.
- High memory/bandwidth consumption.

**Detection:**
- Check processes (system commands may be replaced).
- Examine logs and system users.
- Look for anomalous files.

**Common Entry Vectors:**
- Unauthorised access or weak credentials (Redis, Docker, Hadoop Yarn, NFS, PostgreSQL, Tomcat, SSH, Telnet, RDP).
- Remote command execution vulnerabilities (WebLogic, Jenkins, Jboss, Spring, ElasticSearch, EternalBlue, Struts2).
- Newly disclosed critical vulnerabilities.

**Removal Steps:**
1. **Isolate the Host:** Prevent worm-like propagation within the network.
2. **Block Communication:** Use `iptables` to block communication with mining pools.
3. **Clear Scheduled Tasks:** Remove cron jobs that re-download or execute mining scripts.
4. **Clear Startup Items:** Check and remove malicious startup entries.
5. **Kill Processes:** Terminate the mining processes (first kill any daemon processes).
6. **Remove SSH Keys:** Delete any suspicious `authorized_keys` files.

---

## Q: What is the process if a server has a webshell?

**A:** If a server is found to have a webshell:

1. **Isolate the Host:** Prevent the attacker from using it as a pivot.
2. **Scope the Incident:** Determine the webshell file's creation time and take a sample.
3. **Trace the Attack:** Use the creation time to analyse logs and identify the vulnerability and user account used.
4. **Clean-up:** Remove the webshell and any other malicious files.
5. **Remediate:** Patch the vulnerability.

---

## Q: What commands are used to detect webshells?

**A:** The `find` command is commonly used. For example:

```bash
find /var/www/html -name "*.php" | xargs egrep 'assert|eval|phpinfo\(\)|base64_decode|shell_exec|passthru|file_put_contents'
```

---

## Q: What are the methods for detecting webshells?

**A:**

**Host-Level Detection:**
- **Static Detection:** Signature-based scanning for known webshell patterns, functions, and values.
- **Dynamic Detection:** Monitoring system calls, file operations, and database activity.
- **Log Analysis:** Checking web logs for accesses and data submissions to suspicious pages.
- **Syntax Analysis:** Parsing code to identify dangerous functions and variable usage.

**Traffic-Level Detection:**
- **China Chopper:** Uses URL encoding and Base64, parameter `z0`, and the string `ini_set("display_errors","0")`.
- **AntSword:** Two requests with URL-encoded payloads; one to disable error reporting and fetch system info, another to list directories.
- **Behinder v2.0:** Uses AES encryption; three requests for key exchange and communication.
- **Behinder v3.0:** Uses AES encryption; two requests, using an MD5 of the password as the key.
- **Godzilla:** Supports multiple encryption methods; three requests for session establishment and confirmation.

---

## Q: What are common ports and their associated vulnerabilities?

**A:**

**Database Ports (Weak Passwords):**
- 1433: MSSQL
- 1521: Oracle
- 3306: MySQL
- 5432: PostgreSQL

**Special Services (Unauthorised Access / Command Execution):**
- 443: SSL Heartbleed
- 873: Rsync unauthorised
- 5984: CouchDB
- 6379: Redis unauthorised
- 7001/7002: WebLogic default credentials
- 8088: Hadoop Yarn unauthorised
- 8161: Apache ActiveMQ unauthorised
- 9200/9300: Elasticsearch command execution
- 11211: Memcache unauthorised
- 27017/27018: MongoDB unauthorised
- 50000: SAP command execution
- 50070/50030: Hadoop unauthorised

**Common Service Ports (Weak Passwords / Brute Force):**
- 21: FTP
- 25: SMTP
- 23: Telnet
- 22: SSH
- 53: DNS
- 139: NetBIOS Session Service
- 445: SMB (EternalBlue, EternalRomance, IPC$ attacks)
- 2601/2604: Zebra (default password: zebra)

---

## Q: What is the TCP three-way handshake and four-way wave?

**A:**

**Three-Way Handshake (Establishing a Connection):**
1. The client sends a SYN packet and enters the `SYN_SENT` state.
2. The server responds with a SYN+ACK packet and enters `SYN_RCVD`.
3. The client sends an ACK packet; both parties enter the `ESTABLISHED` state.

**Four-Way Wave (Terminating a Connection):**
1. The client sends a FIN packet and enters `FIN_WAIT_1`.
2. The server responds with an ACK and enters `CLOSE_WAIT`.
3. The server sends a FIN packet and enters `LAST_ACK`.
4. The client sends an ACK and enters `TIME_WAIT`; the server enters `CLOSED`.

---

## Q: How would you respond if a widely impactful 0-day vulnerability is disclosed?

**A:**

1. **Assess Impact:** Evaluate the vulnerability's exploitability (attack vector, required interactions, CIA impact, availability of PoC, and whether affected systems are exposed to the internet).
2. **Develop Detection:** If a PoC is available, analyse what traces it leaves (e.g., Windows event ID 4769 for NTLM relay) and write detection rules for your SIEM or log analysis platform.
3. **Establish a Defence:** Use your layered security architecture to detect and respond to attacks.
4. **Monitor and Adapt:** Continuously monitor for exploitation attempts and adjust defences accordingly.

---

## Q: How do you detect if a server has been compromised?

**A:**

**For a Website:**
- Redirected to malicious sites.
- Homepage defacement.
- Baidu snapshot altered.
- Webshell detection.
- DDoS/CC attack.

**For a Server:**
- Trojan/malware infection.
- Administrator password changed.
- Unauthorised remote control.
- Unexpected outbound traffic.
- DoS/DDoS attack.

**General:**
- Analyse login records, system logs, and web logs.

---

## Q: What are the steps for server OS security hardening?

**A:**

1. **Stop Unnecessary Software:** Prevent potential entry points.
2. **Patch Management:** Stay informed about vulnerabilities, apply patches, and test them.
3. **Restrict Ports and Services:** Limit access to externally facing services.
4. **Strengthen Authentication:** Enforce strong passwords and multi-factor authentication.
