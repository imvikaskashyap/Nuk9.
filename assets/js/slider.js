const interval = 3000; // time in milliseconds between slides
let slideIndex = 0;
const sliderNavs = document.querySelectorAll(".slider__nav");

function showSlides() {
	slideIndex++;
	if (slideIndex > sliderNavs.length) {
		slideIndex = 1;
	}
	sliderNavs[slideIndex - 1].checked = true;
	setTimeout(showSlides, interval);
}

showSlides();
