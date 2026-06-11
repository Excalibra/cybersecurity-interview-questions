# 9. Brief description of the code frameworks of enterprise systems

## 🇨🇳 China – Weaver, Seeyon, Yonyou

### Weaver (泛微)
- **Code framework & routing**:
  - Java classes under `/ecology/classbean/` are accessed via `/weaver` prefix.
  - JSP access: absolute path `D:/ecology/addressbook/AddressBook.jsp` → `http://ip:port/addressbook/AddressBook.jsp`
  - `/services/*` → `org.codehaus.xfire.transport.http.XFireConfigurableServlet` reads `classbean/META-INF/xfire/services.xml`
  - `/api/*` → `ecology/WEB-INF/Api.xls` lists all API paths and classes
  - `/*.do` → configured by `ecology/WEB-INF/service/*.xml`
- **Security policies**:
  - XML rules in `WEB-INF/securityRule`
  - Java classes implementing `weaver.security.rules.BaseRule` in `WEB-INF/myclasses/weaver/security/rules/ruleImp`
  - SQL injection filtering: `/ecology/WEB-INF/securityRule/Rule/weaver_security_for_sqlinjection_rules.xml`

### Seeyon (致远互联)
- Source code location: `Seeyon\A8\ApacheJetspeed\webapps`
- Core routing: `Seeyon\A8\ApacheJetspeed\webapps\seeyon\WEB-INF\web.xml`
- Loads `/WEB-INF/spring.xml` by default, which then loads `spring-session.xml`

### Yonyou (用友)
- Core routes: `/home/webapps/nc_web/WEB-INF/web.xml`
- `/NCFindWeb` – historically had directory traversal vulnerability (`/NCFindWeb?service=IPreAlertConfigService&filename=;`)
- `/service/*` and `/servlet/*` → processed by `InvokerServlet`. Its `doGet`/`doPost` extract `moduleName` and `serviceName`, then use reflection to call the corresponding Servlet.

### 🇩🇪 SAP (Germany)
- **Framework**: SAP NetWeaver (Java and ABAP stacks).
- **Code structure**: ABAP programs (reports, function groups, classes) in R/3; Java EE applications in J2EE Engine.
- **Routing**: Web services via SOAP/REST, ICF (Internet Communication Framework) handlers, and `web.xml` for Java.
- **Security**: SAP Security Notes, transaction `SICF` for service activation, role‑based authorizations (PFCG), and ABAP SQL injection protections via `CL_ABAP_DYN_PRG`.
- **Links**:
  - [SAP NetWeaver](https://www.sap.com/products/technology-platform/netweaver.html)
  - [SAP Security Notes](https://support.sap.com/en/my-support/knowledge-base/security-notes-news.html)

### 🇺🇸 Oracle (Oracle Fusion Middleware / E-Business Suite)
- **Framework**: Oracle Fusion Middleware (WebLogic Server), ADF (Application Development Framework).
- **Code structure**: Java EE applications packaged as EAR/WAR; PL/SQL packages in database layer.
- **Routing**: `web.xml` servlet mappings, Oracle HTTP Server mod_rewrite, WebLogic `weblogic.xml` for custom servlet routing.
- **Security**: Oracle Platform Security Services (OPSS), OWSM (Web Services Manager) policies, and database VPD (Virtual Private Database).
- **Links**:
  - [Oracle Fusion Middleware](https://www.oracle.com/middleware/)
  - [Oracle Security Alerts](https://www.oracle.com/security-alerts/)

### 🇺🇸 Microsoft Dynamics 365 (US)
- **Framework**: Dynamics 365 Finance and Operations (X++ with .NET), Power Platform (PowerApps + Dataverse).
- **Code structure**: X++ source code in AOT (Application Object Tree); extensions for customizations.
- **Routing**: Business logic through Data Entities, OData endpoints, and service endpoints (SOAP/REST via `SysOperationService`).
- **Security**: Role‑based security, FIPS 140‑2 compliance, Azure AD authentication, and SQL injection protection via parameterized queries.
- **Links**:
  - [Microsoft Dynamics 365](https://dynamics.microsoft.com/)
  - [Security in Dynamics 365](https://learn.microsoft.com/en-us/dynamics365/fin-ops-core/dev-itpro/security/)

### 🇩🇪 Software AG (Germany)
- **Framework**: webMethods (Integration Server, Universal Messaging, etc.).
- **Code structure**: Java services, flow services (graphical), and IS documents.
- **Routing**: Integration Server routes requests via `web.xml` (for REST/SOAP) and ACLs on services.
- **Security**: Certificate‑based authentication, SAML, and built‑in SQL injection filters.
- **Links**:
  - [webMethods Integration Server](https://www.softwareag.com/en_corporate/platform/integration-apis/webmethods.html)

### 🇺🇸 Salesforce (US) – Cloud CRM/Enterprise
- **Framework**: Multi‑tenant metadata‑driven platform (Apex, Visualforce, Lightning Web Components).
- **Code structure**: Apex classes and triggers (stored in metadata), Lightning components (JavaScript).
- **Routing**: REST/SOAP APIs via `services/apexrest/`, Visualforce pages via custom URLs defined in `Site.com` or Salesforce org.
- **Security**: Object‑ and field‑level security (FLS), Apex code execution with `with sharing` keyword, built‑in SQL injection prevention (using `escapeSingleQuote` for SOQL).
- **Links**:
  - [Salesforce Platform](https://developer.salesforce.com/platform)
  - [Security Guide](https://developer.salesforce.com/docs/atlas.en-us.securityImplGuide.meta/securityImplGuide/)

### 🇨🇭 ABBYY (Switzerland) – Enterprise OCR & Process Automation
- **Framework**: ABBYY Vantage / FlexiCapture – .NET‑based.
- **Code structure**: FlexiCapture: XML configuration, C# scripting in document definitions.
- **Routing**: Web API endpoints for project submission and data retrieval.
- **Security**: Role‑based access control (RBAC), HTTPS encryption, and input validation.
- **Links**:
  - [ABBYY Vantage](https://www.abbyy.com/vantage/)

---

## 🛠️ Open‑Source International Alternatives

| System | Framework Description | Link |
|--------|----------------------|------|
| **Odoo** (Belgium) | Python‑based (ORM, PostgreSQL). Routes defined in `ir.http` model and `web.xml` for WSGI. | [Odoo](https://www.odoo.com/) |
| **Apache OFBiz** | Java EE, XML webapp definitions, request handler maps in `controller.xml`. | [OFBiz](https://ofbiz.apache.org/) |
| **ERPNext** (India) | Python (Frappe framework), WSGI routing via `frappe/app.py`. | [ERPNext](https://erpnext.com/) |

---

Let me know if you need additional details or links for any specific international system.
