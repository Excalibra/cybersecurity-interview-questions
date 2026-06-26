# Q: What is the three-way handshake and four-way wave? Why does TCP need a three-way handshake?

**A:** The **three-way handshake** is the process TCP uses to establish a connection:
1.  The client sends a `SYN` packet to the server to initiate the connection.
2.  The server responds with a `SYN-ACK` packet to acknowledge the request and agree to the connection.
3.  The client sends an `ACK` packet to confirm the connection is established.

The **four-way wave** is the process TCP uses to terminate a connection:
1.  The client sends a `FIN` packet to the server to request connection closure.
2.  The server responds with an `ACK` packet to acknowledge the request.
3.  The server then sends its own `FIN` packet to the client to indicate it also wants to close the connection.
4.  The client sends an `ACK` packet to confirm the connection is fully closed.

**Why does TCP need a three-way handshake?**
The three-way handshake is essential to establish a reliable connection. It ensures that both the client and server are ready to send and receive data and allows them to synchronise their initial sequence numbers. This synchronisation is the foundation for the reliable, ordered data transfer that TCP provides.
