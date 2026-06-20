module.exports = {
  "docs": [
    "README",
    {
      "type": "category",
      "label": "Questions",
      "items": [
        "questions/index",
        {
          "type": "category",
          "label": "Red Team",
          "items": [
            "questions/red-team/how-to-bypass-waf-for-shiro",
            "questions/red-team/how-to-determine-if-shiro-deserialisation-vulnerability-exists-if-target-cannot-initiate-outbound-connections",
            "questions/red-team/when-attacking-weblogic-target-what-should-one-do-if-first-payload-blocked-by-waf-ip-banned",
            "questions/red-team/principle-of-jboss-deserialisation",
            "questions/red-team/weblogic-deserialisation-choose-vulnerability-and-explain-its-trigger-mechanism",
            "questions/red-team/fastjson-deserialisation-vulnerability",
            "questions/red-team/determine-fastjson-vulnerability-echo-is-dns-used-for-echo",
            "questions/red-team/code-auditing-frameworks",
            "questions/red-team/description-of-the-code-frameworks-of-enterprise-systems",
            "questions/red-team/bypass-disable_functions-in-php",
            "questions/red-team/how-would-you-exploit-cloud-host-with-no-internal-network-connection-cloud-internal-network",
            "questions/red-team/how-to-attack-redis",
            "questions/red-team/principle-of-bcel-exploitation-chain",
            "questions/red-team/why-were-you-unable-to-capture-password-on-port-17010-after-restart",
            "questions/red-team/how-can-you-enter-domain-and-locate-domain-controller",
            "questions/red-team/how-to-bypass-xp_cmdshell-block-in-mssql-machine-that-runs-antivirus",
            "questions/red-team/what-is-an-mssql-stored-procedure",
            "questions/red-team/which-stored-procedure-permission-need-to-be-enabled-when-uploading-file-via-mssql",
            "questions/red-team/how-to-perform-file-deployment-in-an-internal-network",
            "questions/red-team/utilisatopm-conditions-in-ntlm-relay-with-adcs-vulnerability",
            "questions/red-team/utilisation-conditions-of-adcs-privilege-escalation-vulnerability",
            "questions/red-team/how-would-you-deepen-exploitation-after-obtaining-vcenter-credentials",
            "questions/red-team/how-can-you-exploit-locked-state-after-obtaining-admin-password-for-vcenter",
            "questions/red-team/how-should-you-maintain-persistence-if-360-crystal-core-mode-enabled",
            "questions/red-team/what-is-the-problem-if-command-net-group-domain-admins-fails",
            "questions/red-team/where-does-command-to-query-domain-admin-look-for-information",
            "questions/red-team/how-can-one-bypass-domestic-antivirus-software-in-evasion",
            "questions/red-team/do-you-directly-obtain-machine-permissions-then-start-scanning",
            "questions/red-team/what-other-exploit-methods-exist-after-defenders-discover-your-activity",
            "questions/red-team/how-to-exploit-compromised-host-via-phishing",
            "questions/red-team/index"
          ]
        },
        {
          "type": "category",
          "label": "Red Team Interview Experience",
          "items": [
            "questions/red-team-interview-experience/java-deserialisation-principle",
            "questions/red-team-interview-experience/how-can-you-determine-the-cause-of-sql-injection-vulnerability",
            "questions/red-team-interview-experience/what-is-the-principle-of-php-null-byte",
            "questions/red-team-interview-experience/why-do-aspx-webshells-have-higher-privileges-than-asp-webshells",
            "questions/red-team-interview-experience/differences-between-mysql-5.0-and-above-vs-below-5.0-regarding-website-injection",
            "questions/red-team-interview-experience/what-are-approaches-for-testing-dom-based-xxs",
            "questions/red-team-interview-experience/what-is-memcache-unauthorised-access",
            "questions/red-team-interview-experience/what-is-exploitation-principle-of-fastjson-vulnerability",
            "questions/red-team-interview-experience/index"
          ]
        },
        {
          "type": "category",
          "label": "Red Team Interview Experience (Two Sets)",
          "items": [
            "questions/red-team-interview-questions-two-sets/set-one",
            "questions/red-team-interview-questions-two-sets/set-two",
            "questions/red-team-interview-questions-two-sets/index"
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "Topics",
      "items": [
        {
          "type": "category",
          "label": "Computer Networks",
          "items": [
            "topics/computer-networks/describe-osi-model-and-tcp-ip"
          ]
        },
        {
          "type": "category",
          "label": "Incident Response",
          "items": [
            "topics/incident-response/commonly-used-threat-intelligence-platforms",
            "topics/incident-response/handle-false-positives-from-security-devices",
            "topics/incident-response/can-scanned-traffic-be-distinguished-from-manual-attack-traffic",
            "topics/incident-response/how-should-internal-network-alert-be-handled",
            "topics/incident-response/what-is-the-general-process-for-incident-response",
            "topics/incident-response/what-is-your-understanding-of-honeypots",
            "topics/incident-response/how-can-firewall-determine-that-traffic-is-a-deserialisation-attack",
            "topics/incident-response/locate-crypto-mining-malware-during-incident-response",
            "topics/incident-response/how-can-one-view-commands-executed-after-system-intrusion",
            "topics/incident-response/what-port-numbers-ssh-telnet-sp"
          ]
        },
        "topics/index",
        {
          "type": "category",
          "label": "Internal Network Penetration",
          "items": [
            "topics/internal-network-penetration/methods-for-lateral-movement-command-execution",
            "topics/internal-network-penetration/differences-between-psexec-wmic",
            "topics/internal-network-penetration/how-does-dcom-operate",
            "topics/internal-network-penetration/how-would-you-capture-passwords",
            "topics/internal-network-penetration/which-windows-version-passwords-no-longer-capture-in-plaintext",
            "topics/internal-network-penetration/alternatives-to-capture-passwords",
            "topics/internal-network-penetration/familiar-with-domain-attack-techniques",
            "topics/internal-network-penetration/session-hijacking-active-administrator",
            "topics/internal-network-penetration/thought-process-for-internal-network-penetration",
            "topics/internal-network-penetration/what-should-be-done-with-encrypted-password-file",
            "topics/internal-network-penetration/methods-for-gaining-control-of-domain-controller",
            "topics/internal-network-penetration/explain-golden-ticket-and-silver-ticket",
            "topics/internal-network-penetration/methods-for-maintaining-persistence-on-windows-linux",
            "topics/internal-network-penetration/familiar-with-shellcode-obfuscation-evasion",
            "topics/internal-network-penetration/what-is-this-approach-for-domain-information-gathering",
            "topics/internal-network-penetration/commonly-used-tools-for-proxy-and-tunneling",
            "topics/internal-network-penetration/if-cannot-ping-external-networks-layer-protocols-how-to-establish-tunnel",
            "topics/internal-network-penetration/how-can-one-rapidly-locate-domain-controller",
            "topics/internal-network-penetration/differences-between-pth-ptt-ptk"
          ]
        },
        {
          "type": "category",
          "label": "Systems",
          "items": [
            "topics/systems/how-to-manually-determine-target-operating-system",
            "topics/systems/commands-used-to-view-open-ports-services-windows-linux",
            "topics/systems/default-log-directory-in-linux",
            "topics/systems/what-are-commands-for-downloading-files-in-windows",
            "topics/systems/describe-investigation-process-backdoor-file-implanted-on-windows-or-linux",
            "topics/systems/methods-and-approaches-for-windows-privilege-escalation",
            "topics/systems/what-approaches-methods-for-linux-privilege-escalation",
            "topics/systems/methods-for-hardening-windows-systems",
            "topics/systems/methods-for-hardening-linux-system",
            "topics/systems/where-do-trojans-maintain-persistence"
          ]
        },
        {
          "type": "category",
          "label": "Tools",
          "items": [
            "topics/tools/what-pentest-tools-do-you-use",
            "topics/tools/principle-prerequisite-for-sqlmap-os-shell",
            "topics/tools/which-tools-for-info-gathering",
            "topics/tools/webshell-management-tools-similarities-differences",
            "topics/tools/familiarity-vendor-security-appliances",
            "topics/tools/common-nmap-parameters"
          ]
        },
        {
          "type": "category",
          "label": "Traceability and Traffic Analysis",
          "items": [
            "topics/traceability-and-traffic-analysis/how-do-you-locate-the-attacking-ip-address",
            "topics/traceability-and-traffic-analysis/describe-thought-process-for-traffic-analysis-traceability-on-web-application-server-webshell-uploaded",
            "topics/traceability-and-traffic-analysis/what-are-some-basic-wireshark-display-filters",
            "topics/traceability-and-traffic-analysis/traffic-characteristics-of-webshell-interaction",
            "topics/traceability-and-traffic-analysis/approach-for-analysing-abnormal-sql-query-traffic",
            "topics/traceability-and-traffic-analysis/how-can-you-batch-check-http-services"
          ]
        },
        {
          "type": "category",
          "label": "Web Security",
          "items": [
            "topics/web-security/sql-injection",
            "topics/web-security/xxs",
            "topics/web-security/differences-between-xss-csrf-ssrf",
            "topics/web-security/xxe-vulnerabilities",
            "topics/web-security/php-deserialisation",
            "topics/web-security/05.1-java-deserialisation",
            "topics/web-security/logic-vulnerabilities",
            "topics/web-security/difference-between-cdn-and-dns",
            "topics/web-security/common-middleware-vulnerabilities",
            "topics/web-security/waf-bypass-techniques",
            "topics/web-security/resolve-command-execution-issue",
            "topics/web-security/what-scenarios-port-3389-cannot-be-connected",
            "topics/web-security/common-port-information",
            "topics/web-security/what-is-the-penetration-testing-process",
            "topics/web-security/logic-vulnerability",
            "topics/web-security/explain-unauthorised-access",
            "topics/web-security/which-vulnerabilities-do-you-use-for-initial-compromise",
            "topics/web-security/how-do-you-discover-shiro-vulnerabilities",
            "topics/web-security/weblogic-permission-bypass",
            "topics/web-security/exploitation-principle-of-fastjson-vulnerability",
            "topics/web-security/what-if-you-obtain-webshell-but-target-cannot-initiate-outbound",
            "topics/web-security/dangerous-functions-for-php-code-and-php-command-execution",
            "topics/web-security/how-can-dnslog-be-utilised-when-sql-yields-no-input",
            "topics/web-security/methods-to-write-a-shell-via-phpmyadmin",
            "topics/web-security/principle-of-buffer-overflow",
            "topics/web-security/how-can-ssrf-bypass-when-127.0.0.1-is-blocked",
            "topics/web-security/how-can-the-phar-protocol-be-exploited",
            "topics/web-security/how-does-ssrf-write-a-shell-using-redis",
            "topics/web-security/what-tamper-scripts-of-sqlmap-are-you-aware-of",
            "topics/web-security/what-is-svn-git-source-code-disclosure",
            "topics/web-security/are-you-familiar-with-privilage-escalation",
            "topics/web-security/describe-some-recent-vulnerabilities",
            "topics/web-security/are-you-familiar-with-parsing-vulnerabilities",
            "topics/web-security/why-a-site-using-mysql-expose-only-port-80",
            "topics/web-security/when-performing-injection-possible-to-start-order-by-without-using",
            "topics/web-security/shell-already-obtained-how-xss-used-for-persistent-control-over-site",
            "topics/web-security/why-uploaded-script-format-403-error-on-target-site",
            "topics/web-security/how-to-retrieve-locally-when-access-database-file-asp-garbled-characters",
            "topics/web-security/how-to-operate-comman-line-only-shell-with-no-file-upload-support",
            "topics/web-security/how-can-shiro-vulnerability-exploited-if-target-cannot-initiate-outbound",
            "topics/web-security/obtaining-shell-via-file-inclusion",
            "topics/web-security/bypassing-waf-during-file-upload",
            "topics/web-security/methods-for-xss-protection"
          ]
        }
      ]
    }
  ]
};
