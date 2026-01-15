class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-light py-5 mt-5">
        <div class="container">
          <div class="row">

            <div class="col-12 col-sm-6 col-md-4 mb-4 text-center">
              <h5 class="fw-bold mb-3" style="color: #291C0E;">Product</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><a href="#" class="text-decoration-none" style="color: #6E473B;">Ice Latte</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none" style="color: #6E473B;">Espresso</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none" style="color: #6E473B;">Milk Shake</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none" style="color: #6E473B;">Matcha</a></li>
              </ul>
            </div>

            <div class="col-12 col-sm-6 col-md-4 mb-4 text-center">
              <h5 class="fw-bold mb-3" style="color: #291C0E;">Company Info</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><a href="#" class="text-decoration-none" style="color: #6E473B;">About Us</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none" style="color: #6E473B;">Menu</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none" style="color: #6E473B;">Contact</a></li>
              </ul>
            </div>

            <div class="col-12 col-md-4 mb-4 text-center">
              <h5 class="fw-bold mb-3" style="color: #291C0E;">Follow Us</h5>
              <div class="d-flex gap-4 justify-content-center">
                <a href="#" style="color:#6E473B;font-size:1.8rem"><i class="fa-brands fa-facebook"></i></a>
                <a href="#" style="color:#6E473B;font-size:1.8rem"><i class="fa-brands fa-instagram"></i></a>
                <a href="#" style="color:#6E473B;font-size:1.8rem"><i class="fa-brands fa-twitter"></i></a>
                <a href="#" style="color:#6E473B;font-size:1.8rem"><i class="fa-brands fa-facebook-messenger"></i></a>
              </div>
            </div>

          </div>

          <hr class="my-4">
          <div class="text-center" style="color:#6E473B">
            <p class="mb-0">&copy; 2026 Your Coffee Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
