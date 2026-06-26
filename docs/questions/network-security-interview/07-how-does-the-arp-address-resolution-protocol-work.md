# Q: How does the ARP (Address Resolution Protocol) work?

**A:** Whenever a host needs to send an IP packet to another host, it must know the recipient's logical (IP) address. However, this IP address must be encapsulated in a frame to be sent over the physical network. This means the sender must also have the recipient's physical (MAC) address. ARP receives the logical address from the IP protocol, maps it to the corresponding physical address, and then passes that physical address to the data link layer.
