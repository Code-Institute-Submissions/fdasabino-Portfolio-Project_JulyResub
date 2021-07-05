// sticky nav bar
window.addEventListener("scroll", function () {
	let header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
});

//hamburger menu
function toggleMenu() {
	let menuToggle = document.querySelector(".toggle");
	let menu = document.querySelector(".menu");
	menuToggle.classList.toggle("active");
	menu.classList.toggle("active");
}

toggleMenu;

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
			text: "No Numbers or Special Characters in this Field",
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
	document.getElementById("username").addEventListener("keydown", (event) => {
		if (event.ctrlKey || event.altKey);
		else {
			const checkName = event.keyCode;
			8 === checkName ||
				9 === checkName ||
				13 === checkName ||
				20 === checkName ||
				16 === checkName ||
				32 === checkName ||
				27 === checkName ||
				46 === checkName ||
				116 === checkName ||
				221 === checkName ||
				222 === checkName ||
				192 === checkName ||
				191 === checkName ||
				189 === checkName ||
				(checkName >= 35 && checkName <= 40) ||
				(checkName >= 65 && checkName <= 90) ||
				(event.preventDefault(), weirdcharerror());
		}
	});
}

validate();
