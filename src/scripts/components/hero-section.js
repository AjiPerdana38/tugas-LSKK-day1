class HeroSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */`
      <section id="hero"
        class="relative bg-[url('../../public/images/ksr.jpg')] bg-cover bg-center bg-no-repeat animate__animated animate__fadeIn"
      >
        <div
          class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
        ></div>
      
        <div
          class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold sm:text-5xl animate__animated animate__backInLeft">
              M Aji Perdana
      
              <strong class="block font-extrabold text-blue-600">
                The one and only the best or nothing.
              </strong>
            </h1>
      
            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed animate__animated animate__backInLeft">
              Frontend | Backend | Machine Learning enthusias
            </p>
      
            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#about"
                class="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto animate__animated animate__backInUp"
              >
                About Me
              </a>
            </div>
          </div>
        </div>
      </section>  
    `;
  }
}

customElements.define('hero-section', HeroSection);
