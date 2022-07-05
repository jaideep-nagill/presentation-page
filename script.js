document.body.addEventListener("click", (e) => {
	if (e.target.classList.contains("btn")) {
		e.preventDefault();
		// console.log(e.target.getAttribute("href"));
		document
			.querySelector(e.target.getAttribute("href"))
			.scrollIntoView({ behavior: "smooth" });
	}
});
