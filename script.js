// Lista completa dos filmes informados
const filmes = [
  { titulo: "Um Sonho de Liberdade", ano: 1994, categoria: "Drama" },
  { titulo: "O Poderoso Chefão", ano: 1972, categoria: "Crime / Drama" },
  { titulo: "A Lista de Schindler", ano: 1993, categoria: "História / Drama" },
  { titulo: "Interestelar", ano: 2014, categoria: "Ficção Científica" },
  { titulo: "Cidade de Deus", ano: 2002, categoria: "Crime / Drama" },
  { titulo: "Matrix", ano: 1999, categoria: "Ficção Científica / Ação" },
  { titulo: "De Volta para o Futuro", ano: 1985, categoria: "Aventura / Ficção" },
  { titulo: "O Senhor dos Anéis: A Sociedade do Anel", ano: 2001, categoria: "Fantasia / Aventura" },
  { titulo: "O Senhor dos Anéis: As Duas Torres", ano: 2002, categoria: "Fantasia / Aventura" },
  { titulo: "O Senhor dos Anéis: O Retorno do Rei", ano: 2003, categoria: "Fantasia / Aventura" },
  { titulo: "Batman: O Cavaleiro das Trevas", ano: 2008, categoria: "Ação / Crime" },
  { titulo: "Star Wars: Episódio IV - Uma Nova Esperança", ano: 1977, categoria: "Ficção / Aventura" },
  { titulo: "Star Wars: O Império Contra-Ataca", ano: 1980, categoria: "Ficção / Aventura" },
  { titulo: "Gladiador", ano: 2000, categoria: "Ação / Drama" },
  { titulo: "Velozes e Furiosos", ano: 2001, categoria: "Ação" },
  { titulo: "+ Velozes + Furiosos", ano: 2003, categoria: "Ação" },
  { titulo: "Velozes e Furiosos: Desafio em Tóquio", ano: 2006, categoria: "Ação" },
  { titulo: "Velozes e Furiosos 4", ano: 2009, categoria: "Ação" },
  { titulo: "Velozes e Furiosos 5: Operação Rio", ano: 2011, categoria: "Ação" },
  { titulo: "Velozes e Furiosos 6", ano: 2013, categoria: "Ação" },
  { titulo: "Velozes & Furiosos 7", ano: 2015, categoria: "Ação" },
  { titulo: "Velozes e Furiosos 8", ano: 2017, categoria: "Ação" },
  { titulo: "Velozes & Furiosos: Hobbs & Shaw", ano: 2019, categoria: "Ação / Spin-off" },
  { titulo: "Velozes e Furiosos 9", ano: 2021, categoria: "Ação" },
  { titulo: "Velozes e Furiosos 10", ano: 2023, categoria: "Ação" }
];

// Elementos do DOM
const movieGrid = document.getElementById("movieGrid");
const searchInput = document.getElementById("searchInput");

// Função para renderizar os cartões na tela
function renderMovies(listaFilmes) {
  movieGrid.innerHTML = "";

  if (listaFilmes.length === 0) {
    movieGrid.innerHTML = `<div class="no-results">Nenhum filme encontrado.</div>`;
    return;
  }

  listaFilmes.forEach((filme) => {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
      <div class="poster-placeholder">
        <span>🎬<br>${filme.titulo}</span>
      </div>
      <div class="movie-info">
        <div class="movie-title">${filme.titulo}</div>
        <div class="movie-details">
          <span>${filme.ano}</span>
          <span class="genre-tag">${filme.categoria}</span>
        </div>
      </div>
    `;

    movieGrid.appendChild(card);
  });
}

// Filtro em tempo real
searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase().trim();
  const filmesFiltrados = filmes.filter((filme) =>
    filme.titulo.toLowerCase().includes(searchTerm)
  );
  renderMovies(filmesFiltrados);
});

// Renderização inicial
renderMovies(filmes);
