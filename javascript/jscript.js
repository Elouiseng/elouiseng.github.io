// This code will run once the HTML DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
	//Select form using its class
	const form = document.querySelector('.contact-form');
	
	//Check if form exists		Error Handling
	if (form) {
		//Attach EventListener to handle form submissions
		form.addEventListener('submit', handleSubmit);
	} else {
		console.error('The contact form was not found on the page.');
	}
});

/**
 * This function handles form submissions.
 * It prevents the default form behavior (page reload),
 * extracts input values, validates them, and handles errors.
 */
function handleSubmit(event) {
  event.preventDefault();


  try {
    // Get actual DOM nodes
    const nameElem = document.getElementById('cfname');
    const mailElem = document.getElementById('cfmail');
    const messageElem = document.getElementById('cfmessage');
    
    // Check if any of the fields are empty
    if (!nameElem.value || !mailElem.value || !messageElem.value) {
		nameElem.classList.add('contact-null-value-error');
    	mailElem.classList.add('contact-null-value-error');
    	messageElem.classList.add('contact-null-value-error');
		document.getElementById('cfbutton').style.color = "var(--background)";
		document.getElementById('cfbutton').style.backgroundColor = "var(--border)";

		return;
	} else {
      // Remove the error class when inputs are valid
      nameElem.classList.remove('contact-null-value-error');
      mailElem.classList.remove('contact-null-value-error');
      messageElem.classList.remove('contact-null-value-error');
    }
    
    // For logging, you can still use FormData if you wish:
    const formData = new FormData(event.target);
    console.log("Form Submission Data: ", {
      name: formData.get('cfname'),
      mail: formData.get('cfmail'),
      message: formData.get('cfmessage')
    });
    
  } catch (error) {
    console.error("Error during form submission:", error);
    alert("There was an error submitting the form: " + error.message);
  }
}

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
				<h3>&#169 Elouiseng 2025</h3>
			</footer>
		`;
	}
}

customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);