async function signUpUserApi(userData) {
	loaderOn();
	const URL = "https://jsonplaceholder.typicode.com/posts";

	const options = {
		method: "POST",
		body: JSON.stringify(userData),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	};

	try {
		const response = await fetch(URL, options);
		const data = await response.json();
		loaderOff();
		toastMessage(
			`<i>${data.firstName}</i>, thank you for registering!`,
			"green"
		);
	} catch (error) {
		loaderOff();
		toastMessage(`Something went wrong, please try again`, "red");
		console.error(error);
	}
}
