// ! ibg

function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

// ! burger

let burger = document.querySelector('.burger');
burger.addEventListener("click", function (e) {
	burger.classList.toggle('active');
	let menu_body = document.querySelector('.menu__body');
	menu_body.classList.toggle('active');
	let body = document.querySelector('body');
	body.classList.toggle('lock');
});

// Инициализируем Swiper

new Swiper('.slider', {
	// Стрелки
	navigation: {
		nextEl: '.control__button-next',
		prevEl: '.control__button-prev'
	},
	// Чувствительность свойства
	touchRatio: 1,

	// Угол срабатывания свайпа/перетаскивания
	//touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,

	// Переключение при клике на слайд
	slideToClickedSlide: true,

	// Управление клавиатурой
	keyboard: {
		// Включить/выключить
		enabled: true,

		// Вкл/Выкл
		// только когда слайдер
		// в пределах вьюпорта
		//onlyInViewport: true,

		// Вкл/Выкл
		// Управление клавишами
		// pageUp, pageDown
		pageUpDown: true,
	},

	// Управление колесом мыщи
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,

	},

	// Количество слайдов для показа
	slidesPerView: 1,

	// Отступ между слайдами
	spaceBetween: 0,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Скорость
	speed: 800,

	// Эффекты переключения слайдов
	// Куб
	effect: 'cube',
	// Дополнение к cube
	cubeEffect: {
		// Настройки тени
		slideShadows: true,
		shadow: true,
		shadowOffset: 20,
		shadowScale: 0.94
	},
	// Отключить предзагрузку картинок
	//preloadImages: false,
	// lazy loading
	// подгрузка картинок
	lazy: {
		// подгружать на старте
		//переключение слайда
		loadOnTransitionStart: false,
		// подгрузить предыдущую
		// и следущую картинку
		loadPrevNext: true,
	},
});

//! yandex-map

function init() {
	let center = [54.010999, 38.290894];
	let myplace = [54.033079, 38.274671];
	let map = new ymaps.Map('map-test', {
		center: center,
		zoom: 12,
	});

	map.controls.remove('geolacotionControl');
	map.controls.remove('searchControl');
	map.controls.remove('trafficControl');
	map.controls.remove('typeSelector');
	map.controls.remove('fullscreenControl');
	map.controls.remove('zoomControl');
	map.controls.remove('rulerControl');
	//map.behaviors.disable('scrollZoom');

	let placemark = new ymaps.Placemark(center, {
		balloonContent: `
		<div class="balloon">
		<div class="balloon__address"><p>Тульская область</p><p>Новомосковский район</p><p>г.Новомосковск</p></div>
		</div>
		`
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'icons/marcer01.png',
		iconImageSize: [40, 40],
		iconImageOffset: [0, 0],
	});

	let placemark1 = new ymaps.Placemark(myplace, {
		balloonContent: `
		<div class="balloon">
		<div class="balloon__address"><p>г.Новомосковск</p><p>ул.Трудовой проезд 1А</p><p>"ЛЕЩ"</p></div>
		<div class="balloon__contacts"><a href="tel:+79105810450">+79105810450</a></div>
		</div>
		`
	}, {
		iconLayout: 'default#image',
		iconImageHref: 'icons/marcer02.png',
		iconImageSize: [40, 40],
		iconImageOffset: [0, 0],
	});

	map.geoObjects.add(placemark);
	map.geoObjects.add(placemark1);

	placemark1.balloon.open();
}
ymaps.ready(init);

// ! Инициализируем слайдер
new Swiper('.swiper', {
	// Стрелки
	navigation: {
		nextEl: '.control__button-next',
		prevEl: '.control__button-prev'
	},
	breakpoints: {
		310: {
			slidesPerView: 1,
		},
		640: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
	},

	// Чувствительность свойства
	touchRatio: 1,

	// Угол срабатывания свайпа/перетаскивания
	//touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,

	// Переключение при клике на слайд
	slideToClickedSlide: true,

	// Управление клавиатурой
	keyboard: {
		// Включить/выключить
		enabled: true,

		// Вкл/Выкл
		// только когда слайдер
		// в пределах вьюпорта
		//onlyInViewport: true,

		// Вкл/Выкл
		// Управление клавишами
		// pageUp, pageDown
		pageUpDown: true,
	},

	// Управление колесом мыщи
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,

	},

	// Количество слайдов для показа
	slidesPerView: 3,

	// Отступ между слайдами
	spaceBetween: 100,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Скорость
	speed: 800,
	// Отключить предзагрузку картинок
	//preloadImages: false,
	// lazy loading
	// подгрузка картинок
	lazy: {
		// подгружать на старте
		//переключение слайда
		loadOnTransitionStart: false,
		// подгрузить предыдущую
		// и следущую картинку
		loadPrevNext: true,
	},
});

// ! scroll
$(document).ready(function () {
	$("a.scrollto").click(function () {
		elementClick = $(this).attr("href")
		destination = $(elementClick).offset().top;
		$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination - 100 }, 1100);
		return false;
	});
});