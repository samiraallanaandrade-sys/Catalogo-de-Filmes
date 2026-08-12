const filmes = [
    { 
        title: "O Poderoso Chefão", 
        synopsis: "A história da família mafiosa Corleone e a ascensão de Michael Corleone.",
        genre: "Crime / Drama", rating: "14 Anos",
        cover: "https://upload.wikimedia.org/wikipedia/pt/a/af/The_Godfather_poster_1972.jpg",
        hearts: 120, likes: 450
    },
    { 
        title: "A Lista de Schindler", 
        synopsis: "Oskar Schindler gasta sua fortuna para salvar judeus no Holocausto.",
        genre: "Drama / História", rating: "14 Anos",
        cover: "https://upload.wikimedia.org/wikipedia/pt/a/a2/Schindler%27s_List_poster.jpg",
        hearts: 98, likes: 310
    },
    { 
        title: "Interestelar (2014)", 
        synopsis: "Exploradores viajam por um buraco de minhoca para salvar a humanidade.",
        genre: "Ficção Científica", rating: "10 Anos",
        cover: "https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png",
        hearts: 210, likes: 580
    },
    { 
        title: "Cidade de Deus (2002)", 
        synopsis: "O crescimento da violência em uma favela, visto por um jovem fotógrafo.",
        genre: "Crime / Drama", rating: "16 Anos",
        cover: "https://upload.wikimedia.org/wikipedia/pt/1/10/Capa_Cidade_de_Deus.jpg",
        hearts: 175, likes: 490
    },
    { 
        title: "Matrix", 
        synopsis: "Um hacker descobre a verdadeira natureza de sua realidade.",
        genre: "Ficção / Ação", rating: "12 Anos",
        cover: "https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg",
        hearts: 150, likes: 520
    },
    { 
        title: "De Volta para o Futuro", 
        synopsis: "Um adolescente viaja acidentalmente no tempo para o ano de 1955.",
        genre: "Aventura", rating: "Livre",
        cover: "https://upload.wikimedia.org/wikipedia/pt/9/97/BackFuturePoster.jpg",
        hearts: 130, likes: 400
    },
    { 
        title: "Batman: O Cavaleiro das Trevas", 
        synopsis: "Batman enfrenta o Coringa, um criminoso caótico e imprevisível.",
        genre: "Ação", rating: "12 Anos",
        cover: "https://upload.wikimedia.org/wikipedia/pt/d/d1/Dark_Knight.jpg",
        hearts: 240, likes: 610
    },
    { 
        title: "Star Wars: Ep IV", 
        synopsis: "Luke Skywalker se une a uma rebelião para destruir a Estrela da Morte.",
        genre: "Ficção / Aventura", rating: "Livre",
        cover: "https://upload.wikimedia.org/wikipedia/pt/0/03/Star_Wars_1977.jpg",
        hearts: 110, likes: 380
    },
    { 
        title: "Velozes e Furiosos", 
        synopsis: "O início da saga de corridas de rua e a formação da 'família' de Toretto.",
        genre: "Ação", rating: "14 Anos",
        cover: "https://upload.wikimedia.org/wikipedia/pt/f/f6/Fast_and_furious_2001.jpg",
        hearts: 95, likes: 290
    },
    { 
        title: "+ Velozes + Furiosos", 
        synopsis: "Brian O'Conner se infiltra no crime organizado em Miami.",
        genre: "Ação", rating: "14 Anos",
        cover: "https://upload.wikimedia.org/wikipedia/pt/3/36/2fast2furious.jpg",
        hearts: 80, likes: 230
    },
    { 
        title: "Velozes e Furiosos 4", 
        synopsis: "Dom e Brian se reúnem para derrubar um cartel de drogas.",
        genre: "Ação", rating: "14 Anos",
        cover: "https://upload.wikimedia.org/wikipedia/pt/2/22/Fast_and_Furious_4_poster.jpg",
        hearts: 70, likes: 210
    },
    { 
        title: "Velozes e Furiosos 5: Operação Rio", 
        synopsis: "A equipe planeja um assalto milionário no Rio de Janeiro.",
        genre: "Ação", rating: "14 Anos",
        cover: "https://upload.wikimedia.org/wikipedia/pt/1/1c/Fast_Five_poster.jpg",
        hearts: 160, likes: 470
    },
    { 
        title: "Velozes e Furiosos 6", 
        synopsis: "A equipe enfrenta um grupo de mercenários habilidosos.",
        genre: "Ação", rating: "14 Anos",
        cover: "https://upload.wikimedia.org/wikipedia/pt/1/18/Furious_6_Poster.jpg",
        hearts: 85, likes: 260
    },
    { 
        title: "Velozes e Furiosos: Desafio em Tóquio", 
        synopsis: "Corridas de drift e novos desafios no submundo de Tóquio.",
        genre: "Ação", rating: "14 Anos",
        cover: "https://upload.wikimedia.org/wikipedia/pt/0/08/The_Fast_and_the_Furious_Tokyo_Drift_Poster.jpg",
        hearts: 140, likes: 390
    },
    { 
        title: "Velozes & Furiosos 7", 
        synopsis: "Deckard Shaw busca vingança contra a equipe de Dom.",
        genre: "Ação", rating: "14 Anos",
        cover: "https://upload.wikimedia.org/wikipedia/pt/5/5e/Furious_7_poster.jpg",
        hearts: 190, likes: 510
    },
    { 
        title: "Velozes e Furiosos 8", 
        synopsis: "Uma ciber-terrorista força Dom a trair sua família.",
        genre: "Ação", rating: "14 Anos",
        cover: "https://upload.wikimedia.org/wikipedia/pt/2/2d/Fate_of_the_furious_poster.jpg",
        hearts: 75, likes: 240
    },
    { 
        title: "Hobbs & Shaw", 
        synopsis: "Hobbs e Shaw se unem relutantemente para impedir uma ameaça biológica.",
        genre: "Ação", rating: "14 Anos",
        cover: "https://upload.wikimedia.org/wikipedia/pt/6/69/Hobbs_and_Shaw_poster.jpg",
        hearts: 90, likes: 280
    },
    { 
        title: "Velozes e Furiosos 9", 
        synopsis: "Dom precisa enfrentar os pecados do passado e seu irmão Jakob.",
        genre: "Ação", rating: "14 Anos",
        cover: "https://upload.wikimedia.org/wikipedia/pt/5/52/F9_poster.jpg",
        hearts: 65, likes: 200
    },
    { 
        title: "Velozes e Furiosos 10", 
        synopsis: "O passado de Dom volta para assombrá-lo na forma de Dante Reyes.",
        genre: "Ação", rating: "14 Anos",
        cover: "https://upload.wikimedia.org/wikipedia/pt/8/87/Fast_X_poster.jpg",
        hearts: 110, likes: 320
    }
];

const movieContainer = document.getElementById('movie-container');

function renderizarFilmes() {
    movieContainer.innerHTML = '';

    filmes.forEach((filme, index) => {
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
                <div class="movie-actions">
                    <button type="button" class="btn-action" onclick="toggleHeart(this, ${index})">
                        ❤️ <span class="count-heart">${filme.hearts}</span>
                    </button>
                    <button type="button" class="btn-action" onclick="toggleLike(this, ${index})">
                        👍 <span class="count-like">${filme.likes}</span>
                    </button>
                </div>
            </div>
        `;

        movieContainer.appendChild(card);
    });
}

function toggleHeart(button, index) {
    const countSpan = button.querySelector('.count-heart');
    const isActive = button.classList.toggle('active-heart');
    
    if (isActive) {
        filmes[index].hearts++;
    } else {
        filmes[index].hearts--;
    }
    
    countSpan.textContent = filmes[index].hearts;
}

function toggleLike(button, index) {
    const countSpan = button.querySelector('.count-like');
    const isActive = button.classList.toggle('active-like');
    
    if (isActive) {
        filmes[index].likes++;
    } else {
        filmes[index].likes--;
    }
    
    countSpan.textContent = filmes[index].likes;
}

document.addEventListener('DOMContentLoaded', renderizarFilmes);
