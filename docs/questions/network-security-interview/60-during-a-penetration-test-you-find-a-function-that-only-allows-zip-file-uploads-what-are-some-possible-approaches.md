# Q: During a penetration test, you find a function that only allows ZIP file uploads. What are some possible approaches?

**A:** Several approaches can be explored when only ZIP uploads are allowed:

1.  Try to bypass the extension check to upload other file types (e.g., `.asp`, `.php`, `.exe`).
2.  Compress a malicious PHP file into a ZIP archive and upload it.
3.  Attempt to modify the ZIP's internal structure to execute code when extracted.
4.  Use a ZIP file as a carrier to inject a web shell.
5.  Try to upload a password-protected ZIP file to hide the malicious payload.
6.  Analyse the ZIP's file information to find hidden malicious code.
7.  Upload the ZIP and try to access its contents directly via the server.
8.  Search for vulnerabilities in how the application processes ZIP files.
9.  Extract hidden code from within the ZIP file.
10. Check if there are any restrictions on file size.
11. Attempt to use the ZIP file's properties to cause a DoS (Denial of Service) attack.
12. Perform reverse engineering on the ZIP file's structure.
13. Attempt a "magic box" attack where a ZIP is uploaded and later modified.
