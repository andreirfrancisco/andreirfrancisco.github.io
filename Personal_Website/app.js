// app.js

function showPage(pageName) {
  var modal = document.getElementById(pageName);
  if (modal) {
    modal.style.display = 'block';
    document.documentElement.style.overflow = 'hidden'; // Disable scrolling on <html> element
    document.body.style.overflow = 'hidden'; // Disable scrolling on <body> element
  }
}

function closeModal(pageName) {
  var modal = document.getElementById(pageName);
  if (modal) {
    modal.style.animation = 'modal-close 0.5s ease-in-out';
    setTimeout(function() {
      modal.style.display = 'none';
      modal.style.animation = 'none'; // Reset animation
      document.documentElement.style.overflow = 'auto'; // Enable scrolling on <html> element
      document.body.style.overflow = 'auto'; // Enable scrolling on <body> element
    }, 500);
  }
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    var modals = document.querySelectorAll('.modal-container');
    modals.forEach(function(modal) {
      closeModal(modal.id);
    });
  }
});
