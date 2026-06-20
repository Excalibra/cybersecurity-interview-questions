# 18. WebLogic permission bypass?

1. Bypass authentication via static resources to avoid redirection to the login page.
2. Request `.portal` so the handling Servlet is `MBeanUtilsInitSingleFileServlet`, which renders the UI.
3. Use an encoded `../` so the final rendered template becomes `console.portal`.
