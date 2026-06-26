# Q: What are some common ways to get a shell from an unauthenticated Redis instance?

**A:** Common methods to gain a shell from an unauthenticated Redis instance include:

1.  **Writing a Web Shell:** Using Redis to write a malicious script (e.g., a PHP web shell) to the web directory.
2.  **Uploading a Web Shell:** Uploading a web shell file to the Redis server and then reading it.
3.  **Executing Arbitrary Commands:** Exploiting Redis to execute system commands.
4.  **Storing a Trojan:** Storing a trojan payload in Redis and then triggering its execution.
5.  **Using RDB Persistence:** Injecting a web shell into a Redis RDB backup file.
6.  **Using AOF Persistence:** Injecting commands into the Redis AOF file.
7.  **Master-Slave Replication:** Using a compromised master to push malicious data to a slave.
8.  **Exploiting the `EVAL` Command:** Sending a malicious LUA script to Redis for execution.
9.  **Using Message Queues:** Sending a payload as a message to be executed by a worker.
10. **Using the `EVAL` Command:** Executing a LUA script to gain a reverse shell.
