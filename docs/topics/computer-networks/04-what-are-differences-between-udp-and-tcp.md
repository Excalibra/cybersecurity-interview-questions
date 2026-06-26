# Q: What are the differences between UDP and TCP, along with their advantages and disadvantages?

**A:** 

**UDP** is a connectionless protocol. Sending data involves simply encapsulating the data and transmitting it from the network interface. There is no stateful relationship between individual datagrams. Consequently, its advantages are low performance overhead and low resource consumption; its disadvantage is weak reliability.

**TCP** is a connection-oriented protocol. A reliable connection must be established before data transmission (three-way handshake), and a formal closure process occurs afterwards (four-way handshake), laying a reliable foundation for data transfer. Thus, its advantage is stable, reliable transmission.
