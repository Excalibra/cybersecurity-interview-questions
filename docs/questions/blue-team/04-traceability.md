# Traceability & Forensics

## Q: What are the basic steps for traceability?

**A:**

1. **Attack Source Capture:**
- Security device alerts.
- Log and traffic analysis.
- Anomalous server resources (files, accounts, processes).
- Phishing emails.
- Honeypot systems.

2. **Countermeasures:**
- **IP Geolocation:** Identify physical location (though proxies can be used).
- **ID Tracking:** Use search engines, social media, and forums to link IDs to real identities.
- **Domain Analysis:** Use Whois to find registrant details.
- **Malware Analysis:** Extract usernames, emails, and C2 servers from samples.
- **Social Account Analysis:** Use JSONP to gather information from social media accounts.

3. **Attack Profiling:**
- **Attack Path:** Identify the attacker's purpose, network proxies, and techniques (phishing, web, social engineering).
- **Attacker Identity:** Map virtual IDs to real-world identities (name, location, contacts, organisation).

---

## Q: What is active defence?

**A:** Active defence involves proactive measures to detect, deter, and respond to threats. This includes:

- **Browser Fingerprinting:** To identify and track attackers.
- **Deception Technology:** Using honeypots and honeynets to detect and analyse attacks.

---

## Q: How do you trace traffic using Wireshark?

**A:**

**To find the attacking IP:**
1. **Conversations:** Statistics → Conversations to identify suspicious IPs.
2. **Webshell Search:**
```
ip.addr == <suspicious IP> && http matches "upload|eval|select|xp_cmdshell" && http.request.method == "POST"
```
3. **Trace Vulnerability:** Use `http.request.uri contains "webshell.php"` to find the initial access point.
4. **Determine Vulnerability:** Analyse the initial HTTP request to identify the vulnerability type.

---

## Q: What are some basic Wireshark display filters?

**A:**

- **IP:**
- Source: `ip.src==1.1.1.1`
- Destination: `ip.dst==1.1.1.1`
- **Port:**
- Any: `tcp.port==80`
- Source: `tcp.srcport==80`
- Destination: `tcp.dstport==80`
- **Protocol:** `http`
- **HTTP Method:** `http.request.method=="GET"` or `"POST"`

---

## Q: What are common forensic tools?

**A:** Wireshark, Xplico, Volatility, FastIR Collector, Autopsy, DumpIt, FTK Imager, Foremost, Scalpel, Bulk_Extractor.
