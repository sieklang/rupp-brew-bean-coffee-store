// asset/js/menu-sections.js

const mostPopularItems = [
  {
    id:1,
    name: "Hot Chocolate",
    desc: "Rich & cozy with marshmallows",
    price: " $1.90",
    img: "./asset/image/cappucino.jpg"
  },
  {
    id:2,
    name: "Cappuccino",
    desc: "Perfect espresso & foam balance",
    price: " $1.20 ",
    img: "./asset/image/latte macchito.jpg"
   
  },
  {
    id:3,
    name: "Matcha Latte",
    desc: "Creamy & indulgent",
    price: " $1.50 ",
    img: "./asset/image/ice-vanilla-late.jpg"
  },
  {
    id:4,
    name: " chocolate Latte",
    desc: "Black Coffee",
    price: " $1.10 ",
     img: "./asset/image/cocholate-late.jpg"
  },
   {
    id:5,
    name: "Latte",
    desc: "Black Coffee",
    price: " $1.10 ",
     img: "./asset/image/latte.jpg"
  },
   {
    id:6,
    name: "Ice caramel",
    desc: "Black Coffee",
    price: " $1.10 ",
     img: "./asset/image/ice-caramel.jpg"
  },
  ,
   {
    id:7,
    name: "Ice caramel",
    desc: "Black Coffee",
    price: " $1.10 ",
    img: "./asset/image/Masala Soda.jpg"
  },
  {
    id:8,
    name: "Ice caramel",
    desc: "Black Coffee",
    price: " $1.10 ",
     img: "./asset/image/stawberry-soda.jpg"
  },
];
class MostPopularSection extends HTMLElement {
  connectedCallback() {
    let cards = "";

    mostPopularItems.forEach(item => {
      cards += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
            <img 
              src="${item.img}" 
              class="card-img-top" 
              style="height: 220px; object-fit: cover;" 
              alt="${item.name}"
              loading="lazy"
            >
            <div class="card-body text-center py-4 bg-white">
              <h5 class="card-title mb-3">${item.name}</h5>
              <p class="small text-muted mb-2">${item.desc}</p>
              <p class="fw-bold mb-3">${item.price}</p>
              <button 
                class="order-button add-to-cart text-decoration-none"
                data-id="${item.id}"
                data-title="${item.name}"
                data-price="${item.price.trim()}"
                data-img="${item.img}">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      `;
    });

    this.innerHTML = `
      <section class="py-5 bg-light mt-5">
        <div class="container text-center">
          <h3 class="section-title pt-5">MOST POPULAR</h3>
          <p class="section-desc">Our customers' all-time favorites</p>
        </div>
        <div class="container my-5">
          <div class="row g-4">
            ${cards}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("mostpopular-section", MostPopularSection);


const trendingItems = [
  {
    id:1,
    name: "Vanilla Milk Tea",
    desc: "Premium Japanese matcha",
    price: " $1.80 ",
    img: "./asset/image/Iced green tea coffee.jpg"
  },
  {
    id:2,
    name: "Green Tea Milk",
    desc: "Over-the-top milkshake madness",
    price: "$1.90",
    img: "./asset/image/Strawberry matcha latte.jpg"
  },
  {
    id:3,
    name: "Green Tea Milk",
    desc: "Over-the-top milkshake madness",
    price: "$1.90",
    img: "asset/image/Iced Matcha Latte.jpg"
  },
  {
    id:4,
    name: "Green Tea Milk",
    desc: "Over-the-top milkshake madness",
    price: "$1.90",
    img: "asset/image/greentea.jpg"
  },
   {
    id:5,
    name: "Vanilla Milk Tea",
    desc: "Premium Japanese matcha",
    price: " $1.80",
    img: "./asset/image/LEMON MINT.jpg"
  },
  {
    id:6,
    name: "Green Tea Milk",
    desc: "Over-the-top milkshake madness",
    price: " $1.90",
    img: "./asset/image/Iced Tea Recipe.jpg"
  },
  {
    id:7,
    name: "Green Tea Milk",
    desc: "Over-the-top milkshake madness",
    price: "$1.90",
    img: "asset/image/iced tea with peach.jpg"
  },
  {
    id:8,
    name: "Green Tea Milk",
    desc: "Over-the-top milkshake madness",
    price: "$1.90",
    img: "asset/image/Butterfly Pea Tea Lemonade.jpg"
  }
];
class TrendingSection extends HTMLElement {
  connectedCallback() {
    // Assuming trendingItems is defined somewhere (same structure as mostPopularItems)
    let cards = "";

    trendingItems.forEach(item => {
      cards += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <div class="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
            <img 
              src="${item.img}" 
              class="card-img-top" 
              style="height: 220px; object-fit: cover;" 
              alt="${item.name}"
              loading="lazy"
            >
            <div class="card-body text-center py-4 bg-white">
              <h5 class="card-title mb-3">${item.name}</h5>
              <p class="small text-muted mb-2">${item.desc}</p>
              <p class="fw-bold mb-3">${item.price}</p>
              <button 
                class="order-button add-to-cart text-decoration-none"
                data-id="${item.id}"
                data-title="${item.name}"
                data-price="${item.price.trim()}"
                data-img="${item.img}">
                Add to Cart
              </button>           
            </div>
          </div>
        </div>
      `;
    });

    this.innerHTML = `
      <section class="py-5">
        <div class="container text-center">
          <h3 class="section-title">TRENDING NOW</h3>
          <p class="section-desc">Seasonal specials and new arrivals</p>
        </div>
        <div class="container my-5">
          <div class="row g-4">
            ${cards}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("trending-section", TrendingSection);

