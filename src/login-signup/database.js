const firebaseConfig = {
	apiKey: "AIzaSyA_TccrlBdkqzXprI5CLnRAnM-vF02nTI8",
	authDomain: "ssfo-portal.firebaseapp.com",
	databaseURL: "https://ssfo-portal-default-rtdb.firebaseio.com",
	projectId: "ssfo-portal",
	storageBucket: "ssfo-portal.appspot.com",
	messagingSenderId: "223390269161",
	appId: "1:223390269161:web:adeb76a99824ddda4c3a78",
};

firebase.initializeApp(firebaseConfig);

let toastBoxAuth = document.getElementById("toastBox");
const signupDB = firebase.database().ref("Users");
const auth = firebase.auth();

document
	.getElementById("signupForm")
	.addEventListener("submit", submitSignUpForm);
document
	.getElementById("loginForm")
	.addEventListener("submit", submitLoginForm);

// SIGN UP FORM
function submitSignUpForm(e) {
	e.preventDefault();

	const name = getElementVal("name");
	const email = getElementVal("email");
	const password = getElementVal("password");

	// Check if fields are not empty
	if (name && email && password) {
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log("User signed up:", user);

				// Save additional data to database
				signupDB.push({
					userId: user.uid,
					name: name,
					email: email,
					password: password,
				});

				// Display success message
				showToast(
					'<i class="fas fa-check-circle"></i> Account created successfully.',
					"success"
				);

				// Redirect to login page after a delay
				setTimeout(() => {
					window.location.href = "./login.html";
				}, 3000); // Redirect after 3 seconds
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.error("Error signing up:", errorMessage);
				showToast(
					'<i class="fas fa-times-circle"></i> Account already exist.',
					"error"
				);
				// Clear input fields
				clearInputFields();
			});
	} else {
		console.error("All fields are required for sign-up.");
	}
}

// CLEAR INPUT FIELDS
function clearInputFields() {
	document.getElementById("name").value = "";
	document.getElementById("email").value = "";
	document.getElementById("password").value = "";
}

// LOG IN FORM
function submitLoginForm(e) {
	e.preventDefault();

	const email = getElementVal("loginEmail");
	const password = getElementVal("loginPassword");

	// Check if fields are not empty
	if (email && password) {
		auth
			.signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				console.log("User signed in:", user);

				// Display success message
				showToast(
					'<i class="fas fa-check-circle"></i> Login successfully.',
					"success"
				);

				// Redirect to dashboard after a delay
				setTimeout(() => {
					window.location.href = "../dashboard/dashboard.html";
				}, 3000); // Redirect after 3 seconds
			})
			.catch((error) => {
				const errorCode = error.code;
				console.error("Wrong email or password!");

				// Display error message
				showToast(
					'<i class="fas fa-exclamation-circle"></i> Wrong email or password',
					"error"
				);
			});
	} else {
		console.error("Invalid Account.");
	}
}

const getElementVal = (id) => {
	return document.getElementById(id).value;
};

// Show Message
function showToast(msg, type) {
	let toast = document.createElement("div");
	toast.classList.add("toast");
	toast.innerHTML = msg;
	toastBoxAuth.appendChild(toast);

	if (type === "error") {
		toast.classList.add("error");
	}
	if (type === "invalid") {
		toast.classList.add("invalid");
	}

	setTimeout(() => {
		toast.remove();
	}, 3000);
}
