console.log('contact_form.js loaded');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded');
  const form = document.getElementById('my-contact-form');
  console.log('Form found:', form);

  if (!form) return;

  const button = form.querySelector('button[type="submit"]'); // ✅ define this!

  form.addEventListener('submit', async (e) => {
    console.log('submit event fired');
    e.preventDefault();
    e.stopPropagation();
    button.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
      });
      const data = await response.json();

      alert(data.success
        ? data.message
        : 'Failed to send: ' + data.message
      );

      if (data.success) form.reset();
    } catch (err) {
      alert('Unexpected error. Please try again.');
      console.error(err);
    } finally {
      button.disabled = false;
    }

    return false;
  });
});
