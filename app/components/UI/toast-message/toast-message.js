const toastMessage = (message, color = "green") => {
	const toastHTML = `<span>${message}</span>`;
	M.toast({ html: toastHTML });
	const toast = document.querySelector(".toast");
	toast.style.backgroundColor = color;
};
