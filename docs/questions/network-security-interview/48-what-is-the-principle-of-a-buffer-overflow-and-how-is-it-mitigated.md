# Q: What is the principle of a buffer overflow and how is it mitigated?

**A:** A buffer overflow occurs when a program writes more data to a fixed-length memory buffer than it can hold. This excess data overflows into adjacent memory spaces, potentially corrupting data, causing the program to crash, or allowing an attacker to execute arbitrary code.

**Mitigation Techniques:**
- **Stack Protection (Canaries):** Inserting a random value (canary) before critical data. If the canary is modified by an overflow, the program terminates.
- **Bounds Checking:** Preventing the program from writing beyond the allocated buffer.
- **Address Space Layout Randomization (ASLR):** Randomising the memory locations of key program components, making it harder for an attacker to predict where to jump to execute their code.
- **Code Auditing:** Reviewing and improving code to prevent vulnerabilities.
- **Using Safe Programming Languages:** Using languages like Rust or Go, which handle memory safety automatically.
