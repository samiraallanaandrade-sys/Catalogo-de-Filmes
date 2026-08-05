// Lista de filmes agora usando nomes de classes CSS em vez de URLs
const filmes = [
  { 
        title: "O Poderoso Chefão", 
        synopsis: "A história da família mafiosa Corleone e a ascensão de Michael Corleone.",
        genre: "Crime / Drama",
        rating: "14 Anos",
        cover: "https://via.placeholder.com/300x450/222222/ffffff?text=O+Poderoso+Chefão"
    },
    { 
        title: "A Lista de Schindler", 
        synopsis: "Oskar Schindler gasta sua fortuna para salvar judeus no Holocausto.",
        genre: "Drama / História",
        rating: "14 Anos",
        cover: "https://via.placeholder.com/300x450/222222/ffffff?text=A+Lista+de+Schindler"
    },
    { 
        title: "Interestelar (2014)", 
        synopsis: "Exploradores viajam por um buraco de minhoca para salvar a humanidade.",
        genre: "Ficção Científica",
        rating: "10 Anos",
        cover: "https://via.placeholder.com/300x450/222222/ffffff?text=Interestelar"
    },
    { 
        title: "Cidade de Deus (2002)", 
        synopsis: "O crescimento da violência em uma favela, visto por um jovem fotógrafo.",
        genre: "Crime / Drama",
        rating: "16 Anos",
        cover: "https://via.placeholder.com/300x450/222222/ffffff?text=Cidade+de+Deus"
    },
    { 
        title: "Matrix", 
        synopsis: "Um hacker descobre a verdadeira natureza de sua realidade.",
        genre: "Ficção / Ação",
        rating: "12 Anos",
        cover: "https://via.placeholder.com/300x450/222222/ffffff?text=Matrix"
    },
    { 
        title: "De Volta para o Futuro", 
        synopsis: "Um adolescente viaja acidentalmente no tempo para o ano de 1955.",
        genre: "Aventura / Comédia",
        rating: "Livre",
        cover: "https://via.placeholder.com/300x450/222222/ffffff?text=De+Volta+para+o+Futuro"
    },
    { 
        title: "Batman: O Cavaleiro das Trevas", 
        synopsis: "Batman enfrenta o Coringa, um criminoso caótico e imprevisível.",
        genre: "Ação / Policial",
        rating: "12 Anos",
        cover: "https://via.placeholder.com/300x450/222222/ffffff?text=Batman"
    },
    { 
        title: "Star Wars: Ep IV", 
        synopsis: "Luke Skywalker se une a uma rebelião para destruir a Estrela da Morte.",
        genre: "Ficção / Aventura",
        rating: "Livre",
        cover: "https://via.placeholder.com/300x450/222222/ffffff?text=Star+Wars+IV"
    },
    { 
        title: "Velozes e Furiosos", 
        synopsis: "O início da saga de corridas de rua e a formação da 'família' de Toretto.",
        genre: "Ação",
        rating: "14 Anos",
        cover: "https://via.placeholder.com/300x450/222222/ffffff?text=Velozes+e+Furiosos"
    },
    { 
        title: "Velozes e Furiosos 5: Operação Rio", 
        synopsis: "A equipe planeja um assalto milionário no Rio de Janeiro.",
        genre: "Ação",
        rating: "14 Anos",
        cover: "https://via.placeholder.com/300x450/222222/ffffff?text=Velozes+5"
    }

const movieContainer = document.getElementById('movie-container');

function renderizarFilmes() {
    filmes.forEach(filme => {
        const card = document.createElement('article');
        card.className = 'movie-card';

        // Trocamos a tag <img> por uma <div> e adicionamos a classe dinâmica do filme
        card.innerHTML = `
            <div class="movie-cover ${filme.cssClass}" title="Capa do filme ${filme.title}"></div>
            <div class="movie-info">
                <h2 class="movie-title">${filme.title}</h2>
                <div class="movie-meta">
                    <span class="movie-genre">${filme.genre}</span>
                    <span class="movie-rating">${filme.rating}</span>
                </div>
                <p class="movie-synopsis">${filme.synopsis}</p>
            </div>
        `;

        movieContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderizarFilmes);
