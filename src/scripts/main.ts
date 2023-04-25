import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import '@/styles/main.sass'

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
