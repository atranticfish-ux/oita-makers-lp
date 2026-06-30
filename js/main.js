function showReal(type) {
  document.querySelectorAll('.real-card').forEach(c => c.classList.remove('visible'));
  document.querySelectorAll('.real-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('[data-type="' + type + '"]').forEach(c => c.classList.add('visible'));
  event.target.classList.add('active');
}