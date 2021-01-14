# VUTTR - Very Usefuls Tools To Remember
	
## Objetivo
 A tarefa é construir o Front-End para a API e banco de dados fornecidados na aplicação [VUTTR (Very Useful Tools to Remember)](https://front-vuttr.vercel.app). A aplicação é um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.

# User Stories e wireframes

### 1: O(A) usuário(a) deve poder ver a lista de todas as ferramentas cadastradas

>![](https://bossabox-uploads.s3-sa-east-1.amazonaws.com/challenges/1-home.png)
 
### 2: O usuário deve poder adicionar uma nova ferramenta

>![](https://bossabox-uploads.s3-sa-east-1.amazonaws.com/challenges/2-add-tool.png)

### 3: O usuário deve poder remover uma ferramenta

>![](https://bossabox-uploads.s3-sa-east-1.amazonaws.com/challenges/3-remove-tool.png)

### 4: O usuário deve poder buscar ferramentas dinamicamente (global ou utilizando apenas tags)

>![50%](https://bossabox-uploads.s3-sa-east-1.amazonaws.com/challenges/4-search.png)

## Estrutura de arquivos e pastas
````bash
./actions:
	index.js  
	messages.js  
	tools.js  
	users.js
./assets:
	./icons:
		cancel.svg
		Icon-Search-2px.svg    
		Icon-Sync-2px.svg  
		Icon-User-2px.svg
		Icon-Delete-2px.svg  
		Icon-Settings-2px.svg  
		Icon-Tool-2px.svg  plus.svg
./components:
	./AddTool:
		AddTool.jsx  
		AddTool.scss  
		index.jsx
	./Alert:
		Alert.jsx  
		Alert.scss  
		index.jsx
	./DeleteTool:
		DeleteTool.jsx  
		DeleteTool.scss  
		index.jsx
	./DeleteUser:
		DeleteUser.jsx  
		DeleteUser.scss  
		index.jsx
	./Loading:
		index.jsx  
		Loading.scss
	./Main:
		index.jsx  
		Main.jsx  
		Main.scss
	./ManageAccount:
		index.jsx  
		ManageAccount.jsx  
		ManageAccount.scss
	./SearchTool:
		index.jsx  
		SearchTool.jsx  
		SearchTool.scss
	./Settings:
		index.jsx  
		Settings.jsx  
		Settings.scss
	./Topbar:
		index.jsx  
		Topbar.jsx  
		Topbar.scss
./hooks:
	index.js
./pages:
	./Default:
		App.jsx  
		App.scss  
		index.jsx
	./Login:
		index.jsx  
		Login.jsx  
		Login.scss
	./SignUp:
		index.jsx  
		SignUp.jsx  
		SignUp.scss
./reducers:
	authorization.js  
	index.js  
	tools.js  
	users.js
./routes:
	index.jsx
./services:
	index.js
	./api:
		tools.js  
		users.js
./store:
	index.js
./styles:
	index.scss  
	normalize.scss  
	reset.scss
````

## Endpoints
* API em produção: [API Vuttr Heroku](https://vuttr-shumax.herokuapp.com/)

## Itens Extras
 * Autenticação e autorização ( JWT );
 * Deployed [( Vercel );](https://vercel.com/)

## Dependências Necessárias
```json
{
	"node-sass": "^4.14.1",
	"react": "^16.13.1",
	"react-dom": "^16.13.1",
	"react-redux": "^7.1.0-rc.1",
	"react-router-dom": "^5.2.0",
	"react-scripts": "3.4.3",
	"redux": "^4.0.0-rc.1",
	"redux-persist": "^6.0.0-pre2.1",
	"redux-thunk": "^2.3.0"
}
```

### Iniciar o projeto:
* Instale as dependências do projeto com o comando *yarn install* ou *npm install*.
* Inicie o projeto com comando *yarn start* ou *npm start* / *npm run start*.

### Requisitos:
* **[Node v12.18.3](https://nodejs.org/en/)** - ou superior, instalado em seu computador.
* **[Create React App](https://github.com/facebook/create-react-app)**