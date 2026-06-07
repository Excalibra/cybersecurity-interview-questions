# 13. What is the penetration testing process?

## For a Single Website
1. Determine whether a CDN is in use; if so, discover the real IP.
2. If no CDN, scan neighbouring sites and C-class IP ranges.
3. Identify the CMS and determine middleware, plugins, and OS.
4. Perform port scanning and directory brute-forcing.
5. Examine JavaScript files for sensitive information.
6. Look for associated mobile apps, official accounts, etc. to expand the asset footprint.
7. Conduct routine vulnerability probing based on gathered information.

## For a Network Segment or Region
- Use tools like Goby for batch scanning and mass exploit deployment, then probe identified weak points.
