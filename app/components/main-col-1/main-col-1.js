const animateSvg = () => {
	anime({
		targets: ".bg-form-main path",
		opacity: 1,
		duration: 100,
	});

	anime({
		targets: ".bg-form-main path",
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: "easeInOutSine",
		duration: 4000,
		delay: (el, i) => i * 250,
	});

	anime({
		targets: ".bg-form-main path",
		fill: ["#ffffff", "#F9FAFF"],
		easing: "linear",
		duration: 1000,
		delay: 3000,
	});
};

animateSvg();
