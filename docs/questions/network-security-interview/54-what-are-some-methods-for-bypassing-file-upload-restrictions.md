# Q: What are some methods for bypassing file upload restrictions?

**A:** Common methods to bypass file upload restrictions include:

1.  **Extension Bypass:** Change the file extension to a whitelisted one (e.g., `.js`, `.jpg`, `.exe`).
2.  **MIME Type Spoofing:** Modify the `Content-Type` header to match an allowed type.
3.  **Double Extension:** Upload a file like `shell.php.jpg`, which might bypass naive validation.
4.  **Using Base64 Encoding:** Encode the file contents in Base64 and send it within a JSON or XML payload.
5.  **String-based Uploads:** Convert the file to a string and use functions like `eval()` to execute it (if the application processes it).
6.  **Multipart/Form-Data Exploitation:** Manipulate the `multipart/form-data` structure to confuse the parser.
7.  **Database Storage:** Upload a file as binary data into a database and then retrieve it via a separate path.
8.  **Unusual File Types:** Try uploading files with extensions that are not explicitly blocked, such as `.jsp`.
9.  **Exe Reflection:** Compile non-managed code (e.g., C++) into an executable module and load it into the current application domain.
