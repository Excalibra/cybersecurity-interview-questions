# Q: What are the approaches for manual and automated testing of DOM‑based XSS?

**A:** Manual testing approach: identify functions that directly execute or manipulate DOM content, such as `document.write`, `innerHTML` assignment, `outerHTML` assignment, `window.location` operations, writing content after `javascript:`, `eval`, `setTimeout`, `setInterval`, etc. Locate the variables involved and trace their origin to determine whether they are controllable and whether they have passed through security functions.

Automated testing approach: start from the input, observe the variable propagation process, and finally check whether the output reaches any dangerous function, and whether intermediate security functions have been applied. This requires a JavaScript parser; otherwise, some parts of the execution that are introduced via JavaScript may be missed.
