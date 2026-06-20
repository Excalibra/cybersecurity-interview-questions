# 27. How does SSRF write a shell using Redis?

## SSRF Capabilities
- Internal network scanning, banner grabbing.
- Attacking internal applications using GET‑parameter exploits.
- Reading local files via protocols.
- In cloud environments, calling internal APIs to manipulate ECS instances.

## WebLogic SSRF Exploitation
Use the Gopher protocol via SSRF to interact with an internal Redis instance. Employ Redis to write a reverse shell into a crontab scheduled task. The payload is URL‑encoded and `\r` replaced with `%0d%0a`.
