// sticky nav bar that appears when scrolling page
window.addEventListener("scroll", () => {
	let header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
});

//hamburger menu mobile view
function toggleMenu() {
	let menuToggle = document.querySelector(".toggle");
	let menu = document.querySelector(".menu");
	menuToggle.classList.toggle("active");
	menu.classList.toggle("active");
}

toggleMenu;

// modal-box work section
let openbtn = document.querySelector(".js-open");
let modalBg = document.getElementById("modal-bg");
let modalBox = document.getElementById("modal-box");

openbtn.addEventListener("click", (event) => {
	event.preventDefault();
	modalBg.classList.add("active");
	modalBox.classList.add("active");
});

let closeBtns = document.querySelectorAll(".js-btn");
closeBtns.forEach((node) => {
	node.addEventListener("click", () => {
		modalBg.classList.remove("active");
		modalBox.classList.remove("active");
	});
});

//Sendmail function
/*
global emailjs
*/

function sendmail(name, email, msg) {
	emailjs.send("service_6pcnbro", "template_hbodrvd", {
		from_name: name,
		from_email: email,
		message: msg,
	});
}

// Validation function
function validate() {
	let name = document.getElementById("username");
	let email = document.getElementById("email");
	let msg = document.getElementById("message");
	let btn = document.querySelector(".submit");

	//Sweetalert
	/*
global Swal
*/

	// error message for empty fields
	function emptyerror() {
		Swal.fire({
			icon: "info",
			iconColor: "#D4873D",
			title: "No Empty Forms Allowed",
			text: "Please fill all the Fields",
			confirmButtonColor: "#D4873D",
			background: "#111",
			closeOnClickOutside: true,
		});
	}

	// error message for name field empty
	function errorname() {
		Swal.fire({
			icon: "question",
			iconColor: "#D4873D",
			title: "Have you Filled Your Name? ",
			text: "Please fill Name",
			confirmButtonColor: "#D4873D",
			background: "#111",
			closeOnClickOutside: true,
		});
	}

	// error message for invalid key in name field
	function notValidKey() {
		Swal.fire({
			icon: "warning",
			iconColor: "#D4873D",
			title: "Not a Valid Character for Name Field ",
			text: "Use Letters to Fill out Your Name",
			confirmButtonColor: "#D4873D",
			background: "#111",
			closeOnClickOutside: true,
		});
	}

	// error message for email fields
	function errormail() {
		Swal.fire({
			icon: "question",
			iconColor: "#D4873D",
			title: "Have you Filled Your Email Correctly? ",
			text: "youremail@example.com",
			confirmButtonColor: "#D4873D",
			background: "#111",
			closeOnClickOutside: true,
		});
	}

	// Success message
	function success() {
		Swal.fire({
			icon: "success",
			title: "Success",
			text: "Your Message has Been Sent",
			confirmButtonColor: "#D4873D",
			background: "#111",
			closeOnClickOutside: true,
		});
	}

	btn.addEventListener("click", (event) => {
		event.preventDefault();

		//msg validation
		if (msg.value.trim() === "" || msg.value === null) {
			emptyerror();

			//name validation
		} else if (name.value.trim() === "" || name.value === null) {
			errorname();

			//email validation
		} else if (
			email.value.trim() === "" ||
			email.value.trim() === null ||
			email.value.indexOf("@") === -1
		) {
			errormail();
		} else {
			sendmail(name.value, email.value, msg.value);
			success();
			window.setTimeout(() => {
				location.reload();
			}, 7000);
		}
	});

	// no number input for name field
	document.getElementById("username").addEventListener("keydown", (event) => {
		let checkName = event.keyCode;
		if (checkName >= 48 && checkName <= 57) {
			notValidKey();
			event.preventDefault();
		} else if (checkName >= 96 && checkName <= 105) {
			notValidKey();
			event.preventDefault();
		} else {
			return false;
		}
	});
}

validate();
