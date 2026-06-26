# Q: What is the difference between GET and POST requests?

**A:** The key differences are:

1.  **Purpose:** `GET` is used to request data from a specified resource and should not change the state of the server. `POST` is used to submit data to be processed to a specified resource and can change the server state.
2.  **Data Transmission:** `GET` requests send data in the URL (query string), which is visible in the browser's address bar. `POST` requests send data in the request body, which is not directly visible.
3.  **Length Limitation:** `GET` requests have a limit on the length of the URL. `POST` requests have no inherent limit on the size of the data that can be sent.
4.  **Security:** Data sent via `GET` is less secure as it is transmitted in plain text. `POST` is more suitable for sensitive data, as it is sent in the request body. `GET` is safe for retrieving data, while `POST` is intended for submitting data that changes the server's state.
