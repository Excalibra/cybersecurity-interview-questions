# Q: What is a Land attack?

**A:** A Land attack is a type of DoS (Denial of Service) attack where the attacker sends a specially crafted TCP `SYN` packet to a target machine. In this packet, both the source and destination IP addresses are set to the target's IP address. This causes the target machine to become confused and enter a loop, as it tries to respond to its own packets, eventually crashing or becoming unresponsive. This vulnerability has been patched in modern operating systems.
