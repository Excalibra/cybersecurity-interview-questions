## 1. **Q: What is the principle of Java deserialisation?**

**A:** If a Java application performs deserialisation on user input, i.e., untrusted data, an attacker can construct malicious input such that deserialisation produces unintended objects. During the creation of these unintended objects, arbitrary code execution may occur.

In web applications written in Java, large numbers of serialised objects are typically exchanged between the application and the web server. Examples include:

- Parameters, cookies and other elements of HTTP requests;
- The RMI protocol, which is widely used and entirely based on serialisation;
- JMX, which also handles serialised objects;
- Custom protocols designed to send and receive raw Java objects.
