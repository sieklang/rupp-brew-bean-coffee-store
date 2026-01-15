// =====================
// CART STATE
// =====================
let cartItems = [];

// =====================
// ADD TO CART
// =====================
// =====================
// ADD TO CART
// =====================
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".add-to-cart");
  if (!btn) return;

  const id = parseInt(btn.dataset.id);           // ← most important
  const title = btn.dataset.title?.trim() || "Unknown";
  const priceRaw = btn.dataset.price || "0";
  const img = btn.dataset.img || "";

  // Clean price (your existing good code)
  const cleaned = priceRaw
    .replace(/[^0-9.]/g, '')
    .replace(/^\.+|\.+$/g, '')
    .replace(/\.{2,}/g, '.');

  const price = parseFloat(cleaned) || 0;

  if (price <= 0 || isNaN(id)) {
    alert("Sorry, this item has invalid price or ID.");
    console.warn("Invalid item → ID:", id, "Price raw:", priceRaw);
    return;
  }

  // Find by id instead of title
  const existing = cartItems.find(item => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cartItems.push({ 
      id,           // ← store the id
      title, 
      price, 
      img, 
      qty: 1 
    });
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
    totalEl && (totalEl.innerText = "$0");
    mobileBadge && (mobileBadge.innerText = 0);
    desktopBadge && (desktopBadge.innerText = 0);
    return;
  }

  emptyMsg?.classList.add("d-none");

  let totalQty = 0;
  let totalPrice = 0;

  cartItems.forEach((item, index) => {
    totalQty += item.qty;
   totalPrice += (Number(item.price) || 0) * (Number(item.qty) || 1);

    cartList.innerHTML += `
      <li class="list-group-item d-flex align-items-center gap-3">
        <img src="${item.img}" width="50" class="rounded">

        <div class="flex-grow-1">
          <strong>${item.title}</strong><br>
       <small>$${(item.price || 0).toFixed(2)}</small>

        </div>

        <div class="d-flex align-items-center gap-2">
          <button class="btn btn-sm btn-outline-secondary qty-minus" data-index="${index}">−</button>
          <span>${item.qty}</span>
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
    const index = e.target.dataset.index;
    cartItems[index].qty++;
    updateCartUI();
  }

  if (e.target.classList.contains("qty-minus")) {
    const index = e.target.dataset.index;
    cartItems[index].qty--;

    if (cartItems[index].qty === 0) {
      cartItems.splice(index, 1);
    }
    updateCartUI();
  }

  if (e.target.closest(".remove-item")) {
    const index = e.target.closest(".remove-item").dataset.index;
    cartItems.splice(index, 1);
    updateCartUI();
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
  alert("Payment successful ");

  cartItems = [];
  updateCartUI();

  bootstrap.Modal.getInstance(
    document.getElementById("cartModal")
  )?.hide();
}); 