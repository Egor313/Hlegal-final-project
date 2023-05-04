(function() {
	const headerBurgerOpen = document.querySelector('.header__burger');
	const headerNavigation = document.querySelector('.header__nav');
	const headerBurgerClose = document.querySelector('.header__nav-close');

	headerBurgerOpen.addEventListener('click', event => {
		event.preventDefault();
		headerNavigation.classList.add('active')
	});

	headerBurgerClose.addEventListener('click', event => {
		headerNavigation.classList.remove('active')
	});
})();

(function() {
	const tabItems = document.querySelectorAll('.experience__tab-link');
	const tabContent = document.querySelectorAll('.experience__content-item');

	tabItems.forEach((tab, index) => {
		tab.addEventListener('click', (event) => {
			event.preventDefault();

			tabContent.forEach(content => {
				content.classList.remove('active');
			});

			tabItems.forEach(tab => {
				tab.classList.remove('active');
			});

			tabContent[index].classList.add('active');
			tabItems[index].classList.add('active');
		})
	})
})();

const isSwiper = document.querySelector('.swiper');
if(isSwiper) {
	const swiper = new Swiper('.swiper', {
	loop: true,
	spaceBetween: 20,
	grabCursor: true,
	effect: "creative",
	creativeEffect: {
	  prev: {
		shadow: true,
		translate: [0, 0, -400],
	  },
	  next: {
		translate: ["100%", 0, 0],
	  },
	},
  
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},

  });
}

const isSwiper__team = document.querySelector('.swiper__team');
if(isSwiper__team) {
	const swiper__team  = new Swiper('.swiper__team', {
	loop: true,
	breakpoints: {
	  320: {
		slidesPerView: 1,
		spaceBetween: 20
	  },
	
	  768: {
		slidesPerView: 4,
		spaceBetween: 40
	  }
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	  },
  })
}
 