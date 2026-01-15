// =====================
// CART STATE
// =====================
let cartItems = [];

// =====================
// ADD TO CART
// =====================
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".add-to-cart");
  if (!btn) return;

  const title = btn.dataset.title;
  const price = parseFloat(btn.dataset.price);
  const img = btn.dataset.img;

  if (isNaN(price)) {
    console.error("Invalid price for item:", title);
    return;
  }

  const existing = cartItems.find(item => item.title === title);

  if (existing) {
    existing.qty++;
  } else {
    cartItems.push({ title, price, img, qty: 1 });
  }

  updateCartUI();
});

// =====================
// UPDATE CART UI
// =====================
function updateCartUI() {
  const cartList = document.getElementById("cartItems");
  const emptyMsg = document.getElementById("emptyCartMsg");
  const totalEl = document.getElementById("cartTotal");
  const mobileBadge = document.getElementById("cartBadgeMobile");
  const desktopBadge = document.getElementById("cartBadgeDesktop");

  if (!cartList) return;

  cartList.innerHTML = "";

  if (cartItems.length === 0) {
    emptyMsg?.classList.remove("d-none");
    totalEl && (totalEl.innerText = "$0.00");
    mobileBadge && (mobileBadge.innerText = 0);
    desktopBadge && (desktopBadge.innerText = 0);
    return;
  }

  emptyMsg?.classList.add("d-none");

  let totalQty = 0;
  let totalPrice = 0;

  cartItems.forEach((item, index) => {
    const itemPrice = isNaN(item.price) ? 0 : item.price;
    const itemQty = isNaN(item.qty) ? 0 : item.qty;

    totalQty += itemQty;
    totalPrice += itemPrice * itemQty;

    cartList.innerHTML += `
      <li class="list-group-item d-flex align-items-center gap-3">
        <img src="${item.img}" width="50" class="rounded">

        <div class="flex-grow-1">
          <strong>${item.title}</strong><br>
          <small>$${itemPrice.toFixed(2)}</small>
        </div>

        <div class="d-flex align-items-center gap-2">
          <button class="btn btn-sm btn-outline-secondary qty-minus" data-index="${index}">−</button>
          <span>${itemQty}</span>
          <button class="btn btn-sm btn-outline-secondary qty-plus" data-index="${index}">+</button>
        </div>

        <button class="btn btn-sm btn-outline-danger remove-item" data-index="${index}">
          <i class="fas fa-trash"></i>
        </button>
      </li>
    `;
  });

  totalEl && (totalEl.innerText = `$${totalPrice.toFixed(2)}`);
  mobileBadge && (mobileBadge.innerText = totalQty);
  desktopBadge && (desktopBadge.innerText = totalQty);
}

// =====================
// PLUS / MINUS / DELETE
// =====================
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("qty-plus")) {
    const index = parseInt(e.target.dataset.index);
    if (!isNaN(index) && cartItems[index]) {
      cartItems[index].qty++;
      updateCartUI();
    }
  }

  if (e.target.classList.contains("qty-minus")) {
    const index = parseInt(e.target.dataset.index);
    if (!isNaN(index) && cartItems[index]) {
      cartItems[index].qty--;
      if (cartItems[index].qty <= 0) {
        cartItems.splice(index, 1);
      }
      updateCartUI();
    }
  }

  if (e.target.closest(".remove-item")) {
    const index = parseInt(e.target.closest(".remove-item").dataset.index);
    if (!isNaN(index)) {
      cartItems.splice(index, 1);
      updateCartUI();
    }
  }
});

// =====================
// OPEN CART MODAL
// =====================
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".open-cart");
  if (!btn) return;

  e.preventDefault();
  const modal = document.getElementById("cartModal");
  if (!modal) return;

  new bootstrap.Modal(modal).show();
});

// =====================
// PURCHASE
// =====================
document.addEventListener("click", function (e) {
  if (!e.target.matches("#purchaseBtn")) return;

  if (cartItems.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  localStorage.setItem("purchasedProducts", JSON.stringify(cartItems));
  alert("Payment successful");

  cartItems = [];
  updateCartUI();

  bootstrap.Modal.getInstance(document.getElementById("cartModal"))?.hide();
});