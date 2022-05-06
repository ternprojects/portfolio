//Button Up
export function backToTop() {
	let button = $('.back-to-top')

	$(window).on('scroll', () => {
		if ($(this).scrollTop() >= 50) {
			button.fadeOut()
		} else {
			button.fadeIn()
		}
	})
	button.on('click', (e) => {
		e.preventDefault()
		$('html').animate({ scrollTop: 0 }, 1000)
	})
}

backToTop()