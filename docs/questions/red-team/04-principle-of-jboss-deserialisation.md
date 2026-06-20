# 4. Principle of JBoss deserialisation

## CVE-2017-12149
The vulnerability exists in the `ReadOnlyAccessFilter` filter within the JBoss `HttpInvoker` component. Without performing any security checks, it attempts to deserialise the data stream from the client.
The source code can be found in `jboss\server\all\deploy\httpha-invoker.sar\invoker.war\WEB-INF\classes\org\jboss\invocation\http\servlet\ReadOnlyAccessFilter.class`.
The filter retrieves data from the HTTP request and calls the `readObject()` method to perform deserialisation without any inspection or filtering. Consequently, the `invoker/JMXInvokerServlet` path in JBoss is exposed externally, and the JMX component supports Java deserialisation.
