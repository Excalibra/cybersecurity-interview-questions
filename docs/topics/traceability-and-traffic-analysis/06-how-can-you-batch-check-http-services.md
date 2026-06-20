# 6. How can you batch‑check HTTP services?

- **Method 1:** `python3 nmapsV.py ip.txt result.txt`
- **Method 2:** Nmap with version detection: `nmap -sV -iL ip.txt -oA OUTPUT --no-stylesheet`, then use `nmapReport`.
