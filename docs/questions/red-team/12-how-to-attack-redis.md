# 12. How to attack Redis? Conditions for master‑slave replication exploitation, why can it lead to shell acquisition, what is the underlying principle, does it affect business, and what is the principle of master‑slave replication?

- **Windows:** Write a webshell to an absolute path, write to the startup folder.
- **Linux:** Write a webshell to an absolute path, use public‑key authentication to gain root privileges, or use a crontab scheduled task to create a reverse shell.
- The slave node connects to the master node via the `slaveof` command and sends a `SYNC` command.
- The master node responds to `SYNC`, triggers `BGSAVE` to create an RDB snapshot file, and transmits it to the slave node.
- The slave node loads the RDB snapshot file. Thereafter, the master node sends write commands from its buffer to the slave node to maintain data synchronisation.
- Redis has added a module feature; through external extensions, one can implement new Redis commands. By writing and compiling a malicious `.so` file in C and loading it, code execution can be achieved.
