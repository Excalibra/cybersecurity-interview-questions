# Q: Why do ASPX webshells typically have higher privileges than ASP webshells?

**A:** ASP pages usually have only basic execution permissions, whereas ASPX pages run with the privileges of the application pool and can leverage the full .NET framework. This gives ASPX webshells access to a wider range of system resources, such as file system access, database connections, and the ability to create new users.
