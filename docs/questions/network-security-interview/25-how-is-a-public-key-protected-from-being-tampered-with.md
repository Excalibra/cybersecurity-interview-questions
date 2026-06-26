# Q: How is a public key protected from being tampered with?

**A:** Public keys are protected from tampering using several methods:

1.  **Digital Signatures:** Before a public key is published, it is signed using a trusted private key. Anyone can verify this signature to confirm the public key's authenticity.
2.  **Public Key Infrastructure (PKI):** PKI is a comprehensive framework of policies, processes, and technologies for managing digital certificates. It establishes a chain of trust through Certificate Authorities.
3.  **Public Key Hashing:** A cryptographic hash of the public key is published through a trusted channel. The recipient can hash the received key and compare it to the published hash to detect any tampering.
4.  **Physical Protection:** Critical private keys are stored in secure, tamper-resistant hardware devices, such as Hardware Security Modules (HSMs), smart cards, or USB keys.
