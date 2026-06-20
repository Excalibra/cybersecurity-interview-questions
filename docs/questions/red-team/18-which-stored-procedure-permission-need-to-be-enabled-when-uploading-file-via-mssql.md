# 18. If you wish to upload a file via MSSQL, which stored procedure’s permission needs to be enabled?

To upload a file through MSSQL, you need to enable the permissions for system stored procedures.
In MSSQL, stored procedures are categorised into three types: system stored procedures, extended stored procedures, and user‑defined stored procedures. System stored procedures, which are mainly stored in the `master` database and prefixed with `sp_`, can be invoked in any database.
