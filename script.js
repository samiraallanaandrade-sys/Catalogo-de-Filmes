// Lista de filmes com dados adicionados (gênero, classificação e imagem de capa)
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
    // Nota: Reduzi a lista dos Velozes e Furiosos no código para exemplo, mas você pode adicionar os outros seguindo exatamente o mesmo formato!
];

// Seleciona o container onde os filmes vão aparecer
const movieContainer = document.getElementById('movie-container');

// Função para renderizar os filmes
function renderizarFilmes() {
    filmes.forEach(filme => {
        // Cria o elemento do cartão
        const card = document.createElement('article');
        card.className = 'movie-card';

        // Monta o conteúdo HTML interno do cartão
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

        // Adiciona o cartão ao container na página
        movieContainer.appendChild(card);
    });
}

// Executa a função quando a página carregar
document.addEventListener('DOMContentLoaded', renderizarFilmes);
