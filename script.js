const arrows = document.querySelectorAll('.there')

arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        arrow.parentNode.classList.toggle('show')
    })
})

const filterClick = document.querySelector('.whole_filter')
const filter_two = document.querySelector('.filter_two')

filterClick.addEventListener('click', () => {
    console.log('click')
        filter_two.classList.toggle('filter_two_active')
}) 