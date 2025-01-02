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

// fetch

fetch('./coursera.json')
    .then((res)=> res.json())
    .then((data) => {
        // console.log("content", data.courses[0]);
        data.courses.forEach((item)=> {
            console.log(item)

            const english_whole = document.querySelector('.english_whole ul')
            const card = document.createElement("li")
            card.innerHTML = `
            <div class="common">
                <div class="process">
                    <div class="workplace">
                        <div class="free_button">
                            <span class="free_buttons" id="free_button">Free</span>
                        </div>
                        <div class="project">
                            <div class="net">
                                <div class="business_one">
                                    <div class="business_img">
                                        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/36/18a6102bea45b280d5f182141bb441/uc-chile360x360.png?auto=format%2Ccompress&amp;dpr=3&amp;w=24&amp;h=24" alt="">
                                        <p>${item.image_title}</p>
                                                                    
                                    </div>
                                    <div class="analysis">
                                        <h3>English for Common Interactions in the Workplace: Basic Level</h3>
                                    </div>
                                </div>
                                <div class="product_card">
                                    <div class="star">
                                        <div ></div>
                                            <div class="star_two">
                                                <div class="star_rating">
                                                    <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" class="star_two" id="cds-react-aria-248"><path d="M17.51 7.77h-5.32l-1.78-5.46a.45.45 0 00-.85 0l-1.8 5.46H2.45A.45.45 0 002 8.2a.43.43 0 00.16.35L6.66 12l-1.72 5.43a.45.45 0 00.3.56.43.43 0 00.39-.08L10 14.53l4.38 3.38a.44.44 0 00.69-.48L13.33 12l4.49-3.44a.43.43 0 00-.03-.73.501.501 0 00-.28-.06z" fill="#F2D049"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.7 1.547a.947.947 0 011.199.62l1.666 5.111 4.967-.003a.923.923 0 01.794.388.922.922 0 01-.216 1.294l-4.19 3.212 1.621 5.083a.931.931 0 01-1.475 1.03l-4.05-3.132-4.053 3.163a.934.934 0 01-.838.158.94.94 0 01-.643-1.177l.002-.006 1.618-5.094-4.207-3.213a.94.94 0 01.612-1.702h4.91L9.111 2.13a.94.94 0 01.58-.58l.009-.003zm7.656 6.728l-5.517.004L10 2.632 8.14 8.28H2.623l4.645 3.547-1.773 5.584 4.518-3.526 4.519 3.494-1.78-5.575 4.604-3.528z" fill="#7C6919"></path></svg>
                                                    <span class="rating">4.7</span>
                                                </div>
                                                <span>·</span>
                                                    <div class="reviews">3K reviews</div>
                                            </div>
                                            <div class="begineer">Mixed · Course · 1 - 3 Months</div>
                                    </div>
                                </div>
                            </div>
                            <div class="course_business">
                                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/e7/b34332a4c9434aacd529defcf050da/00-coursera-logotipo.jpg?auto=format%2Ccompress%2C%20enhance&amp;dpr=1&amp;w=265&amp;h=216&amp;fit=crop&amp;q=50" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/e7/b34332a4c9434aacd529defcf050da/00-coursera-logotipo.jpg?auto=format%2Ccompress%2C%20enhance&amp;dpr=2&amp;w=265&amp;h=216&amp;fit=crop&amp;q=50 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/e7/b34332a4c9434aacd529defcf050da/00-coursera-logotipo.jpg?auto=format%2Ccompress%2C%20enhance&amp;dpr=3&amp;w=265&amp;h=216&amp;fit=crop&amp;q=50 3x" alt="" fetchpriority="high">    
                            </div>
                        </div>
                    </div>
                </div>
            </div>`

            english_whole.appendChild(card)
        
        })

    });





// ul cards

// const english_whole = document.querySelector('.english_whole ul')
// const card = document.createElement("li")
// card.innerHTML = `
//                          <div class="common">
//                                     <div class="process">
//                                         <div class="workplace">
//                                             <div class="free_button">
//                                                 <span class="free_buttons" id="free_button">Free</span>
//                                             </div>
//                                             <div class="project">
//                                                 <div class="net">
//                                                     <div class="business_one">
//                                                         <div class="business_img">
//                                                             <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/36/18a6102bea45b280d5f182141bb441/uc-chile360x360.png?auto=format%2Ccompress&amp;dpr=3&amp;w=24&amp;h=24" alt="">
//                                                             <p>Pontificia Universidad Católica de Chile</p>
                                                        
//                                                         </div>
//                                                         <div class="analysis">
//                                                             <h3>English for Common Interactions in the Workplace: Basic Level</h3>
//                                                         </div>
//                                                     </div>
//                                                     <div class="product_card">
//                                                         <div class="star">
//                                                             <div ></div>
//                                                             <div class="star_two">
//                                                                 <div class="star_rating">
//                                                                     <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" class="star_two" id="cds-react-aria-248"><path d="M17.51 7.77h-5.32l-1.78-5.46a.45.45 0 00-.85 0l-1.8 5.46H2.45A.45.45 0 002 8.2a.43.43 0 00.16.35L6.66 12l-1.72 5.43a.45.45 0 00.3.56.43.43 0 00.39-.08L10 14.53l4.38 3.38a.44.44 0 00.69-.48L13.33 12l4.49-3.44a.43.43 0 00-.03-.73.501.501 0 00-.28-.06z" fill="#F2D049"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.7 1.547a.947.947 0 011.199.62l1.666 5.111 4.967-.003a.923.923 0 01.794.388.922.922 0 01-.216 1.294l-4.19 3.212 1.621 5.083a.931.931 0 01-1.475 1.03l-4.05-3.132-4.053 3.163a.934.934 0 01-.838.158.94.94 0 01-.643-1.177l.002-.006 1.618-5.094-4.207-3.213a.94.94 0 01.612-1.702h4.91L9.111 2.13a.94.94 0 01.58-.58l.009-.003zm7.656 6.728l-5.517.004L10 2.632 8.14 8.28H2.623l4.645 3.547-1.773 5.584 4.518-3.526 4.519 3.494-1.78-5.575 4.604-3.528z" fill="#7C6919"></path></svg>
//                                                                     <span class="rating">4.7</span>
//                                                                 </div>
//                                                                 <span>·</span>
//                                                                 <div class="reviews">3K reviews</div>
//                                                             </div>
//                                                             <div class="begineer">Mixed · Course · 1 - 3 Months</div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div class="course_business">
//                                                     <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/e7/b34332a4c9434aacd529defcf050da/00-coursera-logotipo.jpg?auto=format%2Ccompress%2C%20enhance&amp;dpr=1&amp;w=265&amp;h=216&amp;fit=crop&amp;q=50" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/e7/b34332a4c9434aacd529defcf050da/00-coursera-logotipo.jpg?auto=format%2Ccompress%2C%20enhance&amp;dpr=2&amp;w=265&amp;h=216&amp;fit=crop&amp;q=50 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/e7/b34332a4c9434aacd529defcf050da/00-coursera-logotipo.jpg?auto=format%2Ccompress%2C%20enhance&amp;dpr=3&amp;w=265&amp;h=216&amp;fit=crop&amp;q=50 3x" alt="" fetchpriority="high">    
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

// `