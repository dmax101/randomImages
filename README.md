# Projeto Docker ramdomImage
## Trabalho do curso C115 - Docker
### Alunos
Danilo Vidal Ribeiro - 1411 - GEC
Phellype Augusto Pereira - 1405 - GEC

Este é um docker container contendo um servidor Express rodando em Node.js sobre sistema Linux, que escuta a porta 3000, esperando uma requisição get que devolve uma página HTML com uma imagem de fundo. Ao clicar no botão no centro da página o código javascript faz uma nova requisição get que retorna uma imagem aleatória e substitui no fundo da página via api do site unsplash.com.
