# 5. What is the approach for analysing abnormal SQL query traffic?

1. A sudden increase in database queries may indicate scanning or SQL injection; combine with traffic analysis tools.
2. Monitor keywords `SELECT`, `UNION`; high frequency with small difference may indicate injection.
   - Use Wireshark: filter HTTP, then Statistics to identify heavy‑traffic IPs.
3. Look for basic injection characteristics: `select`, `union`, `(`, `/*`, `sleep`.
