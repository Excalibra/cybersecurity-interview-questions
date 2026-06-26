# Q: After compromising a machine on the internal network, how can you identify other hosts to target?

**A:** After gaining a foothold, you should proceed as follows:

1.  **Analyse the Machine:** Determine the operating system, installed software, and network configuration of the compromised host.
2.  **Run Network Discovery Tools:** Use tools to scan the local network and identify other active hosts, open ports, and services.
3.  **Scan IP Addresses:** Explore the local subnet to find other live machines and identify their roles.
4.  **Attempt Connections:** Try to connect to other hosts, particularly those with open services like file sharing or remote administration.
5.  **Deploy Malware:** Use the compromised host as a base to spread malware or tools to other machines.
6.  **Launch Attacks:** Use the information gathered to launch specific attacks against other internal hosts, aiming to steal credentials or escalate privileges.
7.  **Expand Access:** Use any obtained credentials to move laterally to other systems and gain further access.
