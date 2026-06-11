# 26. Where does the command to query domain administrators essentially look for the information, and why does entering it return results?

The command `net group "Domain Admins" /domain` queries the group information stored in Active Directory. It sends a request to a domain controller, which manages and maintains the Active Directory database. This database stores all domain‑related information, including user accounts, computer accounts, and group accounts.
