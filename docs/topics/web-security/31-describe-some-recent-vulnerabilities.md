# 31. Describe some recent or representative vulnerabilities.

## Microsoft Exchange CVE-2020-0688
ECP component used static keys `validationKey` and `decryptionKey`, allowing .NET deserialisation RCE.

## Apache Tomcat CVE-2020-1938
AJP connector flaw enables reading or including arbitrary files in the web root; with file upload, RCE is possible.

## WebLogic CVE-2020-2551
IIOP protocol deserialisation vulnerability leading to RCE.

## Apache Solr CVE-2019-12409
Insecure default JMX configuration exposes RMI port without authentication, enabling JMX RMI RCE.

## SHIRO-550
Hard‑coded AES key in `CookieRememberMeManager` leads to deserialisation RCE.

## SHIRO-721
Padding Oracle Attack constructs a valid `RememberMe` cookie without the key.

## Weaver Ecology OA
- SQL injection in `/cpt/manage/validate.jsp`.
- Database config disclosure at `/mobile/dbconfigreader.jsp`, encrypted with DES and a hard‑coded key.

## Confluence CVE-2019-3394
Path traversal within `/WEB-INF` via the `validate` filter in `catalina.jar`.

## Apache Dubbo CVE-2019-17564
When HTTP remoting is enabled, a deserialisation vulnerability exists.
