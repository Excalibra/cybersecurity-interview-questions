# Q: How does TCP ensure reliable data transmission?

**A:** TCP uses several mechanisms to ensure reliable data transmission:

1.  **Sequence Numbers and Acknowledgements:** Each TCP segment is assigned a sequence number. The receiver sends an `ACK` (acknowledgement) to confirm receipt. If the sender does not receive an `ACK`, it retransmits the segment.
2.  **Sliding Window:** This flow control mechanism prevents the sender from overwhelming the receiver. The receiver advertises a window size, and the sender can only send data up to that limit before receiving an `ACK`.
3.  **Timeout and Retransmission:** A timer is set for each sent segment. If an `ACK` is not received before the timer expires, the sender assumes the segment was lost and retransmits it.
4.  **Congestion Control:** TCP uses algorithms to detect network congestion and dynamically adjust the sending rate to prevent network collapse.
