# Q: What are the principles of IDS/IPS and how can they be bypassed?

**A:** IDS/IPS systems combine three main detection methods to identify and prevent threats:

1.  **Static Detection (Signature-Based):** Compares network traffic against a database of known attack signatures.
2.  **Dynamic Detection (Anomaly-Based):** Simulates the execution of code to see if it exhibits malicious behaviour.
3.  **Behavioural Analysis:** Monitors network behaviour over time to detect deviations from normal patterns.

**Methods to Bypass IDS/IPS:**
1.  **Network Obfuscation:** Spoofing IP addresses or using network infrastructure to hide the source of an attack.
2.  **Packet Fragmentation:** Splitting malicious payloads into smaller packets to avoid signature detection.
3.  **Special Character Encoding:** Using uncommon characters or encoding to obfuscate malicious code.
4.  **Encryption:** Encrypting the payload to prevent the IDS/IPS from inspecting its contents.
