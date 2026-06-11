## Java Deserialisation – Principle

If a Java application deserialises user input – i.e., untrusted data – then an attacker can craft malicious input such that deserialisation yields unexpected objects. The generation of these unexpected objects may, in turn, lead to arbitrary code execution.

In web applications written in Java, the communication between the application and the web server frequently involves the transmission of large numbers of serialised objects, for example in the following contexts:

- HTTP request parameters, cookies, and other parameters.
- The RMI protocol, which is widely used and entirely based on serialisation.
- JMX, which likewise processes serialised objects.
- Custom protocols employed to receive and send raw Java objects.
