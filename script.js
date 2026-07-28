// 1. Lista de filmes (Array de Objetos)
// Podes adicionar ou modificar os filmes aqui!
const filmes = [
    {
        titulo: "Inception",
        ano: 2010,
        genero: "Ficção Científica",
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400"
    },
    {
        titulo: "Interstellar",
        ano: 2014,
        genero: "Aventura / Sci-Fi",
        poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400"
    },
    {
        titulo: "The Dark Knight",
        ano: 2008,
        genero: "Ação",
        poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400"
    },
    {
        titulo: "Spider-Man",
        ano: 2018,
        genero: "Animação",
        poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400"
    }
];

// 2. Seleção do elemento HTML onde o catálogo será exibido
const catalogoContainer = document.getElementById("catalogo");

// 3. Função para renderizar os filmes na página
function carregarFilmes() {
    // Limpa o conteúdo do container
    catalogoContainer.innerHTML = "";

    // Percorre cada filme da lista
    filmes.forEach(filme => {
        // Cria o HTML de um cartão individual
        const cardHTML = `
            <div class="movie-card">
                <img src="${filme.poster}" alt="Cartaz de ${filme.titulo}">
                <div class="movie-info">
                    <h3>${filme.titulo}</h3>
                    <p>Ano: ${filme.ano}</p>
                    <span class="badge">${filme.genero}</span>
                </div>
            </div>
        `;

        // Adiciona o cartão criado dentro do container
        catalogoContainer.innerHTML += cardHTML;
    });
}

// 4. Executa a função assim que a página carrega
carregarFilmes();
