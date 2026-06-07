# 2. What are the types of XSS? What are the differences between them? How can it be remediated?

## Types
- Stored (persistent)
- Reflected
- DOM-based

## Differences
- **Stored XSS:** Often occurs in areas such as information modification or insertion; malicious code is stored in the database and executes whenever a victim accesses the affected page.
- **Reflected XSS:** Commonly appears within URLs. An attacker typically crafts a malicious link in advance and deceives the user into clicking it, thereby triggering the attack code.
- **DOM-based XSS:** The attack code resides in the URL and is subsequently written into a DOM node within the browser. Stored and reflected XSS involve the server, whereas DOM-based XSS is entirely client-side.

## Remediation
- Perform HTML encoding on input data
- Apply whitelist filtering
- Filter tags that contain JavaScript events
- Enable the HttpOnly flag
- Deploy a WAF
