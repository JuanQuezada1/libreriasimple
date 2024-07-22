const Libros = [
    {
      titulo: "Libro 1",
      sinopsis: "Sisnopsis del libro 1",
      fecha: "12 de abril del 1999",
      editorial: "Conejo",
      paginas: 255,
      autor: "Pedro Veldebenito",
      digital: false,
    },
    {
      titulo: "Libro 2",
      sinopsis: "Sisnopsis del libro 2",
      fecha: "12 de abril del 2003",
      editorial: "Conejo rabioso",
      paginas: 100,
      autor: "Pedro Veldebenito",
      digital: false,
    },
    {
      titulo: "Libro 3",
      sinopsis: "Sisnopsis del libro 3",
      fecha: "12 de abril del 2007",
      editorial: "Canguro agresivo",
      paginas: 322,
      autor: "Marcelo Emmott",
      digital: true,
    },
  ];
  
  const contenedorLibros = document.querySelector(".libros-container");
  const bookForm = document.querySelector("#book-form");
  
  bookForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const bookInfo = Object.fromEntries(formData);
    Libros.push(bookInfo);
    renderizarLibros();
  });
  
  function renderizarLibros() {
    let html = "";
    let iter = 0;
    for (const libro of Libros) {
      let estaDisponible;
      let claseDisponible;
  
      if (libro.digital) {
        estaDisponible = "Sí";
        claseDisponible = "disponible";
      } else {
        estaDisponible = "No";
        claseDisponible = "nodisponible";
      }
  
      html += `
            <article class="libro ${claseDisponible}">
            <span id="libro-${iter}">X</span>    
            <header>
                  <h2>${libro.titulo}</h2>
                  <p>autor: ${libro.autor}</p>
                  <p>${libro.sinopsis}</p>
                </header>
                <div class="content">
                  <p>páginas: ${libro.paginas}</p>
                  <p>lanzado el: ${libro.fecha}</p>
                  <p>editorial: ${libro.editorial}</p>
                  <p>disponible digital: ${estaDisponible}</p>
                </div>
              </article>
            `;
      iter++;
    }
    contenedorLibros.innerHTML = html;
    const books = document.querySelectorAll(".libro");
  
    for (const book of books) {
      book.querySelector("span").addEventListener("click", eliminarLibro);
    }
  }
  
  function eliminarLibro(event) {
    const id = event.target.id;
    // libro-0
    const index = +id.replace("libro-", ""); // "0"
    console.log(index);
    Libros.splice(index, 1);
    renderizarLibros();
  }
  
  renderizarLibros();
  
  
