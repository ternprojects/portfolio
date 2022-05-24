//Filter
let filter = $('[data-filter]')
filter.on('click', function (e) {
	e.preventDefault()
	let cat = $(this).data('filter')

	if (cat === 'all') {
		$('[data-cat]').removeClass('hide')
	} else {
		$('[data-cat]').each(function () {
			let workCat = $(this).data('cat')
			if (workCat != cat) {
				$(this).addClass('hide')
			} else {
				$(this).removeClass('hide')
			}
		})
	}
})
/*==========================================*/
$(document).ready(function () {
	//Year filter
	let filterYear = $('[data-filter-year]')
	filterYear.on('click', function (e) {
		e.preventDefault()
		let year = $(this).data('filterYear')

		if (year === 'all') {
			$('[data-year]').removeClass('hide')
		} else {
			$('[data-year]').each(function () {
				let workYear = $(this).data('year')
				if (workYear != year) {
					$(this).addClass('hide')
				} else {
					$(this).removeClass('hide')
				}
			})
		}
	})
	//Year filter (my)
	filterYear.on('click', function (e) {
		e.preventDefault()
		let year = $(this).data('filterYear')

		if (year === 'all') {
			$('[data-year]').removeClass('invisible')
		} else {
			$('[data-year]').each(function () {
				let workYear = $(this).data('year')
				if (workYear != year) {
					$(this).addClass('invisible')
				} else {
					$(this).removeClass('invisible')
				}
			})
		}
	})
})

/*==========================================*/
//Hide
// let filterHide = $('[data-filter-hide]')
// filterHide.on('click', function (event) {
// 	event.preventDefault()
// 	let hide = $(this).data('filter')

// 	if (hide === 'all') {
// 		$('[data-cat-hide]').removeClass('hide')
// 	} else {
// 		$('[data-cat-hide]').each(function () {
// 			let workCat = $(this).data('cat')
// 			if (workCat != hide) {
// 				$(this).addClass('hide')
// 			} else {
// 				$(this).removeClass('hide')
// 			}
// 		})
// 	}
// })
/*==========================================*/
