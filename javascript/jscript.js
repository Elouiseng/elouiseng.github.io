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
      // Optionally, you can stop further processing here if needed.
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

