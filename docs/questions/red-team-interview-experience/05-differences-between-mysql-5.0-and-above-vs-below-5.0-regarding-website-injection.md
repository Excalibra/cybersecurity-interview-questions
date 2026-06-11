# Q: What are the differences between MySQL versions 5.0 and above versus below 5.0 regarding website injection?

**A:** Below version 5.0, MySQL does not have the `information_schema` system table, making it impossible to list table names directly; attackers must resort to brute‑forcing table names. Additionally, versions below 5.0 operate as multi‑user, single‑operation, whereas versions 5.0 and above are multi‑user, multi‑operation.
