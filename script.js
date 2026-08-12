// Lista de filmes com URLs diretas para as imagens de capa
const filmes = [
    { 
        title: "O Poderoso Chefão", 
        synopsis: "A história da família mafiosa Corleone e a ascensão de Michael Corleone.",
        genre: "Crime / Drama",
        rating: "14 Anos",
    },
    { 
        title: "A Lista de Schindler", 
        synopsis: "Oskar Schindler gasta sua fortuna para salvar judeus no Holocausto.",
        genre: "Drama / História",
        rating: "14 Anos",
    },
    { 
        title: "Interestelar (2014)", 
        synopsis: "Exploradores viajam por um buraco de minhoca para salvar a humanidade.",
        genre: "Ficção Científica",
        rating: "10 Anos",
    },
    { 
        title: "Cidade de Deus (2002)", 
        synopsis: "O crescimento da violência em uma favela, visto por um jovem fotógrafo.",
        genre: "Crime / Drama",
        rating: "16 Anos",
    },
    { 
        title: "Matrix", 
        synopsis: "Um hacker descobre a verdadeira natureza de sua realidade.",
        genre: "Ficção / Ação",
        rating: "12 Anos",
    },
    { 
        title: "De Volta para o Futuro", 
        synopsis: "Um adolescente viaja acidentalmente no tempo para o ano de 1955.",
        genre: "Aventura",
        rating: "Livre",
        cover: "https://upload.wikimedia.org/wikipedia/pt/9/97/BackFuturePoster.jpg"
    },
    { 
        title: "Batman: O Cavaleiro das Trevas", 
        synopsis: "Batman enfrenta o Coringa, um criminoso caótico e imprevisível.",
        genre: "Ação",
        rating: "12 Anos",
        cover: "https://upload.wikimedia.org/wikipedia/pt/d/d1/Dark_Knight.jpg"
    },
    { 
        title: "Star Wars: Ep IV", 
        synopsis: "Luke Skywalker se une a uma rebelião para destruir a Estrela da Morte.",
        genre: "Ficção / Aventura",
        rating: "Livre",
        cover: "https://upload.wikimedia.org/wikipedia/pt/0/03/Star_Wars_1977.jpg"
    },
    { 
        title: "Velozes e Furiosos", 
        synopsis: "O início da saga de corridas de rua e a formação da 'família' de Toretto.",
        genre: "Ação",
        rating: "14 Anos",
    },
    { 
        title: "Velozes e Furiosos 5", 
        synopsis: "A equipe planeja um assalto milionário no Rio de Janeiro.",
        genre: "Ação",
        rating: "14 Anos",
    }
];

const movieContainer = document.getElementById('movie-container');

function renderizarFilmes() {
    filmes.forEach(filme => {
        const card = document.createElement('article');
        card.className = 'movie-card';

        card.innerHTML = `
            <img src="${filme.cover}" alt="Capa do filme ${filme.title}" class="movie-cover">
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
