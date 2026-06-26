# Q: What is the difference between reverse TCP and bind TCP?

**A:** 

**Reverse TCP:** In a reverse TCP connection, the client (victim) initiates the connection to the server (attacker). This is often used to bypass firewalls that block incoming connections. The client actively tries to connect to the attacker's machine.

**Bind TCP:** In a bind TCP connection, the server (attacker) waits for a connection on a specific port, and the client (victim) connects to it. This is a more traditional server-client model but can be blocked by firewalls.

**Summary:** Reverse TCP is "call home" (victim calls attacker), while Bind TCP is "waiting" (attacker waits for victim to connect).
