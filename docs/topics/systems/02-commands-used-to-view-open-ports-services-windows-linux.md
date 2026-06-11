# 2. What commands are used to view open ports and running services on Windows and Linux?

## Windows
- Ports: `netstat -ano`
- Services: `net start`

## Linux
- Ports: `netstat -tuln`
- Services: `service --status-all | grep running`
