const initNationalitySelect = () => {
	document.addEventListener("DOMContentLoaded", function () {
		var elems = document.querySelectorAll("select");
		var instances = M.FormSelect.init(elems, {});
	});
}
initNationalitySelect();

const initBirthDatapicker = () => {
	document.addEventListener("DOMContentLoaded", function () {
		var elems = document.querySelectorAll(".datepicker");
		var instances = M.Datepicker.init(elems, {
			minDate: new Date(1930, 0, 1),
			maxDate: new Date(2023, 5, 1),
			defaultDate: new Date(2000, 0, 1),
			setDefaultDate: true,
			format: "dd mmmm yyyy",
			yearRange: [1930, 2024],
		});
	});
}
initBirthDatapicker();

const animeSignupFormFields = () => {
	anime({
		targets: [
			".form-wrapper__first-name",
			".form-wrapper__last-name",
			".form-wrapper__nationality",
			".form-wrapper__signup-email",
			".form-wrapper__datepicker",
			".form-wrapper__radio",
			".form-wrapper__signup-password",
			".form-wrapper__signup-confirm-password",
		],
		bottom: "0px",
		opacity: 1,
		delay: anime.stagger(400),
		duration: 1000,
	});
}
animeSignupFormFields();

const animeSubmitBtnWhenFormFail = () => {
	anime({
		targets: "#form-signup-submit",
		keyframes: [
			{ translateX: 0 },
			{ translateX: -40 },
			{ translateX: 40 },
			{ translateX: -40 },
			{ translateX: 40 },
			{ translateX: -40 },
			{ translateX: 40 },
			{ translateX: -40 },
			{ translateX: 40 },
			{ translateX: -40 },
			{ translateX: 40 },
			{ translateX: 0 },
		],
		duration: 1000,
	});
}

const resetFields = (form) => {
	const { elements } = form;
	elements.first_name.value = "";
	elements.last_name.value = "";
	elements.signup_email.value = "";
	elements.signup_password.value = "";
	elements.signup_confirm_password.value = "";
};

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
	animeSubmitBtnWhenFormFail();
};
