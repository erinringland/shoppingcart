// The purpose of the javascript file is to handle the shopping cart processs
// Authors Maggie Dalke, Adebayo Oduwobi, and Erin Ringland


class Cart {
  constructor() {
    this.coursesArr = [];
    this.length = 0;
  }

  addCourse(id) {
    this.coursesArr.push(courses[id]);
    this.renderList();
  }

  removeCourse(id) {
    this.coursesArr = this.coursesArr.filter(item => item)
  }

  subtotal() {

  }

  total() {

  }

  renderList() {
    cartListItems.innerHTML = "";
    this.coursesArr.forEach(function (course) {
      cartListItems.insertAdjacentHTML('afterbegin',
       `<li>
          <img src="images/tools.png">  
            <div id="cart-title">test</div>
            <div id="cart-price">.money}</div>
            <div id="delete">
            <i class="far fa-times-circle"></i>
            </div>
        </li>
      `)
      
    })
  }

}

const purchase = new Cart();


// console.log(purchase);

const cartListItems = document.querySelector('.cart-list');


purchase.renderList();


// Event Listeners

document.addEventListener('click', function (e) {
  // console.log(e);
  // console.log(e.target.id);
  if (e.target.id === 'add-to-cart') {
    // console.log(e.target.id);
    purchase.addCourse();
    // console.log(purchase);
    const infoData = e.target.parentElement.parentElement;
    const finalInfoData = infoData.getAttribute("data-course-id");
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
})


/* <ul>
    <ul></ul>
    <items>
*/
const date = document.querySelector('fsyr')