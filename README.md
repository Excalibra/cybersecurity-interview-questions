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

## Features

- **Dynamic category loading** – Select a topic or interview type from a dropdown, and the relevant list of items appears in the sidebar.
- **Asynchronous content fetch** – Click any question or FAQ to load its Markdown content into the main view without reloading the page.
- **Fully customised theme** – The default Material sidebar is hidden, and a custom two‑column layout is used.
- **Automatic indexing** – Just drop Markdown files into subfolders; the scripts generate the necessary JavaScript.
- **GitHub Pages ready** – The site is configured to deploy directly to GitHub Pages.


| Landing Page | Questions Section |
|--------------|-------------------|
| ![Landing Page](https://github.com/user-attachments/assets/159f78b8-8ce3-4831-afe4-798b69dba09d) | ![Questions View]() |

| Topics Section | Dynamic Content Loading |
|----------------|-------------------------|
| ![Topics View]() | ![Content]() |

---
