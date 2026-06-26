# Q: What are the disadvantages of RIP?

**A:** The main disadvantages of RIP are:

1.  **Slow Convergence:** When a network topology changes, it takes a long time for RIP to converge and update all routing tables. This is due to its periodic update cycle and the distance-vector algorithm.
2.  **Not Scalable:** RIP is only suitable for small to medium-sized networks. As the network grows, the routing information overhead increases significantly, consuming bandwidth and processing power.
3.  **No VLSM Support:** RIP cannot support Variable Length Subnet Masks (VLSM), which limits its flexibility in complex network designs and can lead to inefficient IP address usage.
4.  **Poor Security:** RIP does not authenticate its routing updates, making it vulnerable to attacks like route poisoning and spoofing, which can lead to network outages or data interception.
