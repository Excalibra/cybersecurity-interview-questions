## **Q: Why do ASPX webshells typically have higher privileges than ASP webshells?**

**A:** ASPX uses the .NET technology stack. IIS does not natively support ASPX as a default; ASP is merely a scripting language. In practice, ASP webshells often run with guest privileges, whereas ASPX webshells typically run with users privileges.
