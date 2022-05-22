/* Description: Custom JS file */

/* Navigation*/
// Collapse the navbar by adding the top-nav-collapse class
window.onscroll = function () {
	scrollFunction();
	scrollFunctionBTT(); // back to top button
};

window.onload = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.documentElement.scrollTop > 30) {
		document.getElementById("navbarExample").classList.add("top-nav-collapse");
	} else if ( document.documentElement.scrollTop < 30 ) {
		document.getElementById("navbarExample").classList.remove("top-nav-collapse");
	}
}

// Navbar on mobile
let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", () => {
		document.querySelector(".offcanvas-collapse").classList.toggle("open");
	});
}

document.querySelector(".navbar-toggler").addEventListener("click", () => {
  	document.querySelector(".offcanvas-collapse").classList.toggle("open");
});

// Hover on desktop
function toggleDropdown(e) {
	const _d = e.target.closest(".dropdown");
	let _m = document.querySelector(".dropdown-menu", _d);

	setTimeout(
		function () {
		const shouldOpen = _d.matches(":hover");
		_m.classList.toggle("show", shouldOpen);
		_d.classList.toggle("show", shouldOpen);

		_d.setAttribute("aria-expanded", shouldOpen);
		},
		e.type === "mouseleave" ? 300 : 0
	);
}

// On hover
const dropdownCheck = document.querySelector('.dropdown');

if (dropdownCheck !== null) { 
	document.querySelector(".dropdown").addEventListener("mouseleave", toggleDropdown);
	document.querySelector(".dropdown").addEventListener("mouseover", toggleDropdown);

	// On click
	document.querySelector(".dropdown").addEventListener("click", (e) => {
		const _d = e.target.closest(".dropdown");
		let _m = document.querySelector(".dropdown-menu", _d);
		if (_d.classList.contains("show")) {
			_m.classList.remove("show");
			_d.classList.remove("show");
		} else {
			_m.classList.add("show");
			_d.classList.add("show");
		}
	});
}
  

/* Card Slider - Swiper */
var cardSlider = new Swiper('.card-slider', {
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 70,
	breakpoints: {
		// when window is <= 991px
		991: {
			slidesPerView: 1
		}
	}
});



/* Back To Top Button */
// Get the button
myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // for Safari
	document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}


// When the user clicks on the button - Book A Court , shows popup
function onBookCourt() {
	this.onCloseTrainFreePopup();
	document.getElementById("home-book-court-popup").classList.remove("d-none");
}

// Close the popup
function onClosePopup() {
	document.getElementById("home-book-court-popup").classList.add("d-none");
}

// When the user clicks on the button - Train free for a week , replace the banner text
function onTrainFree() {
	this.onClosePopup();
	document.getElementById("train-free").classList.remove("d-none");
}

// Close the popup
function onCloseTrainFreePopup() {	
	document.getElementById("train-free").classList.add("d-none");
}

// When the user clicks on the button - Contact Academy
function onContactAcademy() {
	console.log("Add to do here...");
}

/* Card Slider - Swiper */
new Swiper('.gallery-wrapper', {
	loop: false,
	navigation: {
		nextEl: '.swiper2-button-next',
		prevEl: '.swiper2-button-prev'
	},
	slidesPerView: 3,	
	breakpoints: {		
		991: {
			slidesPerView: 2
		},
		767: {
			slidesPerView: 1
		}
	}
});

/** When click to expand the card */
var arrows = document.querySelectorAll(".card-wraper-inner .arrow");
for (let i = 0; i < arrows.length; i++) {
	arrows[i].addEventListener("click", (e) => {
		var wrapperElement = arrows[i].parentNode.parentNode;
		wrapperElement.classList.toggle("expand");
	});
}

function _calculateAge(birthday) { // birthday is a string
	var dateParts = birthday.split("/");
	var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 
	var ageDifMs = Date.now() - dateObject.getTime();
	var ageDate = new Date(ageDifMs);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}

/** Calculate the age from data-year attribute */
var ages = document.querySelectorAll(".number[data-year]");
for (let i = 0; i < ages.length; i++) {
	var birthday = ages[i].getAttribute('data-year');
	ages[i].innerHTML = _calculateAge(birthday);
}