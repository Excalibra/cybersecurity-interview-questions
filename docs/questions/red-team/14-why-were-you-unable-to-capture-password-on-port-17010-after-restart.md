# 14. Suppose you attacked a machine on port 17010, and the machine restarted during the attack. After it successfully restarted, you attacked it again and succeeded, but you were unable to capture the password. Why is that, and how can this problem be resolved?

The reason passwords cannot be captured is that conventional password extraction captures the memory of the `lsass.exe` process. Since the restarted machine has had no user login, `lsass.exe` contains no credentials. You can retrieve the local user account hashes from the SAM and SYSTEM files instead.
