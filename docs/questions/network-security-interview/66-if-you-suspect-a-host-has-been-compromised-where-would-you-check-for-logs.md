# Q: If you suspect a host has been compromised, where would you check for logs?

**A:** The location of logs depends on the operating system:

- **Linux:** Check directories like `/var/log/` for system logs (e.g., `auth.log`, `syslog`, `kern.log`), web server logs (e.g., `/var/log/apache2/`), and application logs.
- **Windows:** Check the Windows Event Viewer for logs such as Security, Application, and System logs.
- **Firewall Logs:** Check the network firewall logs for suspicious traffic or blocked requests.
- **Application Logs:** Check specific application logs to identify any suspicious activities within the application itself.
