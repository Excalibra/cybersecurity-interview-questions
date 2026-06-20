# 17. How do you usually discover Shiro vulnerabilities?

## Indicators
- When login fails, the `Set-Cookie` header often contains `rememberMe=deleteMe`.
- Passive scanning tools like ShiroScan.

## Detailed Behaviour
- **Without login:** Request cookie has no `rememberMe`; response `Set-Cookie` lacks `deleteMe`.
- **Login failure:** Response always contains `rememberMe=deleteMe`.
- **Login success without “Remember Me”:** Response `Set-Cookie` contains `rememberMe=deleteMe`, subsequent requests lack `rememberMe`.
- **Login success with “Remember Me”:** Response `Set-Cookie` contains `rememberMe=deleteMe` and a `rememberMe` field; all subsequent requests include `rememberMe`.
