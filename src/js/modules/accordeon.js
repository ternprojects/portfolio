export function accordeon(selector) {
	let accordeon = $(selector)
	let spans = accordeon.children('span')
	let divs = accordeon.children('div')

	accordeon
		.addClass('accordeon')
		.on('click', '.accordeon__control', function (e) {
			e.preventDefault()

			let a = $(this)
			let active = a.hasClass('accordeon__control_active')

			accordeon
				.find('.accordeon__control_active')
				.removeClass('accordeon__control_active')
			accordeon
				.find('.accordeon__panel_active')
				.removeClass('accordeon__panel_active')

			if (!active) {
				a.addClass('accordeon__control_active')
					.next()
					.addClass('accordeon__panel_active')
			}
		})
	spans.each(function () {
		let span = $(this)
		span.replaceWith(
			'<a href="#" class="accordeon__control">' + span.text() + '</a>'
		)
	})
	divs.addClass('accordeon__panel')
}

accordeon('#accordeon')
accordeon('#accordeon2')
accordeon('#accordeon3')
