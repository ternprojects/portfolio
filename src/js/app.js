import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp()

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/

$(function () {
	let filter = $('[data-filter]')
	filter.on('click', function (event) {
		event.preventDefault()
		let cat = $(this).data('filter')

		if (cat == 'all') {
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
})
