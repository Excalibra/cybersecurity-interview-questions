# Q: What is RARP (Reverse Address Resolution Protocol) and how does it work?

**A:** In a computer network, each device has a unique physical (MAC) address to identify it on the local network. To communicate, each device also needs a unique IP address. While IP addresses are usually manually configured, RARP allows a device to request an IP address automatically. The process is:
1.  A device broadcasts a RARP request to the network, asking for its IP address.
2.  A RARP server receives the request, looks up the MAC address, and returns the corresponding IP address.
3.  The device can then begin communicating on the network.

It is important to note that RARP operates only within a local area network, as it requires all devices to be on the same physical network. In larger networks, DHCP is typically used instead.
