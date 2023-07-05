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
	} catch (error) {
		loaderOff();
		console.error(error);
	}
}
