# Cybersecurity CV Writing and Interview Questions

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![MkDocs Material](https://img.shields.io/badge/MkDocs-Material-526CFE)](https://squidfunk.github.io/mkdocs-material/)

A structured, dynamic knowledge base for cybersecurity interview preparation. The site organises questions and in‑depth topic explainers into searchable categories, with client‑side JavaScript loading for a seamless single‑page‑like experience.

---

## Overview

This repository powers a static documentation site built with [MkDocs](https://www.mkdocs.org/) and the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme. It is designed for:

- **Interview candidates** preparing for roles such as Red Team, Blue Team, Incident Response, etc.
- **Educators** who wish to maintain a living set of questions and answers.
- **Self‑learners** exploring cybersecurity domains (web security, networks, systems, etc.).

Content is organised into two main sections:

| Section | Path | Purpose |
|---------|------|---------|
| Interview Questions | `/questions/` | Role‑specific Q&A (e.g., Red Team, Red Team Interview Experience). |
| Topics & FAQs | `/topics/` | Foundational explanations (Web Security, Computer Networks, Incident Response, etc.). |

---

| Landing Page | Questions Section |
|--------------|-------------------|
| ![1](https://github.com/user-attachments/assets/5e423548-e3c4-4710-9cce-a9dbd1b361f7) | ![2](https://github.com/user-attachments/assets/6e0bca05-5598-4990-b849-f90dccb4a509) |

| Topics Section | Dynamic Content Loading |
|----------------|-------------------------|
| ![3](https://github.com/user-attachments/assets/d547b2c9-0445-4f74-8736-4c92cdc9c2cf) | ![4](https://github.com/user-attachments/assets/338f46ba-9758-45dd-8488-d320e005e243) |

---

### Categories

- [x] **Red Team** – 30 offensive security questions (WAF bypass, deserialisation, internal network penetration, etc.)
- [x] **Red Team Interview Experience** – 8 real‑world interview questions (Java deserialisation, SQLi detection, Fastjson, etc.)
- [x] **Red Team – Set One (Advanced)**
      - **Set One:** 19 questions (DPAPI, Shiro‑721, DLL hijacking, UAC bypass, in‑memory webshells, PTH, phishing, etc.)
      - **Set Two:** 13+ questions (Certificate Transparency, Redis master‑slave RCE on Windows, JNDI injection, FastJSON gadgets, ThinkPHP RCE, phishing lateral movement, etc.)
- [ ] **Blue Team / Defensive Security** – Detection engineering, log analysis, incident handling
- [ ] **Purple Team** – Collaborative exercises and metrics
- [ ] **Cloud Security** – AWS, Azure, GCP specific questions
- [ ] **DevSecOps** – CI/CD pipeline security, SAST/DAST, container hardening
- [ ] **SOC Analyst** – SIEM queries, alert triage, threat hunting

### Topic / FAQ Categories

- [x] **Web Security** – 43 items (SQLi, XSS, CSRF, SSRF, deserialisation, file upload, WAF bypass, etc.)
- [x] **Tools** – 6 items (sqlmap, Nmap, webshell managers, vulnerability scanners)
- [x] **Internal Network Penetration** – 19 items (lateral movement, DCOM, domain attacks, golden/silver tickets, tunnelling)
- [x] **Computer Networks** – 1 item (OSI model and TCP/IP architecture) – *to be expanded*
- [x] **Systems** – 10 items (OS fingerprinting, privilege escalation (Windows/Linux), hardening, persistence)
- [x] **Incident Response** – 10 items (threat intelligence, alert handling, honeypots, crypto‑miner investigation)
- [x] **Traceability and Traffic Analysis** – 6 items (IP attribution, Wireshark filters, webshell traffic patterns)
- [ ] **Malware Analysis** – Static/dynamic analysis, reverse engineering, unpacking
- [ ] **Cryptography** – Hashing, encryption, PKI, common attacks (Padding Oracle, Birthday, etc.)
- [ ] **Compliance & Governance** – GDPR, ISO 27001, PCI‑DSS, NIST frameworks
- [ ] **Mobile Security** – iOS/Android pentesting, OWASP MASVS
- [ ] **IoT / Embedded Security** – Firmware extraction, hardware attacks

> **Legend**  
> `[x]` = content available now  
> `[ ]` = planned for a future release

This checklist will be updated as new categories and questions are added.
