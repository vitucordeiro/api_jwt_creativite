# API com MongoDB e JWT

Esta é uma API desenvolvida usando o Node.js, o MongoDB como banco de dados e o JWT (JSON Web Tokens) para autenticação.

## Instalação 



```
git clone https://github.com/vitucordeiro/api_jwt_creativite/ 
```


```
npm install
```

## Configuração
Para configurar, basta ter um conta gratuita no https://www.mongodb.com/, para conseguir conectar a API ao banco de dados. 

Se houver dúvidas
-> https://www.mongodb.com/docs/drivers/node/current/fundamentals/connection/

Após criar sua conta, resta configurar o arquivo .env

```
MONGO_URI = ....
SECRET = ...
```
OBS: O "SECRET" é a chave padrão que será utilizada pelo JWT. A chave é um string de sua escolha. Quanto maior o número de caracteres, melhor.

Para iniciar o servidor
```
npm run dev
```

## Rotas
Essas são as rotas disponíveis
 - ### POST login -> Faz o login do usuário e retorna um token JWT Válido por 1 hora
 - ### POST register -> Registra um novo usuário
 - ### GET profile -> Retorna um rota privada
 - ### POST creativite/new -> Cria um novo creativite
 - ### POST creativite/remove -> Remove um creativite

Certifique-se de incluir o token JWT válido nos cabeçalhos das requisições autenticadas:
```
Authorization: Bearer "token"
```
## Contribuição
Sinta-se à vontade para contribuir com melhorias para esta API. Se você encontrar algum problema ou tiver alguma sugestão, abra uma nova issue neste repositório.
