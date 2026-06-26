# Q: What is the OSPF (Open Shortest Path First) protocol and how does it work?

**A:** OSPF is a routing protocol that uses the Shortest Path First (SPF) algorithm to calculate the best path for data packets within a single Autonomous System (AS).

**How OSPF works:**
1.  **Neighbour Discovery:** OSPF routers establish neighbour relationships by exchanging `Hello` messages. Once a neighbour adjacency is formed, they begin sharing routing information.
2.  **Link State Database Synchronisation:** Each OSPF router stores its link-state information in a local Link State Database (LSDB). When two routers become neighbours, they exchange their LSDB information to synchronise their view of the network.
3.  **SPF Calculation:** With a complete LSDB, each router runs the SPF algorithm to build a Shortest Path Tree (SPT), which is then stored in the routing table. This tree represents the optimal path from the router to all other destinations.
4.  **Route Updates:** Routers periodically send update messages to notify neighbours of any changes in their link states. Upon receiving an update, routers update their LSDB and recalculate the SPT.
5.  **Data Forwarding:** When a data packet arrives, the router consults its SPT to determine the next-hop router and forwards the packet accordingly.
