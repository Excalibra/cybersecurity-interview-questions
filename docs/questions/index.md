# Interview Questions

<select id="category-selector" style="width:100%; max-width:450px; padding:12px 16px; font-size:1.1em; background:#374151; color:white; border:1px solid #4b5563; border-radius:6px; margin-bottom:20px;">
  <option value="">-- Select Category --</option>
  <option value="web">Web Application Penetration Testing</option>
  <option value="red">Red Team Operations</option>
  <option value="seceng">Security Engineer</option>
</select>

<div style="display: flex; gap: 24px;">
  <!-- Simulated Left Sidebar (this is the dynamic part) -->
  <div id="dynamic-sidebar" style="width: 280px; background: #1f2937; padding: 20px; border-radius: 8px; border: 1px solid #374151; min-height: 700px; flex-shrink: 0;">
    <h3 style="margin: 0 0 16px 0; color: #e5e7eb;">Questions</h3>
    <div id="questions-list" style="font-size: 0.95em;"></div>
  </div>

  <!-- Main Area -->
  <div id="main-area" style="flex: 1;">
    <p style="color: #9ca3af;">Select a category above to see questions on the left.</p>
  </div>
</div>
