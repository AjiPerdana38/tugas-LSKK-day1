class GallerySection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <article id="gallery" class="md:px-[100px] px-[60px] pb-20">
        <h1 class="text-center text-4xl font-bold mb-8">Gallery</h1>
        <div class="flex mx-auto flex-wrap justify-center content-center">
          <img class="rounded-md w-80 m-4 object-center object-cover shadow-lg" src="images/pesisir.jpg"/>
          <img class="rounded-md w-80 m-4 object-center object-cover shadow-lg" src="images/sunrise.jpg"/>
          <img class="rounded-md w-80 m-4 object-center object-cover shadow-lg" src="images/ksr.jpg"/>
          <img class="rounded-md w-80 m-4 object-center object-cover shadow-lg" src="images/bukit.jpg"/>
          <img class="rounded-md w-80 m-4 object-center object-cover shadow-lg" src="images/tgms.jpg"/>
        </div>
      </article>
    `;
  }
}

customElements.define('gallery-section', GallerySection);
