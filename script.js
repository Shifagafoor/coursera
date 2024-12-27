const arrows = document.querySelectorAll('.there')

arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        arrow.parentNode.classList.toggle('show')
    })
})
