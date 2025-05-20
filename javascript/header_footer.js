class MyHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
				<header id="header" class="header" >
			<div class="header-title">
				<h3>Ela Louise Glatzeder</h3>
				<h6>Game & Software Developer</h6>
			</div>
			<div class="header-nav">
				<a id="about-me-nav-link" href="./index.html"> About Me</a>
				<a id="projects-nav-link" href="./pages/projects.html">Projects</a>
				<a id="resume-nav-link" href="./documents/elaglatzeder_cv_may2025_eng.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
			</div>

		</header>
		`
	}
}

customElements.define('my-header', Myheader)