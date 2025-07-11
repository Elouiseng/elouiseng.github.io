document.addEventListener('DOMContentLoaded', () => {
  
  const form = document.getElementById('my-contact-form');
  if (!form) {
    console.error('Form not found');
    return;
  }

  form.addEventListener('submit', event => {
    event.preventDefault();

    // Gather and log form data
    const data = Object.fromEntries(new FormData(form));
    console.log('Form Submission Data:', data);

    // Programmatically submit and then clear the form
    form.submit();
    form.reset();
  });

});

class MyHeader extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
			<header>
				<div class="header-title">
					<h3>Ela Louise Glatzeder</h3>
					<h6>Game & Software Developer</h6>
				</div>
				<div class="header-nav">
					<a class="about-me-nav-link" href="../index.html"> About Me</a>
					<a class="projects-nav-link" href="../pages/projects.html">Projects</a>
					<a class="resume-nav-link" href="../documents/elaglatzeder_cv_may2025_eng.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
				</div>

			</header>
			
			<hr class="header-main-hr">
		`;
	}
}

class MyFooter extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
			<hr class="main-footer-hr">
			<footer>
				<h3>&#169 2025 Elouiseng</h3>
			</footer>
		`;
	}
}

customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);