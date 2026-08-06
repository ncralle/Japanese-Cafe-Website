// Basic helper: current year in footer
(() => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

// Open the menu tab that matches the URL hash (e.g. menu.html#savory)
(function () {
  function showTabFromHash() {
    const hash = window.location.hash;
    if (!hash) return;
    const trigger = document.querySelector(
      `[data-bs-toggle="pill"][data-bs-target="${hash}"],` +
      `[data-bs-toggle="tab"][data-bs-target="${hash}"],` +
      `a[data-bs-toggle="pill"][href="${hash}"],` +
      `a[data-bs-toggle="tab"][href="${hash}"]`
    );
    if (trigger && window.bootstrap) {
      bootstrap.Tab.getOrCreateInstance(trigger).show();
    }
  }
  window.addEventListener('DOMContentLoaded', showTabFromHash);
  window.addEventListener('hashchange', showTabFromHash);
})();
