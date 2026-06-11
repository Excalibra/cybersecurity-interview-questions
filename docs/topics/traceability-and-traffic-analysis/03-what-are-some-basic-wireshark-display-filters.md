# 3. What are some basic Wireshark display filters?

- **IP:** `ip.src==1.1.1.1`, `ip.dst==1.1.1.1`
- **Port:** `tcp.port==80`, `tcp.srcport==80`, `tcp.dstport==80`
- **Protocol:** `http`
- **HTTP method:** `http.request.method=="GET"`, `http.request.method=="POST"`
