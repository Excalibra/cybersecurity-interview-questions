# Q: What is the RIP (Routing Information Protocol) and how does it work?

**A:** RIP is a distance-vector routing protocol used to exchange routing information within a LAN or WAN. It is a relatively simple protocol and is commonly used in smaller networks.

**How RIP works:**
1.  The network is divided into segments, each with a unique identifier called a network number.
2.  Each router maintains a routing table, which records the distance and next-hop router for different networks.
3.  Routers periodically broadcast their entire routing tables to their immediate neighbours.
4.  When a router receives a neighbour's table, it compares it to its own. If the neighbour offers a shorter path to a network, the router updates its table and broadcasts this new information.
5.  This process continues until all routers in the network have a consistent and updated view of the topology.
