class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
     <header>
    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">

            <!-- Logo + Brand Name (left) -->
            <div class="d-flex align-items-center">
                <a class="navbar-brand" href="index.html">
                    <img src="./asset/image/logo.jpg" alt="Brew & Bean Logo" class="logo">
                </a>
                <h2 class="mb-0 ms-2" style="color: #6E473B; font-family: 'Playfair Display', serif;">
                    Brew & Bean
                </h2>
            </div>

            <!-- Toggler for mobile -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" 
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Main navigation content -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">

  <!-- Center navigation links -->
  <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="nav-link nav-page" href="index.html">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link nav-page" href="menu.html">Menu</a>
    </li>
    <li class="nav-item">
      <a class="nav-link nav-page" href="aboutus.html">About Us</a>
    </li>
    <li class="nav-item">
      <a class="nav-link nav-page" href="contact.html">Contact</a>
    </li>
  </ul>

  <!-- Right side cart -->
  <ul class="navbar-nav ms-lg-3">
    <li class="nav-item cart-icon">
      <a class="nav-link open-cart" href="#">
        <i class="fa-solid fa-basket-shopping"></i>
        <span class="cart-count" id="cartBadgeMobile">0</span>
      </a>
    </li>
  </ul>

</div>

                </ul>
            </div>
        </div>
           
    </nav>
</header>
    `;
    const currentPage = window.location.pathname === "/"
      ? "index.html"
      : window.location.pathname.split("/").pop();

    this.querySelectorAll(".nav-page").forEach(link => {
      const linkPage = link.getAttribute("href").split("/").pop();
      if (linkPage === currentPage) {
        link.classList.add("active");
      }
    });
}}
customElements.define('header-component', Header);