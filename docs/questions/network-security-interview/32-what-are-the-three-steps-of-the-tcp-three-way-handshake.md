# Q: What are the three steps of the TCP three-way handshake?

**A:** The three steps are:

1.  The client sends a connection request (`SYN`) packet to the server, which includes the client's Initial Sequence Number (ISN).
2.  The server responds with a `SYN-ACK` packet, which acknowledges the client's request and includes the server's own ISN.
3.  The client sends an `ACK` packet back to the server, confirming the connection is established.
