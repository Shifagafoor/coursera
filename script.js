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
        filter_two.classList.add('filter_two_active')
}) 

const close_span = document.querySelector('.close_span')

close_span.addEventListener('click', () => {
    console.log('remove')
        filter_two.classList.remove('filter_two_active') 
})

