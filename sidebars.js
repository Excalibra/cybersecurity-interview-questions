module.exports = {
  docs: [
    "README",
    {
      type: "category",
      label: "Questions",
      link: {
        type: "doc",
        id: "questions/index"
      },
      items: [
        {
          type: "category",
          label: "Red Team",
          link: {
            type: "doc",
            id: "questions/red-team/index"
          },
          items: [
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
          type: "category",
          label: "Red Team Interview Experience",
          link: {
            type: "doc",
            id: "questions/red-team-interview-experience/index"
          },
          items: [
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
          type: "category",
          label: "Red Team Interview Experience (Two Sets)",
          link: {
            type: "doc",
            id: "questions/red-team-interview-questions-two-sets/index"
          },
          items: [
            "questions/red-team-interview-questions-two-sets/set-one",
            "questions/red-team-interview-questions-two-sets/set-two",
            "questions/red-team-interview-questions-two-sets/index"
          ]
        },
        {
          type: "category",
          label: "Network Security",
          link: {
            type: "doc",
            id: "questions/network-security-interview/important-protocol-stack-overview"
          },
          items: [
            "questions/network-security-interview/what-is-sql-injection-attack",
            "questions/network-security-interview/what-is-xss-cross-site-scripting-attack",
            "questions/network-security-interview/what-is-csrf-cross-site-request-forgery-attack",
            "questions/network-security-interview/what-is-a-file-upload-vulnerability",
            "questions/network-security-interview/what-is-a-ddos-distributed-denial-of-service-attack",
            "questions/network-security-interview/important-protocol-stack-overview",
            "questions/network-security-interview/how-does-the-arp-address-resolution-protocol-work",
            "questions/network-security-interview/what-is-rarp-reverse-address-resolution-protocol-and-how-does-it-work",
            "questions/network-security-interview/what-is-dns-domain-name-system-and-how-does-it-work",
            "questions/network-security-interview/what-is-the-rip-routing-information-protocol-and-how-does-it-work",
            "questions/network-security-interview/what-are-the-disadvantages-of-rip",
            "questions/network-security-interview/what-is-the-ospf-open-shortest-path-first-protocol-and-how-does-it-work",
            "questions/network-security-interview/what-is-the-summary-of-differences-between-tcp-and-udp",
            "questions/network-security-interview/what-is-the-three-way-handshake-and-four-way-wave-why-does-tcp-need-a-three-way-handshake",
            "questions/network-security-interview/what-is-the-difference-between-get-and-post-requests",
            "questions/network-security-interview/what-is-the-difference-between-cookies-and-session",
            "questions/network-security-interview/how-does-a-session-work",
            "questions/network-security-interview/what-is-the-process-of-a-complete-http-request",
            "questions/network-security-interview/what-is-the-difference-between-https-and-http",
            "questions/network-security-interview/what-are-the-seven-layers-of-the-osi-model",
            "questions/network-security-interview/what-is-the-difference-between-http-persistent-long-and-non-persistent-short-connections",
            "questions/network-security-interview/how-does-tcp-ensure-reliable-data-transmission",
            "questions/network-security-interview/what-are-the-common-http-status-codes",
            "questions/network-security-interview/what-is-ssl-and-how-does-https-ensure-secure-data-transmission",
            "questions/network-security-interview/how-is-a-public-key-protected-from-being-tampered-with",
            "questions/network-security-interview/what-are-some-methods-for-a-php-application-to-print-an-absolute-path",
            "questions/network-security-interview/what-penetration-testing-tools-do-you-commonly-use-and-which-is-your-favourite",
            "questions/network-security-interview/how-can-a-blind-xss-attack-be-used-against-an-internal-network-server",
            "questions/network-security-interview/what-are-spear-phishing-and-waterhole-attacks",
            "questions/network-security-interview/what-is-a-virtual-machine-escape",
            "questions/network-security-interview/what-is-a-man-in-the-middle-mitm-attack",
            "questions/network-security-interview/what-are-the-three-steps-of-the-tcp-three-way-handshake",
            "questions/network-security-interview/osi-model-seven-layers-summary",
            "questions/network-security-interview/what-is-your-understanding-of-cloud-security",
            "questions/network-security-interview/do-you-know-about-websocket-what-is-it",
            "questions/network-security-interview/what-is-ddos-what-are-its-types-what-is-a-cc-attack-and-what-are-the-differences",
            "questions/network-security-interview/what-is-a-land-attack",
            "questions/network-security-interview/how-would-you-conduct-information-gathering-on-a-target",
            "questions/network-security-interview/what-is-a-crlf-injection-attack",
            "questions/network-security-interview/how-can-xss-be-prevented-from-a-frontend-and-backend-perspective",
            "questions/network-security-interview/how-can-the-security-of-a-specific-port-be-protected",
            "questions/network-security-interview/what-is-the-approach-for-detecting-a-web-shell",
            "questions/network-security-interview/what-is-gpc-and-how-can-it-be-bypassed",
            "questions/network-security-interview/what-are-some-common-encryption-algorithms-used-in-web-applications",
            "questions/network-security-interview/what-can-xss-be-used-for-besides-stealing-cookies",
            "questions/network-security-interview/what-is-network-hijacking-specifically-by-isps",
            "questions/network-security-interview/what-is-dns-spoofing",
            "questions/network-security-interview/what-is-the-principle-of-a-buffer-overflow-and-how-is-it-mitigated",
            "questions/network-security-interview/what-does-a-cybersecurity-incident-response-plan-typically-include",
            "questions/network-security-interview/what-is-meant-by-internal-enterprise-security",
            "questions/network-security-interview/how-would-you-test-a-new-business-application-before-it-goes-live",
            "questions/network-security-interview/you-discover-a-critical-vulnerability-in-an-application-but-cannot-fix-it-or-take-it-offline-what-do-you-do",
            "questions/network-security-interview/how-is-csrf-cross-site-request-forgery-protected-against",
            "questions/network-security-interview/what-are-some-methods-for-bypassing-file-upload-restrictions",
            "questions/network-security-interview/what-are-captcha-related-exploitation-points",
            "questions/network-security-interview/what-cookie-attributes-would-you-test",
            "questions/network-security-interview/what-are-some-business-logic-vulnerability-types",
            "questions/network-security-interview/what-is-a-file-inclusion-vulnerability",
            "questions/network-security-interview/what-are-examples-of-user-password-reset-vulnerabilities-and-what-causes-them",
            "questions/network-security-interview/during-a-penetration-test-you-find-a-function-that-only-allows-zip-file-uploads-what-are-some-possible-approaches",
            "questions/network-security-interview/why-do-aspx-webshells-typically-have-higher-privileges-than-asp-webshells",
            "questions/network-security-interview/you-are-given-only-a-login-page-what-are-some-testing-approaches",
            "questions/network-security-interview/which-http-headers-are-considered-malicious-or-harmful",
            "questions/network-security-interview/explain-the-differences-between-horizontal-vertical-and-unauthorised-privilege-escalation",
            "questions/network-security-interview/what-is-xss-and-what-is-the-principle-and-impact-of-stored-xss",
            "questions/network-security-interview/if-you-suspect-a-host-has-been-compromised-where-would-you-check-for-logs",
            "questions/network-security-interview/what-are-some-common-python-standard-libraries",
            "questions/network-security-interview/what-is-the-difference-between-reverse-tcp-and-bind-tcp",
            "questions/network-security-interview/what-issues-can-occur-during-the-oauth-authentication-process-and-what-vulnerabilities-can-they-cause",
            "questions/network-security-interview/how-can-you-find-the-real-ip-address-of-a-website-that-uses-a-cdn",
            "questions/network-security-interview/how-can-cross-origin-requests-cors-be-implemented",
            "questions/network-security-interview/what-is-the-difference-between-jsonp-and-cors-for-cross-origin-requests",
            "questions/network-security-interview/what-sorting-algorithms-are-you-familiar-with",
            "questions/network-security-interview/what-is-ssrf-server-side-request-forgery-and-how-can-it-be-exploited",
            "questions/network-security-interview/what-are-common-methods-for-backdoor-creation",
            "questions/network-security-interview/how-can-open_basedir-restrictions-be-bypassed",
            "questions/network-security-interview/what-are-common-vulnerability-points-in-php-code-auditing",
            "questions/network-security-interview/what-are-some-blue-team-techniques-to-counter-a-red-team-in-a-red-blue-team-exercise",
            "questions/network-security-interview/how-can-a-hacker-hide-cron-jobs-scheduled-tasks-on-linux",
            "questions/network-security-interview/what-are-some-common-ways-to-get-a-shell-from-an-unauthenticated-redis-instance",
            "questions/network-security-interview/what-are-some-attack-methods-against-jwt-json-web-tokens-headers-payload-signature",
            "questions/network-security-interview/can-you-provide-examples-of-java-middleware-vulnerabilities",
            "questions/network-security-interview/what-vulnerabilities-can-be-exploited-with-dns-exfiltration",
            "questions/network-security-interview/what-are-some-common-middleware-security-issues",
            "questions/network-security-interview/what-are-the-general-approaches-for-privilege-escalation-on-windows-and-linux-systems",
            "questions/network-security-interview/what-python-frameworks-are-you-familiar-with-and-what-vulnerabilities-have-been-found-in-them",
            "questions/network-security-interview/what-are-the-key-differences-between-mini-program-and-traditional-web-application-penetration-testing",
            "questions/network-security-interview/what-are-the-four-main-components-of-android-app-vulnerability-testing",
            "questions/network-security-interview/what-are-the-principles-of-ids-ips-and-how-can-they-be-bypassed",
            "questions/network-security-interview/how-can-csrf-be-exploited-with-json-requests",
            "questions/network-security-interview/what-vulnerabilities-can-be-tested-with-json-data-payloads",
            "questions/network-security-interview/how-can-you-perform-information-gathering-on-an-internal-network-server",
            "questions/network-security-interview/after-compromising-a-machine-on-the-internal-network-how-can-you-identify-other-hosts-to-target"
          ]
        },
        {
          type: "category",
          label: "Blue Team",
          link: {
            type: "doc",
            id: "questions/blue-team/index"
          },
          items: [
            "questions/blue-team/incident-response-macro",
            "questions/blue-team/incident-response-details",
            "questions/blue-team/intrusion-detection-and-prevention",
            "questions/blue-team/traceability",
            "questions/blue-team/operational-depth",
            "questions/blue-team/other-topics"
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Topics",
      link: {
        type: "doc",
        id: "topics/index"
      },
      items: [
        {
          type: "category",
          label: "Computer Networks",
          link: {
            type: "doc",
            id: "topics/computer-networks/describe-osi-model-and-tcp-ip-architecture"
          },
          items: [
            "topics/computer-networks/describe-osi-model-and-tcp-ip-architecture",
            "topics/computer-networks/explain-three-way-handshake-and-four-way-handshake",
            "topics/computer-networks/what-is-private-ip-address-range-allocation",
            "topics/computer-networks/what-are-differences-between-udp-and-tcp",
            "topics/computer-networks/what-is-difference-between-forward-shell-and-reverse-shell",
            "topics/computer-networks/what-is-difference-between-forward-proxy-and-reverse-proxy",
            "topics/computer-networks/what-are-common-types-of-firewalls"
          ]
        },
        {
          type: "category",
          label: "Incident Response",
          items: [
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
        {
          type: "category",
          label: "Internal Network Penetration",
          items: [
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
          type: "category",
          label: "Systems",
          items: [
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
          type: "category",
          label: "Tools",
          items: [
            "topics/tools/what-pentest-tools-do-you-use",
            "topics/tools/principle-prerequisite-for-sqlmap-os-shell",
            "topics/tools/which-tools-for-info-gathering",
            "topics/tools/webshell-management-tools-similarities-differences",
            "topics/tools/familiarity-vendor-security-appliances",
            "topics/tools/common-nmap-parameters"
          ]
        },
        {
          type: "category",
          label: "Traceability and Traffic Analysis",
          items: [
            "topics/traceability-and-traffic-analysis/how-do-you-locate-the-attacking-ip-address",
            "topics/traceability-and-traffic-analysis/describe-thought-process-for-traffic-analysis-traceability-on-web-application-server-webshell-uploaded",
            "topics/traceability-and-traffic-analysis/what-are-some-basic-wireshark-display-filters",
            "topics/traceability-and-traffic-analysis/traffic-characteristics-of-webshell-interaction",
            "topics/traceability-and-traffic-analysis/approach-for-analysing-abnormal-sql-query-traffic",
            "topics/traceability-and-traffic-analysis/how-can-you-batch-check-http-services"
          ]
        },
        {
          type: "category",
          label: "Web Security",
          items: [
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
