const resetFields = (form) => {
	const { elements } = form;
	elements.first_name.value = '';
	elements.last_name.value = '';
	elements.signup_email.value = '';
	elements.signup_password.value = '';
	elements.signup_confirm_password.value = '';
}

const successSignUpForm = (form) => {
	const { elements } = form;
	const userData = {
		firstName: elements.first_name.value,
		lastName: elements.last_name.value,
		userNationality: elements.user_nationality.value,
		signupEmail: elements.signup_email.value,
		userBirth: elements.datepicker.value,
		userGender: elements.gender.value,
		password: elements.signup_password.value,
	};

	signUpUserApi(userData);
	resetFields(form);
};

const failSignUpForm = () => {
	const submitButton = document.querySelector("#form-signup-submit");
};
