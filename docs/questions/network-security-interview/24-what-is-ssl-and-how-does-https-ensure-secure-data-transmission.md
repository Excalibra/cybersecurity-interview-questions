# Q: What is SSL, and how does HTTPS ensure secure data transmission?

**A:** SSL (Secure Sockets Layer), now superseded by TLS (Transport Layer Security), is a cryptographic protocol designed to provide secure communication over a network. Its main goals are to ensure the confidentiality, integrity, and authenticity of data.

**How HTTPS works:**
1.  **Encryption:** SSL/TLS uses a combination of asymmetric (public-key) and symmetric (private-key) encryption. Asymmetric encryption is used to securely exchange a symmetric session key, which is then used for the faster symmetric encryption of the actual data.
2.  **Authentication:** The server presents a digital certificate issued by a trusted Certificate Authority (CA). The client verifies this certificate to confirm the server's identity and prevent man-in-the-middle attacks.
3.  **Integrity:** SSL/TLS uses cryptographic hashes to generate a message digest for each message, ensuring that the data has not been altered in transit.
