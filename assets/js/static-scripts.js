/* Pop-Up Animation for Contact Form
---------------------------------------------------------- */
$(document).ready(function() {
  
	$('.btn-open').click(function() {
		$('.modal-wrapper').addClass('open')
	});
  
	$('.btn-close').click(function() {
		$('.modal-wrapper').removeClass('open')
	});
  
});

/* Contact Form
---------------------------------------------------------- */
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


/* Marker styling
---------------------------------------------------------- */