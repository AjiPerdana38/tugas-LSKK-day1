class ContactMe extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <section id="contactMe" class="bg-gradient-to-r from-green-400 to-[#6c71b4] w-full">
        <article id="gallery" class="md:px-[100px] px-[60px] pb-20 pt-10">
          <h1 class="text-center text-4xl font-bold mb-8 text-white">Contact Me</h1>
          <div class="flex flex-wrap flex-row justify-center items-center">
            <div class="h-72 w-72 rounded-md border flex justify-center items-center flex-col bg-white shadow-lg m-6">
              <h1><i class="fa-brands fa-whatsapp text-5xl text-green-500 mb-8"></i></h1>
              <h2>085695951121</h2>
            </div>
            <div class="h-72 w-72 rounded-md border flex justify-center items-center flex-col bg-white shadow-lg m-6">
              <h1><i class="fa-regular fa-envelope text-5xl text-red-500 mb-8"></i></h1>
              <h2>ajicooljazz38@gmail.com</h2>
            </div>
            <div class="h-72 w-72 rounded-md border flex justify-center items-center flex-col bg-white shadow-lg m-6">
              <h1><i class="fa-brands fa-telegram text-5xl text-blue-500 mb-8"></i></h1>
              <h2>@ajiaje38</h2>
            </div>
          </div>
        </article>
      </section>
    `;
  }
}

customElements.define('contact-me', ContactMe);