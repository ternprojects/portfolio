import * as flsFunctions from './modules/functions.js'

flsFunctions.isWebp()

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/

/*Slider*/
$(function () {
	/*Filter*/
	const worksSlider = $('[data-slider="slick"]')

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

	//Close with mask + don't close "Modal-contact" ("Hire Me")
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
//Navigation-menu ("Burger")
const navToggle = $('#navToggle')
const nav = $('#nav')

navToggle.on('click', function (event) {
	event.preventDefault()
	nav.toggleClass('show')
})
/*==========================================*/

//Button Up
// function backToTop() {
// 	let button = $('.back-to-top')

// 	$(window).on('scroll', () => {
// 		if ($(this).scrollTop() >= 50) {
// 			button.fadeIn()
// 		} else {
// 			button.fadeOut()
// 		}
// 	})
// 	button.on('click', (e) => {
// 		e.preventDefault()
// 		$('html').animate({ scrollTop: 0 }, 1000)
// 	})
// }

// backToTop()
/*==========================================*/

//Close modal window with button "Esc" (JS)
// document.addEventListener('keydown', function (e) {
// 	if (e.key === 'Escape') {
// 		//ваша функция закрытия окна

// 	}
// })
