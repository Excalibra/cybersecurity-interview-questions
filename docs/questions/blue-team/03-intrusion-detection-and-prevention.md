# Intrusion Detection & Prevention

## Q: How do WAF products intercept attacks?

**A:** WAF products use three deployment models:

1. **Cloud WAF:** Uses DNS redirection to send traffic to a cloud scrubbing centre for inspection.
2. **Software WAF:** Installed on the web server itself to monitor and block requests.
3. **Hardware WAF:** A physical appliance deployed inline before the web server.

**Core Mechanism:** WAFs inspect every request and session, applying a set of security rules. If a request matches a rule (e.g., SQL injection, XSS), it is blocked.

---

## Q: What are the different protection modes of a WAF?

**A:**

- **Basic Web Protection:** Blocks common attacks (SQLi, XSS, webshell uploads).
- **CC Protection:** Rate-limiting based on IP, Cookie, or Referer.
- **Precise Access Control:** Custom rules for specific HTTP fields (e.g., CSRF protection).
- **IP Black/Whitelist:** Allow or block specific IPs.
- **Geolocation Control:** Restrict access based on country.
- **Web Page Tamper Protection:** Serve cached, clean pages.
- **Anti-Scraping:** Identify and block scraping bots.
- **False Positive Mitigation:** Ignore certain rules for specific requests.
- **Privacy Filtering:** Redact sensitive information from logs.
- **Information Leakage Prevention:** Prevent exposure of sensitive user data.

---

## Q: How do you proactively mitigate vulnerabilities in third-party components?

**A:** Third-party component vulnerabilities are a supply chain security issue. Mitigation involves:

1. **Security Strategy Assessment:** Evaluate existing security governance, data privacy, and compliance.
2. **Incident Response Planning:** Prepare for breaches or outages with robust response plans.
3. **Defence-in-Depth:** Use multiple layers of defence to reduce risk.

---

## Q: How would you write a script to detect command injection?

**A:** Points to consider when writing a detection script:

- **Approach:** Would you use signature matching, heuristics, or anomaly detection?
- **Completeness:** Why might your script miss attacks (e.g., obfuscation techniques)?
- **Blind Detection:** How would you handle scenarios with no output (blind command injection)?
