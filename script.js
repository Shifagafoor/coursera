const arrows = document.querySelectorAll(".there");

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    arrow.parentNode.classList.toggle("show");
  });
});

const filterClick = document.querySelector(".whole_filter");
const filter_two = document.querySelector(".filter_two");

filterClick.addEventListener("click", () => {
  console.log("click");
  filter_two.classList.add("filter_two_active");
});

const close_span = document.querySelector(".close_span");

close_span.addEventListener("click", () => {
  console.log("remove");
  filter_two.classList.remove("filter_two_active");
});

// fetch

let Fullcourses = [];

async function fetchData() {
  try {
    const response = await fetch("./coursera.json");
    const data = await response.json();
    console.log("data:)", data.courses);
    Fullcourses = data.courses;
    updateCard(Fullcourses);

    return Fullcourses;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();


const english_whole = document.querySelector(".english_whole ul");

async function updateCard(courses) {
  console.log(courses);

  courses.forEach((item) => {
    // console.log(item)
  
    const card = document.createElement("li");
  console.log("hi")
  console.log(card)
    card.innerHTML = `
          <div class="common">
              <div class="process">
                  <div class="workplace">
                      <div class="free_button"  style="display: none";>
                          <span class="free_buttons" id="free_button">Free</span>
                      </div>
                      <div class="project">
                          <div class="net">
                              <div class="business_one">
                                  <div class="business_img">
                                      <img src="${item.local_link}">
                                      <p>${item.image_title}</p>
                                                      
                                  </div>
                                  <div class="analysis">
                                      <h3>${item.main_title}</h3>
                                  </div>
                              </div>
                             ${
                               item.skills_gain
                                 ? `
                              <div class="skills">
                                  <p class="skill">
                                  <b class="skill_gain">Skills you'll gain:</b>
                                      ${item.skills_gain}
                                  </p>
                              </div>
                               `
                                 : ""
                             }
                              <div class="product_card">
                                  <div class="star">
                                      <div ></div>
                                      <div class="star_two">
                                          <div class="star_rating">
                                              <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" class="star_two" id="cds-react-aria-248"><path d="M17.51 7.77h-5.32l-1.78-5.46a.45.45 0 00-.85 0l-1.8 5.46H2.45A.45.45 0 002 8.2a.43.43 0 00.16.35L6.66 12l-1.72 5.43a.45.45 0 00.3.56.43.43 0 00.39-.08L10 14.53l4.38 3.38a.44.44 0 00.69-.48L13.33 12l4.49-3.44a.43.43 0 00-.03-.73.501.501 0 00-.28-.06z" fill="#F2D049"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.7 1.547a.947.947 0 011.199.62l1.666 5.111 4.967-.003a.923.923 0 01.794.388.922.922 0 01-.216 1.294l-4.19 3.212 1.621 5.083a.931.931 0 01-1.475 1.03l-4.05-3.132-4.053 3.163a.934.934 0 01-.838.158.94.94 0 01-.643-1.177l.002-.006 1.618-5.094-4.207-3.213a.94.94 0 01.612-1.702h4.91L9.111 2.13a.94.94 0 01.58-.58l.009-.003zm7.656 6.728l-5.517.004L10 2.632 8.14 8.28H2.623l4.645 3.547-1.773 5.584 4.518-3.526 4.519 3.494-1.78-5.575 4.604-3.528z" fill="#7C6919"></path></svg>
                                              <span class="rating">${
                                                item.rating
                                              }</span>
                                          </div>
                                          <span>·</span>
                                          <div class="reviews">${
                                            item.reviews
                                          } reviews</div>
                                      </div>
                                      <div class="begineer">${
                                        item.begineer
                                      }</div>
                                  </div>
                              </div>
                          </div>
                          <div class="course_business">
                              <img src="${item.main_link}">
                          </div>
                      </div>
                  </div>
              </div>
          </div>`;

    english_whole.appendChild(card);
    const common_divs = document.querySelectorAll(".process");
    //   console.log(common_divs);

    common_divs.forEach((cards) => {
      // console.log(cards);
      cards.addEventListener("mouseenter", () => {
        cards.classList.add("common_hover");
      });
      cards.addEventListener("mouseleave", () => {
        cards.classList.remove("common_hover");
      }); 
    });
  });
}

// filter
const inputNodeList = document.querySelectorAll(".tech input");
console.log(inputNodeList);
async function getChecked() {
  let ClickedArray = [];
  let inputNodeListArray = Array.from(inputNodeList);
  ClickedArray = inputNodeListArray.filter((item) => item.checked == true);
  let mapd = ClickedArray.map((i) => i.id.toUpperCase());
  console.log("mapd", mapd);
  filter(mapd);
}

inputNodeList.forEach((inputEle) => {
  inputEle.addEventListener("click", () => {
    getChecked();
  });
});
  let filterdArray = []

function filter(mapd) {
   filterdArray = []

  Fullcourses.forEach((course) => {
    // console.log(course.subject  ,  mapd)
    if (mapd.includes(course.subject.toUpperCase())||mapd.includes(course.language.toUpperCase())||mapd.includes(course.Learning_Product.toUpperCase())||mapd.includes(course.Level.toUpperCase())||mapd.includes(course.Learning_Product.toUpperCase())||mapd.includes(course.Duration.toUpperCase())||mapd.includes(course.Skills.toUpperCase())||mapd.includes(course.Subtitles.toUpperCase())||mapd.includes(course.Educator.toUpperCase())) {
      filterdArray.push(course) 
    }
  })
  english_whole.innerHTML = ""; 

  if(filterdArray.length > 0) {
    updateCard(filterdArray)
  }else{
    updateCard(Fullcourses);
  }
  console.log("FilArray",filterdArray)

}


// btns

const explore = document.querySelector(".explore-btn");
const goal = document.querySelector(".goals");
explore.addEventListener("click", () => {
  console.log("click");
  goal.classList.toggle("goal_active");
});

explore.addEventListener("mouseenter", () => {
  goal.classList.add("goal_active");
});
explore.addEventListener("mouseleave", () => {
  goal.classList.remove("goal_active");
});

// const careers = document.querySelector(".careers a")
// careers.addEventListener("mouseenter", () => {
//   careers.classList.add("careers");
// });
// careers.addEventListener("mouseleave", () => {
//   careers.classList.remove("common_hover");
// }); 