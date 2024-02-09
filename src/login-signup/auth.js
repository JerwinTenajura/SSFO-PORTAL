// Alert Message
let toastBox = document.getElementById("toastBox");
let successMsg =
	'<i class="fas fa-check-circle"></i> Login successful. Redirecting...';

// Google Auth
document.getElementById("googleLogin").addEventListener("click", async () => {
	try {
		const provider = new firebase.auth.GoogleAuthProvider();
		const result = await firebase.auth().signInWithPopup(provider);
		const user = result.user;
		console.log("Authenticated user:", user);

		// Display success message
		showToast(successMsg, "success");

		// Redirect to dashboard
		setTimeout(() => {
			window.location.href = "../dashboard/dashboard.html";
		}, 3000); // Redirect after 3 seconds
	} catch (error) {
		console.error("Authentication error:", error);
	}
});

// Google Auth
document.getElementById("googleLog").addEventListener("click", async () => {
	try {
		const provider = new firebase.auth.GoogleAuthProvider();
		const result = await firebase.auth().signInWithPopup(provider);
		const user = result.user;
		console.log("Authenticated user:", user);

		// Display success message
		showToast(successMsg, "success");

		// Redirect to dashboard
		setTimeout(() => {
			window.location.href = "../dashboard/dashboard.html";
		}, 3000); // Redirect after 3 seconds
	} catch (error) {
		console.error("Authentication error:", error);
	}
});

// Twitter Auth
document.getElementById("twitterLogin").addEventListener("click", async () => {
	try {
		const provider = new firebase.auth.TwitterAuthProvider();
		const result = await firebase.auth().signInWithPopup(provider);
		const user = result.user;
		console.log(
			'<i class="fas fa-exclamation-circle"> Authenticated user:',
			user
		);

		showToast(
			'<i class="fas fa-check-circle"></i> Login successful. Redirecting...',
			"success"
		);

		setTimeout(() => {
			window.location.href = "../dashboard/dashboard.html";
		}, 3000); // Redirect after 3 seconds
	} catch (error) {
		console.error("Authentication error:", error);
	}
});

// Twitter Auth
document.getElementById("twitterLog").addEventListener("click", async () => {
	try {
		const provider = new firebase.auth.TwitterAuthProvider();
		const result = await firebase.auth().signInWithPopup(provider);
		const user = result.user;
		console.log(
			'<i class="fas fa-exclamation-circle"> Authenticated user:',
			user
		);

		showToast(
			'<i class="fas fa-check-circle"></i> Login successful. Redirecting...',
			"success"
		);

		setTimeout(() => {
			window.location.href = "../dashboard/dashboard.html";
		}, 3000); // Redirect after 3 seconds
	} catch (error) {
		console.error("Authentication error:", error);
	}
});

// Facebook Auth
document.getElementById("facebookLogin").addEventListener("click", async () => {
	try {
		const provider = new firebase.auth.FacebookAuthProvider();
		const result = await firebase.auth().signInWithPopup(provider);
		const user = result.user;
		console.log("Authenticated user:", user);

		// Display success message
		showToast(
			'<i class="fas fa-check-circle"></i> Login successful. Redirecting...',
			"success"
		);

		// Redirect to dashboard after a delay
		setTimeout(() => {
			window.location.href = "../dashboard/dashboard.html";
		}, 3000); // Redirect after 3 seconds
	} catch (error) {
		console.error("Authentication error:", error);
	}
});

// Facebook Auth
document.getElementById("facebookLog").addEventListener("click", async () => {
	try {
		const provider = new firebase.auth.FacebookAuthProvider();
		const result = await firebase.auth().signInWithPopup(provider);
		const user = result.user;
		console.log("Authenticated user:", user);

		// Display success message
		showToast(
			'<i class="fas fa-check-circle"></i> Login successfully.',
			"success"
		);

		// Redirect to dashboard after a delay
		setTimeout(() => {
			window.location.href = "../dashboard/dashboard.html";
		}, 3000); // Redirect after 3 seconds
	} catch (error) {
		console.error("Authentication error:", error);
	}
});

// Show Message
function showToast(msg, type) {
	let toast = document.createElement("div");
	toast.classList.add("toast");
	toast.innerHTML = msg;
	toastBox.appendChild(toast);

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
