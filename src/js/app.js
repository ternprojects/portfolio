import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp()

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/

/*Filter*/
/*===========================================*/

$(function () {
	const worksSlider = $('[data-slider="slick"]')

	/*Filter*/
	/*===========================================*/
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

	/*==========================================*/

	/*Modal Windows*/
	/*==========================================*/
	const modalCall = $('[data-modal]')
	const modalClose = $('[data-close]')

	//Open Modal Window
	modalCall.on('click', function (event) {
		event.preventDefault()
		let $this = $(this)
		let modalId = $this.data('modal')
		$(modalId).addClass('show')
		$('body').addClass('no-scroll')
		//Without this settings slider not work
		worksSlider.slick('setPosition')
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
	/*============================================*/

	/*Slider: https://kenwheeler.github.io/slick/*/
	/*==========================================*/
	worksSlider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		dots: true,
	})

	//Functional of slider button
	$('.slickPrev').on('click', function (event) {
		event.preventDefault()
		let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]')
		currentSlider.slick('slickPrev')
	})

	$('.slickNext').on('click', function (event) {
		event.preventDefault()
		let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]')
		currentSlider.slick('slickNext')
	})
})
/*==========================================*/
