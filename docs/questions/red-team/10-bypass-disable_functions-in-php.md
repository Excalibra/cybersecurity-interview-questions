# 10. How to bypass `disable_functions` in PHP, and what is the underlying principle?

**PHP 7 UAF Vulnerability:** This vulnerability exploits a heap overflow in the PHP garbage collector to bypass `disable_functions` and execute system commands.  
**PHP 7 Backtrace UAF:** Used in the `debug_backtrace()` function. We can induce it to return a reference to a variable that has been destroyed, leading to a use-after-free vulnerability.  
**Json Serializer UAF:** Exploits a heap overflow triggered in the JSON serialiser to bypass `disable_functions` and execute system commands.  
**Apache Mod CGI:** When Apache is configured to enable CGI, the `ScriptAlias` directive can specify a directory where executable CGI programmes can be placed.  
**PHP-FPM/FastCGI:**  
**PHP FFI:** FFI (Foreign Function Interface) is a technology for calling code from another language. PHP’s FFI extension allows you to call C code within PHP.
