//Function open/close Navigation-menu "Burger"
const navToggle = $('#navToggle')
const nav = $('#nav')

navToggle.on('click', function (e) {
	e.preventDefault()
	nav.toggleClass('show')
})
/*==========================================*/
//Close-icon transformation + add and remove "no scroll" class
const burger = $('.header__burger')
const body = $('body')

$(document).ready(function () {
	burger.click(function (e) {
		$('.header__burger, #nav').toggleClass('active')
		body.toggleClass('no-scroll')
	})
})
/*==========================================*/

//Close menu with click to free space

// $(function ($) {
// 	$(document).mouseup(function (e) {

// 		if (!$('nav').is(e.target) && $('nav').has(e.target).length === 0) {
// 			$('.header__burger, #nav').removeClass('show')
// 			$('.header__burger').removeClass('active')
// 		}
// 	})
// })
/*==========================================*/
