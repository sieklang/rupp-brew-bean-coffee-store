// asset/js/menu-sections.js

const coffees= [
  {
    id:1,
    name: "CAPPUCINO",
    desc: "Rich & cozy with marshmallows",
    price: " $1.90 ",
    img: "./asset/image/cappucino.jpg"

  },
  {
    id:2,
    name: "LATTE MACHITO",
    desc: "Perfect espresso & foam balance",
    price: " $1.20 ",
    img: "./asset/image/latte macchito.jpg"
   
  },
  { id:3,
    name: "ICE COFFEE",
    desc: "Creamy & indulgent",
    price: " $1.00 ",
    img: "./asset/image/ice-black-coffee.jpg"
  },
  { 
    id:4,
    name: "ICE CARAMEL",
    desc: "ICE CARAMEL",
    price: " $1.10 ",
     img: "./asset/image/ice-caramel.jpg"
  },
   {
    id:5,
    name: "BLACK ICE COFFEE VIETNAMESE ",
    desc: "Black Coffee",
    price: " $1.10 ",
     img: "./asset/image/Black Ice Coffee Vietnamese.jpg"
  },
   {
    id:6,
    name: "Caramel Macchiato",
    desc: "Caramel Macchiato",
    price: " $1.10 ",
     img: "./asset/image/Caramel Macchiato.jpg"
  },
  ,
   {
    id:7,
    name: "DALGONA COFFEE",
    desc: "DALGONA COFFEE",
    price: "$1.10",
     img: "./asset/image/Dalgona Coffee.jpg"
  },
  {
    id:8,
    name: "Avocado Banana Smoothie Recipe",
    desc: "Avocado Banana Smoothie Recipe",
    price: "$4.10",
     img: "./asset/image/Avocado Banana Smoothie Recipe.jpg"
  },
];
class Coffee extends HTMLElement {
  connectedCallback() {
    let coffee = "";

    coffees.forEach(item => {
      coffee += `
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
          <h3 class="section-title pt-5">COFFEE</h3>
          <p class="section-desc">Our customers' all-time favorites</p>
        </div>
        <div class="container my-5">
          <div class="row g-4">
            ${coffee}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("coffee-component", Coffee);


const teas = [
  {
    id:9,
    name: "Iced green tea coffee",
    desc: "Premium Japanese matcha",
    price: "$1.80",
    img: "./asset/image/Iced green tea coffee.jpg"
  },
  {
    id:10,
    name: "Strawberry matcha latte",
    desc: "Over-the-top milkshake madness",
    price: "$1.90",
    img: "./asset/image/Strawberry matcha latte.jpg"
  },
  {
    id:11,
    name: "Iced Matcha Latte",
    desc: "Over-the-top milkshake madness",
    price: "$1.90",
    img: "asset/image/Iced Matcha Latte.jpg"
  },
  {
    id:12,
    name: "Green Tea Milk",
    desc: "Over-the-top milkshake madness",
    price: "$1.90",
    img: "asset/image/greentea.jpg"
  },
   {
    id:13,
    name: "Matcha Lemonade",
    desc: "Matcha Lemonade",
    price: " $1.80",
    img: "./asset/image/Matcha Lemonade.jpg"
  },
  {
    id:14,
    name: "Mango matcha latte",
    desc: "Mango matcha latte",
    price: "One Size $9.90",
    img: "./asset/image/Mango matcha latte.jpg"
  },
  {
    id:15,
    name: "Matcha Blueberry Lemonade",
    desc: "Matcha Blueberry Lemonade",
    price: " $1.90",
    img: "asset/image/Matcha Blueberry Lemonade.jpg"
  },
  { id:16,
    name: "Cheesy Loaded Pocket Tacos Packed with bold Flavor",
    desc: "Cheesy Loaded Pocket Tacos Packed with bold Flavor",
    price: " $1.90",
    img: "asset/image/Cheesy Loaded Pocket Tacos Packed with bold Flavor.jpg"
  }
];
class Tea extends HTMLElement {
  connectedCallback() {
    let teaCards = "";

    teas.forEach(item => {
      teaCards += `
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
          <h3 class="section-title">MATCHA & MILK TEA</h3>
          <p class="section-desc">Seasonal specials and new arrivals</p>
        </div>
        <div class="container my-5">
          <div class="row g-4">
            ${teaCards}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("tea-component", Tea);
const frapes = [
  {
    id:17,
    name: "Vanilla Bean Frappuccino",
    desc: "Vanilla Bean Frappuccino",
    price: "S $1.90 • M $2.90 • L $3.00",
    img: "./asset/image/Vanilla Bean Frappuccino Recipe.jpg"
  },
  {
    id:18,
    name: "Ice-cream chocolate shake",
    desc: "Ice-cream chocolate shake",
    price: " $1.00",
    img: "./asset/image/chocolate-ice-shake.jpg"
  },
  {
    id:19,
    name: "ICE COFFEE",
    desc: "Creamy & indulgent",
    price: "$1.50",
    img: "./asset/image/OREO MILKSHAKE.jpg"
  },
  {
    id:20,
    name: "Blueberry Milkshake",
    desc: "Blueberry Milkshake",
    price: "$1.10",
    img: "./asset/image/Blueberry Milkshake.jpg"
  },
  {
    id:21,
    name: "Raspberry Milkshake",
    desc: "Black Coffee",
    price: "$1.10",
    img: "./asset/image/Raspberry Milkshake.jpg"
  },
  {
    id:22,
    name: "Strawberry & Cream Frappe",
    desc: "Strawberry & Cream Frappe",
    price: "$1.10",
    img: "./asset/image/Strawberry & Cream Frappe.jpg"
  },
  {
    id:23,
    name: "Peach Milkshake",
    desc: "Peach Milkshake",
    price: "$1.10",
    img: "./asset/image/Peach Milkshake.jpg"
  },
  {
    id:24,
    name: "White Chocolate Frappuccino",
    desc: "White Chocolate Frappuccino",
    price: "$1.10",
    img: "./asset/image/White Chocolate Frappuccino.jpg"
  }
];

class Frape extends HTMLElement {
  connectedCallback() {
    let frape = "";

    frapes.forEach(item => {
      frape += `
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
          <h3 class="section-title pt-5">SHAKE DRINK</h3>
          <p class="section-desc">Our customers' all-time favorites</p>
        </div>
        <div class="container my-5">
          <div class="row g-4">
            ${frape}
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("frap-component", Frape);


