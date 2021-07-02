//hamburger menu
window.addEventListener("scroll", function () {
	let header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
	let menuToggle = document.querySelector(".toggle");
	let menu = document.querySelector(".menu");
	menuToggle.classList.toggle("active");
	menu.classList.toggle("active");
}

// modal-box
let openbtn = document.querySelector(".js-open");
let modalBg = document.getElementById("modal-bg");
let modalBox = document.getElementById("modal-box");

openbtn.addEventListener("click", function (event) {
	event.preventDefault();
	modalBg.classList.add("active");
	modalBox.classList.add("active");
});

let closeBtns = document.querySelectorAll(".js-btn");
closeBtns.forEach((node) => {
	node.addEventListener("click", function () {
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

	function weirdcharerror() {
		Swal.fire({
			icon: "info",
			iconColor: "#D4873D",
			title: "Only Letters Allowed",
			text: "No Numbers or Special Characters",
			confirmButtonColor: "#D4873D",
			background: "#111",
			closeOnClickOutside: true,
		});
	}

	function errorname() {
		Swal.fire({
			icon: "question",
			iconColor: "#D4873D",
			title: "Have you Filled Your Name Correctly? ",
			text: "Please fill Name Correctly ",
			confirmButtonColor: "#D4873D",
			background: "#111",
			closeOnClickOutside: true,
		});
	}

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
		if (msg.value === "" || msg.value === null) {
			emptyerror();

			//name validation
		} else if (name.value === "" || name.value === null) {
			errorname();

			//email validation
		} else if (
			email.value === "" ||
			email.value === null ||
			email.value.indexOf("@") === -1
		) {
			errormail();
		} else {
			sendmail(name.value, email.value, msg.value);
			success();
			window.setTimeout(function () {
				location.reload();
			}, 7000);
		}
	});

	// no number input for name field
	document
		.getElementById("username")
		.addEventListener("keydown", function (event) {
			if (event.ctrlKey || event.altKey) {
				event.preventDefault();
			} else {
				var key = event.keyCode;
				if (
					!(
						key === 8 || // backspace
						key === 9 || // tab
						key === 13 || // enter
						key === 20 || // caps lock
						key === 16 || // shift - left and right
						key === 32 || // space-bar
						key === 27 || // escape
						key === 46 || // delete
						key === 116 || // f5
						key === 221 || // å
						key === 222 || // ä
						key === 192 || // ö
						key === 191 || // '
						key === 189 || // -
						(key >= 35 && key <= 40) ||
						(key >= 65 && key <= 90)
					)
				) {
					event.preventDefault();
					weirdcharerror();
				}
			}
		});
}

validate();
