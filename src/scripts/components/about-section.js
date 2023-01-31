class AboutSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <article id="about" class="md:px-[100px] px-[60px] py-20">
        <section class="overflow-hidden">
          <div class="container mx-auto">
            <div class="-mx-4 flex flex-wrap items-center justify-between">
              <div class="w-full px-4 lg:w-6/12">
                <div class="group-image-1 -mx-3 flex items-center sm:-mx-4">
                  <div class="w-full px-3 sm:px-4 xl:w-1/2">
                    <div class="py-3 sm:py-4">
                      <img
                      src="images/lr1.jpg"
                      alt=""
                      class="w-full rounded-2xl"
                        />
                    </div>
                    <div class="py-3 sm:py-4">
                      <img
                      src="images/lr2.jpg"
                      alt=""
                      class="w-full rounded-2xl"
                      />
                    </div>
                  </div>
                  <div class="w-full px-3 sm:px-4 xl:w-1/2">
                    <div class="relative z-10 my-4">
                      <img
                      src="images/lr3.jpg"
                      alt=""
                      class="w-full rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="w-full px-4 lg:w-5/12 xl:w-5/12">
                <div class="mt-10 lg:mt-0">
                  <h2 id="tentang-kami" tabindex="0" class="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                  Tentang Saya
                  </h2>
                  <p class="text-body-color mb-8 text-base text-gray-500">
                  Hai!, Perkenalkan nama saya M.Aji Perdana. Saya lahir di Gisting, Kabupaten Tanggamus, Provinsi Lampung, pada tanggal 24 September 2001. Saya memiliki hobi di bidang otomotif, fotografi dan pemrograman, hal itu sering saya lakukan ketika ada waktu luang. Saat ini saya sedang berkuliah di Universitas Bandar Lampung, jurusan Sistem Informasi Fakultas Ilmu Komputer.
                  </p>
                  <p class="text-body-color mb-12 text-base text-gray-500">
                  Alasan saya memlilih jurusan Sistem Informasi di Universitas Bandar Lampung adalah karna latar belakang saya dari SMK sudah menggeluti jurusan IT, saya melihat sistem dunia saat ini sudah serba digital, itu yang membuat saya ingin memperdalam ilmu IT agar bisa berguna untuk memajukan daerah saya dengan teknologi, Maka dari itu saya melanjutkan kuliah di jurusan Sistem Informasi ini.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    `;
  }
}

customElements.define('about-section', AboutSection);
