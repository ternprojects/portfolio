import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp()

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/

import './modules/button-up.js'
import './modules/burger-menu.js'
import './modules/accordeon.js'
import './modules/filter.js'
import './modules/read-more.js'
import './modules/swiper.js'
// import './modules/data-qa.js'
import './modules/progressbar.js'

$(function () {
	/*Slider*/
	const worksSlider = $('[data-slider="slick"]')

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
		//Without this settings slider not work
		worksSlider.slick('setPosition')
		//Modal animation
		setTimeout(function () {
			$(modalId).find('.modal__dialog').css({
				transform: 'scale(1)',
			})
		}, 200)
	})
	/*==========================================*/

	//Close Modal Window - with click on the icon
	modalClose.on('click', function (event) {
		event.preventDefault()
		let $this = $(this)
		let modalParent = $this.parents('.modal')

		//Modal animation
		modalParent.find('.modal__dialog').css({
			transform: 'scale(0)',
		})
		setTimeout(function () {
			modalParent.removeClass('show')
			$('body').removeClass('no-scroll')
		}, 200)
	})
	//Close Modal Window with click on the mask
	$('.modal').on('click', function (event) {
		//Modal animation
		let $this = $(this)
		$this.find('.modal__dialog').css({
			transform: 'scale(0)',
		})
		setTimeout(function () {
			$this.removeClass('show')
			$('body').removeClass('no-scroll')
		}, 200)
	})

	//Close with mask + don't close, if fill fields "Modal-contact" ("Hire Me")
	$('.modal__dialog').on('click', function (event) {
		event.stopPropagation()
	})
	/*============================================*/

	//Slider: https://kenwheeler.github.io/slick/
	worksSlider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
	})
	/*==========================================*/

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
