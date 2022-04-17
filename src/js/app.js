import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp()

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/

/*Filter
 *===========================================*/
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
/*==========================================*/

//Modal Windows
const modalCall = $('[data-modal]')
const modalClose = $('[data-close]')

//Open Modal Window
modalCall.on('click', function (event) {
	event.preventDefault()
	let $this = $(this)
	let modalId = $this.data('modal')
	$(modalId).addClass('show')
	$('body').addClass('no-scroll')

	//Animation window (No working)
	// 	setTimeout(() => {
	// 		$('modalId').find('.modal__dialog').css({ transform: 'rotateX(0)' })
	// 	}, 200)
	//
})

//Close Modal Window -with click on the icon
modalClose.on('click', function (event) {
	event.preventDefault()
	let $this = $(this)
	let modalParent = $this.parents('.modal')
	modalParent.removeClass('show')
	$('body').removeClass('no-scroll')
})

//Close Modal Window with click on the mask
$('.modal').on('click', function (event) {
	$(this).removeClass('show')
	$('body').removeClass('no-scroll')
})

//Close with mask + don't close modal-contact ("Hire Me")
$('.modal__dialog').on('click', function (event) {
	event.stopPropagation()
})

//Modal Windows
//Animation window (No working)

// const modalCall = $('[data-modal]')
// const modalClose = $('[data-close]')

//Open Modal Window
// modalCall.on('click', function (event) {
// event.preventDefault()
// let $this = $(this)
// let modalId = $this.data('modal')
// $(modalId).addClass('show')
// $('body').addClass('no-scroll')

//Animation window (No working)
// setTimeout(function () {
// $(modalId).find('.modal__dialog').css({ transform: 'rotateX(0)' })
// }, 200)
// })

//Close Modal Window -with click on the icon
// modalClose.on('click', function (event) {
// event.preventDefault()
// let $this = $(this)
// let modalParent = $this.parents('.modal')
// modalParent.find('.modal__dialog').css({ transform: 'rotateX(90deg)' })
// })

// setTimeout(function () {
// modalParent.removeClass('show')
// $('body').removeClass('no-scroll')
// }, 200)

//Close Modal Window with click on the mask
// $('.modal').on('click', function (event) {
// let $this = $(this)
// $this.find('.modal__dialog').css({ transform: 'rotateX(90deg)' })
// })
// setTimeout(function () {
// $this.removeClass('show')
// $('body').removeClass('no-scroll')
// }, 200)

//Close with mask + don't close modal-contact ("Hire Me")
// $('.modal__dialog').on('click', function (event) {
// event.stopPropagation()
// })
