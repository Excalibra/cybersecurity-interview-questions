# Q: What are some methods for a PHP application to print an absolute path?

**A:** Common methods include:

1.  Using `dirname(__FILE__)` or `__DIR__`: These functions return the directory of the current script. Combining them with `realpath()` will give the absolute filesystem path. Example: `$absPath = realpath(dirname(__FILE__));`
2.  Using `$_SERVER['DOCUMENT_ROOT']`: This server variable contains the absolute path to the document root of the web server.
3.  Using `$_SERVER['SCRIPT_FILENAME']`: This variable provides the absolute filesystem path of the currently executing script.

> **Important Security Note:** It is strongly discouraged to expose absolute path information in a production environment, as it provides valuable information to potential attackers.
