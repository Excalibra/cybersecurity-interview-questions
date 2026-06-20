# 2. What is the principle and prerequisite for sqlmap’s `--os-shell`?

## Prerequisites
- Root database privileges
- Knowledge of the absolute path
- `GPC` (magic_quotes_gpc) turned off
- `secure_file_priv` parameter empty or set to a specified path

## Principle
sqlmap probes basic target information, uploads a shell to the target web server, uses the shell to pass parameters for command execution, and deletes the shell upon exit. For SQL Server, it relies on `SA` privileges and `xp_cmdshell`.
(Detailed analysis: https://dev.to/excalibra/the-principle-of-sqlmaps-os-shell-3mb4)
