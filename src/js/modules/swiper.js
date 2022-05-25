//Инициализируцем Swiper - первый слайдер
new Swiper('.swiper', {
	// Стрелки
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	//Навигация
	//Буллеты, текужее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		//Буллеты
		// type: 'bullets',
		// clickable: true,
		//Динамические буллеты
		// dynamicBullets: true,
		//Кастомные буллеты
		// renderBullet: function (index, currentClass) {
		// 	return '<span class="' + currentClass + '">' + (index + 1) + '</span>'
		// },

		//Фракция 1/3
		type: 'fraction',
		//Кастолмный вывод фракции
		renderFraction: function (currentClass, totalClass) {
			return (
				'Picture <span class="' +
				currentClass +
				'"></span>' +
				' of ' +
				'<span class="' +
				totalClass +
				'"></span>'
			)
		},

		//Прогрессбар
		// type: 'progressbar',
	},

	//Скролл
	scrollbar: {
		el: '.swiper-scrollbar',
		//Возможность перетаскивать скролл
		draggable: true,
	},

	//Вкл./выкл. перетаскивания на ПК
	simulateTouch: true,

	//Чувствительносмть сдвига
	touchRatio: 1,

	//Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,

	// Курсор перетаскивания
	grabCursor: true,

	//Переключение на слайд при клике на него
	slideToClickedSlide: true,

	//Навигация по хешу (стрелки браузера)
	// hashNavigation: {
	//Отслеживать состояние
	// watchState: true,
	// },

	//Управление клавиатурой
	keyboard: {
		//Вкл./выкл.
		enable: true,
		//Вкл./выкл. только когда слайдер в пределах вьюпорта
		onlyInViewport: true,
		//Вкл./выкл. управление клавишами pageUp, pageDown
		pageUpDown: true,
	},

	//Управление колесом мыши
	mousewheel: {
		//Чувствительность  колеса мыши
		sensitivity: 2,

		//Класс объекта, на котором будет срабатывать прокрутка мыши (для нескольктх слайдеров)
		//eventsTarget: ".swiper"
	},

	//Автовысота
	autoHeight: true,

	//Автоширина
	autoWidth: true,

	//Кол-ство слайдов для показа
	slidesPerView: 1,

	//Отключение функционала слайдера
	//Если слайдов меньше, чем нужно
	watchOverflow: true,

	//Отступ между слайдами
	// spaceBetween: 30,

	//Кол.-свто пролистываемых слайдов
	slidesPerGroup: 1,

	//Активный слайд по центру
	// centeredSlides: true,

	//Стартовый слайд
	initialSlide: 0,

	//Мультирядность
	// slidesPerColumn: 2,

	//Бесконечній слайдер
	loop: true,

	//Кол.-тво дублирующих слайдов
	// loopedSlides: 2,

	//Свободный режим
	freeMode: false,

	//Автовоспроизведение
	autoplay: {
		//Пауза между прокрутками
		delay: 1000,

		//Закончить на последнес слайде
		stopOnLastSlide: false,

		//Отключить после ручного переключения
		disableOnInteraction: false,
	},

	//Speed
	speed: 800,

	//Вертикальная ось
	// direction: 'vertical'

	//Эффекты переключения слайдов

	//Листание
	// effect: 'slide',

	//Смена прозрачности
	// effect:'fade',

	//Дополнение к Fade
	//Параллельная смена прозрачности
	// fadeEffect: {
	// 	crossFade: true,
	// },

	//Переворот
	//effect: 'flip',
	//Дополнение к Flip
	//flipffect: {
	//Тень
	//slideShadows: true,
	//Показ только активного слайда
	//limitRotation: true,
	//	},

	//Куб
	// effect: 'cube',
	//Дополнение к Cube
	// flipffect: {
	//Настройки тени
	// 	slideShadows: true,
	// 	shadow: true,
	// 	shadowOffset: 20,
	// 	shadowScale: 0.94
	// },

	//Поток
	// effect: 'coverflow',
	//Дополнение к Cube
	// coverflowEffect: {
	//Дополнение к Coverflow
	// rotate: 20,
	//Наложение
	// stretch: 50,
	//Тень
	// slideShadows: true,
	// },

	//Брейк-поинты (адаптив)
	//Ширина экрана
	// breakpoints: {
	// 	320: {
	// 		slidesPerView: 1,
	// 	},
	// 	480: {
	// 		slidesPerView: 2,
	// 	},
	// 	992: {
	// 		slidesPerView: 3,
	// 	},
	// },

	// breakpoints: {
	// 	'@0.75': {
	// 		slidesPerView: 1,
	// 	},
	// 	'@1.00': {
	// 		slidesPerView: 2,
	// 	},
	// 	'@1.5': {
	// 		slidesPerView: 3,
	// 	},
	// },

	//Lazy loading
	//Отключить предзагрузку картинок
	preloadImages: false,
	//Lazy loading
	lazy: true,
	//{
	//Подкгружать на старте на старте переключения слайда
	// loadOnTransitionStart: false,
	//Подгрузить предыдущую и следующую картинки
	// 	loadPrevNext: false,
	// },
	//Слежка за видимыми слайдами
	// watchSlidesProgress: false,
	//Добавление класса видимім слайдом
	// watchSlidesVisibility: false,

	//Зум картики
	// zoom: {
	//Максимальное увеличение
	// maxRatio: 5,
	//Минимальное увеличение
	// 	minRatio: 1,
	// },
})

