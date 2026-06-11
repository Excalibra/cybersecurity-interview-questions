# 25. If the command `net group “Domain Admins” /domain` fails to return domain administrators, what might be the problem and how can it be resolved?

1. **Insufficient permissions:** The user executing the command may lack sufficient privileges to view the Domain Admins group. Ensure that the executing user has adequate rights, typically domain administrator privileges.
2. **Domain trust issues:** Problems with trust relationships between domains can also prevent viewing the Domain Admins group. Use the command `nltest /domain_trusts` to check domain trust relationships.
