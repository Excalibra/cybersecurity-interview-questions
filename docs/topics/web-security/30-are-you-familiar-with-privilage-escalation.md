# 30. Are you familiar with privilege escalation? What is the principle of UDF privilege escalation?

## UDF Privilege Escalation
1. Place the UDF file in the appropriate directory (MySQL > 5.1: `lib/plugin` under the MySQL root).
2. Import the custom function from the UDF file.
3. Execute the custom function to perform privileged operations.
