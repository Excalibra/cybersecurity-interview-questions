# 1. How can one manually determine the target operating system?

1. Modify URL parameters to uppercase: normal response → Windows; abnormal → Linux.
2. Ping: TTL > 100 typically Windows; < 100 typically Linux.
3. HTTP response headers: IIS → Windows.
