# 15. Can you briefly explain unauthorised access?

## Redis Unauthorised Access
When authentication is not enabled, an attacker can connect directly. They generate an SSH key pair with an empty passphrase, write the public key to the target, and then connect using the private key.

## JBoss Unauthorised Access
Accessing `/jmx-console` without credentials allows browsing the deployment management console and directly deploying a backdoor.

## General
Insufficient validation permits bypassing authentication and directly accessing pages that should be protected.
