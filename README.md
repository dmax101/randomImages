# Projeto Docker ramdomImage
## Trabalho do curso C115 - Docker
### Alunos
Danilo Vidal Ribeiro - 1411 - GEC</br>
Phellype Augusto Pereira - 1405 - GEC

Este é um docker container contendo um servidor Express rodando em Node.js sobre sistema Linux, que escuta a porta 3000, esperando uma requisição get que devolve uma página HTML com uma imagem de fundo. Ao clicar no botão no centro da página o código javascript faz uma nova requisição get que retorna uma imagem aleatória e substitui no fundo da página via api do site unsplash.com.

# Rodando o container
Para instalar o container é necessário ter o Docker instalado em sua máquina.

Após extrair arquivo zip, acesse via linha de comando a pasta do projeto e rode o comando a seguir para criar a imagem do container:

```
docker build -t danilo/projdocker .
```

Imagem criada, agora podemos executá-la com o seguinte comando:

```
docker run -p 3000:3000 -d danilo/projdocker
```

Pronto! Agora é só acessar pelo navegador o endereço "localhost:3000" e você terá acesso ao aplicativo.

Obrigado!