// Collapsible sidebar chapters
document.addEventListener('DOMContentLoaded', function() {
    // Find all chapters that have nested articles
    var chapters = document.querySelectorAll('.book-summary .chapter');
    
    chapters.forEach(function(chapter) {
        // Check if this chapter has sub-items
        var subList = chapter.querySelector('ul.articles');
        if (subList) {
            // Add expand/collapse toggle
            var link = chapter.querySelector('a');
            if (link) {
                // Create toggle icon
                var icon = document.createElement('i');
                icon.className = 'exc-trigger fa';
                icon.style.cssText = 'float:right; cursor:pointer; padding:0 10px;';
                link.appendChild(icon);
                
                // Toggle on click
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    var parent = this.closest('.chapter');
                    var sub = parent.querySelector('ul.articles');
                    if (sub) {
                        if (sub.style.display === 'none') {
                            sub.style.display = 'block';
                            parent.classList.add('expanded');
                        } else {
                            sub.style.display = 'none';
                            parent.classList.remove('expanded');
                        }
                    }
                    // Navigate to the link if user double-clicks or wants to go
                    window.location.href = this.href;
                });
            }
        }
    });
});
