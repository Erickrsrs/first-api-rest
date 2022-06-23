### first-api-rest

## Criando uma API rest utilizando Node express e MongoDB

# Métodos disponíveis no livroController:

GET - Listar todos os livros => ROTA: http://localhost:3000/livros

GET - Listar livros pela editora => ROTA: http://localhost:3000/livros/busca/editora?editora=(editora)

GET - Listar livros pelo titulo => ROTA: http://localhost:3000/livros/busca/titulo?titulo=(titulo)

GET - Listar o livro pelo ID => ROTA: http://localhost:3000/livros/busca/(id)

POST - Cadastrar um livro => ROTA: http://localhost:3000/livros //formato no: models/Livro.js

PUT - Atualizar um livro pelo ID => ROTA: http://localhost:3000/livros //formato no: models/Livro.js

DELETE - Deletar um livro pelo ID => ROTA: http://localhost:3000/livros/(id)

# Métodos disponiveis no autoresController:

GET - Listar todos os autores => ROTA: http://localhost:3000/autores

GET - Listar o autor pelo ID => ROTA: http://localhost:3000/autores/busca/(id)

POST - Cadastrar um autor => ROTA: http://localhost:3000/autores //formato no: models/Autor.js

PUT - Atualizar um autor pelo ID => ROTA: http://localhost:3000/autores //formato no: models/Autor.js

DELETE - Deletar um autor pelo ID => ROTA: http://localhost:3000/autores/(id)
