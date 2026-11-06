(() => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    menu.addEventListener('click', e => {
      if (e.target.closest('a')) {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const slides = [...document.querySelectorAll('.slide')];
  const dotsBox = document.querySelector('.dots');
  if (slides.length && dotsBox) {
    let current = Math.max(0, slides.findIndex(s => !s.hidden));
    slides.forEach(() => dotsBox.appendChild(document.createElement('span')));
    const dots = [...dotsBox.children];
    const show = i => {
      current = (i + slides.length) % slides.length;
      slides.forEach((s, k) => (s.hidden = k !== current));
      dots.forEach((d, k) => d.classList.toggle('on', k === current));
    };
    document.querySelectorAll('.car-btn').forEach(b =>
      b.addEventListener('click', () => show(current + Number(b.dataset.dir)))
    );
    show(current);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) setInterval(() => show(current + 1), 7000);
  }

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form && status) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.checkValidity()) {
        status.textContent = form.dataset.invalid;
        form.reportValidity();
        return;
      }
      const d = new FormData(form);
      const f = form.dataset;
      const submit = form.querySelector('button[type="submit"]');
      submit.disabled = true;
      status.textContent = f.sending;
      fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: f.service,
          template_id: f.template,
          user_id: f.key,
          template_params: {
            name: d.get('nom'),
            email: d.get('email'),
            animal: d.get('animal'),
            message: d.get('message')
          }
        })
      })
        .then(r => { if (!r.ok) throw new Error(r.status); form.reset(); status.textContent = f.success; })
        .catch(() => { status.textContent = f.error; })
        .finally(() => { submit.disabled = false; });
    });
  }
})();
