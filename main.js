// main.js for Fryes Roller Skate
// Add your JavaScript code here

document.addEventListener('DOMContentLoaded', function() {
  // SPA navigation
  const links = document.querySelectorAll('.menu-link');
  const pages = document.querySelectorAll('.spa-page');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      // Remove active from all links
      links.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      // Hide all pages
      pages.forEach(page => page.style.display = 'none');
      // Show selected page
      const pageId = 'page-' + this.getAttribute('data-page');
      const page = document.getElementById(pageId);
      if (page) page.style.display = '';
    });
  });

  // Highlight today's schedule row (only on schedule page)
  function highlightTodayRow() {
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const today = new Date().getDay();
    const table = document.querySelector('#page-schedule .rink-schedule');
    if (table) {
      const rows = table.querySelectorAll('tr');
      rows.forEach(row => {
        if (row.children[0] && row.children[0].textContent.trim() === days[today]) {
          row.style.background = 'rgba(255,215,0,0.10)';
        }
      });
    }
  }
  // Run on load and when switching to schedule
  highlightTodayRow();
  document.querySelector('[data-page="schedule"]').addEventListener('click', highlightTodayRow);
});
