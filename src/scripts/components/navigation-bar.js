class NavigationBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /*html*/ `
      <header class="bg-white/90 shadow-nav backdrop-blur-sm fixed top-0 left-0 w-full flex items-center z-50">
        <div class = "w-full py-2 lg:py-1">
          <div class="flex items-center justify-between relative">
            <div class="px-4">
              <a href="#" class="font-bold text-xl lg:text-3xl py-1 flex items-center">
                <img src="images/bottom.png" alt="Logo M Aji Perdana" class="w-56 mr-2">
              </a>
            </div>
            <div class="flex items-center px-4">
              <button id="hamburger" type="button" class="block absolute right-4 pt-3 lg:hidden">
                <span class = "hamburger-lines duration-200 ease-in-out origin-top-left"></span>
                <span class = "hamburger-lines duration-200 ease-in-out"></span>
                <span class = "hamburger-lines duration-200 ease-in-out origin-bottom-left"></span>
              </button>
              <nav id="drawer" class="scale-0 transition duration-200 ease-in-out absolute lg:block lg:scale-100 py-5 bg-white shadow-lg rounded-lg max-w-[200px] w-full right-3 top-16 lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                <ul class = "block lg:flex">
                  <li>
                    <a href="#" class="text-base text-gray-900 hover:text-secondary py-2 mx-6 flex transition duration-200 ease-in-out">Home</a>
                  </li>
                  <li>
                    <a href="#about" class="text-base text-gray-900 hover:text-secondary py-2 mx-6 flex transition duration-200 ease-in-out">About</a>
                  </li>
                  <li>
                    <a href="#gallery" class="text-base text-gray-900 hover:text-secondary py-2 mx-6 flex transition duration-200 ease-in-out">Gallery</a>
                  </li>
                  <li>
                    <a href="#contactMe" class="text-base text-gray-900 hover:text-secondary py-2 mx-6 flex transition duration-200 ease-in-out">Contact Me</a>
                  </li>
                  <li>
                    <div class="flex space-x-2 justify-center w-[130px] lg:w-full mt-0.5 ml-5 lg:ml-1 lg:mr-2">
                      <a href="https://www.linkedin.com/in/m-aji-perdana-3807071bb/">
                        <button
                        type="button"
                        class="inline-block px-8 md:px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      ><i class="fa-brands fa-linkedin"></i> Linkedin</button>
                    </a>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    `;
  }
};

customElements.define('navigation-bar', NavigationBar);
