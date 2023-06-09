import Swiper, { Navigation } from 'swiper'
import 'swiper/css'
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import '@/styles/main.sass'

new Swiper('.agents__slider', {
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 2.8,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 3.2,
      spaceBetween: 40,
    },
    2000: {
      slidesPerView: 3.8,
      spaceBetween: 144,
    },
  },
})

new Swiper('.abilities__slider', {
  navigation: {
    nextEl: '.abilities__button-next',
  },
  modules: [Navigation],
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    2500: {
      slidesPerView: 3,
      spaceBetween: 80,
    },
  },
})

const submenus = document.querySelectorAll('.nav_submenu')

submenus.forEach((submenu) => {
  const navLink = submenu.previousElementSibling
  if (!navLink) return

  navLink.addEventListener('click', (e) => {
    e.preventDefault()
  })

  tippy(navLink, {
    content: submenu,
    allowHTML: true,
    interactive: true,
    placement: 'bottom',
  })
})
