# Q: What is the summary of differences between TCP and UDP?

**A:** The key differences are:

1.  **Connection:** TCP is a connection-oriented protocol, meaning a connection must be established before data is sent. UDP is a connectionless protocol.
2.  **Reliability:** TCP provides reliable data transfer through acknowledgements and retransmissions. UDP does not guarantee delivery.
3.  **Speed:** UDP is faster than TCP because it lacks the overhead of connection setup and reliability mechanisms.
4.  **Bandwidth:** TCP has built-in congestion control to dynamically adjust its transmission rate based on network conditions. UDP does not have this feature.
5.  **Use Cases:** TCP is used for applications that require reliable, in-order delivery, such as email, file transfer, and web browsing. UDP is used for speed-critical and real-time applications, such as video streaming, gaming, and VoIP.
