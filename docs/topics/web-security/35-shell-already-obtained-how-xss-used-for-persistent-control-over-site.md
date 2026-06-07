# 35. With a shell already obtained, how can XSS be used to achieve persistent control over the target site?

## Methods
- Insert JavaScript on the backend login page that records credentials and sends them to a controlled server when login is successful.
- Insert an XSS script in a file accessible only after login.
