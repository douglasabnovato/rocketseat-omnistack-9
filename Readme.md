## Aircnc

#### Conhecendo a Omnistack 9.0
- [x] Aplicação que será desenvolvida
- [x] Tecnologias utilizadas
- [x] Configuração de Ambiente

#### Criando a base da aplicação
- [x] construir o back-end da sua aplicação
- [x] api rest: um backend separado do frontend 
- [x] `npm add express` - localhost:3333 
- [x] `npm install nodemon -D` - reiniciar servidor node a cada alteração
- [x] `npm run serve` - coloca o servidor para rodar com o nodemon
- [x] insominia: get, post, put, delete
- 
- POST
```` 

app.post('/users', (req,res) => {
    return res.json({message: "Welcome Omnistack 9.0!!"});
});
````
- `yarn dev`
- GET, POST, PUT, DELETE
- req.query = acessar query params (filtros)
- req.query = acessar route params (edição e deleção)
- req.body = acessar corpo da requisição (criação e edição)
- routes
- banco de dados : mongoDB atlas cloud : conect your aplication
- mongoose : `yarn add mongoose` : editar o mongoDB
- layout : página de login do usuário
- MVC : estrutura de pastas<br>
models : representação de entidades do tabela no bd<br>
controllers : controladores da regra de negócios<br> 
views : parte visual da aplicação.
- itens relevantes :
1. session controller
2. routes
3. insomnia : testes de banco de dados
4. async e await : aguardar resposta de instrução antes de prosseguir
5. multer
6. Session , Spot , Dashboard, Booking
- insomnia :
1. Session: Post - Store
2. Spot: Post - Store, Get - Index
3. Dashboard: Get - Show
4. Booking: Post - Store
- erro : booking no insomnia não está registrando

#### 02/10 : Construindo a interface web
.: construir o front-end web com ReactJs.
- babel - comunicação com o browser
- `yarn create react-app frontend` : erro
- `npx create-react-app frontend` : OK

#### 03/10 : Desenvolvendo o app mobile  

#### 04/10 : Funcionalidades avançadas

:. De Rocketseat - Semana Omnistack 9.0.<br>
Por Diego Fernandes : https://rocketseat.com.br/week-9/aulas