const expandBlock = (e) => {
	const button = e.target;
	button.parentNode.classList.toggle("readmore-expand");
};

const readMoreText = () => {
	const readmoreElements = document.querySelectorAll(".readmore");

	readmoreElements.forEach((el) => {
		if (el.scrollWidth > el.offsetWidth) {
			const button = document.createElement("button");
			button.classList.add("read-more__button", "button");
			button.addEventListener("click", (e) => expandBlock(e));
			el.appendChild(button);
		}
	});
};

document.addEventListener('DOMContentLoaded', readMoreText);
