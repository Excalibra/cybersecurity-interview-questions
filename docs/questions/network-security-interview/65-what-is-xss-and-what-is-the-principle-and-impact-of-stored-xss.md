# Q: What is XSS and what is the principle and impact of stored XSS?

**A:** XSS (Cross-Site Scripting) is a common web vulnerability where an attacker injects malicious scripts (usually JavaScript) into a web application. This happens when user input is not properly sanitised.

**Stored XSS (Persistent XSS):** This occurs when the injected script is permanently stored on the server (e.g., in a database, comment field, or log). The script is then served to any user who visits the affected page.
- **Impact:** The stored script can be executed without the user's interaction, allowing the attacker to steal cookies, hijack sessions, modify content, or perform other malicious actions.
- **Principle:** The core principle is that the application trusts user input and stores it without proper sanitisation. When a user requests the page, the stored script is sent to their browser and executed.
